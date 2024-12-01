import styles from '../Banner/Banner.module.scss'

const Banner = ({ imageSrc, text, className }) => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${imageSrc})`,
  };
  return (
    <div className={`${styles.banner} ${className}`} style={bannerStyle}>
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;