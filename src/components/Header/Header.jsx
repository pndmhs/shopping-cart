import { useState } from 'react';
import styles from './Header.module.css'
import { MdOutlineShoppingBag } from "react-icons/md"
import { HiOutlineSearch, HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false)

  const handleClose = (e) => {
    if (e.currentTarget === e.target) {
      setMenuToggle(false)
    }
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>SIMPLE <span className={styles[`text-stroke`]}>SHOP</span></h1>
      <div className={`${styles['search-bar']} ${styles['sm-hidden']}`}>
        <HiOutlineSearch className={styles['search-icon']}/>
        <input type='text' name='search' placeholder='Search'/>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles['sm-hidden']}>Home</li>
          <li className={styles['sm-hidden']}>Shop</li>
          <li><MdOutlineShoppingBag size={24} /></li>
          <li className={`${styles['sm-show']} ${styles['lg-hidden']}`} onClick={() => setMenuToggle(true)}><HiOutlineMenu size={24} /></li>
        </ul>
      </nav>

      {menuToggle && <MobileNav handleClose={handleClose} />}
    </header>
  )
}

const MobileNav = ({ handleClose }) => {
  return (
    <div
    className={`${styles['mobile-nav-container']} ${styles['lg-hidden']}`}
    onClick={(e) => handleClose(e)}>
      <div className={styles['mobile-nav']}>
        <div className={styles['search-bar']}>
          <input type='text' name='search' placeholder='Search'/>
          <HiOutlineSearch className={styles['search-icon']}/>
        </div>
        <ul>
          <li>Home</li>
          <li>Shop</li>
        </ul>
      </div>
    </div>
  )
}

export default Header