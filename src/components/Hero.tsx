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
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(14,165,233,0.08)_0%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-20 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6"
          >
            Travel Between <span className="text-brand-600">Suriname</span> & <span className="text-brand-600">The Netherlands</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            The smartest way to compare KLM and Surinam Airways. Find the best deals, track prices, and plan your journey with local expertise.
          </motion.p>
        </div>

        {/* Search Bar UI */}
        <motion.form 
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl shadow-brand-900/10 border border-slate-100 p-2 lg:p-4 max-w-5xl mx-auto relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            {/* From */}
            <div className={`flex flex-col px-4 py-3 rounded-2xl transition-all relative ${errors.from ? 'bg-red-50 ring-1 ring-red-200' : 'hover:bg-slate-50'}`}>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">From</label>
              <div className="flex items-center gap-2">
                <Plane className={`w-4 h-4 ${errors.from ? 'text-red-400' : 'text-brand-500'}`} />
                <input 
                  type="text" 
                  value={from}
                  onChange={(e) => {
                    setFrom(e.target.value);
                    if (errors.from) setErrors(prev => ({ ...prev, from: '' }));
                  }}
                  className="bg-transparent border-none p-0 focus:ring-0 font-medium text-slate-900 w-full placeholder:text-slate-300"
                  placeholder="Departure city"
                />
              </div>
              {errors.from && (
                <div className="absolute -bottom-6 left-4 flex items-center gap-1 text-[10px] font-bold text-red-500 uppercase tracking-tight">
                  <AlertCircle className="w-3 h-3" /> {errors.from}
                </div>
              )}
            </div>

            {/* Swap Icon */}
            <div className="hidden lg:flex items-center justify-center -mx-4 z-10">
              <button 
                type="button"
                onClick={swapLocations}
                className="bg-white border border-slate-100 shadow-sm rounded-full p-2 text-slate-400 hover:text-brand-600 hover:border-brand-600 transition-all active:scale-90"
              >
                <ArrowRightLeft className="w-4 h-4" />
              </button>
            </div>

            {/* To */}
            <div className={`flex flex-col px-4 py-3 rounded-2xl transition-all relative ${errors.to ? 'bg-red-50 ring-1 ring-red-200' : 'hover:bg-slate-50'}`}>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">To</label>
              <div className="flex items-center gap-2">
                <Plane className={`w-4 h-4 rotate-90 ${errors.to ? 'text-red-400' : 'text-brand-500'}`} />
                <input 
                  type="text" 
                  value={to}
                  onChange={(e) => {
                    setTo(e.target.value);
                    if (errors.to) setErrors(prev => ({ ...prev, to: '' }));
                  }}
                  className="bg-transparent border-none p-0 focus:ring-0 font-medium text-slate-900 w-full placeholder:text-slate-300"
                  placeholder="Destination city"
                />
              </div>
              {errors.to && (
                <div className="absolute -bottom-6 left-4 flex items-center gap-1 text-[10px] font-bold text-red-500 uppercase tracking-tight">
                  <AlertCircle className="w-3 h-3" /> {errors.to}
                </div>
              )}
            </div>

            {/* Dates */}
            <div className="flex flex-col px-4 py-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Dates</label>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-500" />
                <span className="font-medium text-slate-900">Oct 12 - Oct 26</span>
              </div>
            </div>

            {/* Passengers */}
            <div className="relative" ref={menuRef}>
              <div 
                onClick={() => setShowPassengerMenu(!showPassengerMenu)}
                className="flex flex-col px-4 py-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group"
              >
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Passengers</label>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-500" />
                  <span className="font-medium text-slate-900">{totalPassengers} Passenger{totalPassengers > 1 ? 's' : ''}</span>
                </div>
              </div>

              <AnimatePresence>
                {showPassengerMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-50"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-slate-900">Adults</p>
                          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Age 12+</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            type="button"
                            onClick={() => handlePassengerChange('adults', -1)}
                            className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-600 hover:text-brand-600 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-4 text-center font-bold text-slate-900">{passengers.adults}</span>
                          <button 
                            type="button"
                            onClick={() => handlePassengerChange('adults', 1)}
                            className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-600 hover:text-brand-600 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-slate-900">Children</p>
                          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Age 2-11</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            type="button"
                            onClick={() => handlePassengerChange('children', -1)}
                            className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-600 hover:text-brand-600 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-4 text-center font-bold text-slate-900">{passengers.children}</span>
                          <button 
                            type="button"
                            onClick={() => handlePassengerChange('children', 1)}
                            className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-600 hover:text-brand-600 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-slate-900">Infants</p>
                          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Under 2</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            type="button"
                            onClick={() => handlePassengerChange('infants', -1)}
                            className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-600 hover:text-brand-600 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-4 text-center font-bold text-slate-900">{passengers.infants}</span>
                          <button 
                            type="button"
                            onClick={() => handlePassengerChange('infants', 1)}
                            className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-600 hover:text-brand-600 transition-colors"
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
                className={`w-full h-full bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-2xl py-4 lg:py-0 transition-all shadow-lg shadow-brand-600/20 flex items-center justify-center gap-2 overflow-hidden relative ${isSearching ? 'opacity-80 cursor-not-allowed' : ''}`}
              >
                <AnimatePresence mode="wait">
                  {isSearching ? (
                    <motion.div 
                      key="loading"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Searching...</span>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="idle"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Search className="w-5 h-5" />
                      <span>Search Flights</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.form>

        {/* Quick Stats/Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400 text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            Real-time Price Tracking
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            Direct Airline Redirects
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            No Hidden Booking Fees
          </div>
        </div>
      </div>
    </section>
  );
};
