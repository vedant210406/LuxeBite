import Reservation from '../models/Reservation.js';
import { sendReservationEmail } from '../utils/nodemailer.js';

// In-memory array fallback if DB is offline
let mockReservations = [];

// @desc    Create new table reservation
// @route   POST /api/reservations
export const createReservation = async (req, res) => {
  try {
    const { name, email, phone, date, time, guests, tableType, specialRequests } = req.body;

    let reservation;
    try {
      reservation = await Reservation.create({
        user: req.user ? req.user._id : undefined,
        name,
        email,
        phone,
        date,
        time,
        guests,
        tableType: tableType || 'Main Dining Hall',
        specialRequests: specialRequests || '',
        status: 'pending'
      });
    } catch (e) {
      // Fallback
      reservation = {
        _id: 'res_' + Date.now(),
        name,
        email,
        phone,
        date,
        time,
        guests,
        tableType: tableType || 'Main Dining Hall',
        specialRequests: specialRequests || '',
        status: 'pending',
        createdAt: new Date()
      };
      mockReservations.unshift(reservation);
    }

    // Send confirmation email
    await sendReservationEmail(reservation);

    res.status(201).json({
      success: true,
      message: 'Reservation submitted successfully! A confirmation email has been dispatched.',
      reservation
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get reservations (Admin sees all, User sees theirs)
// @route   GET /api/reservations
export const getReservations = async (req, res) => {
  try {
    let reservations = [];
    try {
      if (req.user && req.user.role === 'admin') {
        reservations = await Reservation.find({}).sort({ createdAt: -1 });
      } else if (req.user) {
        reservations = await Reservation.find({ user: req.user._id }).sort({ createdAt: -1 });
      }
    } catch (e) {
      reservations = mockReservations;
    }

    if (!reservations || reservations.length === 0) {
      reservations = mockReservations;
    }

    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update reservation status (Admin)
// @route   PUT /api/reservations/:id/status
export const updateReservationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    let reservation;
    try {
      reservation = await Reservation.findByIdAndUpdate(req.params.id, { status }, { new: true });
    } catch (e) {
      const idx = mockReservations.findIndex(r => r._id === req.params.id);
      if (idx !== -1) {
        mockReservations[idx].status = status;
        reservation = mockReservations[idx];
      }
    }

    if (reservation) {
      res.json(reservation);
    } else {
      res.status(404).json({ message: 'Reservation not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete reservation
// @route   DELETE /api/reservations/:id
export const deleteReservation = async (req, res) => {
  try {
    try {
      await Reservation.findByIdAndDelete(req.params.id);
    } catch (e) {
      mockReservations = mockReservations.filter(r => r._id !== req.params.id);
    }
    res.json({ message: 'Reservation removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
