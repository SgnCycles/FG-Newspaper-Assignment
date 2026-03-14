import styles from './hamburger.module.css';

const Hamburger = ({showMobileMenu}) => {
  return (
    <button className={styles.hamburger} aria-label="Mobile Menu button" onClick={showMobileMenu}>
      <span></span><span></span><span></span>
    </button>
  )
}

export default Hamburger