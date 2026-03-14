import styles from './newsSmall.module.css'

const NewsSmall = ({article, updateArticle3}) => {

  let {headline, deck, category} = article

  const handleClick = () => {
    updateArticle3(article)
  }
  
  return (
    <article onClick={handleClick} className={styles.newsSmall}>
      <h4 className={styles.heading}>{headline}</h4>
      <div className={styles.deck}>{deck}</div>
      <div className={styles.category}>{category}</div>
    </article>
  )
}

export default NewsSmall