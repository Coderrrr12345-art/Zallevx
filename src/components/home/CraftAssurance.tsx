import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';

export const CraftAssurance: React.FC = () => {
  const assurances = [
    {
      icon: ShieldCheck,
      number: '01',
      title: '3-Stage Hardware Benchmark',
      description: 'Every acoustic diaphragm, battery cell, and touch display is individually bench-tested before packing.'
    },
    {
      icon: Truck,
      number: '02',
      title: 'Cash on Delivery Nationwide',
      description: 'Zero advance risk. Pay cash at your doorstep in Karachi, Lahore, Islamabad, and 200+ cities.'
    },
    {
      icon: RotateCcw,
      number: '03',
      title: '7-Day Checking Warranty',
      description: 'Hassle-free replacement policy if you experience any technical or manufacturing defect.'
    },
    {
      icon: Headphones,
      number: '04',
      title: 'Direct WhatsApp Concierge',
      description: 'Speak directly with our technical support team in Pakistan for setup guides and order tracking.'
    }
  ];

  return (
    <section
      id="craft-assurance-section"
      className="relative w-full py-24 bg-[#05060a] text-white border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-sky-400" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-sky-400">
                06 / Integrity Standard
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              The Zalleve <span className="font-editorial italic font-normal text-sky-200">Assurance</span>
            </h2>
          </div>

          <div className="text-xs text-gray-400 max-w-sm font-light">
            Craftsmanship extends beyond hardware. It defines our direct-to-consumer relationship.
          </div>
        </div>

        {/* 4-Column Editorial Assurance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {assurances.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#090a12] border border-white/10 flex flex-col justify-between group hover:border-white/25 transition-all duration-500"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:text-white group-hover:bg-sky-500/20 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-gray-500">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
