import styles from '../Footer/Footer.module.scss'
import Logo from '@/assets/images/LOGOfooter.svg'

const updatedYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="Kasa Logo" />
      <div className={styles.footerText}>&copy; {updatedYear} Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer