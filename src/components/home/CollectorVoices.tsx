import React, { useState, useEffect } from 'react';
import { FEATURED_REVIEWS } from '../../data/reviews';
import { Star, CheckCircle, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const CollectorVoices: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const review = FEATURED_REVIEWS[activeIndex] || FEATURED_REVIEWS[0];

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % FEATURED_REVIEWS.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + FEATURED_REVIEWS.length) % FEATURED_REVIEWS.length);
  };

  // Automated Autoplay Animation Timer for Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 6000); // Transitions smoothly every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="collector-voices-section"
      className="relative w-full py-20 bg-[#040406] text-white border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-[1px] bg-amber-400" />
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-amber-400">
                07 / Verified Testimonials
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Collector <span className="font-serif italic font-normal text-amber-100">Voices</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Next quote"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Large Editorial Quote Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#080911] border border-white/10 relative overflow-hidden transition-all duration-500">
          <Quote className="w-16 h-16 text-white/5 absolute top-6 right-8 pointer-events-none" />

          <div className="max-w-4xl space-y-5">
            
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-[10px] font-sans tracking-wider text-gray-400 uppercase">5.0 Star Verified Rating</span>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-light text-white leading-relaxed italic transition-opacity duration-500">
              "{review.comment}"
            </p>

            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <div className="font-semibold text-white text-sm flex items-center gap-1.5">
                    <span>{review.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  </div>
                  <div className="text-[11px] text-gray-400 font-sans">
                    {review.city} • Verified Buyer
                  </div>
                </div>
              </div>

              {/* Slider Dots indicators */}
              <div className="flex items-center gap-2">
                {FEATURED_REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeIndex === idx ? 'w-6 bg-amber-400' : 'w-1.5 bg-white/25 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
