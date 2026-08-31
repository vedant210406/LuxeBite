import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('grand_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [coupon, setCoupon] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('grand_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, quantity = 1) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(i => i._id === item._id || i.title === item.title || i.name === item.name);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(i => i._id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev => prev.map(i => i._id === itemId ? { ...i, quantity } : i));
  };

  const clearCart = () => {
    setCart([]);
    setCoupon(null);
  };

  const applyCoupon = (code) => {
    if (code.toUpperCase() === 'GRAND10') {
      setCoupon({ code: 'GRAND10', discountPercent: 10 });
      return { success: true, message: '10% VIP Discount Applied!' };
    } else if (code.toUpperCase() === 'MICHELIN20') {
      setCoupon({ code: 'MICHELIN20', discountPercent: 20 });
      return { success: true, message: '20% Chef Special Discount Applied!' };
    }
    return { success: false, message: 'Invalid Promo Code.' };
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = coupon ? (subtotal * coupon.discountPercent) / 100 : 0;
  const tax = (subtotal - discountAmount) * 0.08; // 8% luxury tax
  const total = subtotal - discountAmount + tax;

  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      subtotal,
      discountAmount,
      tax,
      total,
      totalItemCount,
      coupon,
      applyCoupon,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
