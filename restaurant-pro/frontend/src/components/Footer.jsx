import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Twitter, Award } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black via-dark-card to-black text-gray-400 border-t border-gold/20 relative pt-16 pb-8 overflow-hidden">
      
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden border border-gold/30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative z-10 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold flex items-center justify-center space-x-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Join The VIP Gourmet Club</span>
            </span>
            <h3 className="font-serif text-2xl md:text-4xl text-white font-bold">
              Subscribe for Private Cellar Tasting Invites
            </h3>
            <p className="text-sm text-gray-300">
              Receive secret off-menu dish previews, chef invitations, and sommelier vintage releases straight to your inbox.
            </p>

            {subscribed ? (
              <div className="p-4 bg-gold/10 border border-gold rounded-lg text-gold font-semibold text-sm animate-fadeIn">
                ✨ Thank you for subscribing! Check your email for your welcome VIP pass.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 pt-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-black/60 border border-gold/30 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  type="submit"
                  className="py-3 px-6 bg-gold text-black font-semibold text-xs rounded-lg uppercase tracking-wider hover:bg-gold-light transition-colors shadow-gold-glow flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer Main Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
        
        {/* Col 1: Brand */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center bg-black">
              <Sparkles className="w-5 h-5 text-gold" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">GRAND</span>
              <span className="block text-[9px] uppercase tracking-[0.3em] text-gold -mt-1">RESTAURANT</span>
            </div>
          </Link>
          <p className="text-xs text-gray-400 leading-relaxed">
            Where culinary passion meets world-class gastronomy. Awarded 3 Michelin Stars for dry-aged steaks, artisan pasta, and rare cellar vintages.
          </p>
          <div className="flex items-center space-x-3 pt-2 text-gold">
            <Award className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">Michelin Guide 2026</span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4 className="font-serif text-white text-base font-bold mb-4 uppercase tracking-wider border-b border-gold/20 pb-2 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Culinary Heritage</Link></li>
            <li><Link to="/menu" className="hover:text-gold transition-colors">Michelin Menu</Link></li>
            <li><Link to="/reservation" className="hover:text-gold transition-colors">Book VIP Table</Link></li>
            <li><Link to="/shop" className="hover:text-gold transition-colors">Gourmet Pantry Shop</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition-colors">Chef Articles & News</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Sanctuary</Link></li>
          </ul>
        </div>

        {/* Col 3: Hours & Location */}
        <div>
          <h4 className="font-serif text-white text-base font-bold mb-4 uppercase tracking-wider border-b border-gold/20 pb-2 inline-block">
            Dining Hours
          </h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start space-x-2">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-200">Dinner Service</strong>
                <span>Mon - Sun: 5:00 PM - 11:30 PM</span>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-200">Wine Vault Lounge</strong>
                <span>Fri - Sun: 4:00 PM - 2:00 AM</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div>
          <h4 className="font-serif text-white text-base font-bold mb-4 uppercase tracking-wider border-b border-gold/20 pb-2 inline-block">
            Contact & Address
          </h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>742 Fifth Avenue, Manhattan, NY 10019</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:+18005554726" className="hover:text-gold transition-colors">+1 (800) 555-GRAND</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href="mailto:concierge@grandrestaurant.com" className="hover:text-gold transition-colors">concierge@grandrestaurant.com</a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 pt-5">
            <a href="#instagram" className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gray-300 hover:text-gold hover:border-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#facebook" className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gray-300 hover:text-gold hover:border-gold transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#twitter" className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gray-300 hover:text-gold hover:border-gold transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2026 Grand Restaurant. Inspired by Grand Restaurant v6. All Rights Reserved.</p>
        <p className="mt-2 sm:mt-0 text-gold font-medium">Crafted with Luxury & Precision</p>
      </div>

    </footer>
  );
};

export default Footer;
