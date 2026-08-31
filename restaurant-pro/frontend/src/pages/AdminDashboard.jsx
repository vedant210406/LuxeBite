import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, Utensils, Calendar, ShoppingBag, FileText, Mail, Users, 
  Plus, Edit, Trash2, CheckCircle, XCircle, DollarSign, TrendingUp, Sparkles, RefreshCw
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { 
  menuService, reservationService, orderService, 
  productService, blogService, contactService, analyticsService 
} from '../services/api';
import { initialMenuItems, initialProducts, initialBlogs } from '../../../backend/utils/seedData.js';

const AdminDashboard = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('analytics');
  const [stats, setStats] = useState({ revenue: 18450, reservations: 24, orders: 48, menuItems: 30, users: 120 });
  const [menuItems, setMenuItems] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);

  // Modal State for New/Edit Menu Item
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [newDish, setNewDish] = useState({
    title: '', description: '', price: '', category: 'Culinary Starters', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/login');
      return;
    }

    // Load initial data
    analyticsService.getStats().then(res => setStats(res.data)).catch(() => {});
    menuService.getItems({}).then(res => setMenuItems(res.data)).catch(() => setMenuItems(initialMenuItems));
    reservationService.getAll().then(res => setReservations(res.data)).catch(() => {});
    orderService.getAll().then(res => setOrders(res.data)).catch(() => {});
    productService.getAll().then(res => setProducts(res.data)).catch(() => setProducts(initialProducts));
    blogService.getAll().then(res => setBlogs(res.data)).catch(() => setBlogs(initialBlogs));
    contactService.getAll().then(res => setContacts(res.data)).catch(() => {});
  }, [user, isAdmin, navigate]);

  if (!user || !isAdmin) return null;

  const handleCreateMenuItem = async (e) => {
    e.preventDefault();
    try {
      const res = await menuService.createItem({ ...newDish, price: Number(newDish.price) });
      setMenuItems([res.data, ...menuItems]);
    } catch (err) {
      setMenuItems([{ _id: 'm_' + Date.now(), ...newDish, price: Number(newDish.price) }, ...menuItems]);
    }
    setShowMenuModal(false);
  };

  const handleDeleteMenuItem = async (id) => {
    try {
      await menuService.deleteItem(id);
    } catch (e) {}
    setMenuItems(menuItems.filter(m => m._id !== id));
  };

  const handleUpdateReservationStatus = async (id, status) => {
    try {
      await reservationService.updateStatus(id, status);
    } catch (e) {}
    setReservations(reservations.map(r => r._id === id ? { ...r, status } : r));
  };

  return (
    <div className="min-h-screen bg-dark text-gray-100 pt-24 pb-20">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-black via-dark-card to-black border-b border-gold/30 px-4 sm:px-8 py-6 mb-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center bg-black text-gold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-white">Grand Executive Control Panel</h1>
              <p className="text-xs text-gold">LoggedIn as {user.name} ({user.email})</p>
            </div>
          </div>

          <button 
            onClick={() => setShowMenuModal(true)}
            className="py-2.5 px-5 bg-gold text-black font-bold text-xs rounded-xl uppercase tracking-wider hover:bg-gold-light transition-all shadow-gold-glow flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Menu Course</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Left Admin Navigation */}
        <div className="lg:col-span-1 glass-card p-4 rounded-2xl border border-gold/20 space-y-2 h-fit">
          {[
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'menu', label: 'Manage Menu', icon: Utensils, count: menuItems.length },
            { id: 'reservations', label: 'Reservations', icon: Calendar, count: reservations.length },
            { id: 'orders', label: 'Orders', icon: ShoppingBag, count: orders.length },
            { id: 'products', label: 'Shop Products', icon: ShoppingBag, count: products.length },
            { id: 'blogs', label: 'Articles', icon: FileText, count: blogs.length },
            { id: 'contacts', label: 'Messages', icon: Mail, count: contacts.length }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gold text-black font-bold shadow-gold-glow'
                    : 'text-gray-300 hover:bg-gold/10 hover:text-gold'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </div>
                {tab.count !== undefined && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    activeTab === tab.id ? 'bg-black text-gold' : 'bg-black/60 text-gray-400'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* TAB 1: ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-card p-6 rounded-2xl border border-gold/30 space-y-2">
                  <span className="text-xs uppercase text-gray-400 font-bold">Total Revenue</span>
                  <div className="font-serif text-3xl font-bold text-gold">${stats.revenue?.toLocaleString()}</div>
                  <span className="text-[10px] text-green-400 font-semibold">+18.5% this month</span>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-gold/30 space-y-2">
                  <span className="text-xs uppercase text-gray-400 font-bold">Table Reservations</span>
                  <div className="font-serif text-3xl font-bold text-white">{stats.reservations || 24}</div>
                  <span className="text-[10px] text-gold font-semibold">Active Sanctuary Bookings</span>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-gold/30 space-y-2">
                  <span className="text-xs uppercase text-gray-400 font-bold">Menu Items</span>
                  <div className="font-serif text-3xl font-bold text-white">{menuItems.length}</div>
                  <span className="text-[10px] text-gray-400">6 Gourmet Categories</span>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-gold/30 space-y-2">
                  <span className="text-xs uppercase text-gray-400 font-bold">Registered Users</span>
                  <div className="font-serif text-3xl font-bold text-white">{stats.users || 120}</div>
                  <span className="text-[10px] text-green-400 font-semibold">VIP Members</span>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="glass-card p-6 rounded-2xl border border-gold/20 space-y-4">
                <h3 className="font-serif text-lg font-bold text-gold border-b border-gold/20 pb-2">Recent VIP Operations</h3>
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-black/40 rounded-xl border border-gold/15 flex justify-between">
                    <span>Table Booking confirmed for Victoria Sterling (4 Guests)</span>
                    <span className="text-gold font-bold">10m ago</span>
                  </div>
                  <div className="p-3 bg-black/40 rounded-xl border border-gold/15 flex justify-between">
                    <span>Shop Order #1088 placed for Gourmet Truffle Oil</span>
                    <span className="text-gold font-bold">35m ago</span>
                  </div>
                  <div className="p-3 bg-black/40 rounded-xl border border-gold/15 flex justify-between">
                    <span>5-Star Review added for Miyazaki A5 Wagyu</span>
                    <span className="text-gold font-bold">1h ago</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: MANAGE MENU */}
          {activeTab === 'menu' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex justify-between items-center">
                <h3 className="font-serif text-xl font-bold text-white">Menu Items Ledger ({menuItems.length})</h3>
                <button 
                  onClick={() => setShowMenuModal(true)}
                  className="py-2 px-4 bg-gold text-black font-bold text-xs rounded-lg uppercase"
                >
                  + Add Item
                </button>
              </div>

              <div className="glass-card rounded-2xl overflow-hidden border border-gold/20">
                <table className="w-full text-left text-xs">
                  <thead className="bg-black/80 text-gold uppercase text-[10px] tracking-wider border-b border-gold/20">
                    <tr>
                      <th className="p-4">Dish</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {menuItems.map(item => (
                      <tr key={item._id} className="hover:bg-gold/5 transition-colors">
                        <td className="p-4 flex items-center space-x-3">
                          <img src={item.image} alt={item.title} className="w-10 h-10 rounded-lg object-cover border border-gold/20" />
                          <span className="font-serif text-sm font-bold text-white">{item.title}</span>
                        </td>
                        <td className="p-4 text-gray-300">{item.category}</td>
                        <td className="p-4 font-bold text-gold">${item.price.toFixed(2)}</td>
                        <td className="p-4">
                          <button onClick={() => handleDeleteMenuItem(item._id)} className="p-1.5 text-gray-400 hover:text-red-400">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: RESERVATIONS */}
          {activeTab === 'reservations' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-serif text-xl font-bold text-white">Manage Table Reservations ({reservations.length})</h3>
              
              <div className="space-y-3">
                {reservations.length === 0 ? (
                  <p className="text-xs text-gray-400">No reservations currently registered.</p>
                ) : (
                  reservations.map(res => (
                    <div key={res._id} className="glass-card p-4 rounded-xl border border-gold/20 flex items-center justify-between">
                      <div>
                        <h4 className="font-serif text-sm font-bold text-white">{res.name} ({res.guests} Guests)</h4>
                        <p className="text-xs text-gray-400">{res.date} at {res.time} • {res.tableType}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => handleUpdateReservationStatus(res._id, 'confirmed')} className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-lg border border-green-500/40">
                          Approve
                        </button>
                        <button onClick={() => handleUpdateReservationStatus(res._id, 'cancelled')} className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-lg border border-red-500/40">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 4: ORDERS */}
          {activeTab === 'orders' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-serif text-xl font-bold text-white">Manage Shop & Food Orders ({orders.length})</h3>
              <div className="space-y-3">
                {orders.map(ord => (
                  <div key={ord._id} className="glass-card p-4 rounded-xl border border-gold/20 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-gold">Order #{ord._id}</h4>
                      <p className="text-xs text-gray-300">Total: ${ord.totalAmount?.toFixed(2)} • {ord.paymentMethod}</p>
                    </div>
                    <span className="text-xs font-bold uppercase text-green-400">{ord.orderStatus}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* New Menu Item Modal */}
      {showMenuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/85 backdrop-blur-sm" onClick={() => setShowMenuModal(false)} />
          <div className="relative bg-dark-card border border-gold/40 rounded-2xl p-6 max-w-md w-full z-10 space-y-4 shadow-2xl">
            <h3 className="font-serif text-xl font-bold text-gold border-b border-gold/20 pb-2">Add New Menu Item</h3>
            <form onSubmit={handleCreateMenuItem} className="space-y-3 text-xs">
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Title</label>
                <input type="text" required value={newDish.title} onChange={e => setNewDish({ ...newDish, title: e.target.value })} className="w-full bg-black/60 border border-gold/30 rounded-lg p-2 text-white" />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Description</label>
                <textarea rows="2" required value={newDish.description} onChange={e => setNewDish({ ...newDish, description: e.target.value })} className="w-full bg-black/60 border border-gold/30 rounded-lg p-2 text-white" />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Price ($)</label>
                <input type="number" required value={newDish.price} onChange={e => setNewDish({ ...newDish, price: e.target.value })} className="w-full bg-black/60 border border-gold/30 rounded-lg p-2 text-white" />
              </div>
              <div>
                <label className="block text-gray-300 font-semibold mb-1">Category</label>
                <select value={newDish.category} onChange={e => setNewDish({ ...newDish, category: e.target.value })} className="w-full bg-black/60 border border-gold/30 rounded-lg p-2 text-gold">
                  <option value="Culinary Starters">Culinary Starters</option>
                  <option value="Prime Steaks">Prime Steaks</option>
                  <option value="Artisan Pasta & Seafood">Artisan Pasta & Seafood</option>
                  <option value="Chef Specials">Chef Specials</option>
                  <option value="Signature Desserts">Signature Desserts</option>
                  <option value="Sommelier Cellar">Sommelier Cellar</option>
                </select>
              </div>
              <div className="pt-2 flex justify-end space-x-2">
                <button type="button" onClick={() => setShowMenuModal(false)} className="px-4 py-2 text-gray-400 hover:text-white">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-gold text-black font-bold rounded-lg uppercase">Save Dish</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;
