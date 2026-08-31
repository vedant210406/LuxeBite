import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    tax,
    total,
    coupon,
    applyCoupon,
    isCartOpen,
    setIsCartOpen
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [couponMsg, setCouponMsg] = useState(null);

  if (!isCartOpen) return null;

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    if (!promoInput) return;
    const res = applyCoupon(promoInput);
    setCouponMsg(res);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-dark-card border-l border-gold/30 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-gold/20 flex items-center justify-between bg-black/40">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-5 h-5 text-gold" />
              <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider">Your Gourmet Basket</h3>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-1 text-gray-400 hover:text-gold transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center mx-auto bg-black/40 text-gold">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg text-white">Your Basket is Empty</h4>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">Explore our Michelin menu or Gourmet Pantry to select extraordinary culinary items.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 inline-block py-2 px-6 bg-gold text-black text-xs font-semibold rounded uppercase tracking-wider hover:bg-gold-light"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item._id} 
                  className="flex items-center space-x-4 p-3 bg-black/40 rounded-xl border border-gold/15 hover:border-gold/30 transition-colors"
                >
                  <img 
                    src={item.image} 
                    alt={item.title || item.name} 
                    className="w-16 h-16 object-cover rounded-lg shrink-0 border border-gold/20"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif text-sm text-white font-semibold truncate">{item.title || item.name}</h5>
                    <p className="text-xs text-gold font-bold mt-0.5">${item.price.toFixed(2)}</p>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-2 mt-2">
                      <button 
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        className="w-5 h-5 rounded bg-dark-elevated border border-gold/30 flex items-center justify-center text-gray-300 hover:text-gold"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-semibold text-white px-2">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="w-5 h-5 rounded bg-dark-elevated border border-gold/30 flex items-center justify-center text-gray-300 hover:text-gold"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item._id)}
                    className="p-1.5 text-gray-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gold/20 bg-black/60 space-y-4">
              
              {/* Promo Code Input */}
              <form onSubmit={handleCouponSubmit} className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Promo Code (GRAND10)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="flex-1 bg-black/80 border border-gold/30 rounded px-3 py-1.5 text-xs text-white uppercase focus:outline-none focus:border-gold"
                />
                <button type="submit" className="px-3 py-1.5 bg-dark-elevated border border-gold/40 text-gold text-xs font-semibold rounded hover:bg-gold/10">
                  Apply
                </button>
              </form>
              {couponMsg && (
                <p className={`text-[11px] font-medium ${couponMsg.success ? 'text-green-400' : 'text-red-400'}`}>
                  {couponMsg.message}
                </p>
              )}

              {/* Totals Breakdown */}
              <div className="space-y-1.5 text-xs border-t border-gray-800 pt-3">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {coupon && (
                  <div className="flex justify-between text-green-400">
                    <span>Discount ({coupon.code})</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-400">
                  <span>Luxury Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gold pt-2 border-t border-gray-800">
                  <span>Estimated Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3 bg-gold text-black font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center space-x-2 hover:bg-gold-light transition-colors shadow-gold-glow"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
