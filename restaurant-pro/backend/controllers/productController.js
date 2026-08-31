import Product from '../models/Product.js';
import { initialProducts } from '../utils/seedData.js';

export const getProducts = async (req, res) => {
  try {
    let products = await Product.find({});
    if (!products || products.length === 0) {
      products = initialProducts;
    }
    res.json(products);
  } catch (error) {
    res.json(initialProducts);
  }
};

export const getProductById = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      product = initialProducts.find(p => p._id === req.params.id);
    }
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    const product = initialProducts.find(p => p._id === req.params.id);
    if (product) return res.json(product);
    res.status(404).json({ message: 'Product not found' });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
