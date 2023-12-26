import { HiOutlineSearch } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import styles from './Header.module.css'

const SearchBar = ({ screen, handleSearch, closeNav }) => {
  const navigate = useNavigate()

  const searchProduct = (e) => {
    if (e.key === 'Enter') {
      if (e.target.value === '') return
      handleSearch(e.target.value)
      navigate('/search')
      e.target.value === ''
      closeNav()
    }
  }

  let component
  if (screen === 'desktop') {
    component = 
    <div className={`${styles['search-bar']} ${styles['sm-hidden']}`}>
      <HiOutlineSearch className={styles['search-icon']}/>
      <input type='search' name='search' placeholder='Search' onKeyDown={searchProduct} />
    </div>
  } else if (screen === 'mobile') {
    component =
    <div className={styles['search-bar']}>
      <input type='text' name='search' placeholder='Search' onKeyDown={searchProduct} />
      <HiOutlineSearch className={styles['search-icon']} />
    </div>
  }

  return component
}

export default SearchBar