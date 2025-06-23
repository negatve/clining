'use client';

import React from 'react';
import styles from './index.module.css';
import { usePopularServices } from '@/hooks/usePopularServices';

const PopularServices = () => {
  const { services, loading, error } = usePopularServices();

  if (loading) {
    return <p>Завантаження популярних послуг...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  const renderStars = (rating: any) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${styles.star} ${i <= rating ? styles.filled : ''}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={styles.container}>
      {services.map((service) => (
        <div key={service.id} className={styles.card}>
          <img
            src={service.image_url || '/placeholder.png'}
            alt={service.name}
            className={styles.image}
          />
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <div className={styles.rating}>{renderStars(service.rating)}</div>
          <p className={styles.price}>
            {service.price} грн / {service.unit}
          </p>
          <a href={`/main/services/${service.id}`} className={styles.button}>
            Детальніше
          </a>
        </div>
      ))}
    </div>
  );
};

export default PopularServices;