import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Truck,
  ArrowRight,
  Tag,
  MessageCircle
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    cartTotal,
    freeShippingThreshold,
    freeShippingRemaining,
    formatPKR,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    discountValue,
    finalTotal,
    navigateTo
  } = useShop();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const freeShippingPercent = Math.min(100, Math.round((cartTotal / freeShippingThreshold) * 100));

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyCoupon(couponInput);
      setCouponInput('');
    }
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    navigateTo({ type: 'checkout' });
  };

  const handleWhatsAppCheckout = () => {
    const itemsSummary = cart.map(item => `- ${item.quantity}x ${item.product.name} (${item.selectedColor || 'Standard'}) = PKR ${item.product.price * item.quantity}`).join('\n');
    const msg = `Hi Zalleve! I want to confirm my order:\n${itemsSummary}\n\nTotal: ${formatPKR(finalTotal)}\nPayment: Cash on Delivery (COD)\nPlease dispatch my parcel.`;
    window.open(`https://wa.me/923222683373?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-full sm:w-96 md:w-[420px] max-w-full bg-[#090a10] border-l border-white/10 shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h2 className="text-sm sm:text-base font-bold text-white font-heading truncate">
                Cart Overview ({cart.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-gray-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer shrink-0"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="p-3.5 sm:p-4 bg-[#0d0e16] border-b border-white/5">
            <div className="flex items-center justify-between text-xs mb-2 gap-2">
              <div className="flex items-center gap-1.5 text-gray-300 min-w-0 truncate">
                <Truck className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                {freeShippingRemaining > 0 ? (
                  <span className="truncate">
                    Add <strong className="text-white font-mono">{formatPKR(freeShippingRemaining)}</strong> for <strong className="text-slate-200">FREE Express Delivery</strong>
                  </span>
                ) : (
                  <span className="text-emerald-400 font-bold flex items-center gap-1 font-mono truncate">
                    Unlocked Free Express Delivery!
                  </span>
                )}
              </div>
              <span className="text-xs font-bold text-gray-400 font-mono shrink-0">{freeShippingPercent}%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-slate-200 to-white transition-all duration-500 rounded-full"
                style={{ width: `${freeShippingPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">Your Cart is Empty</h3>
                  <p className="text-xs text-gray-400 mt-1 max-w-xs">
                    Browse our premium audio, smartwatch, and power collections.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateTo({ type: 'shop' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white hover:bg-slate-200 text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Explore Gadgets
                </button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.selectedColor || ''}-${idx}`}
                  className="p-3 bg-[#0e1018] border border-white/10 rounded-2xl flex gap-3 items-center group"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain bg-[#050508] rounded-xl p-1 shrink-0 border border-white/5"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4
                      onClick={() => {
                        setIsCartOpen(false);
                        navigateTo({ type: 'product', slug: item.product.slug });
                      }}
                      className="text-xs font-bold text-gray-200 hover:text-white cursor-pointer truncate"
                    >
                      {item.product.name}
                    </h4>

                    {item.selectedColor && (
                      <div className="text-[10px] text-gray-400 mt-0.5 font-mono truncate">
                        Color: <span className="text-white">{item.selectedColor}</span>
                      </div>
                    )}

                    <div className="mt-2 flex items-center justify-between gap-1">
                      <div className="text-xs font-bold text-white font-mono truncate">
                        {formatPKR(item.product.price * item.quantity)}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center bg-black/60 border border-white/10 rounded-lg overflow-hidden shrink-0">
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1, item.selectedColor)}
                          className="px-2 py-1 text-gray-400 hover:text-white cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-white font-mono">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1, item.selectedColor)}
                          className="px-2 py-1 text-gray-400 hover:text-white cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                    className="p-1.5 text-gray-500 hover:text-rose-400 rounded-lg hover:bg-rose-500/10 transition-colors shrink-0 cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-3.5 sm:p-4 bg-[#0a0b12] border-t border-white/10 space-y-3">
              
              {/* Coupon Form */}
              <div>
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono">
                    <div className="flex items-center gap-1.5 min-w-0 truncate">
                      <Tag className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">Code {appliedCoupon} applied (-{formatPKR(discountValue)})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-rose-400 hover:underline cursor-pointer shrink-0 ml-2"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. ZALLEVE10)"
                      value={couponInput}
                      onChange={e => setCouponInput(e.target.value)}
                      className="flex-1 min-w-0 bg-black/50 border border-white/10 text-xs text-white placeholder-gray-500 px-3 py-2 rounded-xl focus:outline-none focus:border-white/30 uppercase font-mono"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-xs font-bold text-white rounded-xl transition-colors cursor-pointer shrink-0"
                    >
                      Apply
                    </button>
                  </form>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-gray-400 pt-1 font-mono">
                <div className="flex justify-between items-center">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">{formatPKR(cartTotal)}</span>
                </div>
                {discountValue > 0 && (
                  <div className="flex justify-between items-center text-emerald-400 font-semibold">
                    <span>Discount</span>
                    <span>-{formatPKR(discountValue)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span>Delivery (Nationwide)</span>
                  <span className={freeShippingRemaining === 0 ? 'text-emerald-400 font-bold' : 'text-white'}>
                    {freeShippingRemaining === 0 ? 'FREE' : 'PKR 250'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm font-extrabold text-white pt-2 border-t border-white/10">
                  <span>Total Amount</span>
                  <span className="text-white text-base font-mono font-bold">{formatPKR(finalTotal)}</span>
                </div>
              </div>

              {/* Checkout CTAs */}
              <div className="space-y-2 pt-1">
                <button
                  id="drawer-checkout-btn"
                  onClick={handleProceedCheckout}
                  className="w-full py-3 bg-white hover:bg-slate-200 text-black rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-98 transition-all"
                >
                  <span>Proceed to Cash on Delivery</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Directly via WhatsApp</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
