import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import {
  ShoppingBag,
  Heart,
  ArrowRight,
  ShieldCheck,
  Check,
  Radio,
  Sliders,
  Volume2
} from 'lucide-react';

export const EditorialFlagshipShowcase: React.FC = () => {
  const { products, addToCart, toggleWishlist, isWishlisted, navigateTo, formatPKR } = useShop();

  // Primary flagship hero item: P9 Pro Max Headphones (ID: 1)
  const heroProduct = products.find(p => p.id === 1) || products[0];

  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  if (!heroProduct) return null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(heroProduct, 1, heroProduct.colors?.[activeColorIndex]);
  };

  const isLiked = isWishlisted(heroProduct.id);

  return (
    <section
      id="flagship-hero-experience"
      className="relative w-full py-24 bg-[#06070b] text-white border-b border-white/5 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-sky-400" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-sky-400">
                02 / Flagship Headline Piece
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Acoustic <span className="font-editorial italic font-normal text-sky-200">Architecture</span>
            </h2>
          </div>

          <div className="text-xs text-gray-400 max-w-sm font-light">
            Engineered with 40mm titanium dynamic drivers and breathable acoustic mesh for studio-grade isolation.
          </div>
        </div>

        {/* Large Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Oversized Hero Image with Interactive Hotspots */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#0a0b12] border border-white/10 shadow-2xl group">
              <img
                src={heroProduct.images[activeImageIndex] || heroProduct.images[0]}
                alt={heroProduct.name}
                className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Interactive Hotspot 1: Driver */}
              <div
                className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                onMouseEnter={() => setActiveHotspot('driver')}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className="relative">
                  <div className="w-7 h-7 rounded-full bg-sky-400/20 border border-sky-400 animate-ping absolute inset-0" />
                  <div className="w-7 h-7 rounded-full bg-sky-500 text-black font-bold text-xs flex items-center justify-center shadow-lg">
                    +
                  </div>
                </div>
                {activeHotspot === 'driver' && (
                  <div className="absolute left-8 top-0 w-48 p-3 rounded-2xl bg-black/90 backdrop-blur-md border border-white/20 text-xs shadow-2xl z-30 animate-in fade-in">
                    <div className="font-bold text-sky-300 font-mono text-[10px] uppercase">40mm Titanium</div>
                    <div className="text-gray-300 text-[11px] mt-0.5">High-definition acoustic drivers with deep bass.</div>
                  </div>
                )}
              </div>

              {/* Interactive Hotspot 2: Cushions */}
              <div
                className="absolute bottom-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                onMouseEnter={() => setActiveHotspot('cushions')}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className="relative">
                  <div className="w-7 h-7 rounded-full bg-white/20 border border-white animate-ping absolute inset-0" />
                  <div className="w-7 h-7 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shadow-lg">
                    +
                  </div>
                </div>
                {activeHotspot === 'cushions' && (
                  <div className="absolute right-8 top-0 w-48 p-3 rounded-2xl bg-black/90 backdrop-blur-md border border-white/20 text-xs shadow-2xl z-30 animate-in fade-in">
                    <div className="font-bold text-white font-mono text-[10px] uppercase">Memory Foam</div>
                    <div className="text-gray-300 text-[11px] mt-0.5">Breathable mesh canopy for all-day listening.</div>
                  </div>
                )}
              </div>

              {/* Image Thumbnail Selector */}
              {heroProduct.images.length > 1 && (
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                  {heroProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-12 h-12 rounded-xl overflow-hidden border transition-all cursor-pointer bg-black/60 backdrop-blur-sm ${
                        activeImageIndex === idx ? 'border-sky-400 scale-105' : 'border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Editorial Product Narrative & Quick Buy */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.16em]">
              <span>Studio Hi-Fi Over-Ear</span>
            </div>

            <h3
              onClick={() => navigateTo({ type: 'product', slug: heroProduct.slug })}
              className="text-xl sm:text-2xl font-semibold text-white hover:text-amber-400 transition-colors cursor-pointer leading-tight"
            >
              {heroProduct.name}
            </h3>

            <p className="text-sm text-gray-400 font-light leading-relaxed">
              {heroProduct.description}
            </p>

            {/* Colorway Switcher */}
            {heroProduct.colors && heroProduct.colors.length > 0 && (
              <div className="pt-2">
                <div className="text-[11px] font-mono text-gray-400 uppercase tracking-widest mb-3">
                  Select Finish: <span className="text-white font-bold">{heroProduct.colors[activeColorIndex]}</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {heroProduct.colors.map((color, idx) => (
                    <button
                      key={color}
                      onClick={() => setActiveColorIndex(idx)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        activeColorIndex === idx
                          ? 'bg-white text-black border-white shadow-lg'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/25'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price & Action HUD */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Special Atelier Price</div>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-mono font-black text-white">
                    {formatPKR(heroProduct.price)}
                  </span>
                  {heroProduct.originalPrice && (
                    <span className="text-xs text-gray-500 line-through font-mono">
                      {formatPKR(heroProduct.originalPrice)}
                    </span>
                  )}
                </div>
              </div>

              {/* Wishlist button */}
              <button
                onClick={() => toggleWishlist(heroProduct.id)}
                className={`p-3 rounded-2xl border transition-colors cursor-pointer ${
                  isLiked
                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

            {/* Primary Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                data-cursor="ADD"
                className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-gray-100 text-black font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add To Bag</span>
              </button>

              <button
                onClick={() => navigateTo({ type: 'product', slug: heroProduct.slug })}
                data-cursor="VIEW"
                className="w-full py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Full Technical Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Assurance footnote */}
            <div className="flex items-center gap-2 text-[11px] text-gray-500 font-mono pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cash on Delivery • 7-Day Replacement Warranty Included</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
