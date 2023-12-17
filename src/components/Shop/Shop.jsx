import Product from '../Product/Product'
import styles from './Shop.module.css'

const Shop = () => {
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
          <Product productName={'Mens Casual Premium Slim Fit T-Shirts'} price={199.99}/>
          <Product productName={'Mens Casual Premium Slim Fit T-Shirts'} price={199.99}/>
          <Product productName={'Mens Casual Premium Slim Fit T-Shirts'} price={199.99}/>
          <Product productName={'Mens Casual Premium Slim Fit T-Shirts'} price={199.99}/>
          <Product productName={'Mens Casual Premium Slim Fit T-Shirts'} price={199.99}/>
          <Product productName={'Mens Casual Premium Slim Fit T-Shirts'} price={199.99}/>
        </div>
      </div>
    </div>
  )
}

export default Shop