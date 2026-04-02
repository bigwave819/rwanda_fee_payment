import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginUser, registerUser } from '../api/auth';
import { createPayment, updatePaymentStatus } from '../api/payments';
import * as SecureStore from 'expo-secure-store';

export const useLogin = () => {
    return useMutation({
        mutationFn: loginUser,
        onSuccess: async (data) => {
            if (data.tokens?.accessToken) {
                await SecureStore.setItemAsync('token', data.tokens.accessToken);
            }
        },
    });
};

export const useRegister = () => {
    return useMutation({
        mutationFn: registerUser,
    });
};

export const useCreatePaymentMock = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (billId: string) => {
            // 1. Create payment entry in backend
            const payment = await createPayment(billId);

            // 2. Wait 2-3 seconds to simulate payment gateway
            await new Promise((resolve) => setTimeout(resolve, 2500));

            // 3. Mark payment as completed
            const updatedPayment = await updatePaymentStatus(payment.id, 'COMPLETED');
            return updatedPayment;
        },
        onSuccess: () => {
            // Invalidate bills to refresh status and hide paid ones
            queryClient.invalidateQueries({ queryKey: ['userBills'] });
        },
    });
};
