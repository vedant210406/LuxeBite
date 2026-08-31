import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Sparkles, Search, Plus, Eye } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { productService } from '../services/api';
import { useCart } from '../context/CartContext';
import { initialProducts } from '../../../backend/utils/seedData.js';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const { addToCart } = useCart();

  const categories = ['All', 'Gourmet Pantry', 'Chef Merchandise', 'Artisan Sweets'];

  useEffect(() => {
    setLoading(true);
    productService.getAll()
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setProducts(initialProducts);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(p => {
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-dark text-gray-100 pt-28 pb-20">
      
      {/* Header */}
      <section className="relative py-16 px-4 text-center border-b border-gold/20 bg-gradient-to-b from-black to-dark">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Grand Gourmet Merchandise Store</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Take Grand Sanctuary <span className="text-gold-gradient italic">Home</span>
          </h1>
          <p className="text-sm text-gray-300 font-light max-w-2xl mx-auto">
            Single estate extra virgin olive oils, 25-year aged balsamic vinegars, Damascus chef knives, and titanium wine glasses.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-dark-card p-4 rounded-2xl border border-gold/20 shadow-luxury">
          
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gold absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search EVOO, Knives, Chocolate..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/60 border border-gold/30 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold"
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border ${
                  selectedCategory === cat
                    ? 'bg-gold text-black border-gold shadow-gold-glow'
                    : 'bg-black/60 text-gray-300 border-gold/20 hover:border-gold/50 hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-80 bg-dark-card rounded-2xl animate-pulse border border-gold/10" />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-dark-card rounded-2xl border border-gold/20 space-y-3">
            <ShoppingBag className="w-10 h-10 text-gold mx-auto" />
            <h3 className="font-serif text-lg font-bold text-white">No Products Found</h3>
            <p className="text-xs text-gray-400">Try adjusting your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product._id} className="glass-card rounded-2xl overflow-hidden glass-card-hover group flex flex-col justify-between">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-gold/30 text-gold text-[10px] font-bold">
                    {product.weight}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gold">{product.category}</span>
                    <Link to={`/product/${product._id}`} className="font-serif text-base font-bold text-white block group-hover:text-gold transition-colors truncate">
                      {product.name}
                    </Link>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-gold">${product.price.toFixed(2)}</span>
                    <span className="flex items-center space-x-1 text-xs text-gold">
                      <Star className="w-3.5 h-3.5 fill-gold" />
                      <span>{product.rating}</span>
                    </span>
                  </div>

                  <div className="pt-2 border-t border-gray-800 flex gap-2">
                    <Link
                      to={`/product/${product._id}`}
                      className="flex-1 py-2 bg-dark-elevated text-gold text-xs font-semibold rounded-lg border border-gold/30 hover:bg-gold/15 text-center flex items-center justify-center space-x-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </Link>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="flex-1 py-2 bg-gold text-black text-xs font-bold rounded-lg hover:bg-gold-light transition-colors shadow-gold-glow flex items-center justify-center space-x-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

export default Shop;
