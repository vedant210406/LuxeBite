import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide dish title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide dish description']
  },
  price: {
    type: Number,
    required: [true, 'Please provide price']
  },
  category: {
    type: String,
    required: [true, 'Please specify category'],
    enum: ['Culinary Starters', 'Prime Steaks', 'Artisan Pasta & Seafood', 'Chef Specials', 'Signature Desserts', 'Sommelier Cellar']
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isSpicy: {
    type: Boolean,
    default: false
  },
  isVegan: {
    type: Boolean,
    default: false
  },
  isGlutenFree: {
    type: Boolean,
    default: false
  },
  isChefSpecial: {
    type: Boolean,
    default: false
  },
  calories: {
    type: Number,
    default: 450
  },
  prepTime: {
    type: String,
    default: '20-25 mins'
  },
  ingredients: [{
    type: String
  }],
  rating: {
    type: Number,
    default: 4.9
  }
}, {
  timestamps: true
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
export default MenuItem;
