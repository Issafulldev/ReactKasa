// Importation des composants
import Header from '@/components/Header/Header';
import Banner from '@/components/Banner/Banner';
import Collapse from '@/components/Collapse/Collapse';
import Footer from '@/components/Footer/Footer';

// Importation des données et des styles
import imgBanner from '@/assets/images/proposImg.png';
import charte from '@/data/charte.json';
import styles from '../Propos/Propos.module.scss';

const Propos = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Bannière avec image */}
        <Banner className={styles.banner} imageSrc={imgBanner} />

        {/* Liste de sections Collapse générées dynamiquement */}
        <section className={styles.collapsesContainer}>
          {charte.map((collapse) => (
            <Collapse title={collapse.title} key={collapse.id}>
              <p>{collapse.content}</p>
            </Collapse>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Propos;