import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Truck,
  ArrowRight,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
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

  const [couponCode, setCouponCode] = useState('');

  const freeShippingPercent = Math.min(100, Math.round((cartTotal / freeShippingThreshold) * 100));

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim()) {
      applyCoupon(couponCode.trim());
      setCouponCode('');
    }
  };

  if (cart.length === 0) {
    return (
      <div id="cart-empty-view" className="py-20 bg-[#040406] min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4 space-y-5">
          <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 text-gray-400 mx-auto flex items-center justify-center">
            <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
          </div>
          <h1 className="text-2xl font-black text-white font-heading">Your Cart is Currently Empty</h1>
          <p className="text-xs sm:text-sm text-gray-400">
            Browse our flagship wireless earbuds, AMOLED smartwatches, and GaN ultra chargers.
          </p>
          <button
            onClick={() => navigateTo({ type: 'shop' })}
            className="px-8 py-3.5 stealth-btn-primary rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="cart-full-page" className="py-10 bg-[#040406] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8 pb-4 border-b border-white/10">
          <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest font-mono mb-1">
            SHOPPING BAG
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white font-heading">
            Shopping Cart ({cart.reduce((a, b) => a + b.quantity, 0)} Items)
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Review your order before proceeding to express Cash on Delivery checkout.
          </p>
        </div>

        {/* Free Shipping Meter */}
        <div className="mb-8 p-5 bg-[#090a10] border border-white/10 rounded-2xl shadow-md">
          <div className="flex items-center justify-between text-xs mb-2.5 font-mono">
            <div className="flex items-center gap-2 text-gray-200">
              <Truck className="w-4 h-4 text-sky-400" />
              {freeShippingRemaining > 0 ? (
                <span>
                  Add <strong className="text-white">{formatPKR(freeShippingRemaining)}</strong> more to unlock <strong>FREE Express Shipping</strong>!
                </span>
              ) : (
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  FREE Nationwide Express Shipping Unlocked
                </span>
              )}
            </div>
            <span className="font-bold text-gray-400">{freeShippingPercent}%</span>
          </div>
          <div className="w-full h-2 bg-black rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-white transition-all duration-500 rounded-full"
              style={{ width: `${freeShippingPercent}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Item List Table */}
          <div className="lg:col-span-8 space-y-3">
            {cart.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.selectedColor || ''}-${idx}`}
                className="p-4 sm:p-5 bg-[#090a10] border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center gap-4 group shadow-md"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-18 h-18 object-contain bg-black rounded-xl p-2 shrink-0 border border-white/5"
                />

                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <h3
                    onClick={() => navigateTo({ type: 'product', slug: item.product.slug })}
                    className="text-sm font-bold text-white hover:text-sky-400 transition-colors cursor-pointer"
                  >
                    {item.product.name}
                  </h3>
                  {item.selectedColor && (
                    <div className="text-xs text-gray-400 mt-0.5 font-mono">
                      Color: <span className="text-white font-medium">{item.selectedColor}</span>
                    </div>
                  )}
                  <div className="text-xs font-semibold text-gray-400 mt-1 font-mono">
                    Unit: {formatPKR(item.product.price)}
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center bg-black border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => updateCartQuantity(item.product.id, item.quantity - 1, item.selectedColor)}
                    className="px-3 py-1.5 text-gray-400 hover:text-white cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-white font-mono">{item.quantity}</span>
                  <button
                    onClick={() => updateCartQuantity(item.product.id, item.quantity + 1, item.selectedColor)}
                    className="px-3 py-1.5 text-gray-400 hover:text-white cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Line Total */}
                <div className="text-sm font-black text-white font-mono min-w-[90px] text-right">
                  {formatPKR(item.product.price * item.quantity)}
                </div>

                {/* Delete */}
                <button
                  onClick={() => removeFromCart(item.product.id, item.selectedColor)}
                  className="p-2 text-gray-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors cursor-pointer"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Right Order Summary Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#090a10] border border-white/10 rounded-3xl space-y-5 shadow-xl">
              <h2 className="text-base font-bold text-white font-heading">
                Order Summary
              </h2>

              {/* Coupon Form */}
              <div>
                {appliedCoupon ? (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-between text-xs text-emerald-400 font-mono">
                    <span className="font-semibold">Voucher {appliedCoupon} Active</span>
                    <button onClick={removeCoupon} className="text-rose-400 hover:underline cursor-pointer">
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Discount Code"
                      value={couponCode}
                      onChange={e => setCouponCode(e.target.value)}
                      className="flex-1 bg-[#11121c] text-xs text-white placeholder-gray-500 px-3 py-2.5 rounded-xl border border-white/10 uppercase font-mono focus:outline-none focus:border-white/30"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer font-mono uppercase"
                    >
                      Apply
                    </button>
                  </form>
                )}
              </div>

              {/* Cost Rows */}
              <div className="space-y-2 text-xs text-gray-300 pt-2 border-t border-white/10 font-mono">
                <div className="flex justify-between">
                  <span>Cart Subtotal</span>
                  <span className="font-medium text-white">{formatPKR(cartTotal)}</span>
                </div>
                {discountValue > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Voucher Discount</span>
                    <span>-{formatPKR(discountValue)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Nationwide Courier</span>
                  <span className={freeShippingRemaining === 0 ? 'text-emerald-400 font-bold' : 'text-white'}>
                    {freeShippingRemaining === 0 ? 'FREE' : 'PKR 250'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black text-white pt-3 border-t border-white/10 font-heading">
                  <span>Grand Total</span>
                  <span className="text-sky-400 font-mono">{formatPKR(finalTotal)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => navigateTo({ type: 'checkout' })}
                className="w-full py-4 stealth-btn-primary rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-98"
              >
                <span>Proceed to Cash on Delivery</span>
                <ArrowRight className="w-4 h-4 text-gray-950" />
              </button>
            </div>

            {/* Quick Guarantees */}
            <div className="p-4 bg-[#090a10] border border-white/10 rounded-2xl space-y-2.5 text-xs text-gray-400 shadow-md">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>7-Day Checking & Replacement Policy</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-sky-400" />
                <span>Cash on Delivery across 200+ Pakistani Cities</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
