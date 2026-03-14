import styles from './navbar.module.css';
import Navigation from '../Navigation';
import Date from '../Date';

const Navbar = ({selectedCategory, updateCategory2, updateArticle2}) => {
  return (
    <div className={styles.navbar}>
      <Navigation selectedCategory={selectedCategory} updateCategory3={updateCategory2} updateArticle3={updateArticle2}/>
      <Date />
    </div>
  )
}

export default Navbar;