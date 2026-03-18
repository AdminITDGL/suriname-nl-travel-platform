import React from 'react';
import { Mail, BellRing } from 'lucide-react';
import { motion } from 'motion/react';

export const LeadCapture = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-600 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl shadow-brand-600/20"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-900/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8">
              <BellRing className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Never miss a deal again.</h2>
            <p className="text-brand-100 text-lg mb-12">
              Join 12,000+ travelers receiving weekly price alerts and exclusive travel insights for the Suriname-Netherlands route.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-300" />
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-brand-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
              <button className="bg-white text-brand-600 font-bold px-8 py-4 rounded-2xl hover:bg-brand-50 transition-all shadow-lg">
                Notify Me
              </button>
            </form>
            <p className="mt-6 text-xs text-brand-200">
              No spam. Unsubscribe at any time. Your data is protected.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
