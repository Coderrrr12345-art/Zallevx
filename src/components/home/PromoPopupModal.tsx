import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, ShoppingBag, ArrowRight, Percent } from 'lucide-react';

export const PromoPopupModal: React.FC = () => {
  const { applyCoupon, navigateTo } = useShop();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('zalleve_promo_popup_dismissed');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('zalleve_promo_popup_dismissed', 'true');
  };

  const handleClaim = () => {
    applyCoupon('ZALLEVE10');
    handleClose();
    navigateTo({ type: 'shop', category: 'Deals' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md animate-in fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-[#090a10] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-50 animate-in zoom-in-95 duration-300 overflow-hidden">
        
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close Promo"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-4 pt-2">
          
          <div className="inline-flex w-12 h-12 rounded-2xl bg-white/5 border border-white/15 items-center justify-center text-sky-400">
            <Percent className="w-6 h-6" />
          </div>

          <div>
            <div className="text-[10px] font-bold tracking-widest text-sky-400 uppercase font-mono">
              EXCLUSIVE WELCOME PRIVILEGE
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight mt-1">
              Take 10% OFF Any Gadget
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto mt-2 leading-relaxed">
              Apply promotional code <span className="text-white font-mono font-bold">ZALLEVE10</span> at checkout for instant storewide savings.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-black border border-white/15 flex items-center justify-between max-w-xs mx-auto">
            <span className="text-xs font-mono font-black text-white tracking-widest">
              ZALLEVE10
            </span>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md font-mono">
              10% Discount Active
            </span>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={handleClaim}
              className="w-full py-3.5 stealth-btn-primary rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-gray-950" />
              <span>Claim Voucher & Browse Deals</span>
              <ArrowRight className="w-4 h-4 text-gray-950" />
            </button>

            <button
              onClick={handleClose}
              className="text-xs text-gray-500 hover:text-gray-300 py-1 cursor-pointer"
            >
              Dismiss
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
