import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '@/components/Header/Header'
import Gallery from '@/components/Gallery/Gallery'
import Host from '@/components/Host/Host'
import Rating from '@/components/Rating/Rating'
import Tag from '@/components/Tag/Tag'
import Collapse from '@/components/Collapse/Collapse'
import Footer from '@/components/Footer/Footer'
import item from '@/data/logements.json'
import styles from '../Logement/Logement.module.scss'

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const house = item.find((item) => item.id === id);

  // Redirection vers la page d'erreur si le logement n'existe pas
  useEffect(() => {
    if (!house) {
      navigate('*'); // Redirige vers la page d'erreur
    }
  }, [house, navigate]);

  // Retourne null pour éviter une erreur de déstructuration pendant la redirection
  if (!house) return navigate('/');

  const {
    pictures,
    title,
    description,
    location,
    tags,
    host: { name, picture },
    rating,
    equipments,
  } = house;

  const [firstName, lastName] = name.split(' ');

  return (
    <>
      <Header />
      <main className={styles.houseMain}>
        <Gallery pictures={pictures} />
        <section className={styles.houseHeader}>
          <div className={styles.houseInfos}>
            <h1 className={styles.houseTitle}>
              {title}
            </h1>
            <p className={styles.houseLocation}>
              {location}
            </p>
            <Tag tags={tags} />
          </div>
          <div className={styles.ratehostContainer}>
            <Host firstName={firstName} lastName={lastName} picture={picture} />
            <Rating rating={rating} />
          </div>

        </section>
        <section className={styles.houseCollapse}>
          <Collapse title='Description'>
            <p>{description}</p>
          </Collapse>
          <Collapse title='Équipements'>
            <ul>
              {equipments.map((equipments, index) => {
                return <li key={index}>{equipments}</li>
              })}
            </ul>
          </Collapse>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Logement