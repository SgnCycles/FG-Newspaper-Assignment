import styles from './index.module.css';

const Hamburger = () => {
  return (
    <button className={styles.hamburger} aria-label="Mobile Menu button">
      <span></span><span></span><span></span>
    </button>
  )
}

export default Hamburger