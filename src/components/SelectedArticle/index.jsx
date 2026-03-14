import styles from './selectedArticle.module.css'
import { getImageUrl } from '../../utils/functions.js'

const SelectedArticle = ({article, updateArticle1}) => {

  let {image, headline, deck, category, story} = article

  const handleClick = () => {
    updateArticle1(null)
  }

  return (
    <article className={styles.selectedArticle}>
      <div className={styles.image}>
       <img src={getImageUrl(image)} height="100px" width="auto"/>
      </div>
      <h4 className={styles.heading}>{headline}</h4>
      <div className={styles.deck}>{deck}</div>
      <div className={styles.category}>{category}</div>
      <div className={styles.category}>{story}</div>
      <div onClick={handleClick} className={styles.backButton}>Back to previous page</div>
    </article>
  )
}

export default SelectedArticle