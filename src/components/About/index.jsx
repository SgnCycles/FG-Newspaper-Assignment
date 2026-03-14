import styles from "./about.module.css";
import { aboutMenu } from '../../data/navmenu.js'

const footerAboutMenu = ({className}) => {
  return (
    <div className={styles.aboutNavWrapper}>
      <ul className={`${styles.aboutMenuList} ${className || ''}`}>
        {aboutMenu.map((item, index) => (
          <li className={styles.aboutNavMenuItem} key={index}><a href={item.link}>{item.name}</a></li>
       ))}
      </ul>
    </div>
  )
}

export default footerAboutMenu;