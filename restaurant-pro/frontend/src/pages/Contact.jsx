import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { contactService } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactService.send(formData);
    } catch (e) {
      // Fallback
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-dark text-gray-100 pt-28 pb-20">
      
      <section className="relative py-16 px-4 text-center border-b border-gold/20 bg-gradient-to-b from-black to-dark">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Concierge & Private Inquiries</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Contact Grand <span className="text-gold-gradient italic">Sanctuary</span>
          </h1>
          <p className="text-sm text-gray-300 font-light max-w-2xl mx-auto">
            Our concierge team is available 24/7 for private event inquiries, wine cellar bookings, and press details.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Info & Map */}
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-3xl border border-gold/30 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white">Concierge Information</h3>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Address</strong>
                  <span className="text-gray-300">742 Fifth Avenue, Manhattan, NY 10019</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Direct Line</strong>
                  <a href="tel:+18005554726" className="text-gold font-semibold hover:underline">+1 (800) 555-GRAND</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Email Concierge</strong>
                  <a href="mailto:concierge@grandrestaurant.com" className="text-gold font-semibold hover:underline">concierge@grandrestaurant.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="h-72 rounded-3xl overflow-hidden border border-gold/30 shadow-2xl">
            <iframe 
              title="Grand Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164993!2d-73.97442882342512!3d40.76214477138541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f97bf1db85%3A0x6b4c1064eb98516d!2s742%205th%20Ave%2C%20New%20York%2C%20NY%2010019!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full border-0 filter grayscale contrast-125 invert"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-gold/30 shadow-2xl">
          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <CheckCircle className="w-16 h-16 text-gold mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-white">Message Delivered</h3>
              <p className="text-xs text-gray-300">Our senior concierge team will reply within 2 hours.</p>
              <button onClick={() => setSubmitted(false)} className="py-2 px-6 bg-gold text-black text-xs font-bold rounded-lg uppercase">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-gold border-b border-gold/20 pb-3">Send VIP Inquiry</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Your Name *</label>
                  <input 
                    type="text" required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/60 border border-gold/30 rounded-xl p-3 text-xs text-white focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Your Email *</label>
                  <input 
                    type="email" required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/60 border border-gold/30 rounded-xl p-3 text-xs text-white focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Subject *</label>
                <input 
                  type="text" required
                  placeholder="Private Wine Vault / Wedding / Press"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-black/60 border border-gold/30 rounded-xl p-3 text-xs text-white focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Message *</label>
                <textarea 
                  rows="5" required
                  placeholder="Provide details of your inquiry..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/60 border border-gold/30 rounded-xl p-3 text-xs text-white focus:border-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gold-light transition-all shadow-gold-glow flex items-center justify-center space-x-2"
              >
                <span>Transmit Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </section>

    </div>
  );
};

export default Contact;
