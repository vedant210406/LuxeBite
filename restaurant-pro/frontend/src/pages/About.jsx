import React from 'react';
import { Award, Sparkles, Shield, HeartHandshake, CheckCircle2, Play } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import GoldButton from '../components/GoldButton';
import { initialChefs } from '../../../backend/utils/seedData.js';

const About = () => {
  return (
    <div className="min-h-screen bg-dark text-gray-100 pt-28 pb-20">
      
      {/* Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gold/20 bg-gradient-to-b from-black to-dark">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Our Culinary Philosophy & History</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Crafting Extraordinary <br />
            <span className="text-gold-gradient italic">Dining Sanctuary</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            For over two decades, Grand Restaurant has represented the absolute zenith of luxury fine dining, combining classical mastery with continuous innovation.
          </p>
        </div>
      </section>

      {/* Heritage & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeader
              subtitle="The Founding Vision"
              title="25 Years of Culinary Perfection"
              description="Founded in 2001 by Executive Chef Lucian Vance after completing his master apprenticeships in Paris, Tokyo, and Florence."
              center={false}
            />
            <div className="space-y-4 text-sm text-gray-300 font-light leading-relaxed">
              <p>
                Grand Restaurant was conceived not merely as an eating establishment, but as an immersive sensory sanctuary. Every table is positioned to afford complete acoustic isolation, bathed in warm 2400K ambient illumination that reflects off hand-burnished gold leaf fixtures.
              </p>
              <p>
                We collaborate directly with micro-farms across Europe and Japan, guaranteeing that our A5 Miyazaki Wagyu, Périgord truffles, and wild Mediterranean seafood arrive within 48 hours of harvest.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                '3-Michelin Star Certification (2020 - 2026)',
                'World’s 50 Best Restaurants Grand Prix Winner',
                'Subterranean 3,000 Vintage Sommelier Wine Vault',
                '100% Sustainable Wild-Caught Seafood Commitment'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[480px] rounded-2xl overflow-hidden border border-gold/30 shadow-luxury">
            <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200" 
              alt="Restaurant Dining Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-md rounded-xl border border-gold/30">
              <h4 className="font-serif text-lg text-gold font-bold">The Main Dining Hall</h4>
              <p className="text-xs text-gray-300 mt-1">Designed by Grand Architectural Studio with custom acoustic soundproofing and gold accents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Team */}
      <section className="py-20 bg-dark-card border-y border-gold/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="The Masters Behind The Dishes"
            title="Executive Culinary Leadership"
            description="Our team brings together over 80 combined years of Michelin-starred expertise."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {initialChefs.map((chef) => (
              <div key={chef.id} className="glass-card rounded-2xl overflow-hidden text-center group border border-gold/20 hover:border-gold/50 transition-all duration-300">
                <div className="h-80 overflow-hidden relative">
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

      {/* CTA */}
      <section className="py-20 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">Experience Michelin Fine Dining Today</h2>
          <p className="text-sm text-gray-300 font-light">Join us for an extraordinary evening of flavors, wine pairing, and hospitality.</p>
          <GoldButton to="/reservation" variant="primary">
            Book Table Reservation
          </GoldButton>
        </div>
      </section>

    </div>
  );
};

export default About;
