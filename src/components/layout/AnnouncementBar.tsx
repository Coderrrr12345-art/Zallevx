import React from 'react';
import { Truck, ShieldCheck, Zap, MessageSquare } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div
      id="announcement-marquee"
      className="bg-[#030305] text-[#d1d5db] py-2 px-4 text-[11px] font-normal border-b border-white/5 relative z-50 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Infinite Running Marquee with Strictly 2 Clean Colors: Platinum (#E2E8F0) and Warm Amber (#F59E0B) */}
        <div className="flex-1 overflow-hidden relative flex items-center">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-10 font-normal tracking-wide">
            
            <span className="flex items-center gap-2 text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <strong className="text-amber-400 font-medium uppercase tracking-wider">OFFICIAL ZALLEVE ATELIER</strong>
              <span className="text-slate-300">— Flagship Acoustics & Precision Wearables</span>
            </span>

            <span className="flex items-center gap-1.5 text-slate-300">
              <Truck className="w-3.5 h-3.5 text-amber-400" />
              <span>Complimentary Express Delivery on orders over PKR 3,000</span>
            </span>

            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>7-Day Replacement & Checking Warranty</span>
            </span>

            <span className="flex items-center gap-1.5 text-slate-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Cash on Delivery across 200+ Cities nationwide</span>
            </span>

            {/* Duplication for seamless continuous marquee loop */}
            <span className="flex items-center gap-2 text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <strong className="text-amber-400 font-medium uppercase tracking-wider">OFFICIAL ZALLEVE ATELIER</strong>
              <span className="text-slate-300">— Flagship Acoustics & Precision Wearables</span>
            </span>

            <span className="flex items-center gap-1.5 text-slate-300">
              <Truck className="w-3.5 h-3.5 text-amber-400" />
              <span>Complimentary Express Delivery on orders over PKR 3,000</span>
            </span>

            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>7-Day Replacement & Checking Warranty</span>
            </span>

            <span className="flex items-center gap-1.5 text-slate-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Cash on Delivery across 200+ Cities nationwide</span>
            </span>

          </div>
        </div>

        {/* Pinned WhatsApp Hotline (Strictly same 2 colors) */}
        <div className="hidden lg:flex items-center gap-3 pl-6 border-l border-white/10 shrink-0 text-slate-300">
          <a
            href="https://wa.me/923222683373?text=Hi%20Zalleve,%20I%20have%20an%20inquiry%20about%20your%20products."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors text-[11px]"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>Support: <strong className="text-slate-100 font-mono font-medium">+92 322 2683373</strong></span>
          </a>
        </div>
      </div>
    </div>
  );
};
