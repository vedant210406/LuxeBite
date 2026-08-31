import React, { useState } from 'react';
import { X, Star, Clock, Flame, ShieldAlert, Plus, ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const FoodModal = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!item) return null;

  const handleAdd = () => {
    addToCart(item, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-fadeIn flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-dark-card border border-gold/40 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-gray-300 hover:text-gold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        <div className="relative h-64 md:h-full overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-semibold flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-gold" />
            <span>{item.category}</span>
          </div>
        </div>

        {/* Dish Content */}
        <div className="p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-white">{item.title}</h3>
              <span className="text-xl font-bold text-gold">${item.price.toFixed(2)}</span>
            </div>

            {/* Rating & Prep details */}
            <div className="flex items-center space-x-4 text-xs text-gray-400 mt-2">
              <span className="flex items-center space-x-1 text-gold font-semibold">
                <Star className="w-3.5 h-3.5 fill-gold" />
                <span>{item.rating || '4.9'}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>{item.prepTime || '20 mins'}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Flame className="w-3.5 h-3.5 text-gold" />
                <span>{item.calories || '450'} kcal</span>
              </span>
            </div>

            <p className="text-xs text-gray-300 mt-3 leading-relaxed">
              {item.description}
            </p>

            {/* Key Ingredients */}
            {item.ingredients && item.ingredients.length > 0 && (
              <div className="mt-4">
                <h4 className="text-[11px] uppercase tracking-wider text-gold font-bold mb-2">Key Ingredients</h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.ingredients.map((ing, idx) => (
                    <span key={idx} className="bg-black/60 border border-gold/20 text-gray-300 text-[10px] px-2.5 py-1 rounded-md">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-gray-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400 font-medium">Quantity</span>
              <div className="flex items-center space-x-3 bg-black/60 border border-gold/30 rounded-lg p-1">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded bg-dark-elevated text-gold font-bold flex items-center justify-center hover:bg-gold/20"
                >
                  -
                </button>
                <span className="text-sm font-semibold text-white px-2">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded bg-dark-elevated text-gold font-bold flex items-center justify-center hover:bg-gold/20"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="w-full py-3 bg-gold text-black font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center space-x-2 hover:bg-gold-light transition-colors shadow-gold-glow"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add To Basket - ${(item.price * quantity).toFixed(2)}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FoodModal;
