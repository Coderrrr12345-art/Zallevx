import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Truck, ArrowRight, ShieldCheck } from 'lucide-react';

export const FreeShippingBanner: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <section id="free-shipping-promo-banner" className="relative overflow-hidden py-8 bg-[#090a12] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Left Message */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-sky-400 uppercase tracking-widest font-mono">
                <span>NATIONWIDE DELIVERY PROMOTION</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white font-heading mt-0.5">
                FREE Delivery On All Orders Above PKR 3,000
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Fast dispatch via TCS & Leopards with full Cash On Delivery verification.
              </p>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo({ type: 'shop' })}
              className="stealth-btn-primary px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-lg active:scale-95"
            >
              <span>Shop & Claim Free Delivery</span>
              <ArrowRight className="w-4 h-4 text-gray-950" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
