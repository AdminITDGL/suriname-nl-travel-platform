import React from 'react';
import { Plane, Clock, Luggage, ChevronRight, ExternalLink } from 'lucide-react';
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
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Live Comparison Preview</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Current Deals for Oct 12</h2>
          </div>
          <button className="text-brand-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            View all 14 options <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-6">
          {mockFlights.map((flight, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 hover:border-brand-500 transition-all hover:shadow-xl hover:shadow-brand-900/5 relative overflow-hidden"
            >
              {flight.tag && (
                <div className="absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                  {flight.tag}
                </div>
              )}
              
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Airline Info */}
                <div className="flex items-center gap-4 w-full lg:w-64">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                    <img src={flight.logo} alt={flight.airline} className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight">{flight.airline}</h4>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Flight PY993</span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex-1 flex items-center justify-between w-full">
                  <div className="text-center lg:text-left">
                    <span className="text-2xl font-bold text-slate-900">{flight.departure}</span>
                    <p className="text-sm text-slate-500 font-medium">AMS</p>
                  </div>

                  <div className="flex-1 px-8 flex flex-col items-center">
                    <span className="text-xs text-slate-400 font-medium mb-2">{flight.duration}</span>
                    <div className="relative w-full h-px bg-slate-200">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                        <Plane className="w-4 h-4 text-slate-300" />
                      </div>
                    </div>
                    <span className="text-xs text-emerald-600 font-bold mt-2 uppercase tracking-widest">{flight.type}</span>
                  </div>

                  <div className="text-center lg:text-right">
                    <span className="text-2xl font-bold text-slate-900">{flight.arrival}</span>
                    <p className="text-sm text-slate-500 font-medium">PBM</p>
                  </div>
                </div>

                {/* Details & Price */}
                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 w-full lg:w-48 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Luggage className="w-4 h-4" />
                    <span>{flight.baggage}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-medium">From</span>
                    <p className="text-3xl font-bold text-slate-900">{flight.price}</p>
                  </div>
                  <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-600 transition-colors flex items-center gap-2">
                    View Deal <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
