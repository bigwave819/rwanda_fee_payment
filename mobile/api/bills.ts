import { api } from './axios';

export const getUserBills = async () => {
    const response = await api.get('/bills/user');
    return response.data;
};
