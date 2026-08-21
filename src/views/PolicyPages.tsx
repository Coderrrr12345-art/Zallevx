import React, { useState } from 'react';
import {
  ShieldCheck,
  RotateCcw,
  Truck,
  Lock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageSquare,
  FileText,
  PhoneCall,
  Clock,
  ArrowRight
} from 'lucide-react';

interface PolicyPagesProps {
  initialTab?: 'refund' | 'privacy' | 'shipping';
}

export const PolicyPages: React.FC<PolicyPagesProps> = ({ initialTab = 'refund' }) => {
  const [activeTab, setActiveTab] = useState<'refund' | 'privacy' | 'shipping'>(initialTab);

  return (
    <div id="policy-legal-pages" className="py-12 sm:py-16 bg-[#040406] min-h-screen text-slate-200 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Main Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-amber-400 text-xs font-medium uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>ZALLEVE Customer Care & Legal Terms</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Policies & Terms of Service
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Transparent, simple, and customer-first guidelines designed to ensure 100% confidence with every Cash-on-Delivery order.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/15 overflow-x-auto gap-2 sm:gap-4 no-scrollbar pb-1">
          <button
            onClick={() => setActiveTab('refund')}
            className={`pb-3.5 px-4 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'refund'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>7-Day Return & Replacement</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3.5 px-4 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacy Policy & Terms</span>
          </button>

          <button
            onClick={() => setActiveTab('shipping')}
            className={`pb-3.5 px-4 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'shipping'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Shipping & COD Terms</span>
          </button>
        </div>

        {/* TAB 1: 7-DAY RETURN & REPLACEMENT POLICY */}
        {activeTab === 'refund' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Top Banner Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090b14] border border-white/10 shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    7-Day Checking & Replacement Warranty
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5 font-normal">
                    Complete peace of mind for every tech purchase in Pakistan.
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed font-normal pt-2">
                At <strong className="text-white font-semibold">ZALLEVE</strong>, customer trust is our highest priority. We understand that ordering tech gadgets online requires total assurance. Every item dispatched from our warehouse includes an official <strong>7-Day Checking & Replacement Guarantee</strong>. If your product has a manufacturing flaw, we will replace it swiftly without hassle.
              </p>
            </div>

            {/* Covered vs Not Covered Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Covered Box */}
              <div className="p-6 rounded-3xl bg-[#090b14] border border-emerald-500/20 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-base border-b border-white/10 pb-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>What is Covered (Eligible for Free Replacement)</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 font-normal">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span><strong>Audio & Connectivity Defect:</strong> One or both earbud drivers not connecting or muted sound out of the box.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span><strong>Charging & Power Faults:</strong> Case or gadget failing to take power or charge correctly.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span><strong>Display & Touch Defect:</strong> Touchscreen unresponsiveness or dead pixels on smartwatches.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span><strong>Wrong Item Shipped:</strong> Unboxing an item different from your ordered product.</span>
                  </li>
                </ul>
              </div>

              {/* Not Covered Box */}
              <div className="p-6 rounded-3xl bg-[#090b14] border border-rose-500/20 space-y-4">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-base border-b border-white/10 pb-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>What is NOT Covered</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 font-normal">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span><strong>Accidental Damage:</strong> Physical drops, cracked casing, or crushed components.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span><strong>Water Submersion:</strong> Damage caused by liquid exposure beyond rated water resistance.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span><strong>Missing Packaging:</strong> Returns submitted without the original retail box or bundled cables.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span><strong>Unauthorized Repair:</strong> Products tampered with or modified by third-party technicians.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* How to Claim Step-by-Step */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090b14] border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-amber-400" />
                <span>Simple 3-Step Replacement Claim Process</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="p-5 rounded-2xl bg-[#0d0f1a] border border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center text-sm">
                    1
                  </div>
                  <h4 className="font-semibold text-white text-base">Record Video Evidence</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Capture a short 10-second video clearly showing the issue (e.g., charging cable plugged in or driver sound check).
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0d0f1a] border border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center text-sm">
                    2
                  </div>
                  <h4 className="font-semibold text-white text-base">Send to WhatsApp</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Send the video with your <strong className="text-white">Order ID</strong> to our WhatsApp support helpline at <strong className="text-amber-400">+92 322 2683373</strong>.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0d0f1a] border border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center text-sm">
                    3
                  </div>
                  <h4 className="font-semibold text-white text-base">Get Fresh Dispatch</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Upon quick verification, our logistics desk dispatches a fresh unit directly to your doorstep within 2-3 days!
                  </p>
                </div>

              </div>

              {/* Direct Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <div className="text-xs text-slate-300 font-normal">
                  Have a question about a return? Our support team is online 7 days a week.
                </div>
                <a
                  href="https://wa.me/923222683373?text=Hi%20Zalleve,%20I%20want%20to%20claim%20a%20replacement%20warranty."
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-amber-400 text-black hover:bg-amber-300 transition-all font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Claim Warranty on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: PRIVACY POLICY & TERMS OF SERVICE */}
        {activeTab === 'privacy' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Top Banner Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090b14] border border-white/10 shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Privacy Policy & Terms of Service
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5 font-normal">
                    Your personal information is always safe, encrypted, and protected.
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed font-normal pt-2">
                At <strong className="text-white font-semibold">ZALLEVE</strong>, we respect your privacy rights and guarantee complete confidentiality regarding your personal data. We collect only the minimum required information necessary to process, verify, and deliver your Cash-on-Delivery orders across Pakistan.
              </p>
            </div>

            {/* Structured Sections */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090b14] border border-white/10 space-y-8">
              
              {/* Section 1 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-base font-bold text-white border-b border-white/10 pb-2">
                  <FileText className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>1. Information We Collect</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  When you place an order on ZALLEVE, we collect only the following delivery details:
                </p>
                <ul className="space-y-2 text-sm text-slate-300 font-normal pl-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span><strong>Full Name & Phone Number:</strong> Needed for courier notification and delivery verification.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span><strong>Shipping Address & City:</strong> Used exclusively on courier waybills (TCS, Leopards, PostEx).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span><strong>Email Address (Optional):</strong> Used to send digital order receipts and shipment updates.</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-base font-bold text-white border-b border-white/10 pb-2">
                  <Lock className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>2. Zero Spam & Strict Data Protection</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  We enforce a strict <strong>Zero Third-Party Sharing Policy</strong>. Your personal contact number and address will never be sold, rented, or disclosed to third-party telemarketers or advertisers. You will only receive communication regarding your active orders or customer support inquiries.
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-base font-bold text-white border-b border-white/10 pb-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>3. Cash on Delivery (COD) Terms</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  All orders placed under Cash on Delivery require phone or WhatsApp verification prior to dispatch. Please ensure you provide an active phone number where courier riders can reach you upon arrival.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-base font-bold text-white border-b border-white/10 pb-2">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>4. Order Cancellation Policy</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  You can request an immediate order cancellation at no charge at any time before courier handoff. Once a parcel has been handed over to TCS/Leopards, cancellation is subject to courier processing steps.
                </p>
              </div>

              {/* Contact Footer */}
              <div className="p-4 rounded-2xl bg-[#0d0f1a] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white">Have Privacy Questions?</div>
                  <div className="text-xs text-slate-300 mt-0.5 font-normal">
                    Contact our legal & compliance desk at <strong className="text-white">support@zalleve.pk</strong>
                  </div>
                </div>
                <a
                  href="mailto:support@zalleve.pk"
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all border border-white/15"
                >
                  Send Email
                </a>
              </div>

            </div>

          </div>
        )}

        {/* TAB 3: SHIPPING & CASH ON DELIVERY POLICY */}
        {activeTab === 'shipping' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Top Banner Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090b14] border border-white/10 shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Shipping & Cash On Delivery Guidelines
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5 font-normal">
                    Fast courier dispatch via TCS, Leopards & PostEx across 200+ Pakistani cities.
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed font-normal pt-2">
                We partner with Pakistan's top courier logistics networks to ensure your orders arrive safely, on time, and fully insured.
              </p>
            </div>

            {/* Delivery Times & Charges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-3xl bg-[#090b14] border border-white/10 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span>Estimated Delivery Timelines</span>
                </h3>
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#0d0f1a] border border-white/10 space-y-1">
                    <div className="text-sm font-semibold text-white">Major Cities (2 - 3 Working Days)</div>
                    <div className="text-xs text-slate-300 font-normal">Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, Gujranwala, Sialkot.</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0d0f1a] border border-white/10 space-y-1">
                    <div className="text-sm font-semibold text-white">Other Cities & Tehsils (3 - 5 Working Days)</div>
                    <div className="text-xs text-slate-300 font-normal">All other towns, districts, and Azad Kashmir territories.</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#090b14] border border-white/10 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Truck className="w-5 h-5 text-amber-400" />
                  <span>Shipping Rates & Offers</span>
                </h3>
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#0d0f1a] border border-emerald-500/30 space-y-1">
                    <div className="text-sm font-semibold text-emerald-400">FREE Express Shipping</div>
                    <div className="text-xs text-slate-300 font-normal">Applies automatically to all orders valued at <strong className="text-white">PKR 3,000 or higher</strong>.</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0d0f1a] border border-white/10 space-y-1">
                    <div className="text-sm font-semibold text-white">Standard Delivery Fee (PKR 250)</div>
                    <div className="text-xs text-slate-300 font-normal">Flat nationwide courier fee applied to orders under PKR 3,000.</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
