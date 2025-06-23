import { useState } from 'react';
import OrderData from '@/shared/interfaces/orderData';

export const useCreateOrder = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const createOrder = async (orderData: OrderData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'An error occurred while creating the order');
    } finally {
      setLoading(false);
    }
  };

  return { createOrder, loading, error, success };
};