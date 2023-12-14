import styles from './Header.module.css'
import { MdOutlineShoppingBag } from "react-icons/md"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>SIMPLE <span className={styles[`text-stroke`]}>SHOP</span></h1>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li><MdOutlineShoppingBag size={24}/></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header