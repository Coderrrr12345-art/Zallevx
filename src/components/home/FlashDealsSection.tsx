import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { Flame, Clock, Zap, ShoppingBag, ArrowRight, Star, ShieldCheck } from 'lucide-react';

export const FlashDealsSection: React.FC = () => {
  const { products, addToCart, formatPKR, navigateTo } = useShop();

  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 38,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 24, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const flashProducts = products.filter(p => p.isFlashDeal || (p.discountPercent && p.discountPercent >= 40)).slice(0, 3);
  const featuredDeal = flashProducts[0] || products[0];

  return (
    <section id="flash-deals-outlet-section" className="py-16 bg-[#040406] border-b border-white/5 relative overflow-hidden">
      
      {/* Stealth ambient glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-sky-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Countdown Timer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-bold uppercase tracking-widest mb-2 font-mono">
              <Flame className="w-3.5 h-3.5 animate-pulse" />
              <span>LIMITED TIME OUTLET</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-heading tracking-tight">
              Midnight Flash Deals
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
              Strictly limited promotional stock with up to 50% discount. Delivered nationwide with Cash on Delivery.
            </p>
          </div>

          {/* Luxury Titanium Countdown Timer */}
          <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-2.5 bg-[#090a10] border border-white/15 p-2 sm:p-2.5 rounded-2xl shadow-xl w-full sm:w-auto">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-gray-400 uppercase mr-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>CLOSES:</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-black border border-white/15 flex items-center justify-center text-xs sm:text-base font-black text-white font-mono shadow-inner">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span className="text-[7.5px] sm:text-[8px] text-gray-500 uppercase mt-0.5 font-bold">Hours</span>
              </div>

              <span className="text-gray-500 font-bold text-sm sm:text-base -mt-2.5">:</span>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-black border border-white/15 flex items-center justify-center text-xs sm:text-base font-black text-white font-mono shadow-inner">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <span className="text-[7.5px] sm:text-[8px] text-gray-500 uppercase mt-0.5 font-bold">Mins</span>
              </div>

              <span className="text-gray-500 font-bold text-sm sm:text-base -mt-2.5">:</span>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-rose-950/40 border border-rose-500/40 flex items-center justify-center text-xs sm:text-base font-black text-rose-400 font-mono shadow-inner">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <span className="text-[7.5px] sm:text-[8px] text-rose-400 uppercase mt-0.5 font-bold">Secs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Big Spotlight Deal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0a0b12] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Left Large Product Visual */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="w-full max-w-sm aspect-square bg-[#050508] rounded-2xl p-8 flex items-center justify-center border border-white/10 relative group">
              <img
                src={featuredDeal.images[0]}
                alt={featuredDeal.name}
                className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-rose-600 text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider font-mono shadow-lg">
                50% OFF FLASH
              </span>
            </div>
          </div>

          {/* Right Product Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs text-sky-400 font-bold uppercase tracking-wider font-mono">
              <span>{featuredDeal.category}</span>
              <span>•</span>
              <span className="text-emerald-400">Limited Stock (Only 4 Units Left)</span>
            </div>

            <h3
              onClick={() => navigateTo({ type: 'product', slug: featuredDeal.slug })}
              className="text-xl sm:text-3xl font-black text-white font-heading hover:text-sky-300 transition-colors cursor-pointer"
            >
              {featuredDeal.name}
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {featuredDeal.description}
            </p>

            {/* Price block */}
            <div className="flex items-baseline gap-4 pt-2">
              <span className="text-3xl font-black text-white font-mono">
                {formatPKR(featuredDeal.price)}
              </span>
              <span className="text-base text-gray-500 line-through font-mono">
                {formatPKR(featuredDeal.originalPrice)}
              </span>
              <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20 font-mono">
                Save {formatPKR(featuredDeal.originalPrice - featuredDeal.price)}
              </span>
            </div>

            {/* Stock meter */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs text-gray-400 font-medium">
                <span>Claimed: <strong className="text-white font-mono">91%</strong></span>
                <span className="text-rose-400 font-semibold">Almost Sold Out</span>
              </div>
              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-400 to-rose-500 w-[91%] rounded-full" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <button
                onClick={(e) => addToCart(featuredDeal, 1, undefined, e)}
                className="stealth-btn-primary px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-black cursor-pointer shadow-lg active:scale-95 transition-all"
              >
                <ShoppingBag className="w-4 h-4 text-gray-950" />
                <span>Claim Deal Now</span>
              </button>

              <button
                onClick={() => navigateTo({ type: 'product', slug: featuredDeal.slug })}
                className="px-5 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold text-xs rounded-xl border border-white/10 transition-colors cursor-pointer flex items-center justify-center"
              >
                View Full Specs
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
