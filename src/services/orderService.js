import axios from "axios";

const API_URL = "http://localhost:8080/orders";

export const createOrder = (data) => {
  return axios.post(API_URL, data);
};

export const getInventory = () => {
  return axios.get(`${API_URL}/inventory`);
};

export const getAllOrders = () => {
  return axios.get(API_URL);
};