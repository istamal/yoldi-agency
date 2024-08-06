import axios from "axios";
import { use } from "react";

const axiosInstance = axios.create({
    baseURL: "https://frontend-test-api.yoldi.agency/api"
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('twk_token_5d0f4f6b36eab9721118c84e');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            // Service.logOut()
        }

        return Promise.reject(error);
    }

);


class Service {
    static async login(data: { email: string, password: string }) {
        const response = await axiosInstance.post("/auth/login", data);
        const { value } = response.data;
        localStorage.setItem("token", value);
        return response;
    }

    static logOut() {
        localStorage.removeItem("token");
        localStorage.setItem("prevPage", window.location.pathname);
        window.location.pathname = "/login";
    }

    static getUserBySlug(slug: string) {
        return axiosInstance.get(`/user/${slug}`);
    }

    static getProfile() {
        return axiosInstance.get('/profile');
    }

    static get(url: string) {
        return axiosInstance.get(url);
    }

    static post(url: string, data: any) {
        return axiosInstance.post(url, data);
    }

    static put(url: string, data: any) {
        return axiosInstance.put(url, data);
    }

    static delete(url: string) {
        return axiosInstance.delete(url);
    }
}

export default Service;