import React, { useState, useRef, useEffect } from 'react';
import { Plane, Search, Calendar, Users, ArrowRightLeft, Plus, Minus, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onSearchComplete: (data: { from: string; to: string }) => void;
}

export const Hero = ({ onSearchComplete }: HeroProps) => {
  const [from, setFrom] = useState('Amsterdam (AMS)');
  const [to, setTo] = useState('Paramaribo (PBM)');
  const [isSearching, setIsSearching] = useState(false);
  const [showPassengerMenu, setShowPassengerMenu] = useState(false);
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowPassengerMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePassengerChange = (type: keyof typeof passengers, delta: number) => {
    setPassengers(prev => ({
      ...prev,
      [type]: Math.max(type === 'adults' ? 1 : 0, prev[type] + delta)
    }));
  };

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!from.trim()) newErrors.from = 'Departure city is required';
    if (!to.trim()) newErrors.to = 'Destination city is required';
    if (from.toLowerCase() === to.toLowerCase()) newErrors.to = 'Cities must be different';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSearching(true);
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSearching(false);
    onSearchComplete({ from, to });
  };

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background visual - Premium Animated Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-accent-500/10 rounded-full blur-[150px] animate-pulse delay-700" />
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-20 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-premium" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-premium)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-brand-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
            </span>
            Premium Route Intelligence
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]"
          >
            The Bridge Between <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 via-brand-600 to-accent-600">Continents.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Experience the most sophisticated flight comparison engine for the Amsterdam ⇄ Paramaribo corridor. Data-driven insights for the modern traveler.
          </motion.p>
        </div>

        {/* Search Bar UI - Glassmorphism */}
        <motion.form 
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] p-3 lg:p-5 max-w-6xl mx-auto relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-white/40"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* From */}
            <div className={`flex flex-col px-6 py-4 rounded-3xl transition-all relative ${errors.from ? 'bg-red-50 ring-1 ring-red-200' : 'hover:bg-slate-50'}`}>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Departure</label>
              <div className="flex items-center gap-3">
                <Plane className={`w-5 h-5 ${errors.from ? 'text-red-500' : 'text-brand-500'}`} />
                <input 
                  type="text" 
                  value={from}
                  onChange={(e) => {
                    setFrom(e.target.value);
                    if (errors.from) setErrors(prev => ({ ...prev, from: '' }));
                  }}
                  className="bg-transparent border-none p-0 focus:ring-0 font-bold text-lg text-slate-900 w-full placeholder:text-slate-300"
                  placeholder="From where?"
                />
              </div>
              {errors.from && (
                <div className="absolute -bottom-6 left-6 flex items-center gap-1 text-[10px] font-bold text-red-500 uppercase tracking-tight">
                  <AlertCircle className="w-3 h-3" /> {errors.from}
                </div>
              )}
            </div>

            {/* Swap Icon */}
            <div className="hidden lg:flex items-center justify-center -mx-6 z-10">
              <button 
                type="button"
                onClick={swapLocations}
                className="bg-white border border-slate-200 shadow-xl rounded-full p-3 text-slate-400 hover:text-brand-600 hover:border-brand-600 transition-all active:scale-90 group"
              >
                <ArrowRightLeft className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              </button>
            </div>

            {/* To */}
            <div className={`flex flex-col px-6 py-4 rounded-3xl transition-all relative ${errors.to ? 'bg-red-50 ring-1 ring-red-200' : 'hover:bg-slate-50'}`}>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Destination</label>
              <div className="flex items-center gap-3">
                <Plane className={`w-5 h-5 rotate-90 ${errors.to ? 'text-red-500' : 'text-brand-500'}`} />
                <input 
                  type="text" 
                  value={to}
                  onChange={(e) => {
                    setTo(e.target.value);
                    if (errors.to) setErrors(prev => ({ ...prev, to: '' }));
                  }}
                  className="bg-transparent border-none p-0 focus:ring-0 font-bold text-lg text-slate-900 w-full placeholder:text-slate-300"
                  placeholder="To where?"
                />
              </div>
              {errors.to && (
                <div className="absolute -bottom-6 left-6 flex items-center gap-1 text-[10px] font-bold text-red-500 uppercase tracking-tight">
                  <AlertCircle className="w-3 h-3" /> {errors.to}
                </div>
              )}
            </div>

            {/* Dates */}
            <div className="flex flex-col px-6 py-4 rounded-3xl hover:bg-slate-50 transition-colors cursor-pointer group">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Travel Dates</label>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-brand-500" />
                <span className="font-bold text-lg text-slate-900">Oct 12 - Oct 26</span>
              </div>
            </div>

            {/* Passengers */}
            <div className="relative" ref={menuRef}>
              <div 
                onClick={() => setShowPassengerMenu(!showPassengerMenu)}
                className="flex flex-col px-6 py-4 rounded-3xl hover:bg-slate-50 transition-colors cursor-pointer group"
              >
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Travelers</label>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-brand-500" />
                  <span className="font-bold text-lg text-slate-900">{totalPassengers} Passenger{totalPassengers > 1 ? 's' : ''}</span>
                </div>
              </div>

              <AnimatePresence>
                {showPassengerMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-4 w-72 bg-white border border-slate-200 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-6 z-50 backdrop-blur-xl"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-black text-slate-900">Adults</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Age 12+</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <button 
                            type="button"
                            onClick={() => handlePassengerChange('adults', -1)}
                            className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-500 hover:text-brand-500 transition-all"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-4 text-center font-black text-slate-900">{passengers.adults}</span>
                          <button 
                            type="button"
                            onClick={() => handlePassengerChange('adults', 1)}
                            className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-500 hover:text-brand-500 transition-all"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-black text-slate-900">Children</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Age 2-11</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <button 
                            type="button"
                            onClick={() => handlePassengerChange('children', -1)}
                            className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-500 hover:text-brand-500 transition-all"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-4 text-center font-black text-slate-900">{passengers.children}</span>
                          <button 
                            type="button"
                            onClick={() => handlePassengerChange('children', 1)}
                            className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-500 hover:text-brand-500 transition-all"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-black text-slate-900">Infants</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Under 2</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <button 
                            type="button"
                            onClick={() => handlePassengerChange('infants', -1)}
                            className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-500 hover:text-brand-500 transition-all"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-4 text-center font-black text-slate-900">{passengers.infants}</span>
                          <button 
                            type="button"
                            onClick={() => handlePassengerChange('infants', 1)}
                            className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-500 hover:text-brand-500 transition-all"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search Button */}
            <div className="lg:col-span-1 flex items-center p-2">
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSearching}
                className={`w-full h-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-black rounded-2xl py-5 lg:py-0 transition-all shadow-[0_20px_40px_-10px_rgba(14,165,233,0.3)] flex items-center justify-center gap-3 overflow-hidden relative ${isSearching ? 'opacity-80 cursor-not-allowed' : ''}`}
              >
                <AnimatePresence mode="wait">
                  {isSearching ? (
                    <motion.div 
                      key="loading"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center gap-3"
                    >
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span className="uppercase tracking-widest text-sm">Analyzing...</span>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="idle"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center gap-3"
                    >
                      <Search className="w-6 h-6" />
                      <span className="uppercase tracking-widest text-sm">Explore Deals</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.form>

        {/* Quick Stats/Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Live GDS Sync
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse delay-300" />
            Direct Carrier API
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse delay-700" />
            Price Protection
          </div>
        </div>
      </div>
    </section>
  );
};
