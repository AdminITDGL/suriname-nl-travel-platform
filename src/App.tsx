/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { FlightPreview } from './components/FlightPreview';
import { Features } from './components/Features';
import { Guidance } from './components/Guidance';
import { LeadCapture } from './components/LeadCapture';
import { Footer } from './components/Footer';
import { LeadFormModal } from './components/LeadFormModal';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShieldCheck, Globe2, Zap } from 'lucide-react';

const WhyUs = () => {
  // ... (WhyUs component content remains the same)
};

export default function App() {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showDeals, setShowDeals] = useState(false);
  const [searchData, setSearchData] = useState({ from: '', to: '' });
  const dealsRef = useRef<HTMLDivElement>(null);

  const handleSearchComplete = (data: { from: string; to: string }) => {
    setSearchData(data);
    setShowLeadForm(true);
  };

  const handleLeadSubmit = () => {
    setShowLeadForm(false);
    setShowDeals(true);
    // Scroll to deals after a short delay to allow for animation
    setTimeout(() => {
      dealsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      
      <main>
        <Hero onSearchComplete={handleSearchComplete} />
        
        <AnimatePresence>
          {showDeals && (
            <motion.div
              ref={dealsRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <FlightPreview />
            </motion.div>
          )}
        </AnimatePresence>

        <TrustSection />
        <Features />
        <Guidance />
        <WhyUs />
        <LeadCapture />
      </main>

      <Footer />

      <LeadFormModal 
        isOpen={showLeadForm} 
        onClose={() => {
          setShowLeadForm(false);
          setShowDeals(true); // Show deals even if cancelled for prototype
          setTimeout(() => {
            dealsRef.current?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        onSubmit={handleLeadSubmit}
        searchData={searchData}
      />

      {/* Investor Presentation Badge */}
      <div className="fixed bottom-6 right-6 z-[100] pointer-events-none">
        <div className="bg-slate-900/90 backdrop-blur text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 shadow-2xl">
          Visual Prototype Concept
        </div>
      </div>
    </div>
  );
}
