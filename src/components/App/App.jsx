import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import styles from './App.module.css'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [err, setErr] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => setErr(err))
    .finally(() => setLoading(false))
  }, [])

  return { data, err, isLoading }
}

const App = () => {

  return (
    <div className={styles.container}>
      <Header />
      <Hero />
    </div>
  )
}

export default App
