import React, { useState, useEffect } from 'react';
import { Plane, Menu, X, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-lg shadow-black/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="bg-brand-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-brand-600/20">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <span className={`text-2xl font-black tracking-tighter transition-colors text-slate-900`}>
            Suri<span className="text-brand-500">Fly</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {['Search', 'Compare', 'Travel Guides', 'Insights'].map((item) => (
            <a 
              key={item}
              href="#" 
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand-500 text-slate-600`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className={`p-2 transition-colors relative text-slate-400 hover:text-brand-600`}>
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <button className={`px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl bg-slate-950 text-white hover:bg-brand-600 shadow-slate-950/10`}>
            Sign In
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 transition-colors text-slate-900`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <a href="#" className="text-lg font-bold text-slate-900">Search Flights</a>
              <a href="#" className="text-lg font-bold text-slate-900">Airline Comparison</a>
              <a href="#" className="text-lg font-bold text-slate-900">Travel Guides</a>
              <a href="#" className="text-lg font-bold text-slate-900">Price Alerts</a>
              <hr className="border-slate-100" />
              <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
