import express from 'express';
import { createOrder, getOrders, updateOrderStatus } from '../controllers/orderController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/', protect, getOrders);
router.put('/:id/status', protect, adminOnly, updateOrderStatus);

export default router;
