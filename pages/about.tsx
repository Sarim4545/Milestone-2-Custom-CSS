import { useState, useEffect } from 'react';
import styles from '../styles/about.module.css';

const About = () => {
  const [currentImage, setCurrentImage] = useState('/bg%205.jpg');
  const [fade, setFade] = useState(true); 

  useEffect(() => {
    const images = ['/bg%205.jpg', '/bg%204.jpg', '/bg%203.jpg'];
    let currentIndex = 0;

    const changeBackgroundImage = () => {
      setFade(false); 
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        setCurrentImage(images[currentIndex]);
        setFade(true); // Start fade-in
      }, 500); 
    };

    const interval = setInterval(changeBackgroundImage, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${styles.aboutContainer} ${fade ? styles.fadeIn : styles.fadeOut}`}
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.aboutTitle}>About {process.env.NEXT_PUBLIC_CAFE_NAME}</h1>
        <p className={styles.aboutText}>
          Welcome to {process.env.NEXT_PUBLIC_CAFE_NAME}! We are passionate about serving the finest coffee made from the best beans, creating a warm and welcoming environment for our customers. Our goal is to provide you with the perfect cup every time, whether you&apos;re in the mood for a strong espresso, a creamy latte, or a refreshing iced brew.
        </p>
        <ul className={styles.aboutList}>
          <li className={styles.aboutListItem}>Premium quality coffee beans sourced from around the world.</li>
          <li className={styles.aboutListItem}>Skilled baristas ready to craft your perfect drink.</li>
          <li className={styles.aboutListItem}>A relaxing atmosphere to enjoy your favorite beverages.</li>
          <li className={styles.aboutListItem}>We offer a wide range of beverages, from hot espresso to cold brews.</li>
          <li className={styles.aboutListItem}>Friendly and attentive staff that ensures the best experience.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
