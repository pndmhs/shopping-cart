import { Outlet } from 'react-router-dom'
import styles from './App.module.css'
import Header from '../Header/Header'

const App = ({ cartItems, changeQuantity, deleteProduct }) => {

  return (
    <div className={styles.container}>
      <Header cartItems={cartItems} changeQuantity={changeQuantity} deleteProduct={deleteProduct} />
      <Outlet />
    </div>
  )
}

export default App
