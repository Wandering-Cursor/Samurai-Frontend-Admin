import axios from "axios";

const getBaseAPIUrl = () => {
  return import.meta.env.VITE_API_URL
    ? import.meta.env.VITE_API_URL
    : "http://localhost:8000";
};

const instance = axios.create({
  baseURL: getBaseAPIUrl(),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
