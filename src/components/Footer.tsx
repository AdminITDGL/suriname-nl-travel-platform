import React from 'react';
import { Plane, Info, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Suri<span className="text-brand-600">Fly</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              The premier flight comparison and travel intelligence platform dedicated to the Suriname-Netherlands corridor.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Search Flights</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Price Tracking</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Airline Comparison</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Travel Insights</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Entry Fee Guide</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Visa Information</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Travel Checklist</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Paramaribo Guide</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-medium">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-600" />
                <span>support@surifly.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-600" />
                <span>+31 20 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Info className="w-4 h-4 text-brand-600" />
                <span>Amsterdam, Netherlands</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs">
            © 2026 SuriFly Platform. All rights reserved. Visual Prototype for Investor Presentation.
          </p>
          <div className="flex gap-8 text-xs text-slate-400 font-medium">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
            <a href="#" className="hover:text-slate-600">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
