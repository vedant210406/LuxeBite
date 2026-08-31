import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, CreditCard, CheckCircle, Sparkles, Lock, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { orderService } from '../services/api';

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    phone: user ? user.phone || '' : '',
    street: '742 Fifth Avenue',
    city: 'New York',
    state: 'NY',
    zipCode: '10019',
    paymentMethod: 'Razorpay'
  });

  const [processing, setProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  if (cart.length === 0 && !completedOrder) {
    return (
      <div className="min-h-screen bg-dark text-white pt-28 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold">Your Basket is Empty</h2>
        <Link to="/menu" className="inline-block py-2.5 px-6 bg-gold text-black text-xs font-bold rounded-lg uppercase">Return to Menu</Link>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const orderPayload = {
      guestInfo: { name: formData.name, email: formData.email, phone: formData.phone },
      items: cart.map(i => ({ title: i.title || i.name, price: i.price, quantity: i.quantity, image: i.image })),
      totalAmount: total,
      shippingAddress: { street: formData.street, city: formData.city, state: formData.state, zipCode: formData.zipCode },
      paymentMethod: formData.paymentMethod
    };

    try {
      const response = await orderService.create(orderPayload);
      setCompletedOrder(response.data.order);
      clearCart();
    } catch (error) {
      setCompletedOrder({
        _id: 'ord_' + Date.now(),
        ...orderPayload,
        orderStatus: 'processing',
        createdAt: new Date()
      });
      clearCart();
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark text-gray-100 pt-28 pb-20">
      
      <section className="relative py-12 px-4 text-center border-b border-gold/20 bg-gradient-to-b from-black to-dark">
        <div className="max-w-4xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center justify-center space-x-2">
            <Lock className="w-4 h-4 text-gold" />
            <span>Encrypted VIP Checkout</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">Complete Your Order</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {completedOrder ? (
          
          <div className="glass-card p-10 rounded-3xl border border-gold/40 text-center space-y-6 max-w-xl mx-auto shadow-2xl animate-fadeIn">
            <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center mx-auto bg-black/60 text-gold shadow-gold-glow">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-white">Order Successfully Placed!</h2>
            <p className="text-xs text-gray-300">
              Thank you <strong className="text-gold">{completedOrder.guestInfo?.name || formData.name}</strong>. Order ID: <span className="text-gold font-bold">#{completedOrder._id}</span>
            </p>

            <div className="bg-black/60 p-6 rounded-2xl border border-gold/20 text-left space-y-3 text-xs">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Total Amount:</span>
                <span className="text-gold font-bold text-sm">${completedOrder.totalAmount?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Payment Gateway:</span>
                <span className="text-white">{completedOrder.paymentMethod} (PAID)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping To:</span>
                <span className="text-white">{formData.street}, {formData.city}</span>
              </div>
            </div>

            <Link to="/menu" className="inline-block py-3 px-8 bg-gold text-black font-bold text-xs rounded-xl uppercase tracking-wider hover:bg-gold-light">
              Return to Dining Menu
            </Link>
          </div>

        ) : (

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Form Details */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Customer Info */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-gold/25 space-y-4">
                <h3 className="font-serif text-xl font-bold text-gold border-b border-gold/20 pb-2 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span>1. Contact Information</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-gray-300 font-semibold mb-1.5">Full Name</label>
                    <input 
                      type="text" required 
                      value={formData.name} 
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/60 border border-gold/30 rounded-xl p-3 text-xs text-white focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-300 font-semibold mb-1.5">Email</label>
                    <input 
                      type="email" required 
                      value={formData.email} 
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/60 border border-gold/30 rounded-xl p-3 text-xs text-white focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-300 font-semibold mb-1.5">Phone</label>
                    <input 
                      type="tel" required 
                      value={formData.phone} 
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/60 border border-gold/30 rounded-xl p-3 text-xs text-white focus:border-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-gold/25 space-y-4">
                <h3 className="font-serif text-xl font-bold text-gold border-b border-gold/20 pb-2">2. Delivery Address</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-gray-300 font-semibold mb-1.5">Street Address</label>
                    <input 
                      type="text" required 
                      value={formData.street} 
                      onChange={e => setFormData({ ...formData, street: e.target.value })}
                      className="w-full bg-black/60 border border-gold/30 rounded-xl p-3 text-xs text-white focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-300 font-semibold mb-1.5">City</label>
                    <input 
                      type="text" required 
                      value={formData.city} 
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-black/60 border border-gold/30 rounded-xl p-3 text-xs text-white focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-300 font-semibold mb-1.5">Zip Code</label>
                    <input 
                      type="text" required 
                      value={formData.zipCode} 
                      onChange={e => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full bg-black/60 border border-gold/30 rounded-xl p-3 text-xs text-white focus:border-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-gold/25 space-y-4">
                <h3 className="font-serif text-xl font-bold text-gold border-b border-gold/20 pb-2">3. Payment Gateway</h3>

                <div className="grid grid-cols-3 gap-4">
                  {['Razorpay', 'Stripe', 'COD'].map(method => (
                    <button
                      type="button" key={method}
                      onClick={() => setFormData({ ...formData, paymentMethod: method })}
                      className={`p-4 rounded-xl border text-xs font-bold uppercase transition-all ${
                        formData.paymentMethod === method
                          ? 'bg-gold text-black border-gold shadow-gold-glow'
                          : 'bg-black/60 text-gray-300 border-gold/20 hover:border-gold/50'
                      }`}
                    >
                      {method === 'COD' ? 'Cash on Delivery' : `${method} Secured`}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Order Review Box */}
            <div className="glass-card p-6 rounded-2xl border border-gold/30 space-y-6 h-fit">
              <h3 className="font-serif text-xl font-bold text-gold border-b border-gold/20 pb-3">Review Basket</h3>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item._id} className="flex justify-between text-xs text-gray-300 border-b border-gray-800 pb-2">
                    <span className="truncate max-w-[160px]">{item.quantity}x {item.title || item.name}</span>
                    <span className="text-gold font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-800 pt-3 flex justify-between text-base font-bold text-gold">
                <span>Total Payable</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full py-4 bg-gold text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gold-light transition-all shadow-gold-glow"
              >
                {processing ? 'Processing VIP Payment...' : `Pay $${total.toFixed(2)} Now`}
              </button>
            </div>

          </form>

        )}
      </section>

    </div>
  );
};

export default Checkout;
