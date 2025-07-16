import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance
const api = axios.create({
  baseURL: API,
  timeout: 10000,
});

// API functions
export const apiService = {
  // Get all dive locations
  async getLocations() {
    try {
      const response = await api.get('/locations');
      return response.data;
    } catch (error) {
      console.error('Error fetching locations:', error);
      throw error;
    }
  },

  // Get specific location by ID
  async getLocation(locationId) {
    try {
      const response = await api.get(`/locations/${locationId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching location:', error);
      throw error;
    }
  },

  // Get Tenggol Island trivia
  async getTenggolTrivia() {
    try {
      const response = await api.get('/tenggol-trivia');
      return response.data;
    } catch (error) {
      console.error('Error fetching Tenggol trivia:', error);
      throw error;
    }
  },

  // Create game progress
  async createGameProgress(progressData) {
    try {
      const response = await api.post('/game-progress', progressData);
      return response.data;
    } catch (error) {
      console.error('Error creating game progress:', error);
      throw error;
    }
  },

  // Get game progress
  async getGameProgress(progressId) {
    try {
      const response = await api.get(`/game-progress/${progressId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching game progress:', error);
      throw error;
    }
  },

  // Update game progress
  async updateGameProgress(progressId, updateData) {
    try {
      const response = await api.put(`/game-progress/${progressId}`, updateData);
      return response.data;
    } catch (error) {
      console.error('Error updating game progress:', error);
      throw error;
    }
  },

  // Get all game progress records
  async getAllGameProgress() {
    try {
      const response = await api.get('/game-progress');
      return response.data;
    } catch (error) {
      console.error('Error fetching all game progress:', error);
      throw error;
    }
  }
};

export default api;