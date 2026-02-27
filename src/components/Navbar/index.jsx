import styles from './index.module.css';
import Hamburger from '../Hamburger';
import Navigation from '../Navigation';
import Date from '../Date';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Hamburger />
      <Navigation />
      <Date />
    </div>
  )
}

export default Navbar;