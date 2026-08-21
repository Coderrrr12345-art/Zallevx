import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from '../product/ProductCard';
import { Flame, ArrowRight } from 'lucide-react';

export const TopSellingGrid: React.FC = () => {
  const { products, navigateTo } = useShop();

  const topSellers = [...products]
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 8);

  return (
    <section id="top-selling-products-section" className="py-16 bg-[#050508] border-b border-white/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-[10px] font-bold uppercase tracking-widest mb-2 font-mono">
              <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>MOST POPULAR NATIONWIDE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-heading tracking-tight">
              Top Selling Gadgets
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-lg">
              The highest-rated wireless earbuds, AMOLED smartwatches, and high-speed GaN chargers in Pakistan.
            </p>
          </div>

          <button
            onClick={() => navigateTo({ type: 'shop' })}
            className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white hover:text-sky-300 border border-white/15 text-xs font-bold flex items-center gap-2 transition-all group cursor-pointer"
          >
            <span>View All ({products.length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 8-Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
