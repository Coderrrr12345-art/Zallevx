import React from 'react';
import { useShop } from '../context/ShopContext';
import { ShieldCheck, Truck, Award, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div id="about-us-page" className="py-12 bg-[#040406] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-sky-400 text-xs font-bold uppercase tracking-wider font-mono">
            <span>PIONEERING PAKISTAN’S TECH STANDARD</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight leading-tight">
            Next-Generation Gadgets. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
              Uncompromising Quality.
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            ZALLEVE was founded with a single purpose: to deliver cutting-edge ANC audio, luxury smartwatches, and high-efficiency GaN power gear directly to Pakistani consumers with absolute trust, speed, and peace of mind.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-[#090a10] border border-white/10 space-y-3 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/5 text-white border border-white/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="text-base font-bold text-white font-heading">100% Quality Checked</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every earbud pair, watch sensor, and charging adapter undergoes multi-point acoustic and power tests before boxing.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#090a10] border border-white/10 space-y-3 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/5 text-white border border-white/10 flex items-center justify-center">
              <Truck className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-base font-bold text-white font-heading">Nationwide Express Logistics</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Partnerships with TCS, Leopards, and PostEx allow fast 2-4 day delivery to Karachi, Lahore, Islamabad, and all cities.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#090a10] border border-white/10 space-y-3 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/5 text-white border border-white/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-white font-heading">Customer First Guarantee</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Enjoy 7 days checking & replacement warranty alongside 24/7 dedicated WhatsApp support on +92 322 2683373.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090a10] border border-white/15 grid grid-cols-2 md:grid-cols-4 gap-8 text-center shadow-xl">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">10K+</div>
            <div className="text-xs text-gray-400 mt-1">Parcels Dispatched</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-sky-400 font-mono">4.9★</div>
            <div className="text-xs text-gray-400 mt-1">Average Star Rating</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">200+</div>
            <div className="text-xs text-gray-400 mt-1">Pakistani Cities Covered</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">24/7</div>
            <div className="text-xs text-gray-400 mt-1">Direct WhatsApp Support</div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-white font-heading">Ready to Upgrade Your Tech Setup?</h2>
          <button
            onClick={() => navigateTo({ type: 'shop' })}
            className="px-8 py-3.5 stealth-btn-primary rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
          >
            <span>Explore The Collection</span>
            <ArrowRight className="w-4 h-4 text-gray-950" />
          </button>
        </div>

      </div>
    </div>
  );
};
