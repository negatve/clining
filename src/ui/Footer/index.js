import React from 'react';
import styles from './index.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-content']}>
                <p>&copy; {new Date().getFullYear()} Cleaning Company. All rights reserved.</p>
                <ul className={styles['footer-links']}>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;