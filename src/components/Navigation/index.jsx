import { useState } from 'react';
import styles from './navigation.module.css'
import { navMenu } from '../../data/navmenu.js'
import Hamburger from '../Hamburger';

const Menu = ({updateCategory3, updateArticle3}) => {

  const [mobileMenu, setMobileMenu] = useState(false)

  const showMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  const handleClick = (item) => {
    updateCategory3(item === 'Home' ? null : item)
    updateArticle3(null)
  }
  return (
    <nav className={styles.navWrapper}>
      <Hamburger showMobileMenu={showMobileMenu}/>
      <ul className={`${styles.navMenuList} ${mobileMenu ? styles.active : ''}`}>
        {navMenu.map((item, index) => (
          <li className={styles.navMenuItem} key={index} onClick={() => handleClick(item)}>{item}</li>
       ))}
      </ul>
    </nav>
  ) 
}

export default Menu