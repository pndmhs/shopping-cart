import { useState } from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import styles from './App.module.css'

const App = () => {
  
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
    </div>
  )
}

export default App
