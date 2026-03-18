import React from 'react';
import { ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

const props = [
  {
    icon: <Zap className="w-6 h-6 text-brand-600" />,
    title: "Best Price Comparison",
    description: "Instantly compare the two main carriers for the AMS-PBM route to find the lowest fare."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-600" />,
    title: "Trusted Airlines",
    description: "Direct links to KLM and Surinam Airways official booking platforms for your security."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-brand-600" />,
    title: "Smart Travel Insights",
    description: "Data-driven advice on the best time to book based on historical route performance."
  }
];

export const TrustSection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background visual - Premium Animated Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-brand-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
            </span>
            Route Intelligence
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">
            Compare Flights. <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-accent-500">Find Deals.</span> <br />
            Travel Smarter.
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
            We specialize exclusively in the corridor between the Netherlands and Suriname, providing unparalleled route intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {props.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-500/30 transition-all hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]"
            >
              <div className="w-16 h-16 bg-brand-500/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-brand-500/10">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8 text-brand-600 group-hover:text-white transition-colors" })}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
