import axios from "axios";

const getBaseAPIUrl = () => {
    return process.env.NODE_ENV === "development"
        ? "http://127.0.0.1:8000"
        : process.env.API_URL;
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
