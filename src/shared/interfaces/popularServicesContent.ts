import { Service } from '@/shared/interfaces/types';

export interface PopularServicesContextProps {
    services: Service[];
    loading: boolean;
    error: string | null;
}