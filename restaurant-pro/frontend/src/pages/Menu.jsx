import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, Grid, List, Star, Sparkles, Flame, Clock, Plus, Eye, Heart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import FoodModal from '../components/FoodModal';
import { menuService } from '../services/api';
import { useCart } from '../context/CartContext';
import { initialMenuItems } from '../../../backend/utils/seedData.js';

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';

  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [viewMode, setViewMode] = useState('grid'); // grid | list
  const [filterChefSpecial, setFilterChefSpecial] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const { addToCart } = useCart();

  const categories = [
    'All',
    'Culinary Starters',
    'Prime Steaks',
    'Artisan Pasta & Seafood',
    'Chef Specials',
    'Signature Desserts',
    'Sommelier Cellar'
  ];

  useEffect(() => {
    setLoading(true);
    menuService.getItems({
      category: selectedCategory === 'All' ? undefined : selectedCategory,
      search: searchQuery,
      sort: sortOption !== 'default' ? sortOption : undefined
    })
    .then(res => {
      setMenuItems(res.data);
      setLoading(false);
    })
    .catch(() => {
      // Fallback to initial seed array
      let filtered = initialMenuItems.filter(item => {
        if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
        if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
        if (filterChefSpecial && !item.isChefSpecial) return false;
        return true;
      });

      if (sortOption === 'price_asc') filtered.sort((a, b) => a.price - b.price);
      if (sortOption === 'price_desc') filtered.sort((a, b) => b.price - a.price);
      if (sortOption === 'rating') filtered.sort((a, b) => b.rating - a.rating);

      setMenuItems(filtered);
      setLoading(false);
    });
  }, [selectedCategory, searchQuery, sortOption, filterChefSpecial]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-dark text-gray-100 pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-gold/20 bg-gradient-to-b from-black to-dark text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Grand Gastronomy Selection</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
            The Michelin <span className="text-gold-gradient italic">Tasting Menu</span>
          </h1>
          <p className="text-sm text-gray-300 font-light max-w-2xl mx-auto">
            Discover 30 masterwork courses crafted from Miyazaki Wagyu, Périgord black truffles, and rare vintage cellar pairings.
          </p>
        </div>
      </section>

      {/* Main Filter & Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Search Bar & View Toggles */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-dark-card p-4 rounded-2xl border border-gold/20 shadow-luxury">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gold absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search Wagyu, Truffle, Caviar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/60 border border-gold/30 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          {/* Filters & Sorting */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            
            {/* Chef Special Checkbox */}
            <button
              onClick={() => setFilterChefSpecial(!filterChefSpecial)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center space-x-1.5 transition-colors ${
                filterChefSpecial 
                  ? 'bg-gold text-black border-gold' 
                  : 'bg-black/60 text-gold border-gold/30 hover:border-gold'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chef Specials Only</span>
            </button>

            {/* Sort Dropdown */}
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-black/60 border border-gold/30 rounded-xl px-3 py-2 text-xs text-gold focus:outline-none focus:border-gold cursor-pointer"
            >
              <option value="default">Sort by: Recommended</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-1 bg-black/60 border border-gold/30 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-gold text-black' : 'text-gray-400 hover:text-gold'}`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-gold text-black' : 'text-gray-400 hover:text-gold'}`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSearchParams(cat === 'All' ? {} : { category: cat });
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-gold text-black border-gold shadow-gold-glow'
                  : 'bg-dark-card text-gray-300 border-gold/20 hover:border-gold/50 hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </section>

      {/* Menu Item Display */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-80 bg-dark-card rounded-2xl animate-pulse border border-gold/10" />
            ))}
          </div>
        ) : menuItems.length === 0 ? (
          <div className="text-center py-20 bg-dark-card rounded-2xl border border-gold/20 space-y-4">
            <Sparkles className="w-10 h-10 text-gold mx-auto" />
            <h3 className="font-serif text-xl font-bold text-white">No Culinary Items Found</h3>
            <p className="text-xs text-gray-400">Try adjusting your search criteria or selecting another category.</p>
            <button 
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); setFilterChefSpecial(false); }}
              className="py-2 px-5 bg-gold text-black text-xs font-semibold rounded uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          
          /* GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div 
                key={item._id}
                className="glass-card rounded-2xl overflow-hidden glass-card-hover group flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-80" />

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(item._id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(item._id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>

                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30 text-gold text-[10px] uppercase font-bold tracking-wider">
                    {item.category}
                  </div>

                  <span className="absolute bottom-3 right-3 text-2xl font-bold font-serif text-gold bg-black/80 px-3 py-1 rounded-lg border border-gold/30">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <Link to={`/menu/${item._id}`} className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors">
                      {item.title}
                    </Link>
                  </div>

                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs">
                    <span className="flex items-center space-x-1 text-gold font-semibold">
                      <Star className="w-3.5 h-3.5 fill-gold" />
                      <span>{item.rating || '4.9'}</span>
                    </span>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedDish(item)}
                        className="px-3 py-1.5 rounded-lg border border-gold/30 text-gold text-xs font-semibold hover:bg-gold/15 transition-colors flex items-center space-x-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => addToCart(item, 1)}
                        className="px-3 py-1.5 rounded-lg bg-gold text-black text-xs font-bold hover:bg-gold-light transition-colors flex items-center space-x-1 shadow-gold-glow"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        ) : (

          /* LIST VIEW */
          <div className="space-y-4">
            {menuItems.map((item) => (
              <div 
                key={item._id}
                className="glass-card p-4 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-6"
              >
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-24 h-24 rounded-xl object-cover border border-gold/30 shrink-0"
                  />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gold">{item.category}</span>
                    <h3 className="font-serif text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-gray-400 mt-1 max-w-xl leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 shrink-0 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-800">
                  <div className="text-right">
                    <span className="font-serif text-2xl font-bold text-gold">${item.price.toFixed(2)}</span>
                    <div className="flex items-center space-x-1 text-[11px] text-gold font-semibold justify-end">
                      <Star className="w-3 h-3 fill-gold" />
                      <span>{item.rating || '4.9'}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setSelectedDish(item)}
                      className="p-2.5 rounded-lg border border-gold/30 text-gold hover:bg-gold/15"
                      title="Quick View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => addToCart(item, 1)}
                      className="py-2.5 px-4 rounded-lg bg-gold text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-light shadow-gold-glow flex items-center space-x-1"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Basket</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        )}

      </section>

      {/* Quick View Modal */}
      {selectedDish && (
        <FoodModal item={selectedDish} onClose={() => setSelectedDish(null)} />
      )}

    </div>
  );
};

export default Menu;
