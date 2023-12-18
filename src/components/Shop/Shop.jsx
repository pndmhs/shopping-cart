import { useEffect } from 'react'
import Product from '../Product/Product'
import styles from './Shop.module.css'
import ReactLoading from 'react-loading'

const Shop = ({ useFetch }) => {
  const { data, err, isLoading } = useFetch('https://fakestoreapi.com/products')

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
          <li>Men's Clothing</li>
          <li>Women's Clothing</li>
          <li>Electronics</li>
          <li>Jewelery</li>
        </ul>
      </div>
      <div className={styles['product-container']}>
        <span>1234 items</span>
        <div className={styles['product-list']}>
          {data.map(product => <Product data={product} key={product.id}/>)}
        </div>
      </div>
    </div>
  )
}

export default Shop