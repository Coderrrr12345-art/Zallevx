import React, { useRef } from 'react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES_DATA } from '../../data/categories';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CategoryNavStrip: React.FC = () => {
  const { navigateTo } = useShop();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="category-quick-nav-section" className="py-16 sm:py-20 bg-[#050508] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest font-mono">
              CURATED COLLECTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight mt-1">
              Explore by Category
            </h2>
          </div>

          {/* Left/Right scroll controls */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex items-center gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CATEGORIES_DATA.map(cat => (
            <div
              key={cat.name}
              onClick={() => navigateTo({ type: 'shop', category: cat.name })}
              className="flex flex-col items-center gap-2 shrink-0 w-20 sm:w-24 group cursor-pointer snap-start"
            >
              {/* Compact Rounded Box */}
              <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-xl p-[1px] bg-gradient-to-b from-white/20 to-white/5 group-hover:from-white/40 group-hover:to-white/20 transition-all duration-300 shadow-lg group-hover:-translate-y-1">
                <div className="w-full h-full rounded-[11px] overflow-hidden bg-[#0c0d14] relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/10 transition-colors" />
                  
                  <div className="absolute bottom-1 inset-x-1 text-center">
                    <span className="text-[8px] font-bold text-gray-200 bg-black/80 px-1.5 py-0.5 rounded backdrop-blur-md font-mono">
                      {cat.count}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="text-center">
                <div className="text-[11px] sm:text-xs font-semibold text-gray-300 group-hover:text-white transition-colors leading-tight line-clamp-1">
                  {cat.name}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
