import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, ArrowLeft, Plus, Minus, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { productService } from '../services/api';
import { useCart } from '../context/CartContext';
import { initialProducts } from '../../../backend/utils/seedData.js';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    productService.getById(id)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        const found = initialProducts.find(p => p._id === id);
        setProduct(found || initialProducts[0]);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold" />
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="min-h-screen bg-dark text-gray-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <Link to="/shop" className="inline-flex items-center space-x-2 text-gold text-xs font-semibold uppercase tracking-wider hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Gourmet Store</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-dark-card rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-2xl items-center">
          
          <div className="h-96 sm:h-[450px] rounded-2xl overflow-hidden border border-gold/30">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">{product.category}</span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">{product.name}</h1>
              <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                <span className="flex items-center space-x-1 text-gold font-semibold">
                  <Star className="w-4 h-4 fill-gold" />
                  <span>{product.rating} / 5.0</span>
                </span>
                <span>Weight: {product.weight}</span>
                <span className="text-green-400">In Stock ({product.stock || 50} units)</span>
              </div>
            </div>

            <div className="text-3xl font-serif font-bold text-gold">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-800 text-center text-xs">
              <div className="p-3 bg-black/40 rounded-xl border border-gold/20">
                <Truck className="w-5 h-5 text-gold mx-auto mb-1" />
                <span className="text-gray-300">Express Delivery</span>
              </div>
              <div className="p-3 bg-black/40 rounded-xl border border-gold/20">
                <ShieldCheck className="w-5 h-5 text-gold mx-auto mb-1" />
                <span className="text-gray-300">100% Authentic</span>
              </div>
              <div className="p-3 bg-black/40 rounded-xl border border-gold/20">
                <RefreshCw className="w-5 h-5 text-gold mx-auto mb-1" />
                <span className="text-gray-300">Gourmet Seal</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800 flex items-center gap-4">
              <div className="flex items-center space-x-3 bg-black/60 border border-gold/30 rounded-xl p-1.5">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-9 h-9 rounded bg-dark-elevated text-gold font-bold flex items-center justify-center hover:bg-gold/20">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-base font-semibold text-white px-3">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-9 h-9 rounded bg-dark-elevated text-gold font-bold flex items-center justify-center hover:bg-gold/20">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => addToCart(product, quantity)}
                className="flex-1 py-4 px-6 bg-gold text-black font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center space-x-2 hover:bg-gold-light transition-colors shadow-gold-glow"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add To Basket - ${(product.price * quantity).toFixed(2)}</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
