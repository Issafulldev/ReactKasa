import colorStar from '@/assets/images/colorStar.svg'
import emptyStar from '@/assets/images/emptyStar.svg'
import styles from '../Rating/Rating.module.scss'

const Rating = ({ rating, maxStars = 5 }) => {
  // Création d'un tableau avec `maxStars` éléments
  const stars = Array(maxStars).fill();

  return (
    <div style={{ display: 'flex' }}>
      {stars.map((_, index) => (
        <img
          key={index}
          src={index < rating ? colorStar : emptyStar}
          alt={index < rating ? 'filled star' : 'empty star'}
          className={styles.star}
        />
      ))}
    </div>
  );
};

export default Rating;