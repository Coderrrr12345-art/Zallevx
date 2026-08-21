import React from 'react';
import {
  PackageCheck,
  Truck,
  ShieldCheck,
  Banknote,
  Smartphone,
  RotateCcw
} from 'lucide-react';

interface ValueProp {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}

const VALUE_PROPS: ValueProp[] = [
  {
    icon: PackageCheck,
    title: 'Certified Authentic',
    subtitle: 'Triple-layer anti-static packaging & tamper-proof safety sealing.'
  },
  {
    icon: Truck,
    title: 'Express Dispatch',
    subtitle: 'Real-time parcel tracking via TCS, Leopards & PostEx SMS.'
  },
  {
    icon: ShieldCheck,
    title: 'Benchmarked Quality',
    subtitle: '100% of audio units and smartwatches tested before dispatch.'
  },
  {
    icon: Banknote,
    title: 'Cash on Delivery (COD)',
    subtitle: 'Zero upfront risk. Pay cash directly to the rider at your door.'
  },
  {
    icon: Smartphone,
    title: 'Universal Ecosystem',
    subtitle: 'Seamless connection with Apple iOS, Samsung, Xiaomi, PC & Mac.'
  },
  {
    icon: RotateCcw,
    title: '7-Day Checking Warranty',
    subtitle: 'Hassle-free replacement policy on all electronic gadgets.'
  }
];

export const TrustProps: React.FC = () => {
  return (
    <section id="trust-value-props-section" className="py-20 sm:py-24 bg-[#040406] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest font-mono mb-1">
            THE ZALLEVE ASSURANCE
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-heading tracking-tight">
            Engineered for Reliability
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Why tech enthusiasts across Pakistan choose ZALLEVE for high-performance accessories.
          </p>
        </div>

        {/* 6 Value Cards with spacious layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {VALUE_PROPS.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#090a10] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-xl flex gap-4 sm:gap-5 items-start group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-heading group-hover:text-sky-300 transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1.5 sm:mt-2 leading-relaxed">
                    {prop.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
