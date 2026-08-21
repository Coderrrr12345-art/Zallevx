import { CategoryName } from '../types';

export interface CategoryInfo {
  name: CategoryName;
  slug: string;
  count: number;
  icon: string;
  image: string;
  tagline: string;
  gradient: string;
}

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    name: 'Headphones',
    slug: 'headphones',
    count: 4,
    icon: 'Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    tagline: 'Over-ear Hi-Fi studio acoustics with deep bass',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'Buds',
    slug: 'buds',
    count: 4,
    icon: 'Headphones',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80',
    tagline: 'ANC, ENC & smart LCD touchscreen earbuds',
    gradient: 'from-purple-600 to-indigo-600'
  },
  {
    name: 'Smart Watches',
    slug: 'smart-watches',
    count: 4,
    icon: 'Watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    tagline: 'AMOLED displays & luxury titanium straps',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    name: 'Portable Speakers',
    slug: 'portable-speakers',
    count: 4,
    icon: 'Speaker',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80',
    tagline: 'Heavy bass, 360 RGB lights & Karaoke mics',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'Fast Chargers',
    slug: 'fast-chargers',
    count: 4,
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80',
    tagline: '65W GaN III chargers & 3-in-1 MagSafe stations',
    gradient: 'from-yellow-500 to-amber-600'
  },
  {
    name: 'Microphones',
    slug: 'microphones',
    count: 4,
    icon: 'Mic',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop&q=80',
    tagline: 'Wireless lapel mics for TikTok & Studio USB',
    gradient: 'from-violet-600 to-pink-500'
  },
  {
    name: 'Tripods',
    slug: 'tripods',
    count: 4,
    icon: 'Camera',
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=80',
    tagline: 'Heavy duty 2.1M metal stands & 360° gimbals',
    gradient: 'from-slate-600 to-zinc-500'
  },
  {
    name: 'Handsfree',
    slug: 'handsfree',
    count: 4,
    icon: 'Volume2',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80',
    tagline: 'BOGO wired stereo & Type-C DAC earphones',
    gradient: 'from-teal-600 to-emerald-600'
  },
  {
    name: 'Neckband',
    slug: 'neckband',
    count: 4,
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
    tagline: 'Magnetic silicone flexible 60H sports audio',
    gradient: 'from-fuchsia-600 to-purple-600'
  },
  {
    name: 'Smart Gadgets',
    slug: 'smart-gadgets',
    count: 4,
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80',
    tagline: 'GPS trackers, ultrasonic cleaners & music lamps',
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    name: 'Deals',
    slug: 'deals',
    count: 4,
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80',
    tagline: '7-in-1 mega combos & Duo audio value packs',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    name: 'Daily Offers',
    slug: 'daily-offers',
    count: 4,
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80',
    tagline: 'Up to 40% off limited daily midnight deals',
    gradient: 'from-amber-500 to-rose-500'
  }
];
