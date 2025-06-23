import { useEffect, useState } from 'react';
import { Service } from '@/shared/interfaces/types';

export const usePopularServices = () => {
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
                setError('Помилка: ' + (error instanceof Error ? error.message : 'Невідома помилка'));
            } finally {
                setLoading(false);
            }
        };

        fetchPopularServices();
    }, []);

    return { services, loading, error };
};