import express from 'express';
import {
  createReservation,
  getReservations,
  updateReservationStatus,
  deleteReservation
} from '../controllers/reservationController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', createReservation);
router.get('/', protect, getReservations);
router.put('/:id/status', protect, adminOnly, updateReservationStatus);
router.delete('/:id', protect, deleteReservation);

export default router;
