import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Award, Star, Calendar, Utensils, ShieldCheck, Flame, ChevronRight, Play } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GoldButton from '../components/GoldButton';
import FoodModal from '../components/FoodModal';
import { menuService } from '../services/api';
import { initialChefs, initialTestimonials } from '../../../backend/utils/seedData.js';

const Home = () => {
  const [featuredDishes, setFeaturedDishes] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);
  const [activeCategoryTab, setActiveCategoryTab] = useState('All');

  useEffect(() => {
    menuService.getItems({ isFeatured: true })
      .then(res => setFeaturedDishes(res.data))
      .catch(() => {
        // Fallback
        setFeaturedDishes([]);
      });
  }, []);

  const categories = [
    { title: 'Prime Steaks', count: '5 Specialties', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800' },
    { title: 'Culinary Starters', count: '5 Amuse-bouche', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800' },
    { title: 'Artisan Pasta', count: '5 Ribbons', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800' },
    { title: 'Signature Desserts', count: '5 Confections', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="min-h-screen bg-dark text-gray-100 overflow-x-hidden">
      
      {/* 1. Fullscreen Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920" 
            alt="Grand Restaurant Interior"
            className="w-full h-full object-cover scale-105 filter brightness-50 contrast-125 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold/40 bg-black/50 backdrop-blur-md text-gold text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Awarded 3 Michelin Stars 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            Where Culinary Passion Meets <br />
            <span className="text-gold-gradient italic font-serif">Gold Perfection</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Indulge in A5 Miyazaki Wagyu, hand-rolled black truffle pastas, and rare vintage cellar pairings curated by Executive Chef Lucian Vance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <GoldButton to="/reservation" variant="primary">
              <Calendar className="w-4 h-4 mr-2" />
              Book Table Sanctuary
            </GoldButton>
            <GoldButton to="/menu" variant="outline">
              <Utensils className="w-4 h-4 mr-2" />
              Explore Tasting Menu
            </GoldButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase tracking-widest text-gold">Scroll Down</span>
          <div className="w-5 h-9 rounded-full border border-gold/40 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. Welcome Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Images Grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-2xl overflow-hidden border border-gold/30 shadow-luxury">
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" 
                  alt="Fine Dish" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="h-44 rounded-2xl overflow-hidden border border-gold/20">
                <img 
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800" 
                  alt="Wine Cellar" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-44 rounded-2xl overflow-hidden border border-gold/20">
                <img 
                  src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800" 
                  alt="Gold Dessert" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="h-64 rounded-2xl overflow-hidden border border-gold/30 shadow-luxury">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800" 
                  alt="Executive Chef" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Badge overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 border-2 border-gold rounded-full p-5 shadow-gold-glow text-center">
              <span className="block font-serif text-2xl font-bold text-gold">25+</span>
              <span className="text-[9px] uppercase tracking-widest text-gray-300">Years Mastery</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <SectionHeader
              subtitle="Our Culinary Philosophy"
              title="A Grand Legacy of Fine Gastronomy"
              description="Founded under the direction of 3-Michelin star Chef Lucian Vance, Grand Restaurant blends classical French technique with avant-garde modern execution."
              center={false}
            />
            
            <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-light">
              <p>
                Every ingredient entering our kitchen is hand-selected: A5 Miyazaki Wagyu flown directly from Japan, wild black truffles harvested in Provence, and 200-year-old single estate olive oils.
              </p>
              <p>
                Our subterranean Wine Vault houses over 3,000 vintage bottles under the guardianship of Head Sommelier Antoine Dubois.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gold/20">
              <div>
                <h4 className="font-serif text-gold text-lg font-bold">100% Organic</h4>
                <p className="text-xs text-gray-400">Farm-to-Table Freshness</p>
              </div>
              <div>
                <h4 className="font-serif text-gold text-lg font-bold">Private Vault</h4>
                <p className="text-xs text-gray-400">3,000 Vintage Bottles</p>
              </div>
            </div>

            <div className="pt-2">
              <GoldButton to="/about" variant="primary">
                Discover Our Heritage
              </GoldButton>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Featured Dishes Showcase */}
      <section className="py-24 bg-dark-card border-y border-gold/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Chef Highlights"
            title="Featured Masterpiece Dishes"
            description="Hand-selected by Chef Lucian Vance for their rare flavor balance and exquisite gold presentation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.slice(0, 6).map((dish) => (
              <div 
                key={dish._id}
                onClick={() => setSelectedDish(dish)}
                className="glass-card rounded-2xl overflow-hidden glass-card-hover group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-semibold flex items-center space-x-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{dish.category}</span>
                  </div>

                  <span className="absolute bottom-3 right-3 text-2xl font-bold font-serif text-gold bg-black/80 px-3 py-1 rounded-lg border border-gold/30">
                    ${dish.price.toFixed(2)}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors">
                    {dish.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-gold font-semibold">
                    <span className="flex items-center space-x-1">
                      <Star className="w-3.5 h-3.5 fill-gold" />
                      <span>{dish.rating || '4.9'} Rating</span>
                    </span>
                    <span className="flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Quick View</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <GoldButton to="/menu" variant="outline">
              View Complete 30-Course Menu
            </GoldButton>
          </div>
        </div>
      </section>

      {/* 4. Menu Categories Banner */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Explore Gastronomy"
          title="Culinary Categories"
          description="Immerse your senses in specialized culinary domains prepared by dedicated station chefs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Link 
              key={idx}
              to={`/menu?category=${encodeURIComponent(cat.title)}`}
              className="relative h-80 rounded-2xl overflow-hidden group border border-gold/20 hover:border-gold/60 transition-all duration-500 shadow-luxury"
            >
              <img 
                src={cat.image} 
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">{cat.count}</span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors">{cat.title}</h3>
                <div className="flex items-center space-x-1 text-xs text-gray-300 pt-1 group-hover:text-gold transition-colors">
                  <span>Explore Category</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Chef Spotlight */}
      <section className="py-24 bg-dark-card border-y border-gold/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Master Culinary Artists"
            title="Meet Our Executive Masters"
            description="The visionaries behind our Michelin-star cuisine, artisan pastry, and sommelier cellar."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {initialChefs.map((chef) => (
              <div key={chef.id} className="glass-card rounded-2xl overflow-hidden text-center group border border-gold/20 hover:border-gold/50 transition-all duration-300">
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={chef.image} 
                    alt={chef.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors">{chef.name}</h3>
                  <p className="text-xs text-gold uppercase tracking-wider font-semibold">{chef.role}</p>
                  <p className="text-xs text-gray-400 font-light leading-relaxed pt-2">{chef.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Online Reservation Callout Banner */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1920" 
            alt="Table setting"
            className="w-full h-full object-cover filter brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Instant VIP Booking</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Reserve Your Table for an Unforgettable Evening
            </h2>
            <p className="text-sm text-gray-300 max-w-xl font-light leading-relaxed">
              Whether celebrating a milestone in our Main Dining Hall, hosting a private wine tasting in our Subterranean Vault, or dining under the stars on our Romantic Terrace.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <GoldButton to="/reservation" variant="primary">
                Book Table Online
              </GoldButton>
              <a 
                href="tel:+18005554726"
                className="inline-flex items-center justify-center font-semibold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
              >
                Call Concierge: +1 (800) 555-GRAND
              </a>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-gold/30 space-y-6">
            <h3 className="font-serif text-xl font-bold text-gold border-b border-gold/20 pb-3">
              Sanctuary Opening Hours
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-300">Monday - Thursday</span>
                <span className="text-gold font-semibold">5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-300">Friday - Saturday</span>
                <span className="text-gold font-semibold">5:00 PM - 12:00 AM</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-300">Sunday Gala Dinner</span>
                <span className="text-gold font-semibold">4:30 PM - 10:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Wine Vault Lounge</span>
                <span className="text-gold font-semibold">4:00 PM - 2:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Guest Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Guest Praises"
          title="What Connoisseurs Say"
          description="Honored guest reviews from international critics, Michelin reviewers, and dining patrons."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initialTestimonials.slice(0, 3).map((test) => (
            <div key={test.id} className="glass-card p-8 rounded-2xl border border-gold/20 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex space-x-1 text-gold">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold" />
                  ))}
                </div>
                <p className="text-xs text-gray-300 italic leading-relaxed font-light">
                  "{test.comment}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                <img 
                  src={test.avatar} 
                  alt={test.name} 
                  className="w-12 h-12 rounded-full object-cover border border-gold/40"
                />
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">{test.name}</h4>
                  <p className="text-[10px] uppercase tracking-wider text-gold">{test.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedDish && (
        <FoodModal item={selectedDish} onClose={() => setSelectedDish(null)} />
      )}

    </div>
  );
};

export default Home;
