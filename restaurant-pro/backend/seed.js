import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import MenuItem from './models/MenuItem.js';
import Category from './models/Category.js';
import Product from './models/Product.js';
import Blog from './models/Blog.js';
import { initialMenuItems, initialCategories, initialProducts, initialBlogs } from './utils/seedData.js';

dotenv.config();

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/grand_restaurant');
    console.log('Connected to MongoDB for Seeding...');

    // Clear existing
    await User.deleteMany({});
    await MenuItem.deleteMany({});
    await Category.deleteMany({});
    await Product.deleteMany({});
    await Blog.deleteMany({});

    // Seed Admin & Default User
    const admin = await User.create({
      name: 'Grand Executive Admin',
      email: 'admin@grandrestaurant.com',
      password: 'Admin@123456',
      role: 'admin',
      phone: '+1 (800) 555-GRAND'
    });

    const defaultUser = await User.create({
      name: 'Victoria Sterling',
      email: 'user@grandrestaurant.com',
      password: 'User@123456',
      role: 'user',
      phone: '+1 (555) 019-2831'
    });

    console.log('Seeded Users: Admin & User created successfully.');

    // Seed Categories
    await Category.insertMany(initialCategories.map(({ _id, ...c }) => c));
    console.log(`Seeded ${initialCategories.length} Categories.`);

    // Seed Menu Items
    await MenuItem.insertMany(initialMenuItems.map(({ _id, ...m }) => m));
    console.log(`Seeded ${initialMenuItems.length} Food Menu Items.`);

    // Seed Shop Products
    await Product.insertMany(initialProducts.map(({ _id, ...p }) => p));
    console.log(`Seeded ${initialProducts.length} Shop Products.`);

    // Seed Blogs
    await Blog.insertMany(initialBlogs.map(({ _id, ...b }) => b));
    console.log(`Seeded ${initialBlogs.length} Blog Posts.`);

    console.log('✨ Database Seeding Completed Successfully! ✨');
    process.exit(0);
  } catch (error) {
    console.error('Error during seeding:', error.message);
    process.exit(1);
  }
};

seedDB();
