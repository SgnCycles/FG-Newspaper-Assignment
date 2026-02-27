import styles from './index.module.css';
import NewsMedium from '../NewsMedium'

const CategorySection = ({category, articles}) => {

  return (
    <div className={styles.categorySection}>
      <h2>{category}</h2>
      <div className={styles.articleWrapper}>
        {articles.map((article, index) => <NewsMedium key={index} {...article} className={styles.categoryNews}/>)}
      </div>
    </div>
  )
}

export default CategorySection