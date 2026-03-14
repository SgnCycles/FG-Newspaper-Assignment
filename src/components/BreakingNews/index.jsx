import styles from "./breakingNews.module.css";

const BreakingNews = ({breakingNewsSection}) => {
  return (
    <div className={styles.breakingNewsWrapper}>
      <span className={styles.breakingNewsHeader}>Breaking News</span>
      <ul className={styles.breakingNewsList}>
        {breakingNewsSection.map((article, index) => 
          <li key={index} className={styles.breakingNewsItem}>
            <h4><a>{article.headline}</a></h4></li>)}
      </ul>
    </div>
  )
}

export default BreakingNews