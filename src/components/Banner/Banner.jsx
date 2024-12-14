import styles from '../Banner/Banner.module.scss'

const Banner = ({ imageSrc, text }) => {
  return (
    <div className={styles.banner}>
      <img src={imageSrc} alt={text} className={styles.bannerImage} />
      <h1 className={styles.bannerText}>{text}</h1>
    </div>
  );
};

export default Banner;