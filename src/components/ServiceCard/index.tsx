import React from 'react';
import styles from './index.module.css';
import { Service } from '@/shared/interfaces/types';

interface ServiceCardProps {
    service: Service;
    onCalculate: (price: number) => void;
    onOrder: (serviceId: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onCalculate, onOrder }) => {
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
            <button
                className={styles.button}
                onClick={() => onCalculate(service.price)}
            >
                Розрахувати
            </button>
            <button
                className={styles.button}
                onClick={() => onOrder(service.id)}
            >
                Детальніше
            </button>
        </div>
    );
};

export default ServiceCard;