import React from 'react';
import { Mail, BellRing } from 'lucide-react';
import { motion } from 'motion/react';

export const LeadCapture = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background visual - Premium Animated Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(14,165,233,0.3)] border border-white/10"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-[80px]" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-10 border border-white/20 shadow-2xl"
            >
              <BellRing className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-[0.9]">
              Never Miss <br />
              <span className="text-brand-200">a Deal Again.</span>
            </h2>
            <p className="text-brand-100 text-xl mb-16 leading-relaxed font-medium max-w-2xl mx-auto">
              Join 12,000+ travelers receiving weekly price alerts and exclusive travel insights for the Suriname-Netherlands route.
            </p>

            <form className="flex flex-col sm:flex-row gap-5 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-1 relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-300 group-focus-within:text-white transition-colors" />
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white/10 border border-white/20 rounded-[2rem] py-5 pl-14 pr-6 text-white placeholder:text-brand-200 focus:outline-none focus:ring-4 focus:ring-white/20 focus:bg-white/20 transition-all font-medium text-lg"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-600 font-black uppercase tracking-widest text-xs px-10 py-5 rounded-[2rem] hover:bg-brand-50 transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)]"
              >
                Notify Me
              </motion.button>
            </form>
            <p className="mt-10 text-[10px] text-brand-200 font-black uppercase tracking-[0.2em] opacity-60">
              No spam. Unsubscribe at any time. Your data is protected.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
