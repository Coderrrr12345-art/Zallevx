import React, { useState } from 'react';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';
import {
  Heart,
  ShoppingBag,
  Eye,
  Star,
  CheckCircle2
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    setQuickViewProduct,
    navigateTo,
    formatPKR
  } = useShop();

  const [isHovered, setIsHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const inWish = isInWishlist(product.id);
  const hasMultipleImages = product.images.length > 1;

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a')) return;
    navigateTo({ type: 'product', slug: product.slug });
  };

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={handleCardClick}
      onMouseEnter={() => {
        setIsHovered(true);
        if (hasMultipleImages) setImgIndex(1);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setImgIndex(0);
      }}
      className={`group relative bg-[#090b12] rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer ${
        featured ? 'ring-1 ring-white/20' : ''
      }`}
    >
      {/* Top Media Container */}
      <div className="relative w-full aspect-square bg-[#05060b] overflow-hidden p-3 sm:p-5 flex items-center justify-center border-b border-white/5">
        
        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1 items-start">
          {product.badge && (
            <span
              className={`text-[9px] sm:text-[10px] font-bold tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md uppercase font-mono shadow-md ${
                product.badge.includes('50%') || product.badge.includes('BOGO') || product.badge.includes('Deal')
                  ? 'bg-rose-600 text-white'
                  : 'bg-white text-black'
              }`}
            >
              {product.badge}
            </span>
          )}
          {product.discountPercent && product.discountPercent > 0 && (
            <span className="text-[8.5px] sm:text-[9.5px] font-bold px-1.5 py-0.5 rounded-md bg-black/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md font-mono">
              -{product.discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          id={`wishlist-toggle-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition-all duration-200 ${
            inWish
              ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/40 scale-105'
              : 'bg-black/60 text-gray-400 hover:text-white hover:bg-black/90 backdrop-blur-md border border-white/10'
          }`}
          aria-label="Toggle Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${inWish ? 'fill-white' : ''}`} />
        </button>

        {/* Product Image */}
        <img
          src={product.images[imgIndex] || product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Desktop Hover Quick View Overlay */}
        <div className="absolute inset-x-3 bottom-3 z-20 hidden md:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            id={`quick-view-btn-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="w-full py-2 px-3 bg-black/90 hover:bg-black text-white text-xs font-semibold rounded-xl border border-white/20 backdrop-blur-md flex items-center justify-center gap-1.5 transition-all shadow-xl"
          >
            <Eye className="w-3.5 h-3.5 text-slate-300" />
            <span>Quick Inspect</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          {/* Category & Star Rating */}
          <div className="flex items-center justify-between gap-1 text-xs mb-1.5">
            <span className="text-[9px] sm:text-[10px] font-semibold text-gray-400 uppercase tracking-wider font-mono truncate">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-300 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[10px] font-mono shrink-0">
              <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Product Title */}
          <h3
            title={product.name}
            className="text-xs sm:text-sm font-semibold text-white group-hover:text-slate-200 transition-colors line-clamp-2 leading-snug"
          >
            {product.name}
          </h3>
        </div>

        {/* Pricing Block & Actions */}
        <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
          <div className="flex items-baseline justify-between gap-1">
            <div>
              <div className="text-sm sm:text-base font-bold text-white font-mono tracking-tight">
                {formatPKR(product.price)}
              </div>
              {product.originalPrice > product.price && (
                <div className="text-[10px] sm:text-xs text-gray-500 line-through font-mono">
                  {formatPKR(product.originalPrice)}
                </div>
              )}
            </div>
            <div className="text-[9px] sm:text-[10px] text-emerald-400 flex items-center gap-1 font-mono font-medium shrink-0">
              <CheckCircle2 className="w-3 h-3" />
              <span>COD Verified</span>
            </div>
          </div>

          {/* Add to Cart CTA - Mobile Optimized */}
          <div className="flex items-center gap-1.5 w-full">
            <button
              id={`add-to-cart-btn-${product.id}`}
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product, 1, undefined, e);
              }}
              className="flex-1 py-2.5 px-3 bg-white hover:bg-slate-200 text-black text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-md"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-black" />
              <span>Add To Cart</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setQuickViewProduct(product);
              }}
              className="p-2.5 bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white rounded-xl border border-white/10 flex items-center justify-center transition-colors cursor-pointer shrink-0 md:hidden"
              title="Quick Inspect"
              aria-label="Quick Inspect"
            >
              <Eye className="w-3.5 h-3.5 text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
