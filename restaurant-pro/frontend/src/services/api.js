import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('grand_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const authService = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
  getProfile: () => api.get('/auth/profile'),
  getUsers: () => api.get('/auth/users')
};

export const menuService = {
  getItems: (params) => api.get('/menu', { params }),
  getCategories: () => api.get('/menu/categories'),
  getItemById: (id) => api.get(`/menu/${id}`),
  createItem: (data) => api.post('/menu', data),
  updateItem: (id, data) => api.put(`/menu/${id}`, data),
  deleteItem: (id) => api.delete(`/menu/${id}`)
};

export const reservationService = {
  create: (data) => api.post('/reservations', data),
  getAll: () => api.get('/reservations'),
  updateStatus: (id, status) => api.put(`/reservations/${id}/status`, { status }),
  delete: (id) => api.delete(`/reservations/${id}`)
};

export const productService = {
  getAll: () => api.get('/products'),
  getById: (id) => api.get(`/products/${id}`),
  create: (data) => api.post('/products', data)
};

export const orderService = {
  create: (data) => api.post('/orders', data),
  getAll: () => api.get('/orders'),
  updateStatus: (id, orderStatus) => api.put(`/orders/${id}/status`, { orderStatus })
};

export const blogService = {
  getAll: () => api.get('/blogs'),
  getBySlug: (slug) => api.get(`/blogs/${slug}`),
  create: (data) => api.post('/blogs', data)
};

export const contactService = {
  send: (data) => api.post('/contact', data),
  getAll: () => api.get('/contact')
};

export const analyticsService = {
  getStats: () => api.get('/analytics')
};

export default api;
