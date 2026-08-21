import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { ProductCard } from '../product/ProductCard';
import { CategoryName } from '../../types';
import { ArrowRight } from 'lucide-react';

const TRENDING_CATEGORIES: Array<{ label: string; value: CategoryName | 'All' }> = [
  { label: 'All Flagships', value: 'All' },
  { label: 'Wireless Buds', value: 'Buds' },
  { label: 'Smart Watches', value: 'Smart Watches' },
  { label: 'Portable Speakers', value: 'Portable Speakers' },
  { label: 'Super Combos', value: 'Deals' },
  { label: 'Fast Chargers', value: 'Fast Chargers' }
];

export const TrendingTabs: React.FC = () => {
  const { products, navigateTo } = useShop();
  const [activeTab, setActiveTab] = useState<CategoryName | 'All'>('All');

  // Curate to top 4 standout products for clean, spacious presentation
  const filteredProducts = activeTab === 'All'
    ? products.slice(0, 4)
    : products.filter(p => p.category === activeTab).slice(0, 4);

  return (
    <section id="trending-products-tabbed-section" className="py-20 sm:py-24 bg-[#07080c] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-[10px] font-bold uppercase tracking-widest mb-2 font-mono">
              <span>CURATED SPOTLIGHT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-heading tracking-tight">
              Flagship Drops
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-md">
              Engineered with premium acoustic precision, AMOLED displays, and military-grade durability.
            </p>
          </div>

          {/* Category Tabs Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0e1017] border border-white/10 rounded-2xl overflow-x-auto max-w-full no-scrollbar pb-1.5 sm:pb-1.5">
            {TRENDING_CATEGORIES.map(tab => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.value)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer whitespace-nowrap ${
                  activeTab === tab.value
                    ? 'bg-white text-gray-950 shadow-md font-black'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid - 4 Curated Products with generous gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View Full Category Link */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo({ type: 'shop', category: activeTab === 'All' ? undefined : activeTab })}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold border border-white/15 transition-all group cursor-pointer"
          >
            <span>Explore Full {activeTab === 'All' ? 'Catalog' : activeTab} Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-sky-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
