import { Outlet } from 'react-router-dom'
import styles from './App.module.css'
import Header from '../Header/Header'

const App = ({ cartItems }) => {

  return (
    <div className={styles.container}>
      <Header cartItems={cartItems}/>
      <Outlet />
    </div>
  )
}

export default App
