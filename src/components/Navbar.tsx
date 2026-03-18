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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-brand-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">Suri<span className="text-brand-600">Fly</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="#" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Search</a>
          <a href="#" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Compare</a>
          <a href="#" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Travel Guides</a>
          <a href="#" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors">Insights</a>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-brand-600 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-brand-600 transition-all shadow-lg shadow-slate-900/10">
            Sign In
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
