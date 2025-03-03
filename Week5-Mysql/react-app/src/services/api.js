// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchHistory = async () => {
  try {
    const response = await axios.get(`${API_URL}/history`);
    return response.data;
  } catch (error) {
    console.error("Error fetching history:", error);
    throw error;
  }
};

export const saveCounter = async (data) => {
  try {
    await axios.post(`${API_URL}/save`, data);
  } catch (error) {
    console.error("Error saving data:", error);
    throw error;
  }
};

export const clearHistory = async () => {
  try {
    await axios.delete(`${API_URL}/history`);
  } catch (error) {
    console.error("Error clearing history:", error);
    throw error;
  }
};
