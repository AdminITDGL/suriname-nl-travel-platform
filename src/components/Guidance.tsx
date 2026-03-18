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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Travel Guidance & Expertise</h2>
            <p className="text-slate-600 text-lg">
              We go beyond flights. Our local experts provide the most up-to-date information for a seamless journey between the Netherlands and Suriname.
            </p>
          </div>
          <button className="bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-colors">
            All Travel Guides
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {guides.map((guide, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">
                {guide.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{guide.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{guide.description}</p>
              <div className="flex items-center gap-2 text-brand-600 font-bold text-sm group-hover:gap-3 transition-all">
                {guide.link} <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
