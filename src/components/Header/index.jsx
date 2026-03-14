import styles from './header.module.css';
import Topbar from '../Topbar';
import Navbar from '../Navbar'
import BreakingNews from '../BreakingNews'

const Header = ({breakingNewsSection, selectedCategory, updateCategory1, updateArticle1}) => {
  return (
    <header className={styles.header}>
      <Topbar />
      <Navbar selectedCategory={selectedCategory} updateCategory2={updateCategory1} updateArticle2={updateArticle1}/>
      <BreakingNews breakingNewsSection={breakingNewsSection}/>
    </header>
  )
}

export default Header