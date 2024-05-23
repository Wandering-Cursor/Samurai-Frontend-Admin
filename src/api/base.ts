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

import { Api } from "@/codegen/Api";

const apiClient = new Api();
// Setup the base URL for the API client
apiClient.instance.defaults.baseURL = getBaseAPIUrl();
// This interceptor will refresh the access token if it is expired
apiClient.instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== "/auth/refresh"
    ) {
      originalRequest._retry = true;
      try {
        const response = await apiClient.auth.refreshTokenAuthRefreshPost(
          null,
          {withCredentials: true}
        );
        localStorage.setItem("accessToken", response.data.access_token);
        return apiClient.instance(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

// This interceptor will display the toast message if the request fails
apiClient.instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const message = error.response.data.detail;
      console.error(message);
    }
    return Promise.reject(error);
  }
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
    return Promise.reject(error);
  }
);

export { apiClient };
