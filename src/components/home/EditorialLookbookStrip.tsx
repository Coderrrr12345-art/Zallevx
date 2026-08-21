import React, { useRef } from 'react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES_DATA } from '../../data/categories';
import { CategoryName } from '../../types';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const EditorialLookbookStrip: React.FC = () => {
  const { navigateTo } = useShop();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectCategory = (catName: CategoryName) => {
    navigateTo({ type: 'shop', category: catName });
  };

  return (
    <section
      id="editorial-lookbooks"
      className="relative w-full py-16 bg-[#06070b] text-white border-b border-white/5 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-[1px] bg-slate-400" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
                04 / Architectural Lookbooks
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Curated <span className="italic font-normal text-slate-300">Catalogues</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Editorial Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-4 scroll-smooth cursor-grab active:cursor-grabbing"
        >
          {CATEGORIES_DATA.map((cat, index) => (
            <div
              key={cat.name}
              onClick={() => handleSelectCategory(cat.name)}
              data-cursor="EXPLORE"
              className="min-w-[190px] sm:min-w-[220px] rounded-2xl overflow-hidden bg-[#0a0b12] border border-white/10 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:border-white/30 hover:-translate-y-1 shrink-0"
            >
              {/* Top metadata */}
              <div className="p-3.5 flex items-center justify-between z-10">
                <span className="font-mono text-[11px] text-slate-300 font-bold tracking-widest">
                  0{index + 1}
                </span>
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                  {cat.count} Artifacts
                </span>
              </div>

              {/* Image visual - Compact size */}
              <div className="relative h-32 sm:h-36 overflow-hidden bg-black/60 mx-3 rounded-xl border border-white/5 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />
              </div>

              {/* Bottom Details */}
              <div className="p-3.5 flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-slate-200 transition-colors">
                    {cat.name}
                  </h3>
                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">
                    Explore collection
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-white text-gray-400 group-hover:text-black flex items-center justify-center transition-all shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
