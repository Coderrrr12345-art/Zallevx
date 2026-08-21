export type CategoryName =
  | 'Daily Offers'
  | 'Buds'
  | 'Smart Watches'
  | 'Tripods'
  | 'Fast Chargers'
  | 'Microphones'
  | 'Handsfree'
  | 'Headphones'
  | 'Portable Speakers'
  | 'Neckband'
  | 'Deals'
  | 'Smart Gadgets'
  | (string & {});

export interface Product {
  id: number;
  name: string;
  category: CategoryName;
  price: number;
  originalPrice: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  sold: number;
  soldDays: number;
  badge?: string;
  slug: string;
  images: string[];
  description: string;
  features?: string[];
  specs?: Record<string, string> | string[];
  inStock: boolean;
  colors?: string[];
  isFeatured?: boolean;
  isFlashDeal?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface Review {
  id: string;
  productId?: number;
  author: string;
  city: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  avatar?: string;
}

export interface UserAddress {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  province: string;
  postalCode?: string;
  orderNotes?: string;
  paymentMethod: 'COD' | 'ONLINE' | 'EASYPAISA' | 'JAZZCASH';
}

export type PageRoute =
  | { type: 'home' }
  | { type: 'shop'; category?: CategoryName; search?: string }
  | { type: 'product'; slug: string }
  | { type: 'cart' }
  | { type: 'checkout' }
  | { type: 'wishlist' }
  | { type: 'about' }
  | { type: 'contact' }
  | { type: 'refund-returns' }
  | { type: 'privacy-policy' }
  | { type: 'order-success'; orderId: string };
