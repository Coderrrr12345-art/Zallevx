import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import {
  X,
  Star,
  ShoppingBag,
  Heart,
  MessageCircle,
  ArrowRight,
  Flame,
  CheckCircle2
} from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    formatPKR,
    navigateTo
  } = useShop();

  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const inWish = isInWishlist(product.id);
  const currentColor = selectedColor || (product.colors && product.colors[0]) || '';

  const handleAddToCart = (e: React.MouseEvent) => {
    addToCart(product, quantity, currentColor, e);
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hi Zalleve! I want to order "${product.name}" (Color: ${currentColor || 'Default'}, Qty: ${quantity}) for PKR ${product.price * quantity} with Cash on Delivery.`
    );
    window.open(`https://wa.me/923222683373?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md animate-in fade-in"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-[#090a10] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-50 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Media Gallery */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-square rounded-2xl bg-[#050508] p-6 flex items-center justify-center border border-white/10 overflow-hidden">
              <img
                src={product.images[activeImageIdx] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-white text-gray-950 text-[10px] font-black px-2.5 py-1 rounded-md uppercase font-mono shadow">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-14 h-14 rounded-xl overflow-hidden bg-black border transition-all shrink-0 p-1 cursor-pointer ${
                      activeImageIdx === idx ? 'border-white ring-1 ring-white/50 scale-105' : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Actions */}
          <div className="flex flex-col justify-between gap-5">
            <div>
              <div className="flex items-center justify-between text-xs text-sky-400 font-bold mb-1 font-mono">
                <span>{product.category}</span>
                <div className="flex items-center gap-1 text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-md">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400 font-normal">({product.reviewCount})</span>
                </div>
              </div>

              <h2 className="text-lg sm:text-xl font-black text-white font-heading leading-tight">
                {product.name}
              </h2>

              {/* Social Proof */}
              <div className="flex items-center gap-1.5 text-xs text-amber-300 mt-2 font-semibold">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>{product.sold} units ordered recently</span>
              </div>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl font-black text-white font-mono">
                  {formatPKR(product.price)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through font-mono">
                    {formatPKR(product.originalPrice)}
                  </span>
                )}
                {product.discountPercent && (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md font-mono">
                    Save {product.discountPercent}%
                  </span>
                )}
              </div>

              <p className="text-xs text-gray-300 mt-3 line-clamp-3 leading-relaxed">
                {product.description}
              </p>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-4">
                  <label className="text-xs font-semibold text-gray-300 mb-2 block">
                    Select Color: <span className="text-white font-bold">{currentColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map(col => (
                      <button
                        key={col}
                        onClick={() => setSelectedColor(col)}
                        className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                          currentColor === col
                            ? 'bg-white text-gray-950 border-white font-bold shadow-md'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        {col}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mt-4 flex items-center gap-3">
                <label className="text-xs font-semibold text-gray-300">Quantity:</label>
                <div className="flex items-center border border-white/10 rounded-xl bg-black overflow-hidden">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-3 py-1.5 text-gray-300 hover:text-white text-sm cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-bold text-white font-mono">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-3 py-1.5 text-gray-300 hover:text-white text-sm cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-4 border-t border-white/10">
              <div className="grid grid-cols-5 gap-2">
                <button
                  id="modal-add-to-cart-btn"
                  onClick={handleAddToCart}
                  className="col-span-4 py-3 stealth-btn-primary rounded-xl font-black uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4 text-gray-950" />
                  <span>Add to Cart ({formatPKR(product.price * quantity)})</span>
                </button>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`col-span-1 p-3 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
                    inWish
                      ? 'bg-rose-500 text-white border-rose-500 shadow-md'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                  }`}
                  title="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${inWish ? 'fill-white' : ''}`} />
                </button>
              </div>

              {/* WhatsApp Instant COD Order */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant Cash On Delivery Order via WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setQuickViewProduct(null);
                  navigateTo({ type: 'product', slug: product.slug });
                }}
                className="w-full text-center py-2 text-xs text-gray-400 hover:text-white font-medium flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>View Full Tech Specifications & Reviews</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
