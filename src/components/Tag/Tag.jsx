import styles from '../Tag/Tag.module.scss'

const Tag = ({ tags }) => {
  return (
    <div className={styles.houseTag}>
      {tags.map((tag, tagIndex) => (
        <p key={tagIndex} className={styles.tag}>
          {tag}
        </p>
      ))}
    </div>
  )
}

export default Tag