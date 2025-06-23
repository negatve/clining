"use client";

import React, { useState } from 'react';
import { useServiceDetails } from '@/hooks/useServiceDetails';
import styles from './index.module.css';
import OrderForm from '@/components/OrderForm';

const ServiceDetailPage = ({ id }: { id: string }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [rating, setRating] = useState<number>(0); // Стан для збереження оцінки
  const [hoverRating, setHoverRating] = useState<number>(0); // Стан для підсвічування зірок

  if (!id) {
    return <p>Error: Service ID is missing</p>;
  }

  const { service, loading, error } = useServiceDetails(id);

  if (loading) {
    return <p>Loading service details...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!service) {
    return <p>Service not found.</p>;
  }

  const handleOrderClick = () => {
    setSelectedService(service.name); // Передаємо назву послуги
    setShowForm(true);
  };

  const handleRatingClick = (value: number) => {
    setRating(value); // Зберігаємо оцінку
    alert(`Ви оцінили послугу на ${value} зірок!`);
  };

  const handleMouseEnter = (value: number) => {
    setHoverRating(value); // Підсвічуємо зірки при наведенні
  };

  const handleMouseLeave = () => {
    setHoverRating(0); // Прибираємо підсвічування
  };

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>
          Відкрийте для себе <span className={styles.highlight}>{service.name}</span>
        </h1>
        <p className={styles.description}>{service.description}</p>
        <p className={styles.price}>
          Ціна: <span>{service.price} грн / {service.unit}</span>
        </p>

        {/* Блок зірок для оцінки */}
        <div className={styles.rating}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`${styles.star} ${star <= (hoverRating || rating) ? styles.filled : ''}`}
              onClick={() => handleRatingClick(star)}
              onMouseEnter={() => handleMouseEnter(star)}
              onMouseLeave={handleMouseLeave}
            >
              ★
            </span>
          ))}
        </div>

        <button className={styles.button} onClick={handleOrderClick}>
          Замовити
        </button>
      </div>
      <div className={styles.imageSection}>
        <img src={service.image_url} alt={service.name} className={styles.image} />
      </div>

      {/* Відображення форми */}
      {showForm && selectedService && <OrderForm serviceName={selectedService} />}
    </div>
  );
};

export default ServiceDetailPage;