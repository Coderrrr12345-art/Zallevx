import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

const FAQS = [
  {
    q: 'How long does nationwide delivery take in Pakistan?',
    a: 'We dispatch via TCS, Leopards, and PostEx. Delivery to major cities (Karachi, Lahore, Islamabad, Rawalpindi) takes 2-3 working days. Remote areas take 3-4 working days.'
  },
  {
    q: 'Can I check the parcel before paying rider?',
    a: 'Couriers have a standard sealed-delivery protocol. However, ZALLEVE provides an official 7-Day Checking & Replacement Warranty. Once received, you can unbox and test thoroughly. If there is any defect, we replace it immediately.'
  },
  {
    q: 'How do I claim my 7-day replacement warranty?',
    a: 'Simply WhatsApp our support team at +92 322 2683373 with your order number and video of the issue. Our support team will arrange a free exchange parcel for you.'
  },
  {
    q: 'Do you offer free shipping?',
    a: 'Yes! All orders above PKR 3,000 qualify for 100% FREE express shipping anywhere in Pakistan.'
  }
];

export const ContactPage: React.FC = () => {
  const { showToast } = useShop();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    showToast('Your message has been received! Our support team will contact you shortly.');
  };

  return (
    <div id="contact-us-page" className="py-12 bg-[#040406] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-widest font-mono">
            24/7 CUSTOMER CARE
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            We are Here to Assist
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Have questions about an earbud model, watch compatibility, or an active order? Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Contact Methods */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="p-6 rounded-3xl bg-[#090a10] border border-white/15 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 text-white flex items-center justify-center border border-white/10">
                  <MessageCircle className="w-6 h-6 text-slate-200" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Instant WhatsApp Helpline</h3>
                  <p className="text-[11px] text-slate-300 font-semibold font-mono">Average response: 3 Minutes</p>
                </div>
              </div>
              <p className="text-xs text-slate-300">
                Get order tracking updates, product sound samples, and replacement support directly from our senior tech specialists.
              </p>
              <a
                href="https://wa.me/923222683373?text=Hi,%20I%20need%20help%20with%20my%20Zalleve%20order"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-white hover:bg-slate-200 text-black font-semibold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>Chat on +92 322 2683373</span>
              </a>
            </div>

            {/* Support Info Cards */}
            <div className="p-6 rounded-3xl bg-[#090a10] border border-white/10 space-y-4 shadow-md font-mono">
              <div className="flex items-center gap-3 text-xs text-slate-200">
                <Mail className="w-4 h-4 text-slate-300 shrink-0" />
                <span>support@zalleve.pk</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-200">
                <Clock className="w-4 h-4 text-slate-300 shrink-0" />
                <span>Monday - Sunday: 10:00 AM – 11:00 PM PKT</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-200">
                <MapPin className="w-4 h-4 text-slate-300 shrink-0" />
                <span>Gulshan-e-Iqbal, Karachi, Sindh, Pakistan</span>
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090a10] border border-white/10 space-y-6 shadow-xl">
              <h2 className="text-lg font-bold text-white">Send Us a Direct Message</h2>

              {isSent ? (
                <div className="p-6 rounded-2xl bg-white/5 border border-white/15 text-center space-y-2">
                  <div className="text-sm font-bold text-white">Message Received!</div>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out to ZALLEVE. Our representative will contact you via WhatsApp or Email within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Soban Saud"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#11121c] text-white p-3 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">Mobile / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="0322 1234567"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#11121c] text-white p-3 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Subject / Order ID</label>
                    <input
                      type="text"
                      placeholder="e.g. Order Tracking #ZL-123456"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#11121c] text-white p-3 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we help you today?"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#11121c] text-white p-3 rounded-xl border border-white/10 focus:border-white/30 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-white hover:bg-slate-200 text-black rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all"
                  >
                    <Send className="w-4 h-4 text-black" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="pt-8">
          <h2 className="text-xl font-bold text-white text-center mb-6">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#090a10] border border-white/10 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-white hover:text-slate-200 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-slate-300 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openFaq === idx ? 'rotate-180 text-white' : 'text-gray-500'}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-xs text-slate-300 leading-relaxed border-t border-white/5 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
