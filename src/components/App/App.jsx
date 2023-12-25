import { Outlet } from 'react-router-dom'
import styles from './App.module.css'
import Header from '../Header/Header'

const App = ({ cartItems, changeQuantity }) => {

  return (
    <div className={styles.container}>
      <Header cartItems={cartItems} changeQuantity={changeQuantity} />
      <Outlet />
    </div>
  )
}

export default App
