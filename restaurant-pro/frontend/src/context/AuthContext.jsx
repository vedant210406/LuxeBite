import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem('grand_token');
    const savedUser = localStorage.getItem('grand_user');
    if (savedToken && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('grand_token');
        localStorage.removeItem('grand_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authService.login({ email, password });
      const userData = response.data;
      setUser(userData);
      localStorage.setItem('grand_token', userData.token);
      localStorage.setItem('grand_user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed. Please check credentials.'
      };
    }
  };

  const register = async (name, email, password, phone) => {
    try {
      const response = await authService.register({ name, email, password, phone });
      const userData = response.data;
      setUser(userData);
      localStorage.setItem('grand_token', userData.token);
      localStorage.setItem('grand_user', JSON.stringify(userData));
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed.'
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('grand_token');
    localStorage.removeItem('grand_user');
  };

  const isAdmin = user && user.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAdmin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
