import Link from 'next/link';
import React from 'react';
import styles from './index.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles['header-container']}>
                <div className={styles['logo-container']}>
                    <img 
                        src="/logo.svg" 
                        alt="Логотип Клінінгової Компанії" 
                        className={styles.logo} 
                    />
                    <h1 className={styles['header-title']}>Клінінгова Компанія</h1>
                </div>
                <nav className={styles.nav}>
                    <Link href="/" className={styles['nav-link']}>Головна</Link>
                    <Link href="/main/services" className={styles['nav-link']}>Послуги</Link>
                    <Link href="/main/about" className={styles['nav-link']}>Про нас</Link>
                    <Link href="/main/contact" className={styles['nav-link']}>Контакти</Link>
                </nav>
            </div>
        </header>
    );
}