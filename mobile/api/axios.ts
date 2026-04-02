import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// Set your backend local IP address here or in an env variable. 
// For Android emulator it usually is 10.0.2.2.
const BASE_URL = 'http://10.0.2.2:3000';

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    async (config) => {
        const token = await SecureStore.getItemAsync('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        // Handle global errors, e.g. token expiration
        if (error.response?.status === 401) {
            await SecureStore.deleteItemAsync('token');
            // Potentially redirect to Login here depending on navigation setup
        }
        return Promise.reject(error);
    }
);
