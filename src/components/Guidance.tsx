import React from 'react';
import { FileText, CreditCard, CheckCircle2, Map, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const guides = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Entry Fee (Toeristenkaart)",
    description: "Everything you need to know about the mandatory entry fee for Suriname.",
    link: "Learn more"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Visa Requirements",
    description: "Detailed guide for different nationalities and stay durations.",
    link: "Check visa"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Travel Checklist",
    description: "Don't forget the essentials. A curated list for your trip to the tropics.",
    link: "View list"
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Plan Your Trip",
    description: "Discover the best spots in Paramaribo and the interior rainforest.",
    link: "Explore map"
  }
];

export const Guidance = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background visual - Premium Animated Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-brand-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              Expert Guidance
            </motion.div>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-[0.9]">
              Travel Guidance <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-accent-500">& Expertise.</span>
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">
              We go beyond flights. Our local experts provide the most up-to-date information for a seamless journey between the Netherlands and Suriname.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-950 text-white border border-slate-900 px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-brand-600 transition-all shadow-xl shadow-slate-950/20"
          >
            All Travel Guides
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {guides.map((guide, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="group p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:border-brand-500/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] transition-all cursor-pointer relative overflow-hidden"
            >
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 bg-slate-100 rounded-3xl shadow-sm flex items-center justify-center mb-8 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 border border-slate-200 group-hover:border-brand-500">
                {guide.icon}
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{guide.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">{guide.description}</p>
              <div className="flex items-center gap-3 text-brand-600 font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                {guide.link} <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
