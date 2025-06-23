"use client";

import React from "react";
import { useOrders } from "@/hooks/useOrders";
import styles from "./page.module.css";

const OrdersPage: React.FC = () => {
  const { orders, loading, error, deleteOrder } = useOrders();

  if (loading) {
    return <p className={styles.loading}>Завантаження замовлень...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Ви впевнені, що хочете видалити це замовлення?")) return;
  
    try {
      await deleteOrder(id);
      alert("Замовлення успішно видалено.");
    } catch (err) {
      alert("Не вдалося видалити замовлення.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Усі замовлення</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Послуга</th>
            <th>Ім'я</th>
            <th>Телефон</th>
            <th>Email</th>
            <th>Місто</th>
            <th>Адреса</th>
            <th>Площа</th>
            <th>Дата</th>
            <th>Час</th>
            <th>Коментарі</th>
            <th>Оплата</th>
            <th>Створено</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.serviceName}</td>
              <td>{order.name}</td>
              <td>{order.phone}</td>
              <td>{order.email || "—"}</td>
              <td>{order.city}</td>
              <td>{order.address}</td>
              <td>{order.area} м²</td>
              <td>{new Date(order.date).toLocaleDateString()}</td>
              <td>{order.time}</td>
              <td>{order.comments || "—"}</td>
              <td>{order.paymentMethod}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
              <td>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(order.id)}
                >
                Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;