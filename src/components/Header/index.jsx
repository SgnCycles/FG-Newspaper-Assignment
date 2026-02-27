import styles from './index.module.css';
import Topbar from '../Topbar';
import Navbar from '../Navbar'
import BreakingNews from '../BreakingNews'

const Header = ({breakingNewsSection}) => {
  return (
    <header className={styles.header}>
      <Topbar />
      <Navbar />
      <BreakingNews breakingNewsSection={breakingNewsSection}/>
    </header>
  )
}

export default Header