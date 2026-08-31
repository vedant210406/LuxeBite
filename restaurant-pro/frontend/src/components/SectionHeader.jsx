import React from 'react';
import { Sparkles } from 'lucide-react';

const SectionHeader = ({ subtitle, title, description, center = true }) => {
  return (
    <div className={`space-y-3 mb-12 ${center ? 'text-center max-w-2xl mx-auto' : ''}`}>
      {subtitle && (
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold flex items-center justify-center space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>{subtitle}</span>
          <Sparkles className="w-3.5 h-3.5 text-gold" />
        </span>
      )}
      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          {title}
        </h2>
      )}
      <div className={`w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent ${center ? 'mx-auto' : ''}`} />
      {description && (
        <p className="text-sm text-gray-400 leading-relaxed font-light pt-1">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
