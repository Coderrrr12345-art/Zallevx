/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { Footer } from './components/layout/Footer';
import { QuickViewModal } from './components/product/QuickViewModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { AuthModal } from './components/auth/AuthModal';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { FlyingCartItem } from './components/common/FlyingCartItem';
import { CustomCursor } from './components/common/CustomCursor';

// Views
import { HomePage } from './views/HomePage';
import { ShopPage } from './views/ShopPage';
import { ProductDetailPage } from './views/ProductDetailPage';
import { CartPage } from './views/CartPage';
import { CheckoutPage } from './views/CheckoutPage';
import { WishlistPage } from './views/WishlistPage';
import { AboutPage } from './views/AboutPage';
import { ContactPage } from './views/ContactPage';
import { PolicyPages } from './views/PolicyPages';

const MainLayout: React.FC = () => {
  const { route } = useShop();

  // Scroll to top upon page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  const renderCurrentView = () => {
    switch (route.type) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'product':
        return <ProductDetailPage slug={route.slug || ''} />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'refund-returns':
        return <PolicyPages initialTab="refund" />;
      case 'privacy-policy':
        return <PolicyPages initialTab="privacy" />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#040406] text-white flex flex-col font-sans selection:bg-white selection:text-black relative overflow-x-hidden w-full max-w-full">
      {/* 0. Editorial Follower Cursor for Desktop */}
      <CustomCursor />

      {/* 1. Infinite Announcement Marquee */}
      <AnnouncementBar />

      {/* 2. Glassmorphism Sticky Header */}
      <Header />

      {/* 3. Main Active View with smooth layout */}
      <main className="flex-1 w-full max-w-full relative overflow-x-hidden">
        {renderCurrentView()}
      </main>

      {/* 4. Global Footer */}
      <Footer />

      {/* 5. Mobile Fixed Bottom Navigation Bar */}
      <MobileBottomNav />

      {/* 6. Quick View Inspection Modal */}
      <QuickViewModal />

      {/* 7. Slide-In Cart Drawer */}
      <CartDrawer />

      {/* 8. Authentication Sign In / Sign Up Modal */}
      <AuthModal />

      {/* 9. Floating WhatsApp 24/7 Action */}
      <FloatingWhatsApp />

      {/* 10. Flying Cart Micro-Animation Element */}
      <FlyingCartItem />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainLayout />
    </ShopProvider>
  );
}
