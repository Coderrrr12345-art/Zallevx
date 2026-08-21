import React, { useEffect, useState } from 'react';
import { ZalleveLogo } from '../common/ZalleveLogo';

export const Preloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setFading(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 20;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#040406] flex flex-col items-center justify-center transition-opacity duration-400 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        
        {/* Brand Logo */}
        <div className="scale-125">
          <ZalleveLogo size="lg" />
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-150"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>

        <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500">
          POWERING UP • {Math.min(100, progress)}%
        </span>

      </div>
    </div>
  );
};
