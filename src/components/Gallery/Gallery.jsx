import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import item from '@/data/logements.json';
import styles from '../Gallery/Gallery.module.scss';
import next from '@/assets/images/next.svg';
import previous from '@/assets/images/previous.svg'

const Gallery = () => {
  const { id } = useParams(); // Récupération id logement
  const house = item.find(item => item.id === id); // Matcher logement

  const { pictures } = house; // Extraction des images

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
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [pictures.length]);

  return (
    <div className={styles.carrousel}>
      <button className={styles.previous} onClick={goToPrevious}>
        <img src={previous} alt="Précédent" />
      </button>
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt={`Image ${index + 1}`}
          className={`${styles.carrouselImage} ${currentImageIndex === index ? styles.active : ""
            }`}
        />
      ))}
      <button className={styles.next} onClick={goToNext}>
        <img src={next} alt="Suivant" />
      </button>
    </div>
  );
};

export default Gallery