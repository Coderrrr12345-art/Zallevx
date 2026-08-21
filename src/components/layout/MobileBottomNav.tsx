import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Home, Grid, ShoppingBag, Heart, User } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { route, navigateTo, cartCount, wishlist, setIsCartOpen, setIsAuthOpen } = useShop();

  return (
    <nav
      id="mobile-fixed-bottom-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0d14]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2 flex items-center justify-around shadow-2xl"
    >
      <button
        id="mobile-bottom-home"
        onClick={() => navigateTo({ type: 'home' })}
        className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-colors ${
          route.type === 'home' ? 'text-cyan-400' : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-medium mt-1">Home</span>
      </button>

      <button
        id="mobile-bottom-shop"
        onClick={() => navigateTo({ type: 'shop' })}
        className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-colors ${
          route.type === 'shop' ? 'text-cyan-400' : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        <Grid className="w-5 h-5" />
        <span className="text-[10px] font-medium mt-1">Shop</span>
      </button>

      {/* Cart with glowing badge */}
      <button
        id="mobile-bottom-cart"
        onClick={() => setIsCartOpen(true)}
        className="flex flex-col items-center justify-center py-1 px-3 rounded-lg text-gray-400 hover:text-gray-200 relative"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-gradient-to-r from-purple-500 to-cyan-400 text-gray-950 text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
              {cartCount}
            </span>
          )}
        </div>
        <span className="text-[10px] font-medium mt-1">Cart</span>
      </button>

      <button
        id="mobile-bottom-wishlist"
        onClick={() => navigateTo({ type: 'wishlist' })}
        className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-colors relative ${
          route.type === 'wishlist' ? 'text-rose-400' : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        <div className="relative">
          <Heart className="w-5 h-5" />
          {wishlist.length > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </div>
        <span className="text-[10px] font-medium mt-1">Saved</span>
      </button>

      <button
        id="mobile-bottom-account"
        onClick={() => setIsAuthOpen(true)}
        className="flex flex-col items-center justify-center py-1 px-3 rounded-lg text-gray-400 hover:text-gray-200"
      >
        <User className="w-5 h-5" />
        <span className="text-[10px] font-medium mt-1">Account</span>
      </button>
    </nav>
  );
};
