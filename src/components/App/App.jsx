import { Outlet } from 'react-router-dom'
import styles from './App.module.css'
import Header from '../Header/Header'

const App = () => {

  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
