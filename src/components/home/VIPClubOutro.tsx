import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

export const VIPClubOutro: React.FC = () => {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      showToast('Welcome to the Zalleve VIP Atelier Club!');
      setEmail('');
    }
  };

  return (
    <section
      id="vip-club-outro"
      className="relative w-full py-24 bg-[#06070b] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl bg-[#090a12] border border-white/10 p-8 sm:p-16 overflow-hidden">
          
          <div className="relative z-10 max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.18em] text-gray-300">
              <span>Direct Concierge & Secret Drops</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight leading-tight">
              Experience Acoustic & Hardware <span className="font-editorial italic font-normal text-amber-100">Perfection</span>.
            </h2>

            <p className="text-sm sm:text-base text-gray-400 font-light max-w-xl leading-relaxed">
              Join 12,000+ tech connoisseurs across Pakistan. Receive invitations to private midnight allocations and priority 24-hour TCS dispatch.
            </p>

            {/* Newsletter Subscription Form */}
            <form onSubmit={handleSubmit} className="pt-4 flex flex-col sm:flex-row gap-3 max-w-md">
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs py-3">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>You are registered for priority drop access.</span>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#11121d] text-xs text-white placeholder-gray-500 px-5 py-4 rounded-full border border-white/15 focus:border-white/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-full bg-white hover:bg-gray-100 text-black font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shrink-0 transition-all cursor-pointer shadow-xl"
                  >
                    <span>Join Club</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </form>

            {/* WhatsApp Concierge direct badge */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <span>Prefer instant human support?</span>
              <a
                href="https://wa.me/923222683373?text=Hi%20Zalleve,%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp: +92 322 2683373</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
