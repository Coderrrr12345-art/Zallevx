import React, { useState, useRef, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowRight,
  ChevronDown,
  Layers,
  Flame
} from 'lucide-react';

const HERO_VIDEO_URL = 'https://zalleve.com/assets/videos/slider/1783961230_v_IMG_5765%20(1)%20(1).mp4';

export const HeroSection: React.FC = () => {
  const { navigateTo } = useShop();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const scrollToNextSection = () => {
    const nextEl = document.getElementById('brand-manifesto-section');
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-cinematic-opening"
      className="relative w-full h-[92vh] min-h-[640px] max-h-[1080px] bg-[#040406] overflow-hidden flex items-end sm:items-center justify-center"
    >
      {/* 1. Full-Bleed High-Definition Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={HERO_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isVideoLoaded ? 'opacity-80 scale-100' : 'opacity-60 scale-100'
          }`}
        />

        {/* Cinematic Vignette & Deep Editorial Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040406] via-[#040406]/40 to-[#040406]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#040406]/30 to-[#040406]/80 pointer-events-none" />
        
        {/* Subtle Film Grain Texture */}
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      </div>

      {/* 2. Top-Right Video Controls HUD (Audio / Play State) */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
        <button
          onClick={toggleMute}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white backdrop-blur-md border border-white/10 text-[11px] font-mono transition-all cursor-pointer"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-gray-400" />
              <span className="hidden sm:inline">MUTED</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span className="hidden sm:inline text-sky-300">LIVE AUDIO</span>
            </>
          )}
        </button>

        <button
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all cursor-pointer"
          title={isPlaying ? 'Pause Experience' : 'Play Experience'}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-white ml-0.5" />}
        </button>
      </div>

      {/* 3. Main Editorial Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pb-20 sm:pb-0">
        
        {/* Animated Brand Hallmark Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-gray-300 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.18em] mb-6 backdrop-blur-md transition-all duration-700 ${
            hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span>AUTUMN / WINTER 2025 ATELIER</span>
        </div>

        {/* Large Editorial Serif Display Headline */}
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.05] transition-all duration-1000 delay-150 ${
            hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="font-editorial italic font-normal text-white/90">Sound,</span> Sculpted.
          <br />
          <span className="font-editorial italic font-normal text-amber-100">Precision,</span> Worn.
        </h1>

        {/* Short, Refined Editorial Subtitle */}
        <p
          className={`mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed transition-all duration-1000 delay-300 ${
            hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          An acoustic and hardware atelier crafted for those who demand uncompromising clarity. 
          Tested, hand-verified, and dispatched nationwide with Cash on Delivery.
        </p>

        {/* Magnetic Action Group */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
            hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={() => navigateTo({ type: 'shop' })}
            data-cursor="EXPLORE"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-extrabold text-xs sm:text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => navigateTo({ type: 'shop', category: 'Deals' })}
            data-cursor="DEALS"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm uppercase tracking-widest backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Midnight Vault</span>
          </button>
        </div>

      </div>

      {/* 4. Bottom Scroll Down Indicator */}
      <div
        onClick={scrollToNextSection}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-gray-400 hover:text-white cursor-pointer transition-colors group"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-gray-500 group-hover:text-gray-300">
          Discover Story
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-sky-400" />
      </div>
    </section>
  );
};
