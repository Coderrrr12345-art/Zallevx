import React, { useRef, useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from '../product/ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const FeaturedCarousel: React.FC = () => {
  const { products } = useShop();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const featuredItems = products.filter(p => p.isFeatured || p.rating >= 4.8).slice(0, 10);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (dir: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollDist = dir === 'left' ? -360 : 360;
      carouselRef.current.scrollBy({ left: scrollDist, behavior: 'smooth' });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section id="featured-products-carousel-section" className="py-16 bg-[#06070a] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-[10px] font-bold uppercase tracking-widest mb-2 font-mono">
              <span>FLAGSHIP SELECTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight">
              Featured Innovations
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 text-white border border-white/10 transition-all cursor-pointer"
              aria-label="Previous items"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 text-white border border-white/10 transition-all cursor-pointer"
              aria-label="Next items"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex items-stretch gap-5 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredItems.map(product => (
            <div
              key={product.id}
              className="w-72 sm:w-80 shrink-0 snap-start flex flex-col"
            >
              <ProductCard product={product} featured={true} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
