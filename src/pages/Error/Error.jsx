import Header from '@/components/Header/Header'
import { Link } from 'react-router-dom'
import styles from '../Error/Error.module.scss'

const Error = () => {
  return (
    <>
      <Header />
      <main className={styles.mainError}>
        <div className={styles.errorContainer}>
          <h1 className={styles.errorTitle}>
            404
          </h1>
          <p className={styles.errorText}>
            Oups ! La page que vous demandez n'existe pas.
          </p>
        </div>
        <div className={styles.backHome}>
          <Link to="/" style={{ color: "#ff6060", textDecoration: "none" }}>
            Retourner sur la page d'accueil.
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error