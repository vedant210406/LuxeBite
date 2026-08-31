import MenuItem from '../models/MenuItem.js';
import Category from '../models/Category.js';
import { initialMenuItems, initialCategories } from '../utils/seedData.js';

// @desc    Get all menu items with search/filter/sort
// @route   GET /api/menu
export const getMenuItems = async (req, res) => {
  try {
    const { category, search, sort, isFeatured } = req.query;
    let query = {};

    if (category && category !== 'All') {
      query.category = category;
    }
    if (isFeatured === 'true') {
      query.isFeatured = true;
    }
    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }

    let items = await MenuItem.find(query);

    // Fallback if DB is empty
    if (!items || items.length === 0) {
      items = initialMenuItems.filter(item => {
        if (category && category !== 'All' && item.category !== category) return false;
        if (isFeatured === 'true' && !item.isFeatured) return false;
        if (search && !item.title.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
      });
    }

    if (sort === 'price_asc') {
      items.sort((a, b) => a.price - b.price);
    } else if (sort === 'price_desc') {
      items.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      items.sort((a, b) => b.rating - a.rating);
    }

    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get menu categories
// @route   GET /api/menu/categories
export const getCategories = async (req, res) => {
  try {
    let categories = await Category.find({});
    if (!categories || categories.length === 0) {
      categories = initialCategories;
    }
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single menu item
// @route   GET /api/menu/:id
export const getMenuItemById = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    if (item) {
      return res.json(item);
    }
    
    // Fallback
    const fallbackItem = initialMenuItems.find(i => i._id === req.params.id || i.title.toLowerCase().replace(/\s+/g, '-') === req.params.id);
    if (fallbackItem) return res.json(fallbackItem);

    res.status(404).json({ message: 'Menu item not found' });
  } catch (error) {
    const fallbackItem = initialMenuItems.find(i => i._id === req.params.id || i.title.toLowerCase().replace(/\s+/g, '-') === req.params.id);
    if (fallbackItem) return res.json(fallbackItem);
    res.status(404).json({ message: 'Menu item not found' });
  }
};

// @desc    Create menu item (Admin)
// @route   POST /api/menu
export const createMenuItem = async (req, res) => {
  try {
    const item = new MenuItem(req.body);
    const createdItem = await item.save();
    res.status(201).json(createdItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update menu item (Admin)
// @route   PUT /api/menu/:id
export const updateMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Menu item not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete menu item (Admin)
// @route   DELETE /api/menu/:id
export const deleteMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndDelete(req.params.id);
    if (item) {
      res.json({ message: 'Menu item deleted successfully' });
    } else {
      res.status(404).json({ message: 'Menu item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
