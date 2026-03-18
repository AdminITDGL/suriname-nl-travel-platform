import React from 'react';
import { Bell, Lightbulb, TrendingUp, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Price Alerts",
    description: "Get notified the second fares drop for your preferred travel dates."
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Travel Insights",
    description: "Know when it's cheaper to fly via alternative dates or routes."
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Route Intelligence",
    description: "Historical data analysis to predict future price trends for Suriname."
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email Notifications",
    description: "Curated weekly deals and travel requirement updates in your inbox."
  }
];

export const Features = () => {
  return (
    <section className="py-32 bg-white text-slate-900 overflow-hidden relative">
      {/* Background visual - Premium Animated Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[150px] animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-brand-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              Smart Platform
            </motion.div>
            <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
              Technology that <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-accent-500">Works for You.</span>
            </h2>
            <p className="text-slate-500 text-xl mb-16 leading-relaxed font-medium">
              We don't just show prices; we analyze them. Our platform uses proprietary algorithms to track the specific Amsterdam-Paramaribo corridor, giving you the edge.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {features.map((f, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-2 tracking-tight">{f.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              className="bg-white/80 backdrop-blur-3xl border border-slate-100 rounded-[3rem] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] relative z-10"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">route_intelligence_v2.4</span>
              </div>
              
              <div className="space-y-8">
                <div className="h-4 bg-slate-50 rounded-full w-3/4" />
                <div className="h-40 bg-gradient-to-br from-brand-500/5 to-brand-600/5 rounded-3xl flex items-end p-6 gap-3 border border-slate-100">
                  {[40, 70, 45, 90, 65, 80, 50, 85, 95, 60].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 1.5, ease: "easeOut" }}
                      className="flex-1 bg-brand-500/20 rounded-t-lg group relative"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}%
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between items-center bg-slate-50 p-6 rounded-3xl border border-slate-100 backdrop-blur-md">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black mb-1">Predicted Trend</p>
                    <p className="text-xl font-black text-emerald-600">Price Drop Expected</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black mb-1">Confidence</p>
                    <p className="text-xl font-black text-slate-900">88%</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-500/5 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-500/5 blur-[120px] rounded-full -z-10 animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};
