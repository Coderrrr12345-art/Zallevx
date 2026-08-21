import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ShieldCheck, Sliders, Volume2, ArrowRight } from 'lucide-react';

export const BrandManifesto: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <section
      id="brand-manifesto-section"
      className="relative w-full py-24 sm:py-32 bg-[#040406] text-white border-b border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-[1px] bg-sky-400" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-sky-400">
            01 / The Zalleve Atelier
          </span>
        </div>

        {/* Big Editorial Manifesto Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.15] text-white tracking-tight">
              We design technology not as disposable utility, but as <span className="font-editorial italic font-normal text-sky-200">daily architecture</span> for your senses.
            </h2>

            <p className="mt-8 text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl font-light">
              From hand-tuned acoustic drivers and aircraft-grade aluminum bezels to intelligent GaN thermal architecture, every piece in our collection is rigorously benchmarked before it earns the Zalleve hallmark.
            </p>

            {/* Spec Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 pt-10 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                  40<span className="text-sky-400 text-lg font-normal">mm</span>
                </div>
                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mt-1">
                  Titanium Diaphragms
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                  -35<span className="text-sky-400 text-lg font-normal">dB</span>
                </div>
                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mt-1">
                  Active ANC Dampening
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                  100<span className="text-emerald-400 text-lg font-normal">%</span>
                </div>
                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mt-1">
                  Pre-Dispatch Verified
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photography Composition */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative rounded-3xl overflow-hidden bg-[#090a12] border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
                alt="Acoustic Craftsmanship"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040406] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-sky-400 mb-1">
                  Precision Engineering
                </div>
                <div className="text-sm font-semibold text-white">
                  Hand-tested in Pakistan for zero-distortion playback.
                </div>
              </div>
            </div>

            <button
              onClick={() => navigateTo({ type: 'about' })}
              className="w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs uppercase tracking-widest font-mono text-gray-300 hover:text-white flex items-center justify-between px-6 transition-colors cursor-pointer group"
            >
              <span>Read The Story of Zalleve</span>
              <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
