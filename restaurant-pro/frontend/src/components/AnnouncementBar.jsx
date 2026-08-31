import React from 'react';
import { Sparkles, Phone, Clock, MapPin } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-black via-dark-card to-black text-xs text-gray-300 py-2 px-4 border-b border-gold/20 flex flex-wrap justify-between items-center z-50 relative">
      <div className="flex items-center space-x-6 mx-auto md:mx-0">
        <span className="flex items-center space-x-2 text-gold font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-gold" />
          <span>Awarded Michelin Star Fine Dining Sanctuary 2026</span>
        </span>
        <span className="hidden lg:flex items-center space-x-1.5 text-gray-400">
          <Clock className="w-3.5 h-3.5 text-gold" />
          <span>Mon - Sun: 5:00 PM - 11:30 PM</span>
        </span>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <span className="flex items-center space-x-1.5 hover:text-gold transition-colors cursor-pointer">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          <span>742 Fifth Avenue, New York, NY</span>
        </span>
        <a href="tel:+18005554726" className="flex items-center space-x-1.5 text-gold font-semibold hover:underline">
          <Phone className="w-3.5 h-3.5" />
          <span>+1 (800) 555-GRAND</span>
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
