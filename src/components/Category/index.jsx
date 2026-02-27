import styles from './index.module.css';
import NewsMedium from '../NewsMedium';
import { navMenu } from '../../data/navmenu.js'

const CategorySection = ({category, articles}) => {

  const navItems = navMenu.find(item => item.name != 'Home' && item.name.toLowerCase() === category.toLowerCase());

  return (
    <div className={styles.categorySection} id={navItems.link.replace('#', '')}>
      <h2>{category}</h2>
      <div className={styles.articleWrapper}>
        {articles.map((article, index) => <NewsMedium key={index} {...article} className={styles.categoryNews}/>)}
      </div>
    </div>
  )
}

export default CategorySection