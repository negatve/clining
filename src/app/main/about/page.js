import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      {/* Заголовок */}
      <section className={styles.hero}>
        <h1 className={styles.title}>ABOUT US</h1>
        <p className={styles.subtitle}>Professional Cleaning Services</p>
        <p className={styles.description}>
          We specialize in providing top-notch cleaning solutions for homes, offices, and commercial spaces. Our team ensures a spotless and hygienic environment tailored to your needs.
        </p>
        <div className={styles.images}>
          <img
            src="https://archicgi.com/wp-content/uploads/2021/06/3d-view-of-living-room-for-design-presentations-view-main.jpg"
            alt="Professional Cleaning Team"
            className={styles.image}
          />
          <div className={styles.philosophy}>
            <h2>Our Philosophy</h2>
            <p>
              At CleanPro, we believe in delivering exceptional cleaning services that enhance the quality of life for our clients. We focus on efficiency, reliability, and eco-friendly practices.
            </p>
          </div>
        </div>
      </section>

      {/* Секція послуг */}
      <section className={styles.services}>
        <div className={styles.servicesHeader}>
          <h2 className={styles.servicesTitle}>Our Services</h2>
          <p className={styles.servicesDescription}>
            At CleanPro, we offer a wide range of cleaning services to meet your specific needs. From routine cleaning to deep cleaning, we ensure your space is spotless and welcoming.
          </p>
        </div>
        <div className={styles.servicesContent}>
          <img
            src="https://i.pinimg.com/736x/13/1c/92/131c92f234982049d19bce6d6e1956fe.jpg"
            alt="Cleaning Services"
            className={styles.servicesImage}
          />
          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <h3>Residential Cleaning</h3>
              <p>
                Keep your home clean and organized with our professional residential cleaning services. We handle everything from dusting to deep cleaning.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Office Cleaning</h3>
              <p>
                Ensure a productive and hygienic workspace with our tailored office cleaning solutions. We work around your schedule to minimize disruptions.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Carpet and Upholstery Cleaning</h3>
              <p>
                Revive your carpets and furniture with our deep cleaning services. We remove stains, dirt, and allergens for a fresh and clean look.
              </p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Move-In/Move-Out Cleaning</h3>
              <p>
                Make your move stress-free with our comprehensive cleaning services. We ensure your old or new space is spotless and ready for use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}