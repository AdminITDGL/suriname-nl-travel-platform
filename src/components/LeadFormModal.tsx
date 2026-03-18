import React from 'react';
import { X, Mail, User, Calendar, Plane, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  searchData: {
    from: string;
    to: string;
  };
}

export const LeadFormModal = ({ isOpen, onClose, onSubmit, searchData }: LeadFormModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Cancel Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Left Side - Visual/Info */}
              <div className="hidden md:flex md:col-span-2 bg-brand-600 p-10 flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid-modal" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-modal)" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Plane className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Unlock Best Deals</h3>
                  <p className="text-brand-100 text-sm leading-relaxed">
                    Enter your details to see the latest fares and receive exclusive price drop alerts for your route.
                  </p>
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <ShieldCheck className="w-5 h-5 text-brand-300" />
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <Calendar className="w-5 h-5 text-brand-300" />
                    <span>Real-time Updates</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="md:col-span-3 p-8 sm:p-10">
                <div className="mb-8">
                  <span className="text-brand-600 font-bold text-xs uppercase tracking-widest">Step 2 of 2</span>
                  <h2 className="text-2xl font-bold text-slate-900 mt-2">Almost there!</h2>
                  <p className="text-slate-500 text-sm mt-1">
                    Searching flights from <span className="font-bold text-slate-700">{searchData.from}</span> to <span className="font-bold text-slate-700">{searchData.to}</span>
                  </p>
                </div>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-brand-600/20 transition-all flex items-center justify-center gap-2 group"
                    >
                      Show Me The Deals
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[10px] text-center text-slate-400 mt-4 leading-relaxed px-4">
                      By clicking, you agree to receive price alerts. You can opt-out at any time.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
