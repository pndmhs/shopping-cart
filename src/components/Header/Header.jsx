import { useState } from 'react';
import styles from './Header.module.css'
import { MdOutlineShoppingBag } from "react-icons/md"
import { HiOutlineSearch, HiOutlineMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Cart from '../Cart/Cart';
import SearchBar from './SearchBar';
import { ShopContext } from '../App/App';

const Header = () => {
  const { cartItems } = useContext(ShopContext)

  const [menuToggle, setMenuToggle] = useState(false)
  const [cartView, setCartView] = useState(false)

  const handleClose = (e) => {
    if (e.currentTarget === e.target) {
      setMenuToggle(false)
    }
  }

  const handleCloseCart = () => {
    setCartView(false)
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>SIMPLE <span className={styles[`text-stroke`]}>SHOP</span></h1>
      <SearchBar screen='desktop' />
      <nav className={styles.nav}>
        <ul>
          <li className={styles['sm-hidden']}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles['sm-hidden']}>
            <Link to='shop'>Shop</Link>
          </li>
          <li className={styles['bag-container']}>
            {cartItems.length > 0 && <div>{cartItems.length}</div>}
            <MdOutlineShoppingBag size={24} onClick={() => setCartView(true)} />
          </li>
          <li className={`${styles['sm-show']} ${styles['lg-hidden']}`} onClick={() => setMenuToggle(true)}><HiOutlineMenu size={24} /></li>
        </ul>
      </nav>

      {menuToggle && <MobileNav handleClose={handleClose} setMenuToggle={setMenuToggle} />}

      {cartView && <Cart handleClose={handleCloseCart} />}
    </header>
  )
}

const MobileNav = ({ handleClose, setMenuToggle }) => {
  return (
    <div
    className={`${styles['mobile-nav-container']} ${styles['lg-hidden']}`}
    onClick={(e) => handleClose(e)}>
      <div className={styles['mobile-nav']}>
        <SearchBar screen='mobile' closeNav={() => setMenuToggle(false)} />
        <ul>
          <li><Link to='/' onClick={(e) => handleClose(e)}>Home</Link></li>
          <li><Link to='shop' onClick={(e) => handleClose(e)}>Shop</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header