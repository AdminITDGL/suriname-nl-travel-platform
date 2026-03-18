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
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Compare Flights. Find the Best Deals. Travel Smarter.</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We specialize exclusively in the corridor between the Netherlands and Suriname, providing unparalleled route intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {props.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
