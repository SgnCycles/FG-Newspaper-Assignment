import styles from './date.module.css';
import getCurrentDate from '../../utils/currentDate.js';

const CurrentDate = () => {
  return (
    <div className={styles.currentDate}>
      <time>{getCurrentDate()}</time>
    </div>
  )
}

export default CurrentDate