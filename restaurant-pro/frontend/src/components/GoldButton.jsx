import React from 'react';
import { Link } from 'react-router-dom';

const GoldButton = ({ children, to, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-gold text-black hover:bg-gold-light shadow-gold-glow",
    outline: "bg-transparent text-gold border border-gold/50 hover:bg-gold/15 hover:border-gold",
    dark: "bg-dark-elevated text-gray-200 border border-gold/20 hover:border-gold hover:text-gold"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default GoldButton;
