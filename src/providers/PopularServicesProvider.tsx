'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Service } from '@/shared/interfaces/types';

export interface PopularServicesContextProps {
    services: Service[];
    loading: boolean;
    error: string | null;
}

const PopularServicesContext = createContext<PopularServicesContextProps | undefined>(undefined);

export const PopularServicesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPopularServices = async () => {
            try {
                const response = await fetch('/api/popularServices');
                if (response.ok) {
                    const data = await response.json();
                    setServices(data);
                } else {
                    setError('Помилка при отриманні популярних послуг');
                }
            } catch (error) {
                setError('Помилка: ' + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPopularServices();
    }, []);

    return (
        <PopularServicesContext.Provider value={{ services, loading, error }}>
            {children}
        </PopularServicesContext.Provider>
    );
};

export const usePopularServices = () => {
    const context = useContext(PopularServicesContext);
    if (!context) {
        throw new Error('usePopularServices must be used within a PopularServicesProvider');
    }
    return context;
};