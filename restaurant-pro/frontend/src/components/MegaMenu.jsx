import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Wine, Sparkles, Award } from 'lucide-react';

const MegaMenu = ({ onClose }) => {
  const menuColumns = [
    {
      title: 'Culinary Categories',
      links: [
        { name: 'Culinary Starters', path: '/menu?category=Culinary+Starters', desc: 'Foie gras, Caviar & Amuse-bouche' },
        { name: 'Prime Steaks & Cuts', path: '/menu?category=Prime+Steaks', desc: 'A5 Wagyu & Dry-Aged Tomahawk' },
        { name: 'Artisan Pasta & Seafood', path: '/menu?category=Artisan+Pasta+%26+Seafood', desc: 'Truffle Tagliolini & King Crab' },
        { name: 'Chef Signature Specials', path: '/menu?category=Chef+Specials', desc: '24K Gold Venison & Confit Duck' },
        { name: 'Decadent Desserts', path: '/menu?category=Signature+Desserts', desc: 'Gold Chocolate Domes & Soufflés' }
      ]
    },
    {
      title: 'Grand Sommelier Cellar',
      links: [
        { name: 'Dom Pérignon & Champagne', path: '/menu?category=Sommelier+Cellar', desc: 'Grand Cru Vintage Selections' },
        { name: 'Bordeaux Premier Crus', path: '/menu?category=Sommelier+Cellar', desc: 'Château Margaux & Rothschild' },
        { name: 'Crafted Artisanal Cocktails', path: '/menu?category=Sommelier+Cellar', desc: 'Smoked Bourbon & Empress Gin' },
        { name: 'Gourmet Pantry Store', path: '/shop', desc: 'Truffle Oil, Aged Balsamic & Knives' }
      ]
    }
  ];

  return (
    <div 
      className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-2xl border-b border-gold/30 shadow-2xl p-8 transition-all duration-300 z-50 animate-fadeIn"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1 & 2: Links */}
        {menuColumns.map((col, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-gold font-serif text-sm uppercase tracking-widest border-b border-gold/20 pb-2 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>{col.title}</span>
            </h4>
            <ul className="space-y-3">
              {col.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className="group block p-2 rounded-lg hover:bg-gold/10 transition-all duration-200"
                  >
                    <div className="text-sm font-medium text-gray-200 group-hover:text-gold flex items-center justify-between">
                      <span>{link.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                    </div>
                    <p className="text-xs text-gray-500 group-hover:text-gray-400">{link.desc}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Column 3: Featured Dish Card */}
        <div className="bg-dark-card rounded-xl overflow-hidden border border-gold/20 p-4 flex flex-col justify-between group hover:border-gold/50 transition-all duration-300">
          <div className="relative h-36 overflow-hidden rounded-lg mb-3">
            <img 
              src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80&w=800" 
              alt="A5 Wagyu" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-2 left-2 bg-gold/90 text-black text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow">
              Chef Signature
            </div>
          </div>
          <div>
            <h5 className="font-serif text-gold text-base font-bold">Miyazaki A5 Wagyu</h5>
            <p className="text-xs text-gray-400 mt-1 line-clamp-2">Grilled over Binchotan charcoal with Fleur de Sel and wasabi butter.</p>
          </div>
          <Link
            to="/menu"
            onClick={onClose}
            className="mt-3 text-xs font-semibold text-gold flex items-center space-x-1 hover:underline"
          >
            <span>Explore Full Menu</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Column 4: Private Dining / Reservation Highlight */}
        <div className="bg-gradient-to-br from-gold/15 via-dark-elevated to-black rounded-xl p-5 border border-gold/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-gold mb-2">
              <Award className="w-5 h-5 text-gold" />
              <span className="text-xs uppercase tracking-widest font-bold">Private Wine Vault</span>
            </div>
            <h5 className="font-serif text-lg text-white font-semibold">Bespoke Dining Experience</h5>
            <p className="text-xs text-gray-300 mt-2 leading-relaxed">
              Reserve our subterranean wine vault surrounded by 3,000 vintage bottles for private celebrations.
            </p>
          </div>

          <Link
            to="/reservation"
            onClick={onClose}
            className="mt-4 inline-block text-center w-full py-2.5 px-4 bg-gold text-black font-semibold text-xs rounded uppercase tracking-wider hover:bg-gold-light transition-colors shadow-gold-glow"
          >
            Book VIP Table
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;
