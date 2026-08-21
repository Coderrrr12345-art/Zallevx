import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { Flame, Clock, ShoppingBag, ArrowRight } from 'lucide-react';

export const MidnightVaultSection: React.FC = () => {
  const { products, addToCart, navigateTo, formatPKR } = useShop();

  // Flash deal products
  const dealProducts = products.filter(p => p.isFlashDeal || p.category === 'Deals').slice(0, 3);

  // Live mechanical countdown
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 12, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="midnight-vault-section"
      className="relative w-full py-24 bg-[#030305] text-white border-b border-white/5 overflow-hidden"
    >
      {/* Vault lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Countdown HUD */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-amber-400" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-400">
                05 / Limited Atelier Drops
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Midnight <span className="font-editorial italic font-normal text-amber-200">Vault</span>
            </h2>
          </div>

          {/* Mechanical Countdown Clock */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
            <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400 mr-2">Vault Closes In:</span>
            <div className="flex items-center gap-1.5 font-mono font-bold text-base text-white">
              <span className="bg-black/60 px-2 py-1 rounded-lg border border-white/10">{String(timeLeft.hours).padStart(2, '0')}h</span>
              <span className="text-amber-400">:</span>
              <span className="bg-black/60 px-2 py-1 rounded-lg border border-white/10">{String(timeLeft.minutes).padStart(2, '0')}m</span>
              <span className="text-amber-400">:</span>
              <span className="bg-black/60 px-2 py-1 rounded-lg border border-white/10 text-amber-300">{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
          </div>
        </div>

        {/* 3-Column Curated Vault Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dealProducts.map(product => {
            const discountPct = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 25;

            return (
              <div
                key={product.id}
                className="rounded-3xl bg-[#080910] border border-white/10 p-6 flex flex-col justify-between group hover:border-amber-500/30 transition-all duration-500"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                      Save {discountPct}% Today
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {product.sold || 34} Claimed
                    </span>
                  </div>

                  {/* Image */}
                  <div
                    onClick={() => navigateTo({ type: 'product', slug: product.slug })}
                    className="relative aspect-square rounded-2xl overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center cursor-pointer mb-6"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3
                    onClick={() => navigateTo({ type: 'product', slug: product.slug })}
                    className="text-lg font-bold text-white hover:text-amber-300 transition-colors cursor-pointer line-clamp-2"
                  >
                    {product.name}
                  </h3>

                  {/* Claim Progress Bar */}
                  <div className="mt-4 space-y-1.5">
                    <div className="flex justify-between text-[10px] font-mono text-gray-400">
                      <span>Allocation Reserved</span>
                      <span className="text-amber-300 font-bold">84%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full w-[84%]" />
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-black font-mono text-white">
                      {formatPKR(product.price)}
                    </div>
                    {product.originalPrice && (
                      <div className="text-xs text-gray-500 line-through font-mono">
                        {formatPKR(product.originalPrice)}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(product, 1)}
                    className="px-5 py-2.5 rounded-full bg-white hover:bg-amber-100 text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Claim</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Vault CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo({ type: 'shop', category: 'Deals' })}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors cursor-pointer py-2 px-4 rounded-full border border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10"
          >
            <span>Explore All Midnight Drops & Combos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
