import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Tag, Sparkles } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    tax,
    total,
    coupon,
    applyCoupon
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [couponMsg, setCouponMsg] = useState(null);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (promoCode) {
      const res = applyCoupon(promoCode);
      setCouponMsg(res);
    }
  };

  return (
    <div className="min-h-screen bg-dark text-gray-100 pt-28 pb-20">
      
      <section className="relative py-12 px-4 text-center border-b border-gold/20 bg-gradient-to-b from-black to-dark">
        <div className="max-w-4xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Grand Basket Ledger</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">Your Selected Items</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cart.length === 0 ? (
          <div className="text-center py-20 bg-dark-card rounded-3xl border border-gold/20 space-y-4 max-w-xl mx-auto">
            <ShoppingBag className="w-16 h-16 text-gold mx-auto" />
            <h2 className="font-serif text-2xl font-bold text-white">Your Basket is Currently Empty</h2>
            <p className="text-xs text-gray-400">Discover our fine dining courses or gourmet pantry to add items.</p>
            <Link to="/menu" className="inline-block py-3 px-8 bg-gold text-black font-bold text-xs rounded-xl uppercase tracking-wider hover:bg-gold-light shadow-gold-glow">
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item._id} className="glass-card p-4 sm:p-6 rounded-2xl border border-gold/20 flex items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.title || item.name} className="w-20 h-20 rounded-xl object-cover border border-gold/30 shrink-0" />
                    <div>
                      <h4 className="font-serif text-base font-bold text-white">{item.title || item.name}</h4>
                      <p className="text-xs text-gold font-bold mt-1">${item.price.toFixed(2)} each</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 bg-black/60 border border-gold/30 rounded-lg p-1">
                      <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="w-6 h-6 rounded bg-dark-elevated text-gold flex items-center justify-center hover:bg-gold/20">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-semibold text-white px-2">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="w-6 h-6 rounded bg-dark-elevated text-gold flex items-center justify-center hover:bg-gold/20">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-serif text-lg font-bold text-gold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</span>

                    <button onClick={() => removeFromCart(item._id)} className="p-2 text-gray-500 hover:text-red-400">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="glass-card p-6 rounded-2xl border border-gold/30 space-y-6 h-fit">
              <h3 className="font-serif text-xl font-bold text-gold border-b border-gold/20 pb-3">Order Summary</h3>
              
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Promo Code (GRAND10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-black/60 border border-gold/30 rounded-lg px-3 py-2 text-xs text-white uppercase focus:outline-none focus:border-gold"
                />
                <button type="submit" className="px-4 py-2 bg-gold/15 text-gold text-xs font-semibold rounded-lg border border-gold/40 hover:bg-gold/25">
                  Apply
                </button>
              </form>
              {couponMsg && (
                <p className={`text-xs ${couponMsg.success ? 'text-green-400' : 'text-red-400'}`}>{couponMsg.message}</p>
              )}

              <div className="space-y-3 text-xs border-t border-gray-800 pt-4">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {coupon && (
                  <div className="flex justify-between text-green-400 font-semibold">
                    <span>Discount ({coupon.code})</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-300">
                  <span>Luxury Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-gold pt-3 border-t border-gray-800">
                  <span>Grand Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full py-4 bg-gold text-black font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center space-x-2 hover:bg-gold-light transition-colors shadow-gold-glow"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        )}
      </section>

    </div>
  );
};

export default Cart;
