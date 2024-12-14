import Rating from '../Rating/Rating';
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
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default Host;