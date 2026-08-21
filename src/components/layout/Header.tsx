import React, { useState, useEffect, useRef } from 'react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES_DATA } from '../../data/categories';
import { CategoryName } from '../../types';
import { ZalleveLogo } from '../common/ZalleveLogo';
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
  Phone
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    cartCount,
    wishlist,
    setIsCartOpen,
    navigateTo,
    route,
    products,
    formatPKR,
    cartTotal
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileNavOpen]);

  // Focus search input when toggled
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const searchResults = localSearch.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(localSearch.toLowerCase()) ||
        p.category.toLowerCase().includes(localSearch.toLowerCase())
      ).slice(0, 6)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      navigateTo({ type: 'shop', search: localSearch.trim() });
      setIsSearchOpen(false);
      setIsMobileNavOpen(false);
    }
  };

  const handleSelectCategory = (cat: CategoryName) => {
    navigateTo({ type: 'shop', category: cat });
    setIsMobileNavOpen(false);
  };

  return (
    <>
      <header
        id="main-site-header"
        className={`sticky top-0 z-40 w-full max-w-full overflow-x-hidden transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050508]/95 backdrop-blur-xl border-b border-white/10 py-2.5 sm:py-3 shadow-xl'
            : 'bg-[#06070a]/90 backdrop-blur-lg border-b border-white/5 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Left: Brand Atelier Logo */}
            <div className="flex items-center shrink-0 min-w-0">
              <button
                id="brand-logo-button"
                onClick={() => navigateTo({ type: 'home' })}
                className="cursor-pointer group select-none text-left"
              >
                <ZalleveLogo size="md" showSubtitle={true} variant="silver" />
              </button>
            </div>

            {/* Center: Refined Editorial Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
              <button
                id="nav-home-btn"
                onClick={() => navigateTo({ type: 'home' })}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all rounded-full cursor-pointer ${
                  route.type === 'home'
                    ? 'text-white bg-white/10 border border-white/15'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </button>

              <button
                id="nav-collections-btn"
                onClick={() => navigateTo({ type: 'shop' })}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all rounded-full cursor-pointer ${
                  route.type === 'shop'
                    ? 'text-white bg-white/10 border border-white/15'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Collections
              </button>

              <button
                id="nav-about-btn"
                onClick={() => navigateTo({ type: 'about' })}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all rounded-full cursor-pointer ${
                  route.type === 'about'
                    ? 'text-white bg-white/10 border border-white/15'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                About Us
              </button>

              <button
                id="nav-contact-btn"
                onClick={() => navigateTo({ type: 'contact' })}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all rounded-full cursor-pointer ${
                  route.type === 'contact'
                    ? 'text-white bg-white/10 border border-white/15'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Right: Search, Wishlist, Cart & Mobile Menu */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              
              {/* Search Trigger Button */}
              <button
                id="header-search-toggle-btn"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all cursor-pointer"
                title="Search gadgets"
                aria-label="Search catalog"
              >
                <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Wishlist Button */}
              <button
                id="header-wishlist-btn"
                onClick={() => navigateTo({ type: 'wishlist' })}
                className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all cursor-pointer"
                title="Saved Wishlist"
                aria-label="View wishlist"
              >
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white text-black text-[8px] sm:text-[9px] font-bold flex items-center justify-center shadow-md">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                id="header-cart-btn"
                onClick={() => setIsCartOpen(true)}
                className="flex items-center gap-1.5 px-2.5 sm:px-4 py-1.5 rounded-full bg-white text-black hover:bg-slate-200 transition-all font-medium text-xs cursor-pointer shadow-lg shadow-white/5"
                title="Open Shopping Bag"
                aria-label="Open cart drawer"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-black" />
                <span className="hidden sm:inline font-bold">Bag</span>
                <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] font-mono flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              </button>

              {/* Mobile Right-Side Hamburger */}
              <button
                id="mobile-nav-toggle-btn"
                onClick={() => setIsMobileNavOpen(true)}
                className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all cursor-pointer"
                aria-label="Open mobile navigation"
              >
                <Menu className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

        {/* Expandable Live Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-[#080912]/98 backdrop-blur-2xl border-b border-white/15 p-4 sm:p-6 shadow-2xl z-50 animate-in fade-in duration-150">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3.5" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search over-ear headphones, AMOLED watches, GaN fast chargers..."
                  value={localSearch}
                  onChange={e => setLocalSearch(e.target.value)}
                  className="w-full bg-[#121422] text-xs sm:text-sm text-white placeholder-gray-500 pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 rounded-2xl border border-white/15 focus:border-white/40 focus:outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3.5 text-gray-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </form>

              {/* Instant Search Results */}
              {localSearch.trim() && (
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Found {searchResults.length} matching products:
                  </div>
                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                      {searchResults.map(p => (
                        <div
                          key={p.id}
                          onClick={() => {
                            navigateTo({ type: 'product', slug: p.slug });
                            setIsSearchOpen(false);
                          }}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors cursor-pointer"
                        >
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-12 h-12 rounded-lg object-cover bg-black border border-white/10"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-medium text-white truncate">{p.name}</div>
                            <div className="text-[11px] text-gray-400 font-mono">{formatPKR(p.price)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-xs text-gray-500 py-3 text-center">
                      No gadgets found matching "{localSearch}".
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Modern Slide-Over Mobile Drawer */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileNavOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-xs sm:max-w-sm bg-[#080911] border-l border-white/15 h-full flex flex-col z-10 shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10">
              <ZalleveLogo size="sm" showSubtitle={true} variant="silver" />
              <button
                onClick={() => setIsMobileNavOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 text-gray-400 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Drawer Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
              
              {/* Mobile Search Input */}
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search gadgets..."
                    value={localSearch}
                    onChange={e => setLocalSearch(e.target.value)}
                    className="w-full bg-[#121422] text-xs text-white placeholder-gray-500 pl-9 pr-4 py-2.5 rounded-xl border border-white/10 focus:outline-none"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                </div>
              </form>

              {/* Main Nav Links */}
              <div className="space-y-1">
                <button
                  onClick={() => {
                    navigateTo({ type: 'home' });
                    setIsMobileNavOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>

                <button
                  onClick={() => {
                    navigateTo({ type: 'shop' });
                    setIsMobileNavOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>All Collections ({products.length})</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>

                <button
                  onClick={() => {
                    navigateTo({ type: 'about' });
                    setIsMobileNavOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>About Us</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>

                <button
                  onClick={() => {
                    navigateTo({ type: 'contact' });
                    setIsMobileNavOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>Contact</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Mobile Categories Accordion List */}
              <div className="pt-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-3 px-1">
                  Explore by Category
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {CATEGORIES_DATA.map(cat => (
                    <button
                      key={cat.name}
                      onClick={() => handleSelectCategory(cat.name)}
                      className="flex items-center gap-2 p-2 rounded-xl bg-[#10121d] border border-white/5 hover:border-white/15 text-left transition-colors"
                    >
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg object-cover shrink-0"
                      />
                      <span className="text-xs text-gray-300 font-medium truncate">{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Quick Action Buttons: Wishlist & Bag */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <button
                  onClick={() => {
                    navigateTo({ type: 'wishlist' });
                    setIsMobileNavOpen(false);
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-slate-300" />
                    <span>My Wishlist</span>
                  </div>
                  <span className="font-mono text-gray-400">{wishlist.length}</span>
                </button>

                <button
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsMobileNavOpen(false);
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white text-black text-xs font-medium"
                >
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    <span>View Shopping Bag</span>
                  </div>
                  <span className="font-mono font-bold">{formatPKR(cartTotal)}</span>
                </button>
              </div>

              {/* WhatsApp Concierge direct callout */}
              <a
                href="https://wa.me/923222683373?text=Hi%20Zalleve,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noreferrer"
                className="block p-3 sm:p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center"
              >
                <div className="text-xs font-medium text-emerald-400 flex items-center justify-center gap-1.5">
                  <Phone className="w-3 h-3.5" />
                  <span>WhatsApp: +92 322 2683373</span>
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">
                  Instant response for orders & product assistance
                </div>
              </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
};
