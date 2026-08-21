import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on devices with a fine pointer (mouse/trackpad), skip on touch screens
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorEl) {
        setCursorText(cursorEl.getAttribute('data-cursor'));
        setIsHovered(true);
      } else if (target.closest('button, a, input, select, textarea, [role="button"]')) {
        setCursorText(null);
        setIsHovered(true);
      } else {
        setCursorText(null);
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      {cursorText ? (
        <div className="flex items-center justify-center rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-black shadow-2xl animate-in zoom-in-75 duration-200">
          {cursorText}
        </div>
      ) : (
        <div
          className={`rounded-full transition-all duration-200 ${
            isHovered
              ? 'h-8 w-8 bg-white/20 backdrop-blur-sm border border-white/40'
              : 'h-3 w-3 bg-white/80'
          }`}
        />
      )}
    </div>
  );
};
