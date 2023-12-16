import styles from './Header.module.css'
import { MdOutlineShoppingBag } from "react-icons/md"
import { HiOutlineSearch, HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>SIMPLE <span className={styles[`text-stroke`]}>SHOP</span></h1>
      <div className={styles['sm-hidden']}>
        <HiOutlineSearch className={styles['search-icon']}/>
        <input type='text' name='search' placeholder='Search'/>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles['sm-hidden']}>Home</li>
          <li className={styles['sm-hidden']}>Shop</li>
          <li><MdOutlineShoppingBag size={24} /></li>
          <li className={`${styles['sm-show']} ${styles['lg-hidden']}`}><HiOutlineMenu size={24} /></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header