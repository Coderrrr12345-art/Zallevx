import React from 'react';
import { useShop } from '../../context/ShopContext';

export const FlyingCartItem: React.FC = () => {
  const { flyingItem } = useShop();

  if (!flyingItem) return null;

  return (
    <div
      className="fixed z-50 pointer-events-none transition-all duration-700 ease-in-out"
      style={{
        left: flyingItem.startX,
        top: flyingItem.startY,
        transform: 'translate(-50%, -50%)',
        animation: 'fly-to-cart 0.85s cubic-bezier(0.2, 0.8, 0.2, 1) forwards'
      }}
    >
      <style>{`
        @keyframes fly-to-cart {
          0% {
            opacity: 1;
            transform: scale(1) translate(0, 0);
          }
          50% {
            opacity: 0.9;
            transform: scale(0.6) translate(calc(100vw - 120px - ${flyingItem.startX}px), calc(30px - ${flyingItem.startY}px));
          }
          100% {
            opacity: 0;
            transform: scale(0.2) translate(calc(100vw - 100px - ${flyingItem.startX}px), calc(20px - ${flyingItem.startY}px));
          }
        }
      `}</style>
      <div className="w-16 h-16 rounded-2xl p-1 bg-gradient-to-tr from-purple-500 to-cyan-400 shadow-2xl shadow-cyan-500/50">
        <img
          src={flyingItem.url}
          alt="Adding item"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};
