import React from 'react';
import { CheckCircle2, ShieldCheck, Globe2, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Secure & Trusted",
    description: "We use bank-grade encryption and direct carrier APIs to ensure your data and bookings are always safe."
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "Route Specialists",
    description: "Unlike generic platforms, we focus 100% on the Suriname-Netherlands corridor, offering deeper insights."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-time Sync",
    description: "Our GDS integration ensures you see live availability and the most accurate pricing available."
  }
];

export const WhyUs = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-brand-500/30 transition-all group hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]"
            >
              <div className="w-16 h-16 bg-brand-500/10 rounded-2xl flex items-center justify-center mb-8 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{reason.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
