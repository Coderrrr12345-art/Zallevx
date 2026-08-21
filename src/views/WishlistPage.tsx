import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/product/ProductCard';
import { Heart, ArrowRight } from 'lucide-react';

export const WishlistPage: React.FC = () => {
  const { products, wishlist, clearWishlist, navigateTo } = useShop();

  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div id="wishlist-view" className="py-10 bg-[#040406] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8 pb-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest font-mono mb-1">
              SAVED ITEMS
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white font-heading">
              Your Wishlist ({wishlistedProducts.length})
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Gadgets you have saved for quick ordering or price watch.
            </p>
          </div>

          {wishlistedProducts.length > 0 && (
            <button
              onClick={clearWishlist}
              className="text-xs text-rose-400 hover:text-rose-300 font-semibold cursor-pointer"
            >
              Clear All Saved
            </button>
          )}
        </div>

        {wishlistedProducts.length === 0 ? (
          <div className="py-20 bg-[#090a10] border border-white/10 rounded-3xl text-center max-w-md mx-auto p-8 space-y-4 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-white/5 text-gray-400 mx-auto flex items-center justify-center">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading">Your Wishlist is Empty</h3>
            <p className="text-xs text-gray-400">
              Tap the heart icon on any gadget to save it here for later.
            </p>
            <button
              onClick={() => navigateTo({ type: 'shop' })}
              className="px-6 py-2.5 stealth-btn-primary rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer"
            >
              Browse Gadgets
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {wishlistedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
