import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Sparkles, Share2 } from 'lucide-react';
import { blogService } from '../services/api';
import { initialBlogs } from '../../../backend/utils/seedData.js';

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    blogService.getBySlug(slug)
      .then(res => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch(() => {
        const found = initialBlogs.find(b => b.slug === slug || b._id === slug);
        setBlog(found || initialBlogs[0]);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold" />
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-dark text-gray-100 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link to="/blog" className="inline-flex items-center space-x-2 text-gold text-xs font-semibold uppercase tracking-wider hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>

        <article className="space-y-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">{blog.category}</span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">{blog.title}</h1>
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <span className="flex items-center space-x-1">
                <User className="w-3.5 h-3.5 text-gold" />
                <span>{blog.author}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>{blog.readTime}</span>
              </span>
            </div>
          </div>

          <div className="h-[420px] rounded-2xl overflow-hidden border border-gold/30">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </div>

          <div className="glass-card p-8 rounded-2xl border border-gold/20 text-gray-300 font-light leading-relaxed space-y-4 text-sm sm:text-base whitespace-pre-line">
            {blog.content}
          </div>

          <div className="pt-6 border-t border-gray-800 flex justify-between items-center text-xs text-gold font-bold">
            <span>Published by Grand Culinary Studio</span>
            <button onClick={() => navigator.clipboard?.writeText(window.location.href)} className="flex items-center space-x-1 hover:underline">
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </button>
          </div>
        </article>

      </div>
    </div>
  );
};

export default BlogDetails;
