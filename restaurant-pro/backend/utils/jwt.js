import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'grand_restaurant_secret', {
    expiresIn: '30d'
  });
};
