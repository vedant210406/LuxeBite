import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, ChevronDown, Menu as MenuIcon, X, Sparkles, Shield, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import MegaMenu from './MegaMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAdmin, logout } = useAuth();
  const { totalItemCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setShowMegaMenu(false);
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menu', path: '/menu', isMega: true },
    { name: 'Reservation', path: '/reservation' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3' : 'bg-gradient-to-b from-black/80 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center bg-black/50 group-hover:border-gold transition-colors shadow-gold-glow">
            <Sparkles className="w-5 h-5 text-gold group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-gold transition-colors">
              GRAND
            </span>
            <span className="block text-[9px] uppercase tracking-[0.3em] text-gold font-light -mt-1">
              RESTAURANT
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => link.isMega && setShowMegaMenu(true)}
            >
              <Link
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors flex items-center space-x-1 ${
                  location.pathname === link.path ? 'text-gold font-semibold' : 'text-gray-300 hover:text-gold'
                }`}
              >
                <span>{link.name}</span>
                {link.isMega && (
                  <ChevronDown className={`w-3.5 h-3.5 text-gold transition-transform duration-200 ${showMegaMenu ? 'rotate-180' : ''}`} />
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center space-x-5">
          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gray-300 hover:text-gold transition-colors focus:outline-none"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-gold text-black font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                {totalItemCount}
              </span>
            )}
          </button>

          {/* User Auth links */}
          {user ? (
            <div className="flex items-center space-x-3">
              {isAdmin && (
                <Link
                  to="/admin"
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-full border border-gold/40 text-gold text-xs font-semibold hover:bg-gold/10 transition-colors"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Admin</span>
                </Link>
              )}
              <Link
                to="/dashboard"
                className="flex items-center space-x-1.5 text-xs text-gray-200 hover:text-gold font-medium"
              >
                <User className="w-4 h-4 text-gold" />
                <span>{user.name.split(' ')[0]}</span>
              </Link>
              <button
                onClick={logout}
                title="Logout"
                className="p-1 text-gray-400 hover:text-red-400 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-xs text-gray-300 hover:text-gold font-medium tracking-wide uppercase px-3 py-1.5 border border-gold/20 rounded hover:border-gold/60 transition-colors"
            >
              Sign In
            </Link>
          )}

          {/* Reservation Button */}
          <Link
            to="/reservation"
            className="py-2 px-5 bg-gold text-black font-semibold text-xs rounded uppercase tracking-wider hover:bg-gold-light transition-all shadow-gold-glow transform hover:-translate-y-0.5"
          >
            Book Table
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gray-300 hover:text-gold"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-gold text-black font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItemCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gold focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mega Menu Dropdown */}
      {showMegaMenu && <MegaMenu onClose={() => setShowMegaMenu(false)} />}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark/95 backdrop-blur-2xl border-b border-gold/30 px-6 py-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-base font-medium text-gray-200 hover:text-gold py-1 border-b border-gray-800"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 flex flex-col space-y-3">
            {user ? (
              <>
                <Link to="/dashboard" className="text-sm text-gold font-medium flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>My Dashboard ({user.name})</span>
                </Link>
                {isAdmin && (
                  <Link to="/admin" className="text-sm text-gold font-medium flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Admin Panel</span>
                  </Link>
                )}
                <button onClick={logout} className="text-sm text-red-400 text-left">
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/login" className="text-sm text-gray-300 hover:text-gold">
                Sign In / Register
              </Link>
            )}
            <Link
              to="/reservation"
              className="w-full text-center py-2.5 bg-gold text-black font-semibold text-xs rounded uppercase tracking-wider"
            >
              Book A Table
            </Link>
          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;
