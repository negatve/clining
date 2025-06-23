import styles from './contact.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <div className={styles.contactForm}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <h1 className={styles.title}>Let's Chat, Reach Out to Us</h1>
        <p className={styles.description}>
          Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.
        </p>
        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First name" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last name" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Email address" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Leave us a message"></textarea>
          </div>
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="privacyPolicy" />
            <label htmlFor="privacyPolicy">
              I agree to our friendly <a href="#">privacy policy</a>
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>

      <div className={styles.contactInfo}>
        <img
          src="https://img.freepik.com/free-photo/high-angle-home-3d-interior-design_23-2149647175.jpg"
          alt="Contact Us"
          className={styles.contactImage}
        />

        <div className={styles.infoItem}>
          <Mail size={24} className={styles.icon} />
          <div>
            <h3>Email</h3>
            <p>techteam@cleanpro.com</p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <Phone size={24} className={styles.icon} />
          <div>
            <h3>Phone</h3>
            <p>(123) 456-7890</p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <MapPin size={24} className={styles.icon} />
          <div>
            <h3>Address</h3>
            <p>123 Cleaning St, CleanCity, CL 45678</p>
          </div>
        </div>
      </div>
    </div>
  );
}
