import React, { useState, useEffect, useRef } from 'react';
import {
  Volume2,
  VolumeX,
  Play,
  Square,
  Activity,
  Layers,
  Sliders,
  Sparkles,
  Radio
} from 'lucide-react';

interface BenchmarkFeature {
  id: 'bass' | 'vocal' | 'treble';
  title: string;
  subtitle: string;
  description: string;
  frequency: string;
  harmonicDistortion: string;
  amberMetric: string;
  sampleHz: string;
}

const BENCHMARKS: BenchmarkFeature[] = [
  {
    id: 'bass',
    title: 'Kinetic Sub-Bass Engine',
    subtitle: 'Deep acoustic resonance at 20Hz - 250Hz',
    description: 'Our proprietary acoustic chamber uses heavy-duty Neodymium magnets to deliver highly-defined sub-bass that pulses smoothly without muddiness.',
    frequency: '20Hz - 250Hz',
    harmonicDistortion: '< 0.08%',
    amberMetric: '99.4% Accurate',
    sampleHz: '60Hz Bass Pulse'
  },
  {
    id: 'vocal',
    title: 'Acoustic Midrange & Vocals',
    subtitle: 'Ultra-clear voice reproduction at 250Hz - 4kHz',
    description: 'Optimized voice frequencies designed for high-end studio recordings, making podcasts, audiobooks, and live calls sound extremely organic.',
    frequency: '250Hz - 4,000Hz',
    harmonicDistortion: '< 0.04%',
    amberMetric: 'Pure Studio Master',
    sampleHz: '440Hz Warm Acoustic Chord'
  },
  {
    id: 'treble',
    title: 'Hi-Fi Crystal Highs',
    subtitle: 'Micro-detailed treble at 4kHz - 22kHz',
    description: 'Precision-tuned high-end frequency response that preserves the delicate sparkle of acoustic instruments and orchestral harmonics.',
    frequency: '4,000Hz - 22,000Hz',
    harmonicDistortion: '< 0.05%',
    amberMetric: 'Carbon Diaphragm',
    sampleHz: '3,200Hz Crystal Shimmer'
  }
];

export const AsymmetricDuoShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bass' | 'vocal' | 'treble'>('bass');
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
  
  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const stopAudioRef = useRef<(() => void) | null>(null);

  // Animation ticks
  const [animationTick, setAnimationTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationTick((prev) => (prev + 1) % 100);
    }, 120);
    return () => clearInterval(timer);
  }, []);

  // Stop audio on tab change or unmount
  useEffect(() => {
    if (isPlaying) {
      stopCurrentAudio();
      startAudio(activeTab);
    }
  }, [activeTab]);

  useEffect(() => {
    return () => {
      stopCurrentAudio();
    };
  }, []);

  const stopCurrentAudio = () => {
    if (stopAudioRef.current) {
      stopAudioRef.current();
      stopAudioRef.current = null;
    }
    setIsPlaying(false);
  };

  const startAudio = (type: 'bass' | 'vocal' | 'treble') => {
    stopCurrentAudio();
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.25, ctx.currentTime);
      masterGain.connect(ctx.destination);

      if (type === 'bass') {
        // Deep sub-bass pulse (55Hz + 110Hz rumble + 3Hz LFO pulse)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(55, ctx.currentTime);

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(110, ctx.currentTime);

        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(3, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.1, ctx.currentTime);

        lfo.connect(lfoGain);
        lfoGain.connect(masterGain.gain);

        osc1.connect(masterGain);
        osc2.connect(masterGain);

        osc1.start();
        osc2.start();
        lfo.start();

        stopAudioRef.current = () => {
          try {
            osc1.stop();
            osc2.stop();
            lfo.stop();
            ctx.close();
          } catch (e) {}
        };
      } else if (type === 'vocal') {
        // Midrange warm acoustic chord (440Hz + 554Hz + 659Hz)
        const freqs = [440, 554.37, 659.25];
        const oscs: OscillatorNode[] = [];

        freqs.forEach(f => {
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, ctx.currentTime);
          osc.connect(masterGain);
          osc.start();
          oscs.push(osc);
        });

        stopAudioRef.current = () => {
          try {
            oscs.forEach(o => o.stop());
            ctx.close();
          } catch (e) {}
        };
      } else {
        // High treble crystal shimmer (2800Hz + 4200Hz)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();

        filter.type = 'highpass';
        filter.frequency.setValueAtTime(2000, ctx.currentTime);

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(2800, ctx.currentTime);

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(4200, ctx.currentTime);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(masterGain);

        osc1.start();
        osc2.start();

        stopAudioRef.current = () => {
          try {
            osc1.stop();
            osc2.stop();
            ctx.close();
          } catch (e) {}
        };
      }

      setIsPlaying(true);
    } catch (err) {
      console.error('Web Audio API error:', err);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopCurrentAudio();
    } else {
      startAudio(activeTab);
    }
  };

  const activeBenchmark = BENCHMARKS.find(b => b.id === activeTab) || BENCHMARKS[0];

  return (
    <section
      id="interactive-acoustic-lab"
      className="relative w-full py-20 bg-[#040406] text-white border-b border-white/10 overflow-hidden font-sans"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center text-center mb-12 pb-6 border-b border-white/10 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-2 justify-center">
            <span className="w-5 h-[1px] bg-slate-400" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-300">
              Interactive Acoustic Sound Lab
            </span>
            <span className="w-5 h-[1px] bg-slate-400" />
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Explore Studio <span className="font-serif italic font-normal text-slate-200">Acoustic Frequencies</span> & Audio Demo
          </h2>

          <p className="text-xs text-gray-400 mt-2 max-w-xl font-light leading-relaxed">
            Test live frequency acoustic samples synthesized in real-time. Select a frequency band and press play to hear ZALLEVE sound tuning.
          </p>
        </div>

        {/* Lab Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Waveform Tuner Controls (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-gray-300 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-slate-300" />
                  <span>Select Frequency Band</span>
                </div>
                <div className="text-[10px] text-slate-300 font-bold flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                  <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span>Live Web Audio</span>
                </div>
              </div>

              <div className="space-y-2">
                {BENCHMARKS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                    }}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between gap-4 cursor-pointer ${
                      activeTab === item.id
                        ? 'bg-[#080911] border-white/20 shadow-lg'
                        : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.01]'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-white flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${activeTab === item.id ? (isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-slate-200') : 'bg-gray-600'}`} />
                        {item.title}
                      </div>
                      <div className="text-[11px] text-gray-400 font-light">
                        {item.subtitle}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-mono text-slate-200 bg-white/10 px-2 py-1 rounded-full border border-white/10">
                        {item.frequency.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Data Visualizer & Specs */}
            <div className="p-5 rounded-2xl bg-[#080911] border border-white/10 space-y-4 relative overflow-hidden transition-all shadow-xl">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-widest font-bold">
                    Dynamic Performance Profile
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    {activeBenchmark.sampleHz}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white">
                    {activeBenchmark.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    {activeBenchmark.description}
                  </p>
                </div>

                {/* Benchmark Grid */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center font-mono text-xs">
                  <div className="space-y-0.5">
                    <div className="text-[9px] text-gray-400 uppercase tracking-wider">Range</div>
                    <div className="text-white font-semibold">{activeBenchmark.frequency}</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[9px] text-gray-400 uppercase tracking-wider">Distortion</div>
                    <div className="text-white font-semibold">{activeBenchmark.harmonicDistortion}</div>
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[9px] text-gray-400 uppercase tracking-wider">Rating</div>
                    <div className="text-slate-200 font-semibold">{activeBenchmark.amberMetric}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Waveform & Audio Player Stage (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#080911] border border-white/10 p-6 sm:p-8 flex flex-col items-center justify-between relative min-h-[400px] overflow-hidden shadow-2xl">
            
            {/* Top Interactive Audio Control Bar */}
            <div className="w-full flex items-center justify-between z-20 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleAudio}
                  className={`px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg ${
                    isPlaying
                      ? 'bg-rose-500 text-white hover:bg-rose-600 animate-pulse'
                      : 'bg-white text-black hover:bg-slate-200'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-current" />
                      <span>Stop Frequency Demo</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Acoustic Frequency Tone</span>
                    </>
                  )}
                </button>

                {isPlaying && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                    <Activity className="w-3.5 h-3.5 animate-spin" />
                    <span>Audio Playing ({activeBenchmark.sampleHz})</span>
                  </div>
                )}
              </div>

              {/* Volume Slider */}
              <div className="hidden sm:flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-gray-400" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => {
                    const newVol = parseFloat(e.target.value);
                    setVolume(newVol);
                  }}
                  className="w-20 accent-white cursor-pointer"
                />
              </div>
            </div>

            {/* Real-time Dynamic Waveform Animation with Audio Sync */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-full h-44 flex items-center justify-center gap-1 px-8">
                {Array.from({ length: 32 }).map((_, idx) => {
                  let factor = 1;
                  const speed = isPlaying ? 2.5 : 1;
                  const intensity = isPlaying ? 1.8 : 1;

                  if (activeTab === 'bass') {
                    factor = (Math.sin((idx + animationTick * speed) * 0.4) * 40 + 50) * intensity;
                  } else if (activeTab === 'vocal') {
                    factor = (Math.cos((idx - animationTick * speed) * 0.7) * 30 + 40) * intensity;
                  } else {
                    factor = (Math.sin((idx + animationTick * speed) * 1.3) * 20 + 25) * intensity;
                  }

                  return (
                    <div
                      key={idx}
                      style={{ height: `${Math.max(10, Math.min(130, factor))}px` }}
                      className={`w-1 rounded-full transition-all duration-150 ${
                        isPlaying
                          ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]'
                          : activeTab === 'bass'
                          ? 'bg-slate-300'
                          : activeTab === 'vocal'
                          ? 'bg-slate-400'
                          : 'bg-white'
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Centered Futuristic Interactive Hardware Chassis */}
            <div className="relative z-10 my-auto w-full max-w-xs aspect-square flex flex-col items-center justify-center">
              
              {/* Outer Pulsing Aura Ring */}
              <div className={`absolute w-64 h-64 rounded-full border ${isPlaying ? 'border-emerald-400/30 animate-ping' : 'border-white/10 animate-pulse'} pointer-events-none`} />
              <div className="absolute w-52 h-52 rounded-full border border-dashed border-white/10 animate-spin pointer-events-none" style={{ animationDuration: isPlaying ? '10s' : '30s' }} />

              {/* Minimal Core Component */}
              <div
                onClick={toggleAudio}
                className="relative w-36 h-36 rounded-full bg-black/90 border border-white/20 flex flex-col items-center justify-center p-4 text-center shadow-2xl cursor-pointer hover:border-white/50 transition-all group"
              >
                <div className="flex flex-col items-center">
                  {isPlaying ? (
                    <Activity className="w-7 h-7 text-emerald-400 animate-pulse mb-1" />
                  ) : activeTab === 'bass' ? (
                    <Volume2 className="w-7 h-7 text-slate-200 group-hover:scale-110 transition-transform mb-1" />
                  ) : activeTab === 'vocal' ? (
                    <Volume2 className="w-7 h-7 text-slate-200 group-hover:scale-110 transition-transform mb-1" />
                  ) : (
                    <Sliders className="w-7 h-7 text-slate-200 group-hover:scale-110 transition-transform mb-1" />
                  )}

                  <div className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                    {activeTab === 'bass' ? 'Sub-Bass' : activeTab === 'vocal' ? 'Vocal Mid' : 'Treble Sparkle'}
                  </div>
                  <div className="text-[9px] text-gray-400 font-mono mt-0.5">
                    {isPlaying ? 'Click to Mute' : 'Click to Play'}
                  </div>
                </div>
              </div>

              {/* Hotspot 1: Diaphragm Unit */}
              <div
                className="absolute top-6 left-1/2 -translate-x-1/2 z-20"
                onMouseEnter={() => setHoveredHotspot('diaphragm')}
                onMouseLeave={() => setHoveredHotspot(null)}
              >
                <div className="relative cursor-pointer">
                  <span className="absolute -inset-1 rounded-full bg-white/20 animate-ping" />
                  <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center font-mono text-[9px] font-bold shadow-lg">
                    1
                  </div>

                  {/* Tooltip */}
                  {hoveredHotspot === 'diaphragm' && (
                    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-44 p-2.5 rounded-xl bg-[#080911] border border-white/20 shadow-2xl text-center z-50">
                      <div className="text-[11px] font-semibold text-white mb-0.5">0.05mm Nano Diaphragm</div>
                      <div className="text-[9px] text-gray-300 font-light leading-snug">Ultra-lightweight carbon composite diaphragm.</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Hotspot 2: Voice Coil */}
              <div
                className="absolute bottom-8 left-8 z-20"
                onMouseEnter={() => setHoveredHotspot('coil')}
                onMouseLeave={() => setHoveredHotspot(null)}
              >
                <div className="relative cursor-pointer">
                  <span className="absolute -inset-1 rounded-full bg-white/20 animate-ping" />
                  <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center font-mono text-[9px] font-bold shadow-lg">
                    2
                  </div>

                  {/* Tooltip */}
                  {hoveredHotspot === 'coil' && (
                    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-44 p-2.5 rounded-xl bg-[#080911] border border-white/20 shadow-2xl text-center z-50">
                      <div className="text-[11px] font-semibold text-white mb-0.5">High-Tension Coil</div>
                      <div className="text-[9px] text-gray-300 font-light leading-snug">Guarantees zero frequency harmonics bleed.</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Hotspot 3: Acoustic Vent */}
              <div
                className="absolute bottom-8 right-8 z-20"
                onMouseEnter={() => setHoveredHotspot('vent')}
                onMouseLeave={() => setHoveredHotspot(null)}
              >
                <div className="relative cursor-pointer">
                  <span className="absolute -inset-1 rounded-full bg-white/20 animate-ping" />
                  <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center font-mono text-[9px] font-bold shadow-lg">
                    3
                  </div>

                  {/* Tooltip */}
                  {hoveredHotspot === 'vent' && (
                    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-44 p-2.5 rounded-xl bg-[#080911] border border-white/20 shadow-2xl text-center z-50">
                      <div className="text-[11px] font-semibold text-white mb-0.5">Equalizing Vents</div>
                      <div className="text-[9px] text-gray-300 font-light leading-snug">Refines in-ear acoustic pressure perfectly.</div>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Bottom Note */}
            <div className="z-10 pt-4 border-t border-white/10 w-full flex items-center justify-between text-[10px] font-mono text-gray-400">
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-slate-300" />
                <span>Hover nodes (1-3) to inspect internal architecture</span>
              </div>
              <div className="text-slate-200 font-bold">
                {isPlaying ? '♪ Audio Playing' : 'Click Play Button to Hear Sound'}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
