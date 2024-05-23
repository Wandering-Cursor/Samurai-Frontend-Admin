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

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: any) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== "/auth/refresh"
    ) {
      originalRequest._retry = true;
      try {
        apiClient.auth.refreshTokenAuthRefreshPost(
          null,
          {
            withCredentials: true,
          }
        ).then(
          (repl) => {
            localStorage.setItem("accessToken", repl.data.access_token);
            return apiClient.instance(originalRequest);
          }
        );
      } catch (error) {
        return Promise.reject(error);
      }
    }
    if (error.response) {
      const message = error.response.data.detail;
      console.error(message);
    }
    return Promise.reject(error);
  },
);

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
);

export default instance;

import { Api } from "@/codegen/Api";

const apiClient = new Api();
// Setup the base URL for the API client
apiClient.instance.defaults.baseURL = getBaseAPIUrl();

// This interceptor will display the toast message if the request fails
apiClient.instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: any) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== "/auth/refresh"
    ) {
      originalRequest._retry = true;
      try {
        apiClient.auth.refreshTokenAuthRefreshPost(
          null,
          {
            withCredentials: true,
          }
        ).then(
          (repl) => {
            localStorage.setItem("accessToken", repl.data.access_token);
            return apiClient.instance(originalRequest);
          }
        );
      } catch (error) {
        return Promise.reject(error);
      }
    }
    if (error.response) {
      const message = error.response.data.detail;
      console.error(message);
    }
    return Promise.reject(error);
  },
);

// This interceptor will add the access token to the request headers
apiClient.instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    const message = error.response.data.detail;
    console.error(message);
    return Promise.reject(error);
  }
);

export { apiClient };
