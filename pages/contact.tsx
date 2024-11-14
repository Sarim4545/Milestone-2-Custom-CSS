import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactHeader}>Contact Us</h2>
      <p className={styles.contactDescription}>
        We&apos;re on top of our game when it comes to knowing our customers and making their experiences unforgettable.
      </p>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <p className={styles.infoTitle}>458 Street Near Saint Petersburg Church, California</p>
            <p>{process.env.CONTACT_ADDRESS}</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoTitle}>583-248-183</p>
            <p>{process.env.CONTACT_PHONE}</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoTitle}>sarimmehboob19&apos;s@gmail.com</p>
            <p>{process.env.CONTACT_EMAIL}</p>
          </div>
        </div>

        <div className={styles.contactForm}>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Type your Message..." required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
