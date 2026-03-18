import React from 'react';
import { Plane, Info, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-16 border-t border-slate-100 relative overflow-hidden">
      {/* Background visual - Premium Animated Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-500/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
              <div className="bg-brand-600 p-2 rounded-xl shadow-lg shadow-brand-600/20 group-hover:rotate-12 transition-transform duration-500">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">Suri<span className="text-brand-500">Fly</span></span>
            </div>
            <p className="text-slate-500 text-base leading-relaxed mb-10 font-medium">
              The premier flight comparison and travel intelligence platform dedicated to the Suriname-Netherlands corridor.
            </p>
            <div className="flex gap-5">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-500/50 hover:bg-brand-500/5 transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase text-[10px] tracking-[0.2em] text-slate-400">Platform</h4>
            <ul className="space-y-5 text-sm text-slate-500 font-black uppercase tracking-widest">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Search Flights</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Price Tracking</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Airline Comparison</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Travel Insights</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase text-[10px] tracking-[0.2em] text-slate-400">Resources</h4>
            <ul className="space-y-5 text-sm text-slate-500 font-black uppercase tracking-widest">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Entry Fee Guide</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Visa Information</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Travel Checklist</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Paramaribo Guide</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase text-[10px] tracking-[0.2em] text-slate-400">Contact</h4>
            <ul className="space-y-6 text-sm text-slate-500 font-medium">
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="group-hover:text-brand-600 transition-colors">support@surifly.com</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="group-hover:text-brand-600 transition-colors">+31 20 123 4567</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all shadow-sm">
                  <Info className="w-4 h-4" />
                </div>
                <span className="group-hover:text-brand-600 transition-colors">Amsterdam, Netherlands</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
            © 2026 SuriFly Platform. Visual Prototype for Investor Presentation.
          </p>
          <div className="flex gap-10 text-[10px] text-slate-400 font-black uppercase tracking-widest">
            <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
