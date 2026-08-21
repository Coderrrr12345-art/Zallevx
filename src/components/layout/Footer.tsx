import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  Phone,
  Mail,
  ChevronRight,
  Send,
  MessageSquare,
  ExternalLink,
  Check
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo, showToast } = useShop();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      showToast('Thank you for subscribing to ZALLEVE VIP Dispatch.');
      setEmail('');
    }
  };

  return (
    <footer id="main-atelier-footer" className="bg-[#030408] text-white border-t border-white/10 relative overflow-hidden font-sans">
      
      {/* Subtle architectural ambient backdrop */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-sky-500/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-sky-500/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        
        {/* 1. TOP ATELIER ASSURANCES: 4 Sleek Minimalist Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pb-14 border-b border-white/10">
          
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#080912] border border-white/5 hover:border-white/15 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold text-white tracking-wide uppercase font-mono">
                Express TCS Dispatch
              </div>
              <div className="text-xs text-gray-400 leading-relaxed font-light">
                Free nationwide delivery on all orders above PKR 3,000.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#080912] border border-white/5 hover:border-white/15 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold text-white tracking-wide uppercase font-mono">
                7-Day Warranty
              </div>
              <div className="text-xs text-gray-400 leading-relaxed font-light">
                Hassle-free checking warranty & swift replacement support.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#080912] border border-white/5 hover:border-white/15 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold text-white tracking-wide uppercase font-mono">
                Cash on Delivery
              </div>
              <div className="text-xs text-gray-400 leading-relaxed font-light">
                Pay securely at your doorstep in 200+ cities in Pakistan.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#080912] border border-white/5 hover:border-white/15 transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold text-white tracking-wide uppercase font-mono">
                WhatsApp Concierge
              </div>
              <div className="text-xs text-gray-400 leading-relaxed font-light">
                Live human customer assistance 7 days a week.
              </div>
            </div>
          </div>

        </div>

        {/* 2. NEWSLETTER & VIP ATELIER DISPATCH ROW */}
        <div className="py-12 border-b border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-sky-400 uppercase tracking-widest font-mono">
              <span>ZALLEVE VIP PRIVATE DISPATCH</span>
            </div>
            <h3 className="text-lg sm:text-xl font-sans text-white font-semibold">
              Be first to receive newly curated acoustic releases & private member deals.
            </h3>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-2.5 max-w-md">
            <div className="relative w-full sm:w-80">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full bg-[#080912] border border-white/15 rounded-full px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-white/40 font-mono transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-all font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shrink-0 cursor-pointer shadow-lg"
            >
              {isSubscribed ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Join VIP</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* 3. MAIN NAVIGATION GRID */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white font-heading tracking-tight">ZALLEVE</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300 uppercase">PAKISTAN</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Pakistan's curated destination for studio ANC audio, AMOLED smartwatches, and high-performance mobile hardware.
            </p>

            {/* Support Box */}
            <div className="p-4 rounded-2xl bg-[#090b14] border border-white/10 space-y-2.5">
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                Direct WhatsApp Helpline
              </div>
              <a
                href="https://wa.me/923222683373?text=Hi%20Zalleve,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noreferrer"
                className="text-base font-mono text-white hover:text-slate-200 flex items-center gap-2 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-200">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+92 322 2683373</span>
              </a>
              <div className="flex items-center gap-2 text-[11px] text-gray-400 pt-1 border-t border-white/5 font-mono">
                <Mail className="w-3.5 h-3.5 text-gray-500" />
                <span>support@zalleve.pk</span>
              </div>
            </div>

            {/* Social Network Pills */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://wa.me/923222683373"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 text-xs font-mono transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3 h-3 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/zalleve_tech"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 text-xs font-mono transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/people/Zalleve/61578937257685/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 text-xs font-mono transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Column 2: Curated Collections */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono border-b border-white/10 pb-2">
              Featured Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => navigateTo({ type: 'shop', category: 'Headphones' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  <span>Studio Hi-Fi Headphones</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'shop', category: 'Buds' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  <span>ANC & ENC Wireless Buds</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'shop', category: 'Smart Watches' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  <span>AMOLED Titanium Smartwatches</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'shop', category: 'Portable Speakers' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  <span>Portable RGB Bass Speakers</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'shop', category: 'Fast Chargers' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  <span>65W GaN III Fast Adapters</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'shop', category: 'Microphones' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  <span>Wireless Lapel & Studio Mics</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & Policies */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono border-b border-white/10 pb-2">
              Client Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => navigateTo({ type: 'refund-returns' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  <span>7-Day Return & Replacement Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'privacy-policy' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  <span>Privacy Policy & Terms of Service</span>
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/923222683373?text=Track%20my%20Zalleve%20order"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  <span>Track TCS / Leopards Order</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'contact' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  <span>Contact</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo({ type: 'about' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  <span>About Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Payment & Nationwide Logistics */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-sans border-b border-white/10 pb-2">
              Payment & Dispatch
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Nationwide Cash on Delivery with official courier partners across 200+ cities in Pakistan.
            </p>

            <div className="space-y-2">
              <div className="text-[10px] font-sans text-gray-400 uppercase tracking-wider">
                Supported Methods:
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-sans text-gray-300">
                <span className="px-2.5 py-1 bg-[#090b14] border border-white/15 rounded-lg text-slate-100 font-medium">
                  Cash on Delivery
                </span>
                <span className="px-2.5 py-1 bg-[#090b14] border border-white/10 rounded-lg text-slate-200">
                  JazzCash
                </span>
                <span className="px-2.5 py-1 bg-[#090b14] border border-white/10 rounded-lg text-slate-200">
                  EasyPaisa
                </span>
                <span className="px-2.5 py-1 bg-[#090b14] border border-white/10 rounded-lg text-slate-200">
                  Bank Transfer
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <div className="text-[10px] font-sans text-gray-400 uppercase tracking-wider">
                Official Couriers:
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-sans text-gray-400">
                <span className="px-2 py-1 bg-[#090b14] border border-white/10 rounded">TCS</span>
                <span className="px-2 py-1 bg-[#090b14] border border-white/10 rounded">Leopards</span>
                <span className="px-2 py-1 bg-[#090b14] border border-white/10 rounded">PostEx</span>
                <span className="px-2 py-1 bg-[#090b14] border border-white/10 rounded">Trax</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4. BOTTOM COPYRIGHT */}
        <div className="pt-10 mt-6 border-t border-white/10 flex flex-col items-center justify-center gap-3 text-xs text-gray-400 text-center">
          <div className="font-light tracking-wide">
            © {new Date().getFullYear()} <span className="text-white font-medium">ZALLEVE</span> (Essential Accessories). All rights reserved.
          </div>
          <div className="text-[10px] text-gray-500 font-light max-w-md">
            Pakistan's Premier Curated Destination for Authentic High-Fidelity Audio, Smart Wearables, and GaN Power.
          </div>
        </div>

      </div>
    </footer>
  );
};
