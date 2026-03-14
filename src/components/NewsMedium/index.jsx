import styles from './newsMedium.module.css'
import { getImageUrl } from '../../utils/functions.js'

const NewsMedium = ({article, updateArticle3}) => {

  if (!article) return null; 
  // if there's no article, render nothing instead of crashing

  let {headline, deck, image} = article

  const handleClick = () => {
    updateArticle3(article)
  }

  return (
    <article onClick={handleClick} className={styles.newsMedium}>
      <div className={styles.image}>
        <img src={getImageUrl(image)} height="100px" width="auto"/>
      </div>
      <h4 className={styles.heading}>{headline}</h4>
      <div className={styles.deck}>{deck}</div>
    </article>
  )
}

export default NewsMedium