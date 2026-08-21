import { Product } from '../types';

export const ALL_PRODUCTS: Product[] = [
  // ==========================================
  // 1. HEADPHONES (4 Products)
  // ==========================================
  {
    id: 1,
    name: "P9 Pro Max Wireless Over-Ear Headphones: Hi-Fi Stereo & Deep Bass",
    category: "Headphones",
    price: 1899,
    originalPrice: 2499,
    discountPercent: 24,
    reviewCount: 48,
    rating: 4.9,
    sold: 142,
    soldDays: 2,
    badge: "Bestseller",
    slug: "p9-pro-max-wireless-over-ear-headphones",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Studio-grade acoustic isolation with the P9 Pro Max. Featuring high-density memory foam ear cushions, 40mm titanium dynamic drivers, and active noise-dampening design for immersive music and gaming.",
    features: [
      "Hi-Fi Spatial Audio with deep dynamic bass",
      "Soft breathable mesh earcups with memory foam",
      "Bluetooth 5.3 + 3.5mm Aux Dual-Mode",
      "Up to 24 Hours continuous playback",
      "Built-in HD clear microphone for calls"
    ],
    specs: {
      "Driver Size": "40mm Neodymium",
      "Battery Life": "24 Hours (500mAh)",
      "Charging Time": "1.5 Hours Type-C",
      "Bluetooth Range": "12 Meters",
      "Weight": "240g"
    },
    colors: ["Space Black", "Silver Frost", "Sky Blue", "Rose Gold"],
    inStock: true,
    isFeatured: true,
    isFlashDeal: true
  },
  {
    id: 2,
    name: "Studio 300 Pro Wireless ANC Noise Cancelling Studio Headset",
    category: "Headphones",
    price: 2699,
    originalPrice: 3500,
    discountPercent: 23,
    reviewCount: 32,
    rating: 4.8,
    sold: 89,
    soldDays: 4,
    badge: "Studio Grade",
    slug: "studio-300-pro-wireless-anc-headset",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Engineered for audiophiles and sound engineers. Featuring hybrid Active Noise Cancellation (-35dB), 50mm beryllium drivers, and up to 40 hours of playtime with ultra-low latency gaming mode.",
    features: [
      "Hybrid Active Noise Cancellation (-35dB)",
      "50mm Beryllium acoustic drivers",
      "Ultra-soft protein leather ear cushions",
      "40 Hours ultra-long battery life",
      "Foldable travel swivel design"
    ],
    specs: {
      "Driver": "50mm Beryllium",
      "ANC Depth": "-35dB Hybrid",
      "Battery": "40 Hours Playtime",
      "Interface": "Type-C + 3.5mm Aux",
      "Weight": "260g"
    },
    colors: ["Midnight Obsidian", "Arctic White", "Gunmetal Grey"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 3,
    name: "CyberBeats RGB Wireless Gaming Headset with Detachable Mic",
    category: "Headphones",
    price: 2199,
    originalPrice: 2899,
    discountPercent: 24,
    reviewCount: 29,
    rating: 4.7,
    sold: 110,
    soldDays: 3,
    badge: "Gaming RGB",
    slug: "cyberbeats-rgb-wireless-gaming-headset",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Designed for competitive esports with 7.1 Virtual Surround Sound, low-latency 2.4GHz + Bluetooth dual mode, 360-degree flexible noise-filtering mic, and customizable RGB lighting rings.",
    features: [
      "7.1 3D Spatial Surround Sound",
      "Detachable cardioid noise-canceling mic",
      "Dynamic Breathing RGB illumination",
      "28ms Ultra-low gaming latency",
      "Cross-platform: PC, Mobile, PS5, Xbox"
    ],
    specs: {
      "Surround": "7.1 Virtual 3D Audio",
      "Latency": "28ms Gaming Mode",
      "Battery": "30 Hours (RGB Off)",
      "Connector": "Type-C Fast Charge"
    },
    colors: ["Cyber Black", "Neon White"],
    inStock: true
  },
  {
    id: 4,
    name: "AeroFold Lightweight Wireless Hi-Res Headphones with EQ Modes",
    category: "Headphones",
    price: 1599,
    originalPrice: 2200,
    discountPercent: 27,
    reviewCount: 19,
    rating: 4.6,
    sold: 76,
    soldDays: 5,
    badge: "Value Deal",
    slug: "aerofold-lightweight-wireless-headphones",
    images: [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Featherlight travel headphones weighing only 180g. Features 3 physical EQ presets (Bass Boost, Vocal Clarity, Studio Flat), built-in FM radio, micro-SD slot, and handsfree phone controls.",
    features: [
      "Triple Equalizer Switch (Bass / Vocal / Flat)",
      "Featherlight 180g ergonomic foldable frame",
      "Multi-input: Bluetooth, MicroSD & Aux",
      "18 Hours continuous battery life"
    ],
    specs: {
      "Weight": "180g Ultra-light",
      "Battery": "18 Hours Playback",
      "Drivers": "36mm Dynamic HD",
      "Bluetooth": "v5.2"
    },
    colors: ["Charcoal", "Matte Beige", "Navy Blue"],
    inStock: true
  },

  // ==========================================
  // 2. BUDS (4 Products)
  // ==========================================
  {
    id: 5,
    name: "A9 Pro Smart LCD Screen Wireless Earbuds: ANC/ENC Touch Control",
    category: "Buds",
    price: 2499,
    originalPrice: 3899,
    discountPercent: 36,
    reviewCount: 74,
    rating: 4.9,
    sold: 215,
    soldDays: 1,
    badge: "Top Rated",
    slug: "a9-pro-wireless-earbuds-anc-touch-screen",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "The groundbreaking A9 Pro features a full-color LCD interactive touchscreen smart charging case. Control wallpaper, music playback, ANC noise cancellation modes, timer, and find-my-earbuds directly from the case.",
    features: [
      "Interactive Smart LCD Touch Screen Charging Case",
      "Active Noise Cancellation (ANC) up to -35dB",
      "Quad-Mic ENC crystal clear phone calls",
      "Equalizer sound profile controls on LCD",
      "Touch screen wallpaper customization"
    ],
    specs: {
      "Display": "1.47-inch Full Color OLED",
      "ANC Depth": "35dB Active Cancellation",
      "Playback Time": "38 Hours with Case",
      "Water Resistance": "IPX5 Sweat Proof",
      "Connectivity": "Bluetooth 5.4 Low Latency"
    },
    colors: ["Obsidian Black", "Pure White"],
    inStock: true,
    isFeatured: true,
    isFlashDeal: true
  },
  {
    id: 6,
    name: "AirPods Pro 2nd Gen TWS with Spatial Audio & Transparency Mode",
    category: "Buds",
    price: 1999,
    originalPrice: 2899,
    discountPercent: 31,
    reviewCount: 56,
    rating: 4.8,
    sold: 180,
    soldDays: 2,
    badge: "Hot Sale",
    slug: "airpods-pro-2-tws-spatial-audio",
    images: [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    ],
    description: "High-precision acoustic reproduction with Adaptive EQ, MagSafe wireless charging case, dynamic head tracking spatial audio, and silicon tips for comfortable noise sealing.",
    features: [
      "Spatial Audio with dynamic head tracking",
      "Adaptive Transparency & Noise Isolation",
      "Touch slide volume adjustment on stems",
      "MagSafe Wireless + Type-C charging case"
    ],
    specs: {
      "Battery": "30 Hours total with Case",
      "Charging": "MagSafe Wireless & Type-C",
      "Bluetooth": "5.3 Instant Auto-Pair"
    },
    colors: ["Gloss White"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 7,
    name: "M90 Pro TWS Gaming Earbuds with Digital Power Display & Powerbank",
    category: "Buds",
    price: 1499,
    originalPrice: 1999,
    discountPercent: 25,
    reviewCount: 38,
    rating: 4.7,
    sold: 160,
    soldDays: 3,
    badge: "Powerbank Case",
    slug: "m90-pro-tws-gaming-earbuds-digital-display",
    images: [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Rugged slider magnetic gaming case with built-in 2000mAh emergency emergency powerbank, LED battery percentage readout for each earbud, and 45ms low latency gaming mode.",
    features: [
      "2000mAh Heavy Duty Emergency Powerbank Case",
      "Dual LED Battery Percentage Display",
      "45ms Low Latency Game/Music Dual Modes",
      "9D Heavy Bass Graphene Diaphragm"
    ],
    specs: {
      "Case Battery": "2000mAh USB Output",
      "Playtime": "5 Hours / 60 Hours with Case",
      "Waterproof": "IPX7 Waterproof"
    },
    colors: ["Cyber Black"],
    inStock: true
  },
  {
    id: 8,
    name: "Air31 Transparent Cyberpunk Crystal TWS with LED Battery Indicator",
    category: "Buds",
    price: 1299,
    originalPrice: 1799,
    discountPercent: 28,
    reviewCount: 42,
    rating: 4.6,
    sold: 130,
    soldDays: 2,
    badge: "Trending",
    slug: "air31-transparent-crystal-tws-earbuds",
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Futuristic transparent see-through case with glowing digital LED battery monitor, crystal clear vocal tuning, fast charging, and pocket-sized ergonomic capsule.",
    features: [
      "Aesthetic Transparent Acrylic Chassis",
      "Smart LED Dual Battery Level Screen",
      "Hi-Res ENC clear call filtering",
      "Compact mini pocket capsule"
    ],
    specs: {
      "Driver": "13mm Dynamic Copper Ring",
      "Battery": "20 Hours Playtime",
      "Charging": "Fast Type-C (10m charge = 1.5h play)"
    },
    colors: ["Neon Green", "Crystal Black", "Sky Blue", "Pastel Pink"],
    inStock: true
  },

  // ==========================================
  // 3. SMART WATCHES (4 Products)
  // ==========================================
  {
    id: 9,
    name: "Ultra 2 Smartwatch 49mm Titanium Case with AMOLED Display & Compass",
    category: "Smart Watches",
    price: 2999,
    originalPrice: 4200,
    discountPercent: 29,
    reviewCount: 65,
    rating: 4.9,
    sold: 195,
    soldDays: 2,
    badge: "Flagship",
    slug: "ultra-2-smartwatch-49mm-titanium-amoled",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Aircraft-grade titanium finish 49mm smartwatch with 2.12-inch Always-On AMOLED screen, precise magnetic compass, Bluetooth calling speaker, ECG/heart rate tracking, and orange ocean strap.",
    features: [
      "2.12-inch Always-On True AMOLED Retina Display",
      "Real-time GPS Trail Route & Live Compass",
      "HD Bluetooth calling, dial pad & contact sync",
      "Multi-Sport Tracking: Running, Cycling, Hiking",
      "IP68 Waterproof and shock-resistant alloy body"
    ],
    specs: {
      "Display": "2.12\" AMOLED (485x520 Res)",
      "Body": "49mm Titanium Alloy",
      "Battery": "5-7 Days Standard Usage",
      "Charging": "Wireless Magnetic Dock",
      "Sensors": "Heart Rate, SpO2, Sleep, Blood Oxygen"
    },
    colors: ["Titanium Silver / Orange Strap", "Titanium Silver / Black Ocean", "Titanium Silver / Trail Loop"],
    inStock: true,
    isFeatured: true,
    isFlashDeal: true
  },
  {
    id: 10,
    name: "T800 Ultra Smart Watch with Bluetooth Calling & Fitness Tracker",
    category: "Smart Watches",
    price: 1599,
    originalPrice: 2200,
    discountPercent: 27,
    reviewCount: 88,
    rating: 4.8,
    sold: 310,
    soldDays: 1,
    badge: "Top Seller",
    slug: "t800-ultra-smart-watch-bluetooth-calling",
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Pakistan's most popular daily smartwatch. Features 1.99-inch Infinite HD screen, crystal clear Bluetooth calling, sleep tracking, customizable watch faces, and wireless charging pad.",
    features: [
      "1.99\" Infinite HD display with zero bezels",
      "Full Bluetooth call dialing & notifications",
      "Over 500+ free downloadable watch faces",
      "Wireless magnetic fast charging dock"
    ],
    specs: {
      "Screen": "1.99\" HD IPS Screen",
      "Battery": "3 Days Usage / 7 Days Standby",
      "Water Resistance": "IP67 Splash Proof"
    },
    colors: ["Orange Silicone", "Midnight Black", "Frost Silver", "Soft Yellow"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 11,
    name: "Series 9 Luxury Stainless Steel Smartwatch with AMOLED Display",
    category: "Smart Watches",
    price: 2799,
    originalPrice: 3800,
    discountPercent: 26,
    reviewCount: 37,
    rating: 4.8,
    badge: "Executive",
    sold: 92,
    soldDays: 3,
    slug: "series-9-luxury-stainless-steel-smartwatch",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Sleek 45mm curved edge smartwatch with brushed stainless steel finish, metallic Milanese magnetic strap, gesture control, Siri/Google voice assistant, and animated dynamic widgets.",
    features: [
      "Curved 3D Glass edge-to-edge AMOLED display",
      "Double-tap wrist gesture call answer",
      "Metallic Milanese Loop magnetic strap",
      "Smart Dynamic Island alert banner"
    ],
    specs: {
      "Size": "45mm Curved Alloy",
      "Battery": "4 Days Normal Use",
      "Strap": "Interchangeable 22mm Bands"
    },
    colors: ["Space Black Steel", "Silver Chrome", "Rose Gold Steel"],
    inStock: true
  },
  {
    id: 12,
    name: "FitPro Active Health & Fitness Tracker Band with Heart Rate",
    category: "Smart Watches",
    price: 1199,
    originalPrice: 1699,
    discountPercent: 29,
    reviewCount: 24,
    rating: 4.6,
    sold: 85,
    soldDays: 4,
    badge: "Fitness Band",
    slug: "fitpro-active-health-fitness-tracker-band",
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Lightweight silicone fitness tracker band for runners and gym enthusiasts. Continuous heart rate, calorie burn, step counter, blood oxygen monitor, and USB direct charging plug.",
    features: [
      "0.96\" Color OLED activity monitor",
      "Direct USB plug-in charging (no cables needed)",
      "Daily steps, calories, distance tracker",
      "Sedentary alarm & call/SMS vibration notifications"
    ],
    specs: {
      "Weight": "22g Ultra-lightweight",
      "Battery": "7-10 Days Battery Life",
      "Waterproof": "IP67 Waterproof"
    },
    colors: ["Jet Black", "Navy Blue", "Crimson Red"],
    inStock: true
  },

  // ==========================================
  // 4. PORTABLE SPEAKERS (4 Products)
  // ==========================================
  {
    id: 13,
    name: "Pulse 5 360° Ambient RGB Wireless Bluetooth Boombox Speaker",
    category: "Portable Speakers",
    price: 2799,
    originalPrice: 3800,
    discountPercent: 26,
    reviewCount: 45,
    rating: 4.9,
    sold: 120,
    soldDays: 2,
    badge: "360 RGB",
    slug: "pulse-5-360-rgb-wireless-bluetooth-speaker",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Eye-catching full-body 360-degree LED lightshow that pulses in rhythm with your music. Delivers deep punchy bass via passive bass radiators and crisp 20W acoustic output.",
    features: [
      "Full-body synchronized 360-degree RGB LED light themes",
      "20W Heavy Bass acoustic output with twin radiators",
      "TWS Dual-Speaker Wireless Party Pairing",
      "IPX7 Waterproof outdoor certified chassis",
      "Up to 12 Hours continuous music playback"
    ],
    specs: {
      "Output": "20W RMS High Output",
      "Battery": "4000mAh (12 Hours)",
      "Lighting": "7 RGB Dynamic Light Modes",
      "Inputs": "Bluetooth 5.3, Aux, MicroSD, USB"
    },
    colors: ["Obsidian Black", "Crystal Frost"],
    inStock: true,
    isFeatured: true,
    isFlashDeal: true
  },
  {
    id: 14,
    name: "BoomBox Mini Rugged Waterproof Outdoor Bluetooth Speaker with Strap",
    category: "Portable Speakers",
    price: 1999,
    originalPrice: 2700,
    discountPercent: 26,
    reviewCount: 31,
    rating: 4.8,
    sold: 95,
    soldDays: 3,
    badge: "Heavy Bass",
    slug: "boombox-mini-rugged-waterproof-speaker",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Compact boombox speaker with built-in woven carry strap, dual passive bass subwoofers, FM radio tuner, USB flash drive playback, and drop-resistant shockproof casing.",
    features: [
      "Dual Subwoofer Heavy Bass radiators",
      "Reinforced woven shoulder carry strap",
      "Multi-mode: Bluetooth, FM, USB & Aux",
      "Shockproof rubberized bumper edges"
    ],
    specs: {
      "Power": "16W Stereo Sound",
      "Battery": "2600mAh (8-10 Hours)",
      "Protection": "IPX6 Water-Resistant"
    },
    colors: ["Tactical Camo", "Stealth Black", "Ocean Blue"],
    inStock: true
  },
  {
    id: 15,
    name: "K12 Karaoke Wireless RGB Speaker with 2 Wireless Microphones",
    category: "Portable Speakers",
    price: 2499,
    originalPrice: 3500,
    discountPercent: 28,
    reviewCount: 52,
    rating: 4.9,
    sold: 175,
    soldDays: 1,
    badge: "2x Mics Included",
    slug: "k12-karaoke-wireless-speaker-2-microphones",
    images: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
    ],
    description: "The viral family party sensation! Includes mini portable acoustic speaker with handle and 2 wireless karaoke microphones with 5 magical voice changing sound effects.",
    features: [
      "2 Included Wireless Karaoke Microphones",
      "5 Magic Voice Effects (Monster, Baby, Female, Male, Echo)",
      "Dynamic RGB Ambient lighting ring",
      "Built-in leatherette travel handle"
    ],
    specs: {
      "Mics Included": "2x Rechargeable Wireless Mics",
      "Battery": "6-8 Hours Playtime",
      "Controls": "Echo & Reverb adjustments"
    },
    colors: ["Pastel Pink", "Beige Cream", "Ice Blue"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 16,
    name: "Clip 4 Ultra-Portable Carabiner Bluetooth Speaker",
    category: "Portable Speakers",
    price: 1499,
    originalPrice: 1999,
    discountPercent: 25,
    reviewCount: 22,
    rating: 4.7,
    sold: 70,
    soldDays: 4,
    badge: "Pocket Size",
    slug: "clip-4-ultra-portable-carabiner-speaker",
    images: [
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Hook it on your backpack or bicycle! Features integrated heavy-duty alloy carabiner, fabric grille, dustproof IP67 construction, and surprisingly loud punchy acoustics.",
    features: [
      "Integrated Alloy Carabiner Hook",
      "Rugged dust & waterproof IP67 rating",
      "Rich Original Pro sound in pocket dimensions",
      "10 Hours battery life on single charge"
    ],
    specs: {
      "Output": "8W RMS",
      "Playtime": "10 Hours",
      "Weight": "239g"
    },
    colors: ["Matte Black", "Forest Green", "Red Coral"],
    inStock: true
  },

  // ==========================================
  // 5. FAST CHARGERS (4 Products)
  // ==========================================
  {
    id: 17,
    name: "65W GaN III Fast Charger 3-Port (2x USB-C PD + USB-A QC 3.0)",
    category: "Fast Chargers",
    price: 1899,
    originalPrice: 2600,
    discountPercent: 27,
    reviewCount: 39,
    rating: 4.9,
    sold: 140,
    soldDays: 2,
    badge: "GaN 65W",
    slug: "65w-gan-iii-fast-charger-3-port-pd",
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609592424304-4d83017a61dc?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Next-gen Gallium Nitride (GaN III) fast wall adapter. Fast charges MacBooks, iPhones, Samsung 45W Super Fast Charging 2.0, and tablets simultaneously with multi-circuit protection.",
    features: [
      "65W Max Power Delivery with GaN III technology",
      "Simultaneous 3-Device Smart Power Allocation",
      "Supports Samsung 45W PPS Super Fast Charge 2.0",
      "Overheat, overvoltage & short-circuit surge protection",
      "Compact 50% smaller travel plug size"
    ],
    specs: {
      "Max Output": "65W USB-C PD3.0",
      "Ports": "2x USB-C + 1x USB-A QC3.0",
      "Tech": "GaN III Gallium Nitride",
      "Compatibility": "iPhone, Android, Laptops, Tablets"
    },
    colors: ["Space Black", "Pure White"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 18,
    name: "3-in-1 Magnetic MagSafe Wireless Charging Station for iPhone/Watch/Buds",
    category: "Fast Chargers",
    price: 2499,
    originalPrice: 3499,
    discountPercent: 28,
    reviewCount: 34,
    rating: 4.8,
    sold: 98,
    soldDays: 3,
    badge: "3-in-1 Stand",
    slug: "3-in-1-magsafe-wireless-charging-station",
    images: [
      "https://images.unsplash.com/photo-1622445262464-84b1456045b6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Clean up your nightstand with this folding aluminum MagSafe stand. Simultaneously fast charges iPhone 15/14/13/12 series (15W), Apple Watch/Smartwatch (5W), and AirPods/TWS (5W).",
    features: [
      "Strong N52 Rare-Earth Magnetic alignment",
      "Foldable 180° travel slim profile",
      "Simultaneously charges Phone, Watch & Earbuds",
      "Subtle breathing LED charging indicator"
    ],
    specs: {
      "Total Power": "25W Fast Wireless Output",
      "Input": "Type-C Fast Input",
      "Material": "Aluminum Alloy & Tempered Glass"
    },
    colors: ["Anodized Grey", "Pearl White"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 19,
    name: "100W PD 6A Type-C to Type-C Braided Fast Charging Cable with LED Display",
    category: "Fast Chargers",
    price: 799,
    originalPrice: 1200,
    discountPercent: 33,
    reviewCount: 61,
    rating: 4.8,
    sold: 260,
    soldDays: 1,
    badge: "Wattage Display",
    slug: "100w-pd-6a-type-c-fast-cable-led-display",
    images: [
      "https://images.unsplash.com/photo-1609592424304-4d83017a61dc?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Heavy-duty zinc alloy charging cable with real-time digital LED power wattage readout. Certified for 100W 5A E-Marker fast charging for laptops, smartphones, and powerbanks.",
    features: [
      "Real-time Digital Wattage LED Screen",
      "100W Ultra-Fast PD 5A E-Marker Chip",
      "Military-grade nylon braided 20,000+ bend lifespan",
      "480Mbps High-Speed Data Sync"
    ],
    specs: {
      "Length": "1.2 Meters (4 Feet)",
      "Max Power": "100W 20V/5A",
      "Interface": "Type-C to Type-C"
    },
    colors: ["Stealth Black"],
    inStock: true
  },
  {
    id: 20,
    name: "20W PD Fast Charger Adapter + 1M Type-C to Lightning Cable Set",
    category: "Fast Chargers",
    price: 1299,
    originalPrice: 1800,
    discountPercent: 28,
    reviewCount: 44,
    rating: 4.7,
    sold: 185,
    soldDays: 2,
    badge: "iPhone Kit",
    slug: "20w-pd-fast-charger-lightning-cable-set",
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609592424304-4d83017a61dc?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Complete 20W Power Delivery wall plug and 1-meter cable bundle. Charges iPhone from 0% to 50% in just 30 minutes safely without battery degradation.",
    features: [
      "0 to 50% in 30 Minutes Turbo Charge",
      "Includes 1M Fast Type-C to Lightning Cable",
      "Smart Temperature IC chip regulation",
      "Universal 100-240V international voltage"
    ],
    specs: {
      "Output": "20W PD 3.0",
      "Cable Length": "1.0 Meter",
      "Certification": "CE, RoHS, FCC"
    },
    colors: ["Classic White"],
    inStock: true
  },

  // ==========================================
  // 6. MICROPHONES (4 Products)
  // ==========================================
  {
    id: 21,
    name: "K9 Dual Wireless Lapel Collar Microphone for iPhone & Android / Type-C",
    category: "Microphones",
    price: 1499,
    originalPrice: 2200,
    discountPercent: 32,
    reviewCount: 82,
    rating: 4.9,
    sold: 320,
    soldDays: 1,
    badge: "Bestseller",
    slug: "k9-dual-wireless-lapel-collar-microphone",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Plug & Play dual lapel microphones for TikTok, YouTube, Instagram Reels, interviews, and vlogging. No app or Bluetooth needed—simply plug the receiver and start recording with intelligent noise reduction.",
    features: [
      "Includes 2 Wireless Collar Mics + Receiver",
      "Plug & Play: Zero apps or pairing required",
      "Built-in DSP smart background noise reduction",
      "20 Meters stable barrier-free transmission",
      "Includes Lightning and Type-C adapters"
    ],
    specs: {
      "Transmission": "2.4GHz Digital Frequency",
      "Range": "20 Meters (65ft)",
      "Battery Life": "6-8 Hours per mic",
      "Latency": "9ms Ultra-low"
    },
    colors: ["Matte Black"],
    inStock: true,
    isFeatured: true,
    isFlashDeal: true
  },
  {
    id: 22,
    name: "Studio USB Podcast Condenser Microphone with RGB & Tap-to-Mute",
    category: "Microphones",
    price: 2899,
    originalPrice: 3999,
    discountPercent: 27,
    reviewCount: 28,
    rating: 4.8,
    sold: 68,
    soldDays: 3,
    badge: "Studio RGB",
    slug: "studio-usb-podcast-condenser-microphone-rgb",
    images: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Broadcast-grade cardioid condenser mic with top tap-to-mute touch sensor, dynamic two-tone RGB gradients, metal desktop tripod stand, pop filter, and gain adjustment knob.",
    features: [
      "Cardioid pickup pattern for crisp studio vocals",
      "One-touch Tap-to-Mute sensor with LED status",
      "Dynamic Breathing RGB gradient lighting",
      "Zero-latency 3.5mm headphone monitoring jack"
    ],
    specs: {
      "Sample Rate": "192kHz / 24-bit HD",
      "Polar Pattern": "Cardioid",
      "Connection": "USB-A to USB-C Plug & Play"
    },
    colors: ["Obsidian Black RGB"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 23,
    name: "Wireless Lavalier Mic with Charging Case & Noise Cancelling Chip",
    category: "Microphones",
    price: 2199,
    originalPrice: 2999,
    discountPercent: 26,
    reviewCount: 35,
    rating: 4.8,
    sold: 95,
    soldDays: 2,
    badge: "Charging Case",
    slug: "wireless-lavalier-mic-charging-case",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Compact wireless vlogging mic kit with magnetic storage charging case, 3-level active noise reduction, real-time reverb sound effect mode, and universal phone compatibility.",
    features: [
      "Portable Charging Box (charges mics up to 4 times)",
      "3-Level Physical Noise Cancellation switch",
      "Reverb Echo sound mode for singing & entertainment",
      "Lightweight 8.5g unobtrusive lapel clip"
    ],
    specs: {
      "Battery": "24 Hours total with Case",
      "Range": "30 Meters transmission",
      "Compatibility": "iPhone & Type-C Android"
    },
    colors: ["Classic Black"],
    inStock: true
  },
  {
    id: 24,
    name: "BM-800 Studio Recording Microphone Set with Scissor Arm & Pop Filter",
    category: "Microphones",
    price: 2399,
    originalPrice: 3200,
    discountPercent: 25,
    reviewCount: 21,
    rating: 4.6,
    sold: 54,
    soldDays: 4,
    badge: "Complete Studio Kit",
    slug: "bm800-studio-recording-mic-scissor-arm",
    images: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Full studio starter kit including BM-800 condenser microphone, adjustable metal suspension scissor arm, anti-vibration shock mount, double-layer pop filter, and foam windscreen.",
    features: [
      "Complete 7-Piece Recording Studio Bundle",
      "Heavy duty all-metal scissor boom arm",
      "Double-mesh pop filter for plosive reduction",
      "High sensitivity wide frequency response"
    ],
    specs: {
      "Frequency": "20Hz - 20kHz",
      "Sensitivity": "-34dB ± 2dB",
      "Mount": "Heavy Duty C-Clamp"
    },
    colors: ["Black & Gold", "All Black"],
    inStock: true
  },

  // ==========================================
  // 7. TRIPODS (4 Products)
  // ==========================================
  {
    id: 25,
    name: "Professional 7-Foot (2.1M) Heavy Duty Metal Tripod Stand for Mobile & Ring Lights",
    category: "Tripods",
    price: 1199,
    originalPrice: 1699,
    discountPercent: 29,
    reviewCount: 58,
    rating: 4.8,
    sold: 210,
    soldDays: 2,
    badge: "2.1M Height",
    slug: "professional-7-foot-heavy-duty-metal-tripod",
    images: [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Heavy duty telescopic aluminum tripod stand extending up to 7 feet (210cm). Standard 1/4\" universal screw head compatible with all ring lights, phone mounts, DSLR cameras, and softboxes.",
    features: [
      "Extends from 70cm up to 210cm (7 Feet)",
      "Solid aluminum alloy anti-slip 3-leg lock system",
      "Standard 1/4\" screw mount for lights & cameras",
      "Includes 360° Rotating Mobile Phone Clamp"
    ],
    specs: {
      "Max Height": "210cm (7 Feet)",
      "Min Height": "70cm Folded",
      "Load Capacity": "3.5kg",
      "Material": "Reinforced Aluminum Alloy"
    },
    colors: ["Matte Black"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 26,
    name: "10-inch RGB LED Ring Light with 2.1M Tripod & Wireless Remote",
    category: "Tripods",
    price: 1899,
    originalPrice: 2600,
    discountPercent: 27,
    reviewCount: 46,
    rating: 4.9,
    sold: 165,
    soldDays: 1,
    badge: "RGB Light Set",
    slug: "10-inch-rgb-ring-light-2.1m-tripod",
    images: [
      "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=80"
    ],
    description: "10-inch studio ring light with 26 RGB rainbow modes + 3 standard white/warm tones, 10 brightness steps, 7ft stand, flexible phone holder, and wireless Bluetooth shutter remote.",
    features: [
      "26 Multi-Color RGB + 3 Natural White Lighting Modes",
      "10-Level Step Dimming Brightness Control",
      "Includes 2.1M Metal Stand + Bluetooth Remote",
      "USB Powered (Powerbank & Adapter friendly)"
    ],
    specs: {
      "Ring Diameter": "26cm (10 Inches)",
      "LED Bulbs": "120 High-CRI Beads",
      "Power": "USB 5V/2A"
    },
    colors: ["RGB Multi-Color"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 27,
    name: "360° Auto Face Tracking Smart Gimbal Tripod for TikTok & Vlogging",
    category: "Tripods",
    price: 2499,
    originalPrice: 3500,
    discountPercent: 28,
    reviewCount: 33,
    rating: 4.8,
    sold: 84,
    soldDays: 3,
    badge: "AI Tracking",
    slug: "360-auto-face-tracking-smart-gimbal",
    images: [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Built-in AI visual sensor automatically tracks your face and body as you move 360 degrees. Zero app or Bluetooth setup required—just turn it on and it follows you smoothly.",
    features: [
      "Built-in AI Vision Sensor Auto Face & Body Tracking",
      "Zero App Required: Works with TikTok, Zoom, Camera",
      "Gesture Control (OK to track, Palm to pause)",
      "Standard 1/4\" bottom thread to mount on tripods"
    ],
    specs: {
      "Rotation": "360° Infinite Horizontal Tracking",
      "Battery": "1200mAh (6-8 Hours)",
      "Weight": "220g"
    },
    colors: ["Stealth Black", "Clean White"],
    inStock: true
  },
  {
    id: 28,
    name: "Overhead Desktop Scissor Arm Stand for Top-Down Unboxing & Cooking Videos",
    category: "Tripods",
    price: 1399,
    originalPrice: 1999,
    discountPercent: 30,
    reviewCount: 22,
    rating: 4.7,
    sold: 62,
    soldDays: 4,
    badge: "Overhead Arm",
    slug: "overhead-desktop-scissor-arm-mount",
    images: [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Clamp it to your desk or kitchen table for hands-free 90° top-down video recording. Sturdy steel dual-spring arm with 360° ball head and reinforced table clamp.",
    features: [
      "Perfect 90-Degree Top-Down overhead recording angle",
      "Reinforced heavy-duty metal dual-spring arms",
      "Padded C-clamp protects desk surfaces",
      "360-degree rotating phone mount"
    ],
    specs: {
      "Arm Reach": "75cm Total Reach",
      "Clamp Opening": "Max 5.5cm Desk Thickness",
      "Material": "High-Grade Carbon Steel"
    },
    colors: ["Black"],
    inStock: true
  },

  // ==========================================
  // 8. HANDSFREE (4 Products)
  // ==========================================
  {
    id: 29,
    name: "PureBass Hi-Res Metal Wired Earphones with Mic & Braided Cable (3.5mm)",
    category: "Handsfree",
    price: 599,
    originalPrice: 999,
    discountPercent: 40,
    reviewCount: 76,
    rating: 4.8,
    sold: 340,
    soldDays: 1,
    badge: "Bestseller",
    slug: "purebass-hires-metal-wired-earphones",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    description: "CNC machined aluminum acoustic chamber with deep dynamic bass, oxygen-free copper tangle-free braided cord, gold-plated 3.5mm plug, and HD in-line remote with microphone.",
    features: [
      "Precision CNC Aviation Aluminum housing",
      "Oxygen-free copper tangle-resistant braided cable",
      "Deep subwoofer dynamic bass response",
      "One-click inline remote: play, pause, answer calls"
    ],
    specs: {
      "Driver": "10mm Titanium Diaphragm",
      "Jack": "3.5mm Gold-Plated Aux",
      "Cable Length": "1.2 Meters",
      "Impedance": "16 Ohm"
    },
    colors: ["Space Gunmetal", "Metallic Red", "Silver Frost"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 30,
    name: "Type-C Digital DAC Hi-Res Audio Handsfree for Samsung, iPhone 15 & Xiaomi",
    category: "Handsfree",
    price: 899,
    originalPrice: 1400,
    discountPercent: 35,
    reviewCount: 52,
    rating: 4.8,
    sold: 190,
    soldDays: 2,
    badge: "DAC Chip Type-C",
    slug: "type-c-digital-dac-hires-handsfree",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Equipped with built-in 24-bit 96kHz Digital-to-Analog (DAC) smart chip. Guaranteed 100% compatibility with iPhone 15/16 series, Samsung S24/S23, OnePlus, Pixel, and iPads.",
    features: [
      "Integrated 24-Bit / 96kHz Hi-Res DAC decoder chip",
      "Zero buzzing or background static noise",
      "Ergonomic 45° in-ear silicone sound isolation",
      "Full digital volume + / - inline remote"
    ],
    specs: {
      "Interface": "Type-C Digital Interface",
      "DAC": "Built-in Realtek HD DAC",
      "Frequency": "10Hz - 24,000Hz"
    },
    colors: ["Arctic White", "Matte Black"],
    inStock: true
  },
  {
    id: 31,
    name: "Dual Driver Heavy Bass Gaming Handsfree with Dual Detachable Mics",
    category: "Handsfree",
    price: 1099,
    originalPrice: 1600,
    discountPercent: 31,
    reviewCount: 39,
    rating: 4.7,
    sold: 115,
    soldDays: 3,
    badge: "Dual Driver",
    slug: "dual-driver-heavy-bass-gaming-handsfree",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Engineered specifically for PUBG Mobile and Free Fire gamers. Features quad speaker drivers (2 per earpiece) for pinpoint enemy footsteps and long flexible detachable boom mic.",
    features: [
      "4 Dynamic Drivers (Dual Driver per side) for 3D sound",
      "Includes long detachable flexible boom mic for games",
      "L-shaped 90-degree 3.5mm plug for comfortable grip",
      "Memory foam ear tips for sweat-proof noise isolation"
    ],
    specs: {
      "Drivers": "4x 6mm Micro Dynamic Units",
      "Plug": "3.5mm L-Shape 90°",
      "Mics": "Inline Mic + Detachable Boom Mic"
    },
    colors: ["Esports Red", "Neon Green", "Carbon Black"],
    inStock: true
  },
  {
    id: 32,
    name: "[BOGO Pack of 2] Classic Stereo 3.5mm Handsfree Bundle",
    category: "Handsfree",
    price: 799,
    originalPrice: 1400,
    discountPercent: 42,
    reviewCount: 68,
    rating: 4.7,
    sold: 280,
    soldDays: 1,
    badge: "Buy 1 Get 1 Free",
    slug: "bogo-pack-of-2-classic-stereo-handsfree",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Get 2 sets of high quality stereo wired handsfree in one single value deal. Clear vocal clarity, soft silicone earbuds, built-in microphone, and universal 3.5mm audio jack.",
    features: [
      "Includes 2 Pairs of Earphones in 1 Value Box",
      "Comfortable semi in-ear ergonomic fit",
      "Crystal clear microphone for WhatsApp & phone calls",
      "Universal compatibility with all 3.5mm ports"
    ],
    specs: {
      "Pack": "2 Complete Units Included",
      "Jack": "3.5mm Standard Aux",
      "Cable": "TPE High Elasticity Wire"
    },
    colors: ["Black + White Pair"],
    inStock: true
  },

  // ==========================================
  // 9. NECKBAND (4 Products)
  // ==========================================
  {
    id: 33,
    name: "Monster Bass 60-Hour Playtime Wireless Bluetooth Neckband with Fast Charge",
    category: "Neckband",
    price: 1699,
    originalPrice: 2499,
    discountPercent: 32,
    reviewCount: 54,
    rating: 4.9,
    sold: 190,
    soldDays: 2,
    badge: "60H Battery",
    slug: "monster-bass-60-hour-wireless-neckband",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Massive 60-hour non-stop battery life with liquid silicone skin-friendly collar. Features magnetic auto on/off earbuds, deep bass vibration motors, and Type-C 10-minute fast charging.",
    features: [
      "Massive 60 Hours Continuous Playtime on one charge",
      "10-Minute Type-C Fast Charge = 15 Hours playtime",
      "Smart Magnetic Earbuds: Snap to pause, separate to play",
      "IPX5 Sweat and rain proof for gym & outdoor running"
    ],
    specs: {
      "Battery": "600mAh Lithium Cell (60H Play)",
      "Driver": "12mm Graphene Subwoofer",
      "Bluetooth": "5.3 Instant Connection",
      "Weight": "38g Flexible Collar"
    },
    colors: ["Stealth Black", "Cobalt Blue", "Crimson Red"],
    inStock: true,
    isFeatured: true,
    isFlashDeal: true
  },
  {
    id: 34,
    name: "ANC Active Noise Cancelling Sports Wireless Neckband with Vibration Alert",
    category: "Neckband",
    price: 2199,
    originalPrice: 3000,
    discountPercent: 26,
    reviewCount: 31,
    rating: 4.8,
    sold: 86,
    soldDays: 3,
    badge: "ANC & Vibration",
    slug: "anc-sports-wireless-neckband-vibration",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Active Noise Cancellation up to -28dB combined with incoming call silent neck vibration alerts so you never miss an urgent call while driving or exercising.",
    features: [
      "Active Noise Cancellation (ANC) for noisy traffic",
      "Silent Incoming Call Collar Vibration alert",
      "Quad-Mic ENC clear voice filtering",
      "Dual Device simultaneous Bluetooth pairing"
    ],
    specs: {
      "ANC Depth": "-28dB Active Cancellation",
      "Battery": "35 Hours Playtime",
      "Weight": "42g"
    },
    colors: ["Midnight Obsidian", "Silver Graphite"],
    inStock: true
  },
  {
    id: 35,
    name: "FlexiSport Memory Metal Silicone Neckband with TF Card Slot",
    category: "Neckband",
    price: 1299,
    originalPrice: 1800,
    discountPercent: 27,
    reviewCount: 26,
    rating: 4.6,
    sold: 72,
    soldDays: 4,
    badge: "TF Card Slot",
    slug: "flexisport-silicone-neckband-tf-card",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Leave your phone at home! Insert a MicroSD card directly into the neckband to listen to your MP3 music collection during workouts. Memory titanium wire retains shape forever.",
    features: [
      "Built-in MicroSD / TF Card MP3 Player Slot",
      "Titanium memory alloy neck wire bends 360° without breaking",
      "Magnetic earbud cable management",
      "25 Hours continuous battery life"
    ],
    specs: {
      "Card Support": "Up to 64GB MicroSD",
      "Battery": "25 Hours Playback",
      "Bluetooth": "5.2"
    },
    colors: ["Neon Green", "Carbon Black"],
    inStock: true
  },
  {
    id: 36,
    name: "UltraLight Magnetic Wireless Earphone Neckband with Mic",
    category: "Neckband",
    price: 999,
    originalPrice: 1499,
    discountPercent: 33,
    reviewCount: 40,
    rating: 4.6,
    sold: 130,
    soldDays: 2,
    badge: "Budget King",
    slug: "ultralight-magnetic-wireless-neckband",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Weighing only 24 grams, you'll forget you're wearing it. Crisp treble, balanced bass, magnetic metal back housing, and easy volume/track buttons.",
    features: [
      "Featherlight 24g weight for all-day comfort",
      "Magnetic earbuds prevent cord dangling",
      "HD phone call microphone with noise gate",
      "12 Hours playback time"
    ],
    specs: {
      "Weight": "24g",
      "Battery": "12 Hours",
      "Charging": "MicroUSB / Type-C"
    },
    colors: ["Classic Black", "Sport Red"],
    inStock: true
  },

  // ==========================================
  // 10. SMART GADGETS (4 Products)
  // ==========================================
  {
    id: 37,
    name: "Smart Anti-Lost Bluetooth GPS Tracker Tag for Keys, Wallets & Luggage",
    category: "Smart Gadgets",
    price: 799,
    originalPrice: 1200,
    discountPercent: 33,
    reviewCount: 47,
    rating: 4.8,
    sold: 215,
    soldDays: 2,
    badge: "GPS Locator",
    slug: "smart-anti-lost-bluetooth-gps-tracker-tag",
    images: [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Never lose your keys, wallet, pet, or luggage again. Ring your lost item directly from your smartphone with loud 90dB buzzer or view last recorded GPS location on map.",
    features: [
      "Loud 90dB sound beep buzzer finder",
      "Two-way find: Double click tag to ring your lost phone",
      "Last seen location pin on Google Maps / Apple Find My",
      "1-Year replaceable CR2032 battery life"
    ],
    specs: {
      "Battery": "1 Year Replaceable CR2032",
      "Range": "30 Meters Bluetooth + Cloud Map",
      "Size": "3.5cm x 3.5cm (Ultralight 8g)"
    },
    colors: ["Matte White", "Stealth Black", "Sky Blue"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 38,
    name: "Ultrasonic High-Frequency Cleaner for Glasses, Jewelry, Watches & Blades",
    category: "Smart Gadgets",
    price: 2199,
    originalPrice: 3200,
    discountPercent: 31,
    reviewCount: 38,
    rating: 4.9,
    sold: 110,
    soldDays: 3,
    badge: "Ultrasonic 45kHz",
    slug: "ultrasonic-high-frequency-jewelry-cleaner",
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Emits 45,000Hz ultrasonic sound waves that create microscopic vacuum bubbles to strip grease, dirt, and bacteria from eyeglasses, rings, watches, and razors in 3 minutes.",
    features: [
      "45,000Hz Deep 360° Ultrasonic Cavitation Waves",
      "3-Minute Auto Shut-off Smart Cleaning Cycle",
      "Stainless steel 304 anti-rust water tank",
      "Whisper quiet operation under 50dB"
    ],
    specs: {
      "Frequency": "45kHz",
      "Tank Capacity": "350ml Stainless Steel 304",
      "Power": "USB / 12V Fast Adapter"
    },
    colors: ["Pearl White / Gold Accent", "Mint Grey"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 39,
    name: "RGB Rhythm Sound-Activated Atmospheric Light Bar (32-Bit Colorful Music Lamp)",
    category: "Smart Gadgets",
    price: 999,
    originalPrice: 1500,
    discountPercent: 33,
    reviewCount: 63,
    rating: 4.8,
    sold: 240,
    soldDays: 1,
    badge: "Music Sync",
    slug: "rgb-rhythm-sound-activated-music-light-bar",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Features 32 independent LED lamp beads, built-in ultra-sensitive acoustic microphone, 8 dynamic display modes, and 18 color themes that jump to ambient music & gaming sounds.",
    features: [
      "32 RGB Independent Lamp Beads with 32-bit ARM chip",
      "AGC Automatic Gain Control noise filter",
      "8 Visual Display Modes + 18 Color Variations",
      "Rechargeable cordless battery for car dashboard & desk"
    ],
    specs: {
      "LEDs": "32 High-Brightness Beads",
      "Battery": "Built-in Rechargeable (4-6 Hours)",
      "Height": "18cm Aluminum Alloy Body"
    },
    colors: ["Black Aluminum", "Silver Chrome"],
    inStock: true
  },
  {
    id: 40,
    name: "Rechargeable Magnetic Motion Sensor LED Night Lamp (Auto On/Off)",
    category: "Smart Gadgets",
    price: 699,
    originalPrice: 1100,
    discountPercent: 36,
    reviewCount: 51,
    rating: 4.7,
    sold: 210,
    soldDays: 2,
    badge: "Smart Sensor",
    slug: "magnetic-motion-sensor-led-night-lamp",
    images: [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Mounts magnetically anywhere without tools. Automatically lights up warm soft illumination when it detects human motion within 3 meters and turns off after 20 seconds of no movement.",
    features: [
      "120° Wide-Angle PIR Motion & Light Dual Sensors",
      "Magnetic Base + 3M adhesive mount (Zero drilling)",
      "Eye-caring Warm 3000K Soft Glow (no glare)",
      "Rechargeable Type-C (lasts 60 days on Auto mode)"
    ],
    specs: {
      "Sensor Range": "3-5 Meters (120°)",
      "Battery": "USB Rechargeable 500mAh",
      "Light Color": "Warm White 3000K"
    },
    colors: ["Warm White Glow"],
    inStock: true
  },

  // ==========================================
  // 11. DEALS (4 Products)
  // ==========================================
  {
    id: 41,
    name: "[7-in-1] Ultra Smart Watch Bundle: 4 Designer Straps + AirPods Pro",
    category: "Deals",
    price: 3299,
    originalPrice: 4800,
    discountPercent: 31,
    reviewCount: 89,
    rating: 5.0,
    sold: 310,
    soldDays: 1,
    badge: "Mega Combo",
    slug: "7-in-1-ultra-smart-watch-bundle-4-straps-airpods-pro",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80"
    ],
    description: "The ultimate tech value package! Includes 49mm Ultra Smartwatch with infinite HD display, 4 interchangeable silicone, fabric, and ocean straps, wireless TWS AirPods Pro, and wireless fast charger dock.",
    features: [
      "Complete 7-in-1 Tech Combo Luxury Gift Box",
      "49mm Titanium-finish Smartwatch body with Calling",
      "4 Designer Straps (Alpine Orange, Ocean Black, Trail Grey, Stainless)",
      "AirPods Pro TWS Earbuds with charging case included",
      "Wireless Magnetic Fast Charger Included"
    ],
    specs: {
      "Watch Display": "2.02\" Infinite HD IPS Display",
      "Compatibility": "Android & iOS Support",
      "Calling": "Bluetooth Calling & Speaker",
      "Warranty": "7 Days Checking Warranty Included"
    },
    colors: ["Titanium Silver / 4 Straps Set"],
    inStock: true,
    isFeatured: true,
    isFlashDeal: true
  },
  {
    id: 42,
    name: "[Creator Studio Bundle] 10\" RGB Ring Light + 2.1M Tripod + K9 Dual Wireless Mics",
    category: "Deals",
    price: 2999,
    originalPrice: 4500,
    discountPercent: 33,
    reviewCount: 48,
    rating: 4.9,
    sold: 145,
    soldDays: 2,
    badge: "Creator Kit",
    slug: "creator-studio-bundle-ring-light-tripod-k9-mics",
    images: [
      "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Everything a content creator needs in one discounted bundle: 10\" RGB Ring Light, 7-Foot metal tripod stand, Bluetooth shutter remote, and K9 Dual wireless collar microphones.",
    features: [
      "Complete TikTok & YouTube vlogging equipment package",
      "10\" Multi-Color RGB Ring Light with 26 color patterns",
      "Heavy duty 7-Foot (2.1M) Aluminum Stand",
      "K9 Dual Wireless Lapel Mics with noise cancellation"
    ],
    specs: {
      "Included": "Ring Light + 2.1M Stand + Dual Mics + Remotes",
      "Warranty": "Full 7 Days Checking Warranty"
    },
    colors: ["Complete Studio Set"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 43,
    name: "[Audio Duo Pack] P9 Pro Max Over-Ear Headphones + A9 Pro Smart LCD Earbuds",
    category: "Deals",
    price: 3899,
    originalPrice: 5800,
    discountPercent: 32,
    reviewCount: 36,
    rating: 5.0,
    sold: 95,
    soldDays: 3,
    badge: "Audio Duo Pack",
    slug: "audio-duo-pack-p9-pro-max-a9-pro-earbuds",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Get both of Pakistan's hottest audio gear in one exclusive bundle. Includes P9 Pro Max studio over-ear headphones + A9 Pro touchscreen smart charging case earbuds at massive savings.",
    features: [
      "P9 Pro Max Hi-Fi Over-Ear Headphones with memory foam",
      "A9 Pro Smart Touchscreen LCD Earbuds with ANC",
      "Save PKR 1,900 compared to buying individually",
      "Free Express TCS Shipping across Pakistan"
    ],
    specs: {
      "Package": "1x P9 Headphones + 1x A9 Earbuds + Cables",
      "Shipping": "Free Nationwide Cash on Delivery"
    },
    colors: ["Space Black Combo", "Silver White Combo"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 44,
    name: "[Power Combo] 65W GaN Fast Charger + 100W Digital LED Cable + 3-in-1 MagSafe",
    category: "Deals",
    price: 3699,
    originalPrice: 5500,
    discountPercent: 32,
    reviewCount: 27,
    rating: 4.9,
    sold: 78,
    soldDays: 4,
    badge: "Power Combo",
    slug: "power-combo-65w-gan-100w-cable-magsafe",
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622445262464-84b1456045b6?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Upgrade your charging setup completely. Includes 65W 3-port GaN wall adapter, 100W real-time wattage LED cable, and 3-in-1 magnetic folding MagSafe wireless station.",
    features: [
      "All-in-one charging station for all your Apple & Android devices",
      "65W GaN adapter powers laptops, tablets and phones",
      "100W Digital Wattage display cable included",
      "3-in-1 Folding Magnetic MagSafe wireless stand"
    ],
    specs: {
      "Total Kit": "65W GaN Plug + 100W Cable + 3-in-1 MagSafe",
      "Safety": "Dual Intelligent Surge IC Protection"
    },
    colors: ["Stealth Black Power Set"],
    inStock: true
  },

  // ==========================================
  // 12. DAILY OFFERS (4 Products)
  // ==========================================
  {
    id: 45,
    name: "[Flash Offer] TWS Wireless Gaming Earbuds with Neon RGB LED Display",
    category: "Daily Offers",
    price: 1199,
    originalPrice: 1999,
    discountPercent: 40,
    reviewCount: 94,
    rating: 4.8,
    sold: 380,
    soldDays: 1,
    badge: "40% OFF Today",
    slug: "flash-offer-tws-wireless-gaming-earbuds-neon-rgb",
    images: [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Today's limited flash deal! Low latency gaming mode, pulsing neon breathing lights, graphene bass drivers, and instant Bluetooth 5.3 auto pairing.",
    features: [
      "40% Limited Midnight Flash Discount",
      "40ms Low Latency Gaming Sound Sync",
      "Cool Breathing Snake-Eye LED Case lights",
      "Touch sensors for calls, tracks and Siri/Assistant"
    ],
    specs: {
      "Battery": "24 Hours total",
      "Waterproof": "IPX5 Sweat Resistant",
      "Latency": "40ms Low Latency"
    },
    colors: ["Cyber Black / Neon Green"],
    inStock: true,
    isFeatured: true,
    isFlashDeal: true
  },
  {
    id: 46,
    name: "[Flash Offer] Ultra Smart Watch with Orange Alpine Loop & Calling",
    category: "Daily Offers",
    price: 1699,
    originalPrice: 2800,
    discountPercent: 39,
    reviewCount: 63,
    rating: 4.8,
    sold: 215,
    soldDays: 1,
    badge: "Flash 39% OFF",
    slug: "flash-offer-ultra-smart-watch-orange-alpine-calling",
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Today's daily special: Rugged alloy 49mm smartwatch with vibrant HD display, Bluetooth voice calling, heart rate & sleep tracking, and iconic textured alpine strap.",
    features: [
      "HD Bluetooth call dialing and contact sync",
      "Rugged alloy chassis with crown rotary dial",
      "High-contrast outdoors visible screen",
      "Magnetic wireless fast charging dock included"
    ],
    specs: {
      "Screen": "2.0-inch HD Screen",
      "Battery": "3-4 Days Usage",
      "Strap": "Alpine Weave Strap"
    },
    colors: ["Alpine Orange", "Stealth Black"],
    inStock: true,
    isFeatured: true,
    isFlashDeal: true
  },
  {
    id: 47,
    name: "[Flash Offer] Portable RGB Bass Cylinder Speaker with Aux & TF",
    category: "Daily Offers",
    price: 1399,
    originalPrice: 2200,
    discountPercent: 36,
    reviewCount: 37,
    rating: 4.7,
    sold: 140,
    soldDays: 2,
    badge: "Flash 36% OFF",
    slug: "flash-offer-portable-rgb-bass-cylinder-speaker",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Compact desktop & outdoor cylinder speaker with radiant RGB ambient LED lights, dual passive radiators for punchy beats, and FM radio tuner.",
    features: [
      "Rich 10W stereo sound with dual bass diaphragms",
      "Dynamic color changing RGB ring lights",
      "Supports Bluetooth, MicroSD, USB flash, FM Radio",
      "6-8 Hours continuous battery life"
    ],
    specs: {
      "Power": "10W RMS",
      "Battery": "1800mAh",
      "Weight": "310g"
    },
    colors: ["Midnight Black", "Steel Grey"],
    inStock: true,
    isFeatured: true
  },
  {
    id: 48,
    name: "[Flash Offer] 65W GaN Fast Charger Plug with Dual Type-C Ports",
    category: "Daily Offers",
    price: 1499,
    originalPrice: 2400,
    discountPercent: 37,
    reviewCount: 49,
    rating: 4.8,
    sold: 175,
    soldDays: 1,
    badge: "Flash 37% OFF",
    slug: "flash-offer-65w-gan-fast-charger-plug-dual-type-c",
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609592424304-4d83017a61dc?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Super fast Gallium Nitride 65W charger adapter. Power your phone to 50% in under 25 minutes. Built-in smart heat dissipation for cool, secure operation.",
    features: [
      "65W High-Speed PD Gallium Nitride Technology",
      "Dual Type-C + 1 USB Port multi-charging",
      "Universal fast charge protocols (PD 3.0, QC 4+, PPS)",
      "Fire-retardant PC shell with surge protection"
    ],
    specs: {
      "Power": "65W Max",
      "Ports": "2x USB-C + 1x USB-A",
      "Tech": "GaN III"
    },
    colors: ["Space Black"],
    inStock: true,
    isFeatured: true
  }
];
