import { api } from './axios';

export const createPayment = async (billId: string) => {
    const response = await api.post('/payments', { billId });
    return response.data;
};

export const updatePaymentStatus = async (paymentId: string, status: string) => {
    const response = await api.patch(`/payments/${paymentId}/status`, { status });
    return response.data;
};
