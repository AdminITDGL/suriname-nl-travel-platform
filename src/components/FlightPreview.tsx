import React from 'react';
import { Plane, Clock, Luggage, ChevronRight, ExternalLink, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const mockFlights = [
  {
    airline: "KLM Royal Dutch Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/1200px-KLM_logo.svg.png",
    price: "€842",
    departure: "10:20",
    arrival: "14:45",
    duration: "9h 25m",
    type: "Direct",
    baggage: "1x 23kg included",
    tag: "Best Value"
  },
  {
    airline: "Surinam Airways",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Surinam_Airways_logo.svg/1200px-Surinam_Airways_logo.svg.png",
    price: "€795",
    departure: "11:50",
    arrival: "16:30",
    duration: "9h 40m",
    type: "Direct",
    baggage: "2x 23kg included",
    tag: "Cheapest"
  }
];

export const FlightPreview = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-preview-light" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="black" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-preview-light)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
            >
              <Zap className="w-3 h-3" /> Live Market Intelligence
            </motion.div>
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              Premium Deals for <br />
              <span className="text-brand-500">Your Next Journey.</span>
            </h2>
          </div>
          <button className="group flex items-center gap-4 text-slate-400 font-bold hover:text-slate-900 transition-all">
            <span className="border-b-2 border-slate-100 group-hover:border-brand-500 pb-1 transition-all">Explore all 24 combinations</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {mockFlights.map((flight, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50 border border-slate-100 rounded-[3rem] p-8 lg:p-12 hover:border-brand-500/30 transition-all hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              {/* Premium Accent Line */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {flight.tag && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-accent-500 to-accent-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 rounded-bl-3xl shadow-2xl">
                  {flight.tag}
                </div>
              )}
              
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Airline Info */}
                <div className="flex items-center gap-8 w-full lg:w-80">
                  <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-white rounded-3xl p-4 group-hover:bg-brand-50 transition-colors shadow-sm border border-slate-100">
                    <img src={flight.logo} alt={flight.airline} className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 leading-tight mb-2">{flight.airline}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Flight PY993</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">On Time</span>
                    </div>
                  </div>
                </div>

                {/* Timeline - Premium Visual */}
                <div className="flex-1 flex items-center justify-between w-full relative">
                  <div className="text-center lg:text-left">
                    <span className="text-4xl font-black text-slate-900 block mb-2">{flight.departure}</span>
                    <p className="text-[10px] text-slate-500 font-black tracking-[0.2em]">AMS • AMSTERDAM</p>
                  </div>

                  <div className="flex-1 px-16 flex flex-col items-center relative">
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-6">{flight.duration}</span>
                    
                    <div className="w-full h-[3px] bg-slate-200 relative rounded-full">
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full" 
                      />
                      <motion.div 
                        initial={{ left: 0 }}
                        whileInView={{ left: '100%' }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2.5 rounded-full shadow-xl border border-slate-100"
                      >
                        <Plane className="w-5 h-5 text-brand-600" />
                      </motion.div>
                    </div>
                    
                    <span className="text-[10px] text-brand-600 font-black mt-6 uppercase tracking-[0.3em] bg-brand-500/10 border border-brand-500/20 px-4 py-1.5 rounded-full">{flight.type}</span>
                  </div>

                  <div className="text-center lg:text-right">
                    <span className="text-4xl font-black text-slate-900 block mb-2">{flight.arrival}</span>
                    <p className="text-[10px] text-slate-500 font-black tracking-[0.2em]">PBM • PARAMARIBO</p>
                  </div>
                </div>

                {/* Details & Price - Dashboard Style */}
                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-8 w-full lg:w-64 border-t lg:border-t-0 lg:border-l border-slate-100 pt-10 lg:pt-0 lg:pl-16">
                  <div className="flex items-center gap-4 text-slate-500">
                    <Luggage className="w-6 h-6 text-brand-500" />
                    <span className="text-sm font-black">{flight.baggage}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">Total Fare</span>
                    <p className="text-5xl font-black text-slate-900 tracking-tighter">{flight.price}</p>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-600 text-white px-10 py-5 rounded-3xl font-black hover:bg-brand-500 transition-all shadow-[0_20px_40px_-10px_rgba(14,165,233,0.3)] flex items-center gap-3 group/btn uppercase tracking-widest text-xs"
                  >
                    Select Flight <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
