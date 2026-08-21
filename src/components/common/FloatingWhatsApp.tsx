import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showBubble, setShowBubble] = useState(true);

  const whatsappUrl = 'https://wa.me/923222683373?text=Hi,%20I%20am%20interested%20in%20your%20products%20from%20Zalleve';

  return (
    <div className="fixed bottom-20 lg:bottom-8 right-5 z-40 flex flex-col items-end gap-2 group">
      
      {/* Floating Prompt Bubble */}
      {showBubble && (
        <div className="bg-[#12141e]/95 backdrop-blur-md text-white border border-emerald-500/30 p-3 rounded-2xl shadow-2xl max-w-[220px] relative animate-in fade-in slide-in-from-bottom-3 duration-300">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-gray-800 text-gray-400 hover:text-white rounded-full flex items-center justify-center text-xs"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-bold text-emerald-400">Online Support 24/7</span>
          </div>
          <p className="text-[11px] text-gray-300 leading-tight">
            Need help choosing or ordering via Cash on Delivery? Chat on WhatsApp!
          </p>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <a
        id="floating-whatsapp-cta-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all duration-300 relative animate-whatsapp-pulse"
        aria-label="Contact Zalleve on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-white" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
