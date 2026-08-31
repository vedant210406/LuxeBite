import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Lock, Mail, User, Phone, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const result = await register(name, email, password, phone);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-dark text-gray-100 flex items-center justify-center p-4 pt-24 pb-16">
      
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-2xl max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mx-auto bg-black text-gold">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-white">Create VIP Account</h2>
          <p className="text-xs text-gray-400">Join our exclusive dining sanctuary membership.</p>
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-xl text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-gold absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text" required
                placeholder="Victoria Sterling"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-black/60 border border-gold/30 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gold absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input 
                type="email" required
                placeholder="v.sterling@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-black/60 border border-gold/30 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">Phone Number</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-gold absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input 
                type="tel"
                placeholder="+1 (555) 019-2831"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full bg-black/60 border border-gold/30 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gold absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              <input 
                type="password" required minLength="6"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-black/60 border border-gold/30 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 bg-gold text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gold-light transition-all shadow-gold-glow flex items-center justify-center space-x-2"
          >
            <span>{submitting ? 'Registering Account...' : 'Register VIP Membership'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-gray-400 pt-2 border-t border-gray-800">
          <span>Already a member? </span>
          <Link to="/login" className="text-gold font-bold hover:underline">Sign In</Link>
        </div>

      </div>

    </div>
  );
};

export default Register;
