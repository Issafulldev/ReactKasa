import { Link } from 'react-router-dom'
import styles from '../Thumb/Thumb.module.scss'

const Thumb = ({ item }) => {
  return (
    <article key={item.id} className={styles.card}>
      <Link to={`/logement/${item.id}`} className={styles.cardLink}>
        <div className={styles.imgContainer}>
          <img src={item.cover} alt={item.title} />
        </div>
        <div className={styles.cardTitle}>
          <h2>{item.title}</h2>
        </div>
      </Link>
    </article>
  )
}

export default Thumb