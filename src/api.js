// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Backend URL

// Axios instance with default settings
const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Export API methods
export const fetchFilms = () => api.get('/films');
export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (userData) => api.post('/auth/register', userData);
export const fetchSeances = () => api.get('/seances');
export const createReservation = (reservationData) =>
  api.post('/reservations', reservationData);
