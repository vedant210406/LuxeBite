import express from 'express';
import {
  getMenuItems,
  getCategories,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem
} from '../controllers/menuController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getMenuItems);
router.get('/categories', getCategories);
router.get('/:id', getMenuItemById);
router.post('/', protect, adminOnly, createMenuItem);
router.put('/:id', protect, adminOnly, updateMenuItem);
router.delete('/:id', protect, adminOnly, deleteMenuItem);

export default router;
