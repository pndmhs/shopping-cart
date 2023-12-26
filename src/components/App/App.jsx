import { Outlet } from 'react-router-dom'
import styles from './App.module.css'
import Header from '../Header/Header'

const App = ({ cartItems, changeQuantity, deleteProduct, handleSearch }) => {

  return (
    <div className={styles.container}>
      <Header cartItems={cartItems} changeQuantity={changeQuantity} deleteProduct={deleteProduct} handleSearch={handleSearch} />
      <Outlet />
    </div>
  )
}

export default App
