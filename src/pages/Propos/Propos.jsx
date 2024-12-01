import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import imgBanner from '@/assets/images/proposImg.png'
import Collapse from '@/components/Collapse/Collapse'
import charte from '@/data/charte.json'
import Footer from '@/components/Footer/Footer'
import styles from '../Propos/Propos.module.scss'

const Propos = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Banner
          className={styles.banner}
          imageSrc={imgBanner}
        />
        <section className={styles.collapsesContainer}>
          {charte.map((collapse) => (
            <Collapse title={collapse.title} key={collapse.title}>
              <p>{collapse.content}</p>
            </Collapse>
          ))}
        </section>
      </main>
      <Footer className={styles.footer} />
    </>
  )
}
export default Propos