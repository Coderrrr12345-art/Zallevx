import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/product/ProductCard';
import { CATEGORIES_DATA } from '../data/categories';
import { CategoryName } from '../types';
import {
  Search,
  X,
  Headphones,
  Watch,
  Speaker,
  Zap,
  Mic,
  Activity,
  Cpu,
  Layers,
  ChevronRight,
  ArrowRight,
  Flame,
  Camera,
  Volume2
} from 'lucide-react';

const CATEGORY_ICON_MAP: Record<string, React.ElementType> = {
  'Headphones': Headphones,
  'Buds': Headphones,
  'Smart Watches': Watch,
  'Portable Speakers': Speaker,
  'Fast Chargers': Zap,
  'Microphones': Mic,
  'Tripods': Camera,
  'Handsfree': Volume2,
  'Neckband': Activity,
  'Smart Gadgets': Cpu,
  'Deals': Flame,
  'Daily Offers': Flame
};

export const ShopPage: React.FC = () => {
  const { products, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useShop();

  const [sortOption, setSortOption] = useState<'featured' | 'price-low' | 'price-high' | 'rating' | 'sold'>('featured');
  const [priceMax, setPriceMax] = useState<number>(10000);
  const [showInStockOnly, setShowInStockOnly] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'categorized' | 'grid'>('categorized');

  const activeCategoryInfo = useMemo(() => {
    if (!selectedCategory) return null;
    return CATEGORIES_DATA.find(c => c.name === selectedCategory) || null;
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        const matchesSpecs = product.specs
          ? Array.isArray(product.specs)
            ? product.specs.some(s => s.toLowerCase().includes(q))
            : Object.entries(product.specs).some(([k, v]) => k.toLowerCase().includes(q) || String(v).toLowerCase().includes(q))
          : false;
        const matchesFeatures = product.features?.some(f => f.toLowerCase().includes(q)) || false;
        if (!matchesName && !matchesDesc && !matchesCategory && !matchesSpecs && !matchesFeatures) return false;
      }
      if (product.price > priceMax) return false;
      if (showInStockOnly && !product.inStock) return false;

      return true;
    }).sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      if (sortOption === 'sold') return b.sold - a.sold;
      return 0;
    });
  }, [products, selectedCategory, searchQuery, priceMax, showInStockOnly, sortOption]);

  const isFiltered = Boolean(selectedCategory || searchQuery.trim() || priceMax < 10000 || showInStockOnly);

  const resetAllFilters = () => {
    setSelectedCategory(null);
    setSearchQuery('');
    setPriceMax(10000);
    setShowInStockOnly(false);
  };

  // Group products by category for clean sectional view
  const categoryGroups = useMemo(() => {
    return CATEGORIES_DATA.map(cat => {
      const items = products.filter(p => p.category === cat.name);
      return {
        ...cat,
        items
      };
    });
  }, [products]);

  return (
    <div id="shop-catalog-page" className="py-8 sm:py-14 bg-[#040406] min-h-screen text-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: Clean Atelier Banner */}
        <div className="mb-8 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 uppercase tracking-widest font-mono">
              <Layers className="w-3.5 h-3.5 text-slate-300" />
              <span>COLLECTIONS & CURATED TECH</span>
              {selectedCategory && (
                <>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
                  <span className="text-white font-normal">{selectedCategory}</span>
                </>
              )}
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {selectedCategory ? selectedCategory : 'Curated Atelier Collections'}
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {activeCategoryInfo?.tagline
                ? activeCategoryInfo.tagline
                : 'Explore our studio catalog of Hi-Fi acoustic headphones, AMOLED smartwatches, and GaN fast chargers with 7-Day checking warranty.'}
            </p>
          </div>

          {/* Quick stats & Clear Filters */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <div className="px-3.5 py-1.5 rounded-full bg-[#0a0b14] border border-white/10 text-xs font-mono text-slate-300">
              <span className="text-white font-bold">{filteredProducts.length}</span> Products Listed
            </div>

            {isFiltered && (
              <button
                onClick={resetAllFilters}
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-200 border border-white/15 text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <X className="w-3.5 h-3.5 text-slate-300" />
                <span>Reset View</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills Ribbon - Mobile Horizontal Scrollable */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2 text-[11px] font-semibold text-slate-400 font-mono uppercase tracking-wider">
            <span>Filter by Category:</span>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-slate-200 hover:text-white underline normal-case cursor-pointer font-sans"
              >
                View All Categories
              </button>
            )}
          </div>

          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* All Products Pill */}
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                selectedCategory === null
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'bg-[#0d0f18] text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Hardware ({products.length})</span>
            </button>

            {/* Individual Categories */}
            {CATEGORIES_DATA.map(cat => {
              const Icon = CATEGORY_ICON_MAP[cat.name] || Layers;
              const isSelected = selectedCategory === cat.name;

              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(isSelected ? null : cat.name)}
                  className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all shrink-0 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-black font-semibold shadow-lg'
                      : 'bg-[#0d0f18] text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-slate-400'}`} />
                  <span>{cat.name}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-black/10 text-black' : 'bg-white/5 text-slate-400'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* View Toggle and Filter Control Bar */}
        <div className="mb-8 p-3.5 rounded-2xl bg-[#090a12] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Search inside catalog */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search in collections..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-[#121422] text-xs text-white placeholder-gray-500 pl-8 pr-8 py-2 rounded-xl border border-white/10 focus:outline-none focus:border-white/30 font-sans"
            />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-gray-400 hover:text-white cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort & In-Stock Controls */}
          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2.5 w-full sm:w-auto text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-gray-400 text-xs">Sort:</span>
              <select
                value={sortOption}
                onChange={e => setSortOption(e.target.value as any)}
                className="bg-[#121422] text-xs text-gray-200 border border-white/10 rounded-xl px-2.5 py-1.5 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="sold">Most Popular</option>
              </select>
            </div>

            {/* View Mode Toggle when no single category is locked */}
            {!selectedCategory && !searchQuery && (
              <div className="flex items-center p-0.5 rounded-xl bg-[#121422] border border-white/10">
                <button
                  onClick={() => setViewMode('categorized')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    viewMode === 'categorized' ? 'bg-white text-black font-semibold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Sectional
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    viewMode === 'grid' ? 'bg-white text-black font-semibold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Unified Grid
                </button>
              </div>
            )}
          </div>
        </div>

        {/* MAIN PRODUCT DISPLAY AREA */}
        
        {/* CASE 1: SPECIFIC CATEGORY SELECTED OR SEARCHING OR UNIFIED GRID */}
        {(selectedCategory || searchQuery || viewMode === 'grid') ? (
          <div>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center rounded-3xl bg-[#090a12] border border-white/10 p-6">
                <p className="text-gray-400 text-xs sm:text-sm mb-4">No products found matching your active filter criteria.</p>
                <button
                  onClick={resetAllFilters}
                  className="px-5 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-slate-200 transition-all cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        ) : (
          /* CASE 2: CATEGORIZED SECTIONAL VIEW (Spacious, clean, separate blocks for each category) */
          <div className="space-y-12 sm:space-y-16">
            {categoryGroups.map(cat => {
              const Icon = CATEGORY_ICON_MAP[cat.name] || Layers;
              if (cat.items.length === 0) return null;

              return (
                <section
                  key={cat.name}
                  id={`collection-section-${cat.slug}`}
                  className="p-4 sm:p-7 rounded-3xl bg-[#080911] border border-white/10 relative overflow-hidden shadow-xl"
                >
                  {/* Category Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-5 border-b border-white/10 gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 font-mono uppercase tracking-wider">
                        <Icon className="w-4 h-4 text-slate-300" />
                        <span>{cat.name} Collection</span>
                      </div>
                      <h2 className="text-lg sm:text-2xl font-bold text-white">
                        {cat.tagline}
                      </h2>
                    </div>

                    <button
                      onClick={() => setSelectedCategory(cat.name)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer group shrink-0"
                    >
                      <span>View All ({cat.items.length})</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-slate-300" />
                    </button>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                    {cat.items.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
