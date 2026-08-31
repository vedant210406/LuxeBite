import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, ArrowLeft } from 'lucide-react';
import GoldButton from '../components/GoldButton';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-dark text-gray-100 flex items-center justify-center p-4 pt-28 pb-20">
      <div className="glass-card rounded-3xl p-10 sm:p-16 border border-gold/30 shadow-2xl text-center max-w-xl w-full space-y-6">
        
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-25" />
          <div className="w-24 h-24 rounded-full border-2 border-gold flex items-center justify-center bg-black/80 text-gold shadow-gold-glow">
            <Compass className="w-12 h-12" />
          </div>
        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center justify-center space-x-2">
          <Sparkles className="w-4 h-4 text-gold" />
          <span>Sanctuary Navigation Error</span>
        </span>

        <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white">404</h1>
        <h2 className="font-serif text-2xl font-semibold text-gold">Destination Course Not Found</h2>
        
        <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
          The fine dining path you are attempting to access has moved or exists only in culinary dreams.
        </p>

        <div className="pt-4">
          <GoldButton to="/" variant="primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Sanctuary Home
          </GoldButton>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
