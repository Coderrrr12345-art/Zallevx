import React from 'react';

interface ZalleveLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  variant?: 'light' | 'silver' | 'glow';
}

export const ZalleveLogo: React.FC<ZalleveLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'silver'
}) => {
  const sizeMap = {
    sm: { icon: 'w-6 h-6 sm:w-7 sm:h-7', text: 'text-sm sm:text-base', sub: 'text-[6.5px] sm:text-[7px]' },
    md: { icon: 'w-8 h-8 sm:w-9 sm:h-9', text: 'text-lg sm:text-xl', sub: 'text-[7.5px] sm:text-[8.5px]' },
    lg: { icon: 'w-10 h-10 sm:w-12 sm:h-12', text: 'text-xl sm:text-2xl', sub: 'text-[9px] sm:text-[10px]' },
    xl: { icon: 'w-14 h-14 sm:w-16 sm:h-16', text: 'text-2xl sm:text-3xl', sub: 'text-[11px] sm:text-[12px]' },
  };

  const { icon, text, sub } = sizeMap[size];

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 select-none ${className}`}>
      {/* Official Zalleve Device + Lightning Charger Emblem */}
      <div className={`relative ${icon} shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]"
        >
          <defs>
            <linearGradient id="zalMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#e2e8f0" />
              <stop offset="70%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>
            <linearGradient id="zalGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Smartphone stand silhouette */}
          <rect
            x="14"
            y="12"
            width="34"
            height="62"
            rx="6"
            stroke="url(#zalMetallic)"
            strokeWidth="3.5"
            fill="#090a10"
            fillOpacity="0.8"
          />
          <path
            d="M24 18 H38"
            stroke="url(#zalMetallic)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Base Stand */}
          <rect
            x="10"
            y="74"
            width="42"
            height="7"
            rx="3.5"
            fill="url(#zalMetallic)"
          />

          {/* Charging Cable connected to Adapter */}
          <path
            d="M52 77.5 C68 77.5 70 65 70 54"
            stroke="url(#zalMetallic)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Power Adapter Plug */}
          <rect
            x="59"
            y="32"
            width="22"
            height="22"
            rx="5"
            fill="url(#zalMetallic)"
          />
          {/* Lightning Bolt on adapter */}
          <path
            d="M71 36 L66 43 H71 L69 50 L75 42 H70 L71 36 Z"
            fill="#090a10"
          />
          {/* Plug pins */}
          <rect x="64" y="24" width="3" height="8" rx="1.5" fill="url(#zalMetallic)" />
          <rect x="73" y="24" width="3" height="8" rx="1.5" fill="url(#zalMetallic)" />
        </svg>
      </div>

      {/* Typography: ZALLEVE & ESSENTIAL ACCESSORIES */}
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1">
          <span
            className={`font-black tracking-[0.14em] sm:tracking-[0.18em] uppercase ${text} font-heading leading-tight ${
              variant === 'silver'
                ? 'text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400'
                : 'text-white'
            }`}
            style={{
              textShadow: '0 2px 10px rgba(255,255,255,0.15)'
            }}
          >
            ZALLEVE
          </span>
          <span className="hidden sm:inline-block text-[8px] sm:text-[9px] font-bold px-1 py-0.2 rounded bg-white/10 text-gray-300 border border-white/15 tracking-wider">
            OFFICIAL
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`hidden xs:block font-semibold tracking-[0.2em] sm:tracking-[0.32em] text-gray-400 uppercase ${sub} -mt-0.5 leading-none truncate`}
          >
            ESSENTIAL ACCESSORIES
          </span>
        )}
      </div>
    </div>
  );
};
