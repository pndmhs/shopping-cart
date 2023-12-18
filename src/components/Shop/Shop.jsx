import { useState, useEffect } from 'react'
import Product from '../Product/Product'
import styles from './Shop.module.css'
import ReactLoading from 'react-loading'

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

const Shop = () => {
  const { data, err, isLoading } = useFetch('https://fakestoreapi.com/products')

  const [activeCategory, setActiveCategory] = useState(null)

  const categories = ["Men's Clothing", "Women's Clothing", "Electronics", "Jewelery"]

  const handleCategory = (index) => {
    setActiveCategory(index)
  }

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <ReactLoading type='spin' color='#000000' />
      </div>
    )
  }

  return (
    <div className={styles.shop}>
      <h1>All Products</h1>
      <div className={styles['category-container']}>
        <h2>Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li
            key={index}
            onClick={() => handleCategory(index)}
            className={activeCategory === index ? styles.active : ''}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['product-container']}>
        <span>{data.length} items</span>
        <div className={styles['product-list']}>
          {data.map(product => <Product data={product} key={product.id}/>)}
        </div>
      </div>
    </div>
  )
}

export default Shop