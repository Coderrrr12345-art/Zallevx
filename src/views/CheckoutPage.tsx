import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  Phone,
  MapPin,
  User,
  Banknote,
  MessageCircle,
  ArrowRight,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';

const PAKISTANI_CITIES = [
  'Karachi',
  'Lahore',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Peshawar',
  'Quetta',
  'Sialkot',
  'Gujranwala',
  'Hyderabad',
  'Bahawalpur',
  'Sargodha',
  'Abbottabad',
  'Sukkur',
  'Larkana',
  'Sheikhupura',
  'Rahim Yar Khan',
  'Jhelum',
  'Gujrat',
  'Mardan',
  'Mirpur (AJK)',
  'Other City / Tehsil'
];

export const CheckoutPage: React.FC = () => {
  const {
    cart,
    cartTotal,
    discountValue,
    freeShippingRemaining,
    finalTotal,
    formatPKR,
    clearCart,
    navigateTo,
    showToast
  } = useShop();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    altPhone: '',
    city: 'Karachi',
    address: '',
    notes: '',
    paymentMethod: 'cod' as 'cod' | 'bank' | 'jazzcash'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      showToast('Please fill in your name, phone number, and delivery address.');
      return;
    }

    setIsSubmitting(true);

    const generatedOrderNo = `ZL-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrderNo);

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderPlaced(true);
      clearCart();

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }
    }, 1000);
  };

  const handleWhatsAppConfirm = () => {
    const msg = `Hi Zalleve! I just placed order *#${orderNumber}* for Cash on Delivery.\nName: ${formData.fullName}\nPhone: ${formData.phone}\nCity: ${formData.city}\nAddress: ${formData.address}\nAmount: ${formatPKR(finalTotal)}\nPlease confirm dispatch.`;
    window.open(`https://wa.me/923222683373?text=${encodeURIComponent(msg)}`, '_blank');
  };

  if (orderPlaced) {
    return (
      <div id="order-success-view" className="py-20 bg-[#040406] min-h-[70vh] flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 text-center space-y-6 bg-[#090a10] border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
              ORDER DISPATCH INITIATED
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white font-heading mt-1">
              Thank You, {formData.fullName}!
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              Your Cash on Delivery order has been registered. You will receive an SMS and WhatsApp tracking update from TCS / Leopards upon dispatch.
            </p>
          </div>

          <div className="p-4 bg-black/60 border border-white/10 rounded-2xl text-left text-xs space-y-2 font-mono">
            <div className="flex justify-between">
              <span className="text-gray-400">Order Reference:</span>
              <span className="font-bold text-white">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Payment:</span>
              <span className="font-bold text-white uppercase">{formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Direct Transfer'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Amount Due:</span>
              <span className="font-black text-white text-sm">{formatPKR(finalTotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Destination:</span>
              <span className="text-gray-200">{formData.city}, Pakistan</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={handleWhatsAppConfirm}
              className="w-full py-3.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm Instant Dispatch on WhatsApp</span>
            </button>

            <button
              onClick={() => navigateTo({ type: 'shop' })}
              className="w-full py-3 stealth-btn-primary rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer shadow-md"
            >
              Continue Shopping at ZALLEVE
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="py-20 bg-[#040406] min-h-[60vh] flex items-center justify-center text-center px-4">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-heading">No items in checkout</h2>
          <p className="text-xs text-gray-400">Please add gadgets to your cart before proceeding.</p>
          <button
            onClick={() => navigateTo({ type: 'shop' })}
            className="px-6 py-3 stealth-btn-primary rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer"
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="checkout-cash-on-delivery-page" className="py-10 bg-[#040406] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 pb-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest font-mono mb-1">
              FAST CHECKOUT
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white font-heading">
              Secure Cash On Delivery Checkout
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              No advance credit card payment required. Pay when you receive your parcel.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 font-mono">
            <Lock className="w-3.5 h-3.5" />
            <span>256-Bit SSL Protected</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Shipping Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact & Address Details */}
            <div className="p-6 bg-[#090a10] border border-white/10 rounded-3xl space-y-4 shadow-md">
              <h2 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                <User className="w-4 h-4 text-sky-400" />
                <span>Customer & Delivery Details</span>
              </h2>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-gray-300 font-medium mb-1">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Soban Saud"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#11121c] text-white p-3 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 font-medium mb-1">
                      WhatsApp / Mobile Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0322 1234567"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#11121c] text-white p-3 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-1">
                      Secondary Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="0300 7654321"
                      value={formData.altPhone}
                      onChange={e => setFormData({ ...formData, altPhone: e.target.value })}
                      className="w-full bg-[#11121c] text-white p-3 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-1">
                    City <span className="text-rose-400">*</span>
                  </label>
                  <select
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#11121c] text-white p-3 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none cursor-pointer"
                  >
                    {PAKISTANI_CITIES.map(city => (
                      <option key={city} value={city} className="bg-[#090a10]">
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-1">
                    Complete Street Address / House / Flat No. <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder="House/Plot #, Street name, Sector/Block, Landmark (e.g. Near Shell pump)"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#11121c] text-white p-3 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-1">
                    Order Delivery Notes (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Call before delivery, deliver after 2pm"
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#11121c] text-white p-3 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="p-6 bg-[#090a10] border border-white/10 rounded-3xl space-y-4 shadow-md">
              <h2 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                <Banknote className="w-4 h-4 text-emerald-400" />
                <span>Select Payment Method</span>
              </h2>

              <div className="space-y-3">
                {/* Cash on Delivery */}
                <label className="p-4 rounded-2xl bg-[#11121c] border border-emerald-500/30 flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="accent-emerald-400 w-4 h-4"
                    />
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        <span>Cash On Delivery (COD)</span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md font-mono font-bold">Recommended</span>
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5">
                        Pay cash directly to the TCS / Leopards courier rider at your doorstep.
                      </div>
                    </div>
                  </div>
                </label>

                {/* Direct Bank Transfer / JazzCash */}
                <label className="p-4 rounded-2xl bg-[#11121c] border border-white/10 flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'bank' })}
                      className="accent-sky-400 w-4 h-4"
                    />
                    <div>
                      <div className="text-xs font-bold text-white">
                        Bank Transfer / JazzCash / EasyPaisa
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5">
                        Send payment receipt to WhatsApp +92 322 2683373 for instant clearance.
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Order Review & Place Order Button */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#090a10] border border-white/10 rounded-3xl space-y-5 shadow-xl">
              <h2 className="text-base font-bold text-white font-heading">
                Order Review ({cart.reduce((a, b) => a + b.quantity, 0)} Items)
              </h2>

              {/* Items Mini List */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-12 h-12 rounded-xl bg-black p-1 object-contain shrink-0 border border-white/5"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-200 truncate">{item.product.name}</div>
                      <div className="text-[10px] text-gray-400 font-mono">
                        Qty: {item.quantity} {item.selectedColor ? `• ${item.selectedColor}` : ''}
                      </div>
                    </div>
                    <div className="font-bold text-white font-mono">
                      {formatPKR(item.product.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs text-gray-300 pt-3 border-t border-white/10 font-mono">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-white">{formatPKR(cartTotal)}</span>
                </div>
                {discountValue > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Discount</span>
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
                  <span>Total Due (COD)</span>
                  <span className="text-sky-400 text-lg font-mono">{formatPKR(finalTotal)}</span>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 stealth-btn-primary rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl disabled:opacity-50 active:scale-98"
              >
                {isSubmitting ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5 text-gray-950" />
                    <span>Confirm Order with Cash On Delivery</span>
                  </>
                )}
              </button>

              <p className="text-[10.5px] text-gray-400 text-center leading-relaxed">
                By placing this order, you agree to inspect your parcel upon arrival. Our verification team will message you on WhatsApp (+92 322 2683373).
              </p>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
