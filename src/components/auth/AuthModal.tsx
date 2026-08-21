import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Lock, Mail, Phone, User, CheckCircle2 } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isAuthOpen, setIsAuthOpen, showToast } = useShop();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [formData, setFormData] = useState({
    name: '',
    identifier: '',
    password: '',
    remember: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isAuthOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsAuthOpen(false);
      showToast(mode === 'signin' ? 'Welcome back to ZALLEVE!' : 'Account registered successfully! Welcome aboard');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md animate-in fade-in"
        onClick={() => setIsAuthOpen(false)}
      />

      <div className="relative w-full max-w-md bg-[#090a10] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-50 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={() => setIsAuthOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex w-12 h-12 rounded-2xl bg-white/5 border border-white/15 items-center justify-center font-black text-xl text-white font-mono mb-3">
            Z
          </div>
          <h3 className="text-xl font-bold text-white font-heading">
            {mode === 'signin' ? 'Sign In to ZALLEVE' : 'Create ZALLEVE Account'}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            {mode === 'signin'
              ? 'Access your orders, tracked deliveries & member perks'
              : 'Join Pakistan’s premier tech gadgets community'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-black p-1 rounded-xl mb-6 border border-white/10">
          <button
            onClick={() => setMode('signin')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer font-mono uppercase ${
              mode === 'signin'
                ? 'bg-white text-gray-950 font-black shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer font-mono uppercase ${
              mode === 'signup'
                ? 'bg-white text-gray-950 font-black shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {mode === 'signup' && (
            <div>
              <label className="block text-gray-300 font-medium mb-1.5">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Soban Saud"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#11121c] text-white placeholder-gray-500 pl-10 pr-4 py-2.5 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none"
                />
                <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              </div>
            </div>
          )}

          <div>
            <label className="block text-gray-300 font-medium mb-1.5">
              Phone Number or Email
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="0322 1234567 or email@domain.com"
                value={formData.identifier}
                onChange={e => setFormData({ ...formData, identifier: e.target.value })}
                className="w-full bg-[#11121c] text-white placeholder-gray-500 pl-10 pr-4 py-2.5 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none font-mono"
              />
              <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-gray-300 font-medium">Password</label>
              {mode === 'signin' && (
                <button
                  type="button"
                  onClick={() => showToast('Password reset link sent to your phone/email.')}
                  className="text-[11px] text-sky-400 hover:underline cursor-pointer"
                >
                  Forgot Password?
                </button>
              )}
            </div>
            <div className="relative">
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-[#11121c] text-white placeholder-gray-500 pl-10 pr-4 py-2.5 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none font-mono"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 stealth-btn-primary rounded-xl font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98 disabled:opacity-50 mt-2"
          >
            {isSubmitting
              ? 'Authenticating...'
              : mode === 'signin'
              ? 'Sign In Now'
              : 'Complete Registration'}
          </button>
        </form>

        {/* Benefits footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-4 text-[11px] text-gray-400 font-mono">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Instant Order Tracking
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Member Coupons
          </span>
        </div>

      </div>
    </div>
  );
};
