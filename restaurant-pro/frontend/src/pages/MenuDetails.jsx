import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Flame, Wine, ArrowLeft, ShoppingBag, Plus, Minus, Sparkles, Check } from 'lucide-react';
import { menuService } from '../services/api';
import { useCart } from '../context/CartContext';
import { initialMenuItems } from '../../../backend/utils/seedData.js';

const MenuDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    menuService.getItemById(id)
      .then(res => {
        setItem(res.data);
        setLoading(false);
      })
      .catch(() => {
        const found = initialMenuItems.find(m => m._id === id || m.title.toLowerCase().replace(/\s+/g, '-') === id);
        setItem(found || initialMenuItems[0]);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold" />
      </div>
    );
  }

  if (!item) return null;

  return (
    <div className="min-h-screen bg-dark text-gray-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Back Link */}
        <Link to="/menu" className="inline-flex items-center space-x-2 text-gold text-xs font-semibold uppercase tracking-wider hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Grand Menu</span>
        </Link>

        {/* Main Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-dark-card rounded-3xl p-6 sm:p-10 border border-gold/25 shadow-2xl">
          
          {/* Image */}
          <div className="relative h-96 sm:h-[480px] rounded-2xl overflow-hidden border border-gold/30">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-gold/40 text-gold text-xs font-semibold flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{item.category}</span>
            </div>
          </div>

          {/* Details Content */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">Chef Masterpiece</span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">{item.title}</h1>
              <div className="flex items-center space-x-4 mt-3 text-xs text-gray-400">
                <span className="flex items-center space-x-1 text-gold font-semibold">
                  <Star className="w-4 h-4 fill-gold" />
                  <span>{item.rating || '4.9'} Michelin Grade</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>{item.prepTime || '20 mins'}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Flame className="w-4 h-4 text-gold" />
                  <span>{item.calories || '450'} kcal</span>
                </span>
              </div>
            </div>

            <div className="text-3xl font-serif font-bold text-gold">
              ${item.price.toFixed(2)}
            </div>

            <p className="text-sm text-gray-300 font-light leading-relaxed">
              {item.description}
            </p>

            {/* Ingredients */}
            {item.ingredients && (
              <div className="space-y-2 pt-2 border-t border-gray-800">
                <h4 className="text-xs uppercase tracking-wider text-gold font-bold">Key Ingredients</h4>
                <div className="flex flex-wrap gap-2">
                  {item.ingredients.map((ing, idx) => (
                    <span key={idx} className="bg-black/60 border border-gold/20 text-gray-300 text-xs px-3 py-1 rounded-lg flex items-center space-x-1">
                      <Check className="w-3 h-3 text-gold" />
                      <span>{ing}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Sommelier Wine Pairing Recommendation */}
            <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 flex items-start space-x-3 text-xs">
              <Wine className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gold font-serif text-sm">Sommelier Recommended Pairing</strong>
                <p className="text-gray-300 mt-0.5">Dom Pérignon Vintage 2012 Champagne or Château Margaux Premier Grand Cru 2015.</p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center space-x-3 bg-black/60 border border-gold/30 rounded-xl p-1.5">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 rounded-lg bg-dark-elevated text-gold font-bold flex items-center justify-center hover:bg-gold/20"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-base font-semibold text-white px-3">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 rounded-lg bg-dark-elevated text-gold font-bold flex items-center justify-center hover:bg-gold/20"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => addToCart(item, quantity)}
                className="flex-1 py-4 px-6 bg-gold text-black font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center space-x-2 hover:bg-gold-light transition-colors shadow-gold-glow"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add To Basket - ${(item.price * quantity).toFixed(2)}</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
