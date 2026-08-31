import Blog from '../models/Blog.js';
import { initialBlogs } from '../utils/seedData.js';

export const getBlogs = async (req, res) => {
  try {
    let blogs = await Blog.find({}).sort({ publishedAt: -1 });
    if (!blogs || blogs.length === 0) {
      blogs = initialBlogs;
    }
    res.json(blogs);
  } catch (error) {
    res.json(initialBlogs);
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    let blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      blog = initialBlogs.find(b => b.slug === req.params.slug || b._id === req.params.slug);
    }
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: 'Blog article not found' });
    }
  } catch (error) {
    const blog = initialBlogs.find(b => b.slug === req.params.slug || b._id === req.params.slug);
    if (blog) return res.json(blog);
    res.status(404).json({ message: 'Blog article not found' });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const created = await blog.save();
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
