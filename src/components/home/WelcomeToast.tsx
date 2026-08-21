import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Copy, Check, Tag } from 'lucide-react';

export const WelcomeToast: React.FC = () => {
  const { applyCoupon } = useShop();
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('zalleve_welcome_seen');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setVisible(true);
        sessionStorage.setItem('zalleve_welcome_seen', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCopyCode = () => {
    applyCoupon('ZALLEVE10');
    setCopied(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 lg:bottom-8 left-5 z-40 max-w-sm w-[calc(100vw-2.5rem)] animate-in slide-in-from-bottom-5 duration-500">
      <div className="p-4 rounded-2xl bg-[#0b0c13]/95 backdrop-blur-xl border border-white/15 shadow-2xl text-white relative">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white p-1 cursor-pointer"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-amber-400 shrink-0">
            <Tag className="w-4 h-4" />
          </div>

          <div className="flex-1 pr-4">
            <div className="text-[11px] font-black text-white uppercase tracking-wider font-mono">
              Welcome to ZALLEVE
            </div>
            <p className="text-xs text-gray-400 mt-0.5 leading-snug">
              Claim <strong className="text-white">10% OFF</strong> on your first tech order.
            </p>

            <div className="mt-2.5 flex items-center gap-2">
              <div className="px-2.5 py-1 bg-black border border-white/15 rounded-lg text-xs font-mono font-bold text-white">
                ZALLEVE10
              </div>
              <button
                onClick={handleCopyCode}
                className="px-3 py-1 stealth-btn-primary rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-gray-950" />
                    <span>Applied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-gray-950" />
                    <span>Apply</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
