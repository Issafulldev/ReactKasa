import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import bannerImg from '@/assets/images/bannerImg.png'
import Thumb from '@/components/Thumb/Thumb'
import item from '@/data/logements.json'
import Footer from '@/components/Footer/Footer'
import styles from '../Home/Home.module.scss'

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Banner
          imageSrc={bannerImg}
          text="Chez vous, partout et ailleurs"
        />
        <section className={styles.cardsContainer}>
          {item.map((item) => (
            <Thumb key={item.id} item={item} />
          ))}
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home