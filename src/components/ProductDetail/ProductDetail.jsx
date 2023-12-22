import styles from './ProductDetail.module.css'

const ProductDetail = () => {
  return (
    <div className={styles['product-detail']}>
      <div className={styles['product-img']}></div>
      <div className={styles['product-info']}>
        <h1>Mens Casual Premium Slim Fit T-Shirts</h1>
        <p className={styles['product-price']}>$199.99</p>
        <p className={styles['product-desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim tortor at auctor urna.</p>
        <label htmlFor="quantity" className={styles['quantity']}>
          Quantity:
          <input type="number" name="quantity" />
        </label>
        <button className={styles['add-btn']}>ADD TO BAG</button>
      </div>
    </div>
  )
}

export default ProductDetail