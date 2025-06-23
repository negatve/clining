import { useEffect, useState } from "react";
import Order from "@/shared/interfaces/order";

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Не вдалося завантажити замовлення.");
        }

        const data = await response.json();
        setOrders(data);
      } catch (err: any) {
        setError(err.message || "Сталася помилка.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const deleteOrder = async (id: number) => {
    const response = await fetch(`/api/orders/${id}`, {
      method: "DELETE",
    });
  
    if (!response.ok) {
      throw new Error("Не вдалося видалити замовлення.");
    }
  
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return { orders, loading, error, deleteOrder };
};