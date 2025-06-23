'use client';

import React, { useState } from 'react';
import styles from './index.module.css';

const AddServiceForm = () => {

    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        unit: '',
        duration: 0,
        category: '',
        is_active: true,
        image_url: '',
        discount: 0,
        is_popular: false,
        service_code: '',
        rating: 0,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formattedData = {
            ...formData,
            price: parseFloat(formData.price),
            duration: parseInt(formData.duration, 10),
            discount: formData.discount ? parseInt(formData.discount, 10) : null,
            rating: formData.rating ? parseFloat(formData.rating) : null,
        };
    
        console.log('Дані форми:', formattedData);
    
        try {
            const response = await fetch('/api/addService', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedData),
            });
    
            if (response.ok) {
                const data = await response.json();
                alert('Послуга успішно додана!');
                console.log('Відповідь сервера:', data);
            } else {
                const errorData = await response.json();
                console.error('Помилка сервера:', errorData);
                alert('Помилка при додаванні послуги: ' + errorData.error);
            }
        } catch (error) {
            console.error('Помилка:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Додати нову послугу</h2>
            <input
                type="text"
                name="name"
                placeholder="Назва послуги"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
            />
            <textarea
                name="description"
                placeholder="Опис послуги"
                value={formData.description}
                onChange={handleChange}
                className={styles.textarea}
                required
            />
            <input
                type="number"
                name="price"
                placeholder="Ціна"
                value={formData.price}
                onChange={handleChange}
                className={styles.input}
                required
            />
            <input
                type="text"
                name="unit"
                placeholder="Одиниця виміру (м², година)"
                value={formData.unit}
                onChange={handleChange}
                className={styles.input}
                required
            />
            <input
                type="number"
                name="duration"
                placeholder="Тривалість (хвилини)"
                value={formData.duration}
                onChange={handleChange}
                className={styles.input}
                required
            />
            <input
                type="text"
                name="category"
                placeholder="Категорія"
                value={formData.category}
                onChange={handleChange}
                className={styles.input}
                required
            />
            <input
                type="text"
                name="image_url"
                placeholder="Посилання на зображення"
                value={formData.image_url}
                onChange={handleChange}
                className={styles.input}
            />
            <input
                type="number"
                name="discount"
                placeholder="Знижка (%)"
                value={formData.discount}
                onChange={handleChange}
                className={styles.input}
            />
            <input
                type="text"
                name="service_code"
                placeholder="Код послуги"
                value={formData.service_code}
                onChange={handleChange}
                className={styles.input}
                required
            />
            <input
                type="number"
                name="rating"
                placeholder="Оцінка (0-5)"
                value={formData.rating}
                onChange={handleChange}
                className={styles.input}
            />
            <label className={styles['checkbox-label']}>
                <input
                    type="checkbox"
                    name="is_popular"
                    checked={formData.is_popular}
                    onChange={handleChange}
                />
                <span>Топова послуга</span>
            </label>
            <button type="submit" className={styles.button}>
                Додати послугу
            </button>
        </form>
    );
};

export default AddServiceForm;