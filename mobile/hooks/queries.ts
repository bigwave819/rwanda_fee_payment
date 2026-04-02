import { useQuery } from '@tanstack/react-query';
import { getServices } from '../api/services';
import { getUserBills } from '../api/bills';

export const useServices = () => {
    return useQuery({
        queryKey: ['services'],
        queryFn: getServices,
    });
};

export const useUserBills = () => {
    return useQuery({
        queryKey: ['userBills'],
        queryFn: getUserBills,
    });
};
