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
    <section className="py-24 bg-brand-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-800/50 to-transparent -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-400 font-bold tracking-widest uppercase text-sm">Smart Platform</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-8 leading-tight">Technology that works for your wallet.</h2>
            <p className="text-brand-100/70 text-lg mb-12 leading-relaxed">
              We don't just show prices; we analyze them. Our platform uses proprietary algorithms to track the specific Amsterdam-Paramaribo corridor, giving you the edge.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-800 flex items-center justify-center flex-shrink-0 text-brand-400">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{f.title}</h4>
                    <p className="text-sm text-brand-100/60 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs font-mono text-brand-300">route_intelligence_v2.4</span>
              </div>
              
              <div className="space-y-6">
                <div className="h-4 bg-white/5 rounded-full w-3/4" />
                <div className="h-32 bg-gradient-to-br from-brand-500/20 to-brand-600/5 rounded-2xl flex items-end p-4 gap-2">
                  {[40, 70, 45, 90, 65, 80, 50, 85, 95, 60].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 1 }}
                      className="flex-1 bg-brand-500/40 rounded-t-sm"
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center bg-brand-800/50 p-4 rounded-xl border border-white/5">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-brand-400 font-bold">Predicted Trend</p>
                    <p className="text-lg font-bold text-emerald-400">Price Drop Expected</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-wider text-brand-400 font-bold">Confidence</p>
                    <p className="text-lg font-bold">88%</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500/20 blur-3xl rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-500/20 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
