import styles from './Product.module.css'

const Product = ({ productName, price }) => {
  return (
    <div className={styles.product}>
      <div className={styles['product-img']}></div>
      <h3>{productName}</h3>
      <p className={styles['product-price']}>${price}</p>
    </div>
  )
}

export default Product