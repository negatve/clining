"use client";

import React, { useState } from 'react';
import styles from './index.module.css';

interface OrderFormProps {
  serviceName: string;
}

const OrderForm: React.FC<OrderFormProps> = ({ serviceName }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [area, setArea] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [comments, setComments] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [agree, setAgree] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!name || !phone || !city || !address || !area || !date || !time || !agree) {
        alert('Будь ласка, заповніть усі обов’язкові поля.');
        return;
      }
  
      setLoading(true);
      setError(null);
  
      try {
        const response = await fetch('/api/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            serviceName,
            name,
            phone,
            email,
            city,
            address,
            area: parseFloat(area),
            date,
            time,
            comments,
            paymentMethod,
            agree,
          }),
        });
  
        if (!response.ok) {
          throw new Error('Не вдалося створити замовлення. Спробуйте ще раз.');
        }
  
        alert(`Замовлення на послугу "${serviceName}" успішно відправлено!`);
        // Очистити форму
        setName('');
        setPhone('');
        setEmail('');
        setCity('');
        setAddress('');
        setArea('');
        setDate('');
        setTime('');
        setComments('');
        setPaymentMethod('cash');
        setAgree(false);
      } catch (err: any) {
        setError(err.message || 'Сталася помилка.');
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Замовлення послуги: {serviceName}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Контактна інформація */}
        <label className={styles.label}>
          Ваше ім'я <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />

        <label className={styles.label}>
          Ваш телефон <span className={styles.required}>*</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={styles.input}
        />

        <label className={styles.label}>Ваш email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />

        {/* Адреса прибирання */}
        <label className={styles.label}>
          Місто / населений пункт <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={styles.input}
        />

        <label className={styles.label}>
          Вулиця, будинок, квартира / офіс <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={styles.input}
        />

        {/* Площа приміщення */}
        <label className={styles.label}>
          Площа приміщення (м²) <span className={styles.required}>*</span>
        </label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className={styles.input}
        />

        {/* Дата та час */}
        <label className={styles.label}>
          Бажана дата прибирання <span className={styles.required}>*</span>
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={styles.input}
        />

        <label className={styles.label}>
          Час <span className={styles.required}>*</span>
        </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={styles.input}
        />

        {/* Додаткові побажання */}
        <label className={styles.label}>Додаткові побажання</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className={styles.textarea}
        ></textarea>

        {/* Спосіб оплати */}
        <label className={styles.label}>Спосіб оплати</label>
        <div className={styles.paymentMethods}>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Готівка
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Картка
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="online"
              checked={paymentMethod === 'online'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Онлайн
          </label>
        </div>

        {/* Політика та підтвердження */}
        <div className={styles.agreement}>
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            Я погоджуюсь з умовами обробки персональних даних
          </label>
        </div>

        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Відправка...' : 'Замовити прибирання'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default OrderForm;