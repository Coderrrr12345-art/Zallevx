import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/product/ProductCard';
import {
  Star,
  ShoppingBag,
  Heart,
  MessageCircle,
  Truck,
  ShieldCheck,
  RotateCcw,
  Zap,
  Flame,
  CheckCircle2,
  ChevronRight,
  Share2,
  Package
} from 'lucide-react';

interface ProductDetailPageProps {
  slug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ slug }) => {
  const {
    products,
    addToCart,
    toggleWishlist,
    isInWishlist,
    formatPKR,
    navigateTo,
    showToast
  } = useShop();

  const product = products.find(p => p.slug === slug) || products[0];

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'box'>('specs');

  const inWish = isInWishlist(product.id);
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = (e: React.MouseEvent) => {
    addToCart(product, quantity, selectedColor, e);
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hi Zalleve! I want to place an order for:\n` +
      `📦 *${product.name}*\n` +
      `🎨 Color: *${selectedColor || 'Standard'}*\n` +
      `🔢 Quantity: *${quantity}*\n` +
      `💰 Total: *${formatPKR(product.price * quantity)}*\n\n` +
      `Please confirm my Cash on Delivery order.`
    );
    window.open(`https://wa.me/923222683373?text=${text}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard!');
    }
  };

  return (
    <div id="product-detail-view" className="py-8 sm:py-14 bg-[#040406] min-h-screen text-gray-200 font-sans pb-24 lg:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6 overflow-x-auto whitespace-nowrap font-mono">
          <button onClick={() => navigateTo({ type: 'home' })} className="hover:text-white cursor-pointer">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-gray-600 shrink-0" />
          <button onClick={() => navigateTo({ type: 'shop' })} className="hover:text-white cursor-pointer">
            Shop
          </button>
          <ChevronRight className="w-3 h-3 text-gray-600 shrink-0" />
          <button
            onClick={() => navigateTo({ type: 'shop', category: product.category })}
            className="hover:text-slate-200 cursor-pointer"
          >
            {product.category}
          </button>
          <ChevronRight className="w-3 h-3 text-gray-600 shrink-0" />
          <span className="text-gray-200 font-bold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Top Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
          
          {/* Left Media Column (Gallery) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square rounded-3xl bg-[#080910] border border-white/10 p-6 sm:p-8 flex items-center justify-center overflow-hidden group shadow-2xl">
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-md uppercase font-mono shadow">
                  {product.badge}
                </span>
              )}

              <button
                onClick={handleShare}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-black/70 hover:bg-black text-gray-300 hover:text-white border border-white/15 backdrop-blur-md cursor-pointer"
                title="Share link"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <img
                src={product.images[activeImageIdx] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#080910] border-2 p-2 shrink-0 transition-all cursor-pointer ${
                      activeImageIdx === idx
                        ? 'border-white scale-105 shadow-lg'
                        : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Information Column */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <div className="flex items-center justify-between gap-2 text-xs text-slate-300 font-semibold mb-2 font-mono">
                <span className="uppercase tracking-wider">{product.category}</span>
                <div className="flex items-center gap-1.5 text-amber-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-xs font-mono">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400 font-normal">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Social Proof Counter */}
              <div className="mt-2.5 flex items-center gap-2 text-xs text-slate-300 font-mono">
                <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>{product.sold} units ordered in the last {product.soldDays} days</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-[#090a10] border border-white/10 flex items-baseline gap-4 shadow-md">
              <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                {formatPKR(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm sm:text-base text-gray-500 line-through font-mono">
                  {formatPKR(product.originalPrice)}
                </span>
              )}
              {product.discountPercent && (
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-mono">
                  Save {product.discountPercent}% OFF
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              {product.description}
            </p>

            {/* Color Switcher */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-2 font-mono">
                  Color Option: <span className="text-white font-bold">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        selectedColor === color
                          ? 'bg-white text-black border-white shadow-md'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <label className="text-xs font-semibold text-gray-300 font-mono">Quantity:</label>
              <div className="flex items-center bg-black border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-3.5 py-1.5 text-gray-400 hover:text-white text-sm cursor-pointer"
                >
                  -
                </button>
                <span className="px-3.5 text-xs font-bold text-white font-mono">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-3.5 py-1.5 text-gray-400 hover:text-white text-sm cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons: Add To Cart / Wishlist / WhatsApp */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-6 gap-3">
                <button
                  id="pdp-add-to-cart-btn"
                  onClick={handleAddToCart}
                  className="col-span-4 py-3.5 bg-white hover:bg-slate-200 text-black rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-98 transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-black" />
                  <span>Add To Cart ({formatPKR(product.price * quantity)})</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`col-span-2 py-3.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-semibold transition-all cursor-pointer ${
                    inWish
                      ? 'bg-rose-500 text-white border-rose-500 shadow-md'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${inWish ? 'fill-white' : ''}`} />
                  <span>{inWish ? 'Saved' : 'Wishlist'}</span>
                </button>
              </div>

              {/* Instant WhatsApp Cash On Delivery Button */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant Order via WhatsApp (+92 322 2683373)</span>
              </button>
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/10 text-center">
              <div className="p-2.5 bg-[#090a10] rounded-xl border border-white/5">
                <Truck className="w-4 h-4 text-slate-300 mx-auto mb-1" />
                <div className="text-[10px] font-bold text-white">Express Courier</div>
                <div className="text-[9px] text-gray-400">2-4 Days Delivery</div>
              </div>
              <div className="p-2.5 bg-[#090a10] rounded-xl border border-white/5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <div className="text-[10px] font-bold text-white">7-Day Warranty</div>
                <div className="text-[9px] text-gray-400">Full Checking</div>
              </div>
              <div className="p-2.5 bg-[#090a10] rounded-xl border border-white/5">
                <RotateCcw className="w-4 h-4 text-slate-300 mx-auto mb-1" />
                <div className="text-[10px] font-bold text-white">Cash on Delivery</div>
                <div className="text-[9px] text-gray-400">Pay at Doorstep</div>
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Tabs: Specs, In The Box */}
        <div className="bg-[#090a10] border border-white/10 rounded-3xl p-5 sm:p-8 mb-14 shadow-2xl">
          
          <div className="flex border-b border-white/10 mb-6 overflow-x-auto gap-4">
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
                activeTab === 'specs'
                  ? 'border-white text-white font-bold'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Technical Specifications</span>
            </button>

            <button
              onClick={() => setActiveTab('box')}
              className={`pb-3 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
                activeTab === 'box'
                  ? 'border-white text-white font-bold'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>What's In The Box</span>
            </button>
          </div>

          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {product.specs ? (
                Array.isArray(product.specs) ? (
                  product.specs.map((spec, i) => (
                    <div key={i} className="p-3 bg-[#0e1018] rounded-xl border border-white/5 flex items-center gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                      <span className="text-gray-200">{spec}</span>
                    </div>
                  ))
                ) : (
                  Object.entries(product.specs).map(([key, val], i) => (
                    <div key={i} className="p-3 bg-[#0e1018] rounded-xl border border-white/5 flex items-center justify-between gap-3">
                      <span className="font-semibold text-gray-400">{key}:</span>
                      <span className="text-white font-medium">{val}</span>
                    </div>
                  ))
                )
              ) : (
                <div className="text-gray-400">Flagship high-grade audio & electronic craftsmanship.</div>
              )}
            </div>
          )}

          {activeTab === 'box' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 bg-[#0e1018] rounded-xl border border-white/5 space-y-1">
                <div className="font-bold text-white">1x Main Hardware Unit</div>
                <div className="text-[11px] text-gray-400">{product.name}</div>
              </div>
              <div className="p-3.5 bg-[#0e1018] rounded-xl border border-white/5 space-y-1">
                <div className="font-bold text-white">1x High-Speed Cable</div>
                <div className="text-[11px] text-gray-400">USB-C / Fast Cord</div>
              </div>
              <div className="p-3.5 bg-[#0e1018] rounded-xl border border-white/5 space-y-1">
                <div className="font-bold text-white">1x User Manual & Card</div>
                <div className="text-[11px] text-gray-400">7-Day Warranty Guarantee</div>
              </div>
            </div>
          )}

        </div>

        {/* Related Products Recommendation */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-white mb-5">
              More in {product.category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {relatedProducts.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Mobile Sticky Floating Buy Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-[#06070c]/95 backdrop-blur-xl border-t border-white/10 p-3 z-50 flex items-center justify-between gap-3 lg:hidden shadow-2xl">
        <div>
          <div className="text-[10px] text-gray-400 uppercase font-mono">Total Price</div>
          <div className="text-base font-bold text-white font-mono">
            {formatPKR(product.price * quantity)}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAddToCart}
            className="py-2.5 px-4 bg-white hover:bg-slate-200 text-black text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-lg"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-black" />
            <span>Add To Cart</span>
          </button>

          <button
            onClick={handleWhatsAppOrder}
            className="p-2.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-xl flex items-center justify-center transition-all"
            aria-label="Order via WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
