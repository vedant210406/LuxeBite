import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, User, ArrowRight, Search } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { blogService } from '../services/api';
import { initialBlogs } from '../../../backend/utils/seedData.js';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    blogService.getAll()
      .then(res => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch(() => {
        setBlogs(initialBlogs);
        setLoading(false);
      });
  }, []);

  const filteredBlogs = blogs.filter(b => 
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-dark text-gray-100 pt-28 pb-20">
      
      <section className="relative py-16 px-4 text-center border-b border-gold/20 bg-gradient-to-b from-black to-dark">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Grand Culinary Chronicle</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Culinary Art & <span className="text-gold-gradient italic">Sommelier Journal</span>
          </h1>
          <p className="text-sm text-gray-300 font-light max-w-2xl mx-auto">
            Articles on Wagyu dry-aging, Grand Cru Champagne pairing secrets, and gold leaf dessert mastery.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="w-4 h-4 text-gold absolute left-3.5 top-1/2 transform -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search articles on Wagyu, Truffles, Wine..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-black/60 border border-gold/30 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold"
          />
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-80 bg-dark-card rounded-2xl animate-pulse border border-gold/10" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map(blog => (
              <article key={blog._id} className="glass-card rounded-2xl overflow-hidden glass-card-hover group flex flex-col justify-between">
                <div className="relative h-60 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30 text-gold text-[10px] uppercase font-bold">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-4 text-[11px] text-gray-400">
                    <span className="flex items-center space-x-1">
                      <User className="w-3 h-3 text-gold" />
                      <span>{blog.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-gold" />
                      <span>{blog.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed font-light">
                    {blog.excerpt}
                  </p>

                  <div className="pt-4 border-t border-gray-800">
                    <Link to={`/blog/${blog.slug || blog._id}`} className="text-xs font-bold text-gold flex items-center space-x-1 hover:underline">
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

export default Blog;
