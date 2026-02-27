import styles from "./index.module.css";
import { legalMenu } from '../../data/navmenu.js'

const legalNavMenu = ({className}) => {
  return (
    <div className={styles.legalNavWrapper}>
      <ul className={`${styles.legalMenuList} ${className || ''}`}>
        {legalMenu.map((item, index) => (
          <li className={styles.legalMenuItem} key={index}><a href={item.link}>{item.name}</a></li>
       ))}
      </ul>
    </div>
  )
}

export default legalNavMenu