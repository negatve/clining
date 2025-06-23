import { useEffect, useState } from 'react';
import { Service } from '@/shared/interfaces/types';

export const useServiceDetails = (id: string | undefined) => {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        if (!id) {
          throw new Error('Invalid parameters: ID is required');
        }

        const response = await fetch(`/api/services/${id}`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setService(data);
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching service details');
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  return { service, loading, error };
};