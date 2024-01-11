import { Outlet } from 'react-router-dom'
import styles from './App.module.css'
import Header from '../Header/Header'
import { createContext } from 'react'
import { useState } from 'react'

export const ShopContext = createContext({
  cartItems: [],
  searchQuery: null,
  addToCart: () => {},
  changeQuantity: () => {},
  deleteProduct: () => {},
  handleSearch: () => {}
})

const App = () => {
  const [cartItems, setCartItems] = useState([])

  const [searchQuery, setSearchQuery] = useState(null)

  const addToCart = (product) => {
    const existedProduct = cartItems.find(item => item.id === product.id)
    if (existedProduct) {
      changeQuantity(product.id, product.quantity + existedProduct.quantity)
      return
    }

    setCartItems([...cartItems, product])
  }

  const changeQuantity = (productID, quantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productID) {
        return { ...item, quantity}
      }

      return item
    })

    setCartItems(updatedCart)
  }

  const deleteProduct = (productID) => {
    const updatedCart = cartItems.filter((item) => item.id !== productID)
    setCartItems(updatedCart)
  }

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery)
  }

  return (
    <div className={styles.container}>
      <ShopContext.Provider value={{ cartItems, searchQuery, addToCart, changeQuantity, handleSearch, deleteProduct }}>
        <Header />
        <Outlet />
      </ShopContext.Provider>
    </div>
  )
}

export default App
