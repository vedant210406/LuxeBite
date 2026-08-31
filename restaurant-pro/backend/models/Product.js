import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: 'Gourmet Pantry'
  },
  stock: {
    type: Number,
    default: 50
  },
  rating: {
    type: Number,
    default: 4.8
  },
  weight: {
    type: String,
    default: '250g'
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);
export default Product;
