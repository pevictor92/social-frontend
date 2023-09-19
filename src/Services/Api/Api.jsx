import axios from "axios";

const api = axios.create({
  baseURL: "https://social-backend-80eq.onrender.com",
});

export default api;
