import styles from './category.module.css';
import NewsMedium from '../NewsMedium';
import { navMenu } from '../../data/navmenu.js'

const CategorySection = ({category, articles, updateArticle2}) => {

  const navItems = navMenu.find(item => item != 'Home' && item.toLowerCase() === category.toLowerCase());

  return (
    <div className={styles.categorySection}>
      <h2>{category}</h2>
      <div className={styles.articleWrapper}>
        {articles.map((article, index) => <NewsMedium key={index} article={article} updateArticle3={updateArticle2} className={styles.categoryNews}/>)}
      </div>
    </div>
  )
}

export default CategorySection