import styles from './index.module.css'
import { navMenu } from '../../data/navmenu.js'

const Menu = ({className}) => {
  return (
    <div className={`${styles.navWrapper} ${className || ''}`}>
      <ul className={`${styles.navMenuList} ${className || ''}`}>
        {navMenu.map((item, index) => (
          <li className={styles.navMenuItem} key={index}><a href={item.link}>{item.name}</a></li>
       ))}
      </ul>
    </div>
  )
}

export default Menu