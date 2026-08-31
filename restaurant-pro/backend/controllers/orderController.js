import Order from '../models/Order.js';

let mockOrders = [];

export const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, shippingAddress, paymentMethod, guestInfo } = req.body;
    let order;

    try {
      order = await Order.create({
        user: req.user ? req.user._id : undefined,
        guestInfo,
        items,
        totalAmount,
        shippingAddress,
        paymentMethod: paymentMethod || 'Razorpay',
        paymentStatus: 'paid',
        orderStatus: 'processing'
      });
    } catch (e) {
      order = {
        _id: 'ord_' + Date.now(),
        guestInfo,
        items,
        totalAmount,
        shippingAddress,
        paymentMethod: paymentMethod || 'Razorpay',
        paymentStatus: 'paid',
        orderStatus: 'processing',
        createdAt: new Date()
      };
      mockOrders.unshift(order);
    }

    res.status(201).json({
      success: true,
      message: 'Order placed successfully!',
      order
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    let orders = [];
    try {
      if (req.user && req.user.role === 'admin') {
        orders = await Order.find({}).sort({ createdAt: -1 });
      } else if (req.user) {
        orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
      }
    } catch (e) {
      orders = mockOrders;
    }

    if (!orders || orders.length === 0) {
      orders = mockOrders;
    }

    res.json(orders);
  } catch (error) {
    res.json(mockOrders);
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderStatus } = req.body;
    let order;
    try {
      order = await Order.findByIdAndUpdate(req.params.id, { orderStatus }, { new: true });
    } catch (e) {
      const idx = mockOrders.findIndex(o => o._id === req.params.id);
      if (idx !== -1) {
        mockOrders[idx].orderStatus = orderStatus;
        order = mockOrders[idx];
      }
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
