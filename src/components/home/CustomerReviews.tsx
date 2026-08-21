import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import {
  Star,
  CheckCircle2,
  MessageSquare,
  MapPin,
  X,
  Send
} from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const { reviews, addReview } = useShop();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState('');
  const [city, setCity] = useState('Lahore');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    addReview({
      author: author.trim(),
      city: city.trim(),
      rating,
      title: title.trim() || 'Exceptional Quality!',
      comment: comment.trim(),
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80'
    });

    setIsModalOpen(false);
    setAuthor('');
    setTitle('');
    setComment('');
  };

  return (
    <section id="customer-reviews-section" className="py-20 sm:py-24 bg-[#040406] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Rating Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-gray-300 text-[10px] font-bold uppercase tracking-widest mb-2 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>TESTED & TRUSTED</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-heading tracking-tight">
              Verified Customer Reviews
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              Genuine feedback from Cash on Delivery customers across Pakistan.
            </p>
          </div>

          {/* Aggregate Rating Badge & Write Review CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-3 p-3.5 bg-[#0a0b12] border border-white/10 rounded-2xl justify-center sm:justify-start">
              <div className="text-3xl font-black text-white font-mono">
                4.9
              </div>
              <div>
                <div className="flex items-center text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
                  ))}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5 font-mono">
                  1,450+ Verified Orders
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="stealth-btn-primary px-6 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 text-gray-950" />
              <span>Write Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {reviews.slice(0, 6).map((rev) => (
            <div
              key={rev.id}
              className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#090a10] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between gap-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-300">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
                    ))}
                  </div>
                  {rev.verifiedPurchase && (
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md flex items-center gap-1 font-mono">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified COD
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white font-heading">
                  "{rev.title}"
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&auto=format&fit=crop&q=80'}
                    alt={rev.author}
                    className="w-9 h-9 rounded-full object-cover bg-gray-800"
                  />
                  <div>
                    <div className="text-xs font-bold text-gray-200">
                      {rev.author}
                    </div>
                    <div className="text-[10px] text-gray-500 flex items-center gap-1 font-mono">
                      <MapPin className="w-2.5 h-2.5 text-sky-400" />
                      <span>{rev.city}</span>
                    </div>
                  </div>
                </div>
                <span className="text-[10px] text-gray-500 font-mono">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-lg bg-[#0c0d15] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-50 animate-in zoom-in-95">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-xl bg-white/5 hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black text-white font-heading mb-1">
              Submit Customer Review
            </h3>
            <p className="text-xs text-gray-400 mb-5">
              Share your honest feedback about your ZALLEVE gadget purchase.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-medium mb-1.5">Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 text-2xl transition-transform hover:scale-115 cursor-pointer"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          star <= rating
                            ? 'text-amber-300 fill-amber-300'
                            : 'text-gray-700'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-amber-300 ml-2 font-mono">
                    {rating} / 5 Stars
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Daniyal Khan"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    className="w-full bg-[#141520] text-white p-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-white/30"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-1">City & Area</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Islamabad, F-10"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    className="w-full bg-[#141520] text-white p-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-white/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1">Headline</label>
                <input
                  type="text"
                  placeholder="e.g. Premium build and crystal-clear calls"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-full bg-[#141520] text-white p-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-white/30"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1">Your Review</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your audio clarity, build, packaging or COD delivery experience..."
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  className="w-full bg-[#141520] text-white p-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-white/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 stealth-btn-primary rounded-xl font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98"
              >
                <Send className="w-4 h-4 text-gray-950" />
                <span>Submit Verified Review</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
