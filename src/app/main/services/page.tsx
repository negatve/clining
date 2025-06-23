'use client';

import React, { useState } from 'react';
import { useServices } from '@/hooks/useServices';
import styles from '@/components/ServiceCard/index.module.css';
import ServiceCard from '@/components/ServiceCard';

const ServicesPage: React.FC = () => {
    const { services, loading, error } = useServices();
    const [quantity, setQuantity] = useState<number>(1);
    const [price, setPrice] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortOption, setSortOption] = useState<string>('price-asc');

    const handleCalculate = (servicePrice: number) => {
        setPrice(servicePrice * quantity);
    };

    const handleOrder = (serviceId: number) => {
        window.location.href = `/main/services/${serviceId}`;
    };

    const filteredServices = services
        .filter((service) =>
            service.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOption === 'price-asc') {
                return a.price - b.price;
            } else if (sortOption === 'price-desc') {
                return b.price - a.price;
            } else if (sortOption === 'popular') {
                return b.is_popular - a.is_popular;
            }
            return 0;
        });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.pageContainer}>
            {/* Панель фільтрів */}
            <div className={styles.filters}>
                <input
                    type="text"
                    placeholder="Пошук послуг..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                />
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className={styles.sortSelect}
                >
                    <option value="price-asc">Сортувати за ціною: Від дешевих до дорогих</option>
                    <option value="price-desc">Сортувати за ціною: Від дорогих до дешевих</option>
                    <option value="popular">Популярні</option>
                </select>
            </div>

            <div className={styles.content}>
                {/* Список карток послуг */}
                <div className={styles.cardsContainer}>
                    {filteredServices.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            onCalculate={handleCalculate}
                            onOrder={handleOrder}
                        />
                    ))}
                </div>


                {/* Фіксований калькулятор */}
                <div className={styles.fixedCalculator}>
                    <h3>Калькулятор вартості</h3>
                    <label>Кількість:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min="1"
                    />
                    <label>Загальна вартість:</label>
                    <input
                        type="text"
                        value={price !== null ? `${price.toFixed(2)} грн` : ''}
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;