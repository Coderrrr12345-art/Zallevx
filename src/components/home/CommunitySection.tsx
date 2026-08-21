import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { Mail, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const { showToast, applyCoupon } = useShop();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribed(true);
    applyCoupon('ZALLEVE10');
    showToast('Subscribed! Promo code "ZALLEVE10" (10% OFF) has been applied.');
  };

  return (
    <section id="community-newsletter-section" className="py-16 bg-[#050508] border-b border-white/5 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#090a12] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-[10px] font-bold uppercase tracking-widest font-mono">
                <span>JOIN 25,000+ TECH ENTHUSIASTS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white font-heading tracking-tight">
                Unlock Secret Drops & 10% OFF
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 max-w-lg leading-relaxed">
                Subscribe to official ZALLEVE release bulletins for early access to limited edition earbuds, holiday flash sales, and exclusive promo codes.
              </p>

              {/* Newsletter form */}
              {isSubscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>VIP Access Activated! Discount code "ZALLEVE10" is ready in your cart.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 pt-2">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-[#11121c] text-xs text-white placeholder-gray-500 pl-10 pr-4 py-3.5 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none"
                    />
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  </div>
                  <button
                    type="submit"
                    className="stealth-btn-primary px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
                  >
                    <span>Get 10% Voucher</span>
                    <ArrowRight className="w-4 h-4 text-gray-950" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Social Community Hub */}
            <div className="lg:col-span-5 bg-[#0e1018] border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white font-heading">
                Official Channels & Direct Support
              </h3>
              <p className="text-xs text-gray-400 leading-normal">
                Watch unboxing demonstrations, sound tests, and user setups:
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://wa.me/923222683373?text=Hi,%20I%20am%20interested%20in%20your%20products%20from%20Zalleve"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-black/40 hover:bg-black/80 border border-white/10 rounded-xl flex items-center gap-3 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-emerald-300">WhatsApp</div>
                    <div className="text-[10px] text-gray-400">+92 322 2683373</div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/zalleve_tech"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-black/40 hover:bg-black/80 border border-white/10 rounded-xl flex items-center gap-3 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold text-xs">
                    IG
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-pink-300">Instagram</div>
                    <div className="text-[10px] text-gray-400">@zalleve_tech</div>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/people/Zalleve/61578937257685/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-black/40 hover:bg-black/80 border border-white/10 rounded-xl flex items-center gap-3 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                    FB
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-blue-300">Facebook</div>
                    <div className="text-[10px] text-gray-400">Zalleve Official</div>
                  </div>
                </a>

                <a
                  href="https://www.tiktok.com/@zalleve"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-black/40 hover:bg-black/80 border border-white/10 rounded-xl flex items-center gap-3 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                    TT
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-sky-300">TikTok</div>
                    <div className="text-[10px] text-gray-400">@zalleve</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
