import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Calendar, ShoppingBag, Heart, LogOut, Shield, Clock, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { reservationService, orderService } from '../services/api';

const UserDashboard = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('reservations');
  const [reservations, setReservations] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    Promise.all([
      reservationService.getAll().catch(() => ({ data: [] })),
      orderService.getAll().catch(() => ({ data: [] }))
    ]).then(([resData, ordData]) => {
      setReservations(resData.data || []);
      setOrders(ordData.data || []);
      setLoading(false);
    });
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-dark text-gray-100 pt-28 pb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Profile Card Header */}
        <div className="glass-card rounded-3xl p-8 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center bg-black text-gold text-2xl font-serif font-bold shadow-gold-glow">
              {user.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-serif text-2xl font-bold text-white">{user.name}</h1>
                {isAdmin && (
                  <span className="px-2.5 py-0.5 rounded-full bg-gold text-black text-[10px] uppercase font-bold">
                    Admin
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-1">{user.email} • Member since 2026</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {isAdmin && (
              <Link to="/admin" className="py-2.5 px-5 bg-gold/15 text-gold border border-gold/40 rounded-xl text-xs font-semibold hover:bg-gold/25 flex items-center space-x-1.5">
                <Shield className="w-4 h-4" />
                <span>Admin Dashboard</span>
              </Link>
            )}
            <button onClick={logout} className="py-2.5 px-5 bg-red-500/10 text-red-400 border border-red-500/30 rounded-xl text-xs font-semibold hover:bg-red-500/20 flex items-center space-x-1.5">
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex border-b border-gray-800 space-x-6 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('reservations')}
            className={`pb-3 flex items-center space-x-2 border-b-2 transition-colors ${
              activeTab === 'reservations' ? 'border-gold text-gold' : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Table Reservations ({reservations.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`pb-3 flex items-center space-x-2 border-b-2 transition-colors ${
              activeTab === 'orders' ? 'border-gold text-gold' : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Shop & Food Orders ({orders.length})</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'reservations' ? (
          <div className="space-y-4">
            {reservations.length === 0 ? (
              <div className="text-center py-16 bg-dark-card rounded-2xl border border-gold/20 space-y-3">
                <Calendar className="w-10 h-10 text-gold mx-auto" />
                <h3 className="font-serif text-lg text-white">No Table Reservations Found</h3>
                <Link to="/reservation" className="inline-block py-2 px-5 bg-gold text-black text-xs font-bold rounded-lg uppercase">
                  Book Table Now
                </Link>
              </div>
            ) : (
              reservations.map(res => (
                <div key={res._id} className="glass-card p-6 rounded-2xl border border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-gold">{res.tableType}</span>
                    <h4 className="font-serif text-lg font-bold text-white">{res.date} at {res.time}</h4>
                    <p className="text-xs text-gray-400">{res.guests} Guests • Reserved under {res.name}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    res.status === 'confirmed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-gold/20 text-gold border border-gold/30'
                  }`}>
                    {res.status || 'Pending Confirmation'}
                  </span>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {orders.length === 0 ? (
              <div className="text-center py-16 bg-dark-card rounded-2xl border border-gold/20 space-y-3">
                <ShoppingBag className="w-10 h-10 text-gold mx-auto" />
                <h3 className="font-serif text-lg text-white">No Past Orders Found</h3>
                <Link to="/menu" className="inline-block py-2 px-5 bg-gold text-black text-xs font-bold rounded-lg uppercase">
                  Explore Menu
                </Link>
              </div>
            ) : (
              orders.map(ord => (
                <div key={ord._id} className="glass-card p-6 rounded-2xl border border-gold/20 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-gold">Order #{ord._id}</span>
                    <span className="text-green-400 uppercase font-semibold">{ord.orderStatus}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-300">{ord.items?.length || 1} Items</span>
                    <span className="font-serif text-lg font-bold text-white">${ord.totalAmount?.toFixed(2)}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

      </div>

    </div>
  );
};

export default UserDashboard;
