import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem, PageRoute, CategoryName, Review } from '../types';
import { ALL_PRODUCTS } from '../data/products';
import { FEATURED_REVIEWS } from '../data/reviews';

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: number[];
  route: PageRoute;
  isCartOpen: boolean;
  isAuthOpen: boolean;
  quickViewProduct: Product | null;
  searchQuery: string;
  activeCategory: CategoryName | 'All';
  selectedCategory: CategoryName | null;
  appliedCoupon: string | null;
  reviews: Review[];
  toastMessage: string | null;
  flyingItem: { url: string; startX: number; startY: number } | null;
  
  // Actions
  navigateTo: (newRoute: PageRoute) => void;
  addToCart: (product: Product, quantity?: number, selectedColor?: string, event?: React.MouseEvent) => void;
  removeFromCart: (productId: number, selectedColor?: string) => void;
  updateCartQuantity: (productId: number, quantity: number, selectedColor?: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  isWishlisted: (productId: number) => boolean;
  setIsCartOpen: (open: boolean) => void;
  setIsAuthOpen: (open: boolean) => void;
  setQuickViewProduct: (product: Product | null) => void;
  setSearchQuery: (query: string) => void;
  setActiveCategory: (cat: CategoryName | 'All') => void;
  setSelectedCategory: (cat: CategoryName | null) => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  showToast: (msg: string) => void;
  addReview: (review: Omit<Review, 'id' | 'date' | 'verifiedPurchase'>) => void;
  
  // Calculated
  cartTotal: number;
  cartCount: number;
  freeShippingThreshold: number;
  freeShippingRemaining: number;
  discountValue: number;
  finalTotal: number;
  formatPKR: (amount: number) => string;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 3000;

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products] = useState<Product[]>(ALL_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('zalleve_cart');
      return saved ? JSON.parse(saved) : [
        // default starter item for rich preview
        { product: ALL_PRODUCTS[1], quantity: 1, selectedColor: 'Obsidian Black' }
      ];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('zalleve_wishlist');
      return saved ? JSON.parse(saved) : [1, 2, 3, 41];
    } catch {
      return [1, 2, 3];
    }
  });

  const [route, setRoute] = useState<PageRoute>({ type: 'home' });
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategoryState] = useState<CategoryName | 'All'>('All');
  const [selectedCategory, setSelectedCategoryState] = useState<CategoryName | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Review[]>(FEATURED_REVIEWS);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [flyingItem, setFlyingItem] = useState<{ url: string; startX: number; startY: number } | null>(null);

  const setSelectedCategory = (cat: CategoryName | null) => {
    setSelectedCategoryState(cat);
    setActiveCategoryState(cat || 'All');
  };

  const setActiveCategory = (cat: CategoryName | 'All') => {
    setActiveCategoryState(cat);
    setSelectedCategoryState(cat === 'All' ? null : cat);
  };

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('zalleve_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('zalleve_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [wishlist]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const navigateTo = (newRoute: PageRoute) => {
    setRoute(newRoute);
    if (newRoute.type === 'shop') {
      if (newRoute.category !== undefined) {
        setSelectedCategory(newRoute.category || null);
      }
      if (newRoute.search !== undefined) {
        setSearchQuery(newRoute.search);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product, quantity = 1, selectedColor?: string, event?: React.MouseEvent) => {
    if (event) {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      setFlyingItem({
        url: product.images[0],
        startX: rect.left + rect.width / 2,
        startY: rect.top + rect.height / 2
      });
      setTimeout(() => setFlyingItem(null), 900);
    }

    setCart(prev => {
      const color = selectedColor || (product.colors && product.colors.length > 0 ? product.colors[0] : undefined);
      const existingIndex = prev.findIndex(item => item.product.id === product.id && item.selectedColor === color);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prev, { product, quantity, selectedColor: color }];
    });

    showToast(`Added "${product.name.slice(0, 30)}..." to your cart! 🛍️`);
  };

  const removeFromCart = (productId: number, selectedColor?: string) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.selectedColor === selectedColor)));
    showToast('Item removed from cart.');
  };

  const updateCartQuantity = (productId: number, quantity: number, selectedColor?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedColor);
      return;
    }
    setCart(prev => prev.map(item => {
      if (item.product.id === productId && item.selectedColor === selectedColor) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from wishlist');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to your wishlist! ❤️');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: number) => wishlist.includes(productId);

  const applyCoupon = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'ZALLEVE10' || clean === 'WELCOME10' || clean === 'EID2026' || clean === 'FLASH500') {
      setAppliedCoupon(clean);
      showToast(`Coupon "${clean}" applied successfully! 🎉`);
      return true;
    }
    showToast('Invalid coupon code. Try "ZALLEVE10" for 10% OFF!');
    return false;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed');
  };

  const addReview = (newRev: Omit<Review, 'id' | 'date' | 'verifiedPurchase'>) => {
    const reviewObj: Review = {
      ...newRev,
      id: `rev-${Date.now()}`,
      date: 'Just now',
      verifiedPurchase: true
    };
    setReviews(prev => [reviewObj, ...prev]);
    showToast('Thank you! Your verified review has been published ⭐');
  };

  // Calculations
  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);

  let discountValue = 0;
  if (appliedCoupon === 'ZALLEVE10' || appliedCoupon === 'WELCOME10') {
    discountValue = Math.round(cartTotal * 0.10);
  } else if (appliedCoupon === 'FLASH500') {
    discountValue = Math.min(500, cartTotal);
  } else if (appliedCoupon === 'EID2026') {
    discountValue = Math.round(cartTotal * 0.15);
  }

  const shippingFee = cartTotal >= FREE_SHIPPING_THRESHOLD || cartTotal === 0 ? 0 : 250;
  const finalTotal = Math.max(0, cartTotal - discountValue + shippingFee);

  const formatPKR = (amount: number) => {
    return `PKR ${amount.toLocaleString('en-PK')}`;
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        wishlist,
        route,
        isCartOpen,
        isAuthOpen,
        quickViewProduct,
        searchQuery,
        activeCategory,
        selectedCategory,
        appliedCoupon,
        reviews,
        toastMessage,
        flyingItem,
        navigateTo,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        isWishlisted: isInWishlist,
        setIsCartOpen,
        setIsAuthOpen,
        setQuickViewProduct,
        setSearchQuery,
        setActiveCategory,
        setSelectedCategory,
        applyCoupon,
        removeCoupon,
        showToast,
        addReview,
        cartTotal,
        cartCount,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        freeShippingRemaining,
        discountValue,
        finalTotal,
        formatPKR
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
