import styles from './newsLarge.module.css'
import { getImageUrl } from '../../utils/functions.js'

const NewsLarge = ({article, updateArticle3}) => {

  let {image, headline, deck, category} = article

  const handleClick = () => {
    updateArticle3(article) // NewsLarge passes its own article prop back out
  }

  return (
    <article onClick={handleClick} className={`${styles.newsLarge} ${styles.newsLargeCategory}`}>
      <div className={`${styles.image} ${styles.imageCategory}`}>
       <img src={getImageUrl(image)} height="100px" width="auto"/>
      </div>
      <h4 className={styles.heading}>{headline}</h4>
      <div className={styles.deck}>{deck}</div>
      <div className={styles.category}>{category}</div>
    </article>
  )
}

export default NewsLarge