// src/services/filmService.js

import axios from 'axios';

// Function to fetch films from the backend
export const fetchFilms = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/films`);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching films:", error);
    throw error;
  }
};
