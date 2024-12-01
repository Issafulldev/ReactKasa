import Rating from '../Rating/Rating';
import colorStar from '@/assets/images/colorStar.svg'
import emptyStar from '@/assets/images/emptyStar.svg'
import styles from '../Host/Host.module.scss'

const Host = ({ firstName, lastName, picture, rating }) => {
  return (
    <div className={styles.houseHost}>
      <div className={styles.hostInfo}>
        <div className={styles.hostName}>
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <img className={styles.hostPicture} src={picture} alt='host' />
      </div>
      <div>
        <Rating
          rating={rating} // Note du logement
          maxStars={5} // 5 étoiles maximum
          colorStar={colorStar} // Icône pour étoile colorée
          emptyStar={emptyStar} // Icône pour étoile vide
        />
      </div>
    </div>
  );
};

export default Host;