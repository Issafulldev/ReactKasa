import { useState, useEffect } from 'react';
import styles from '../Gallery/Gallery.module.scss';
import next from '@/assets/images/next.svg';
import previous from '@/assets/images/previous.svg'

const Gallery = ({ pictures }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Index de l'image affichée

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Auto-défilement toutes les 3 secondes si plus d'une image
    if (pictures.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [pictures.length]);

  return (
    <div className={styles.carrousel}>
      {pictures.length > 1 && (
        <button className={styles.previous} onClick={goToPrevious}>
          <img src={previous} alt="Précédent" />
        </button>
      )}

      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt={`Image ${index + 1}`}
          className={`${styles.carrouselImage} ${currentImageIndex === index ? styles.active : ''}`}
        />
      ))}

      {pictures.length > 1 && (
        <div className={styles.counter}>
          {currentImageIndex + 1}/{pictures.length}
        </div>
      )}

      {pictures.length > 1 && (
        <button className={styles.next} onClick={goToNext}>
          <img src={next} alt="Suivant" />
        </button>
      )}
    </div>
  );
};

export default Gallery