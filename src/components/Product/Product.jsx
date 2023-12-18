import styles from './Product.module.css'

const Product = ({ data }) => {
  return (
    <div className={styles.product}>
      <div className={styles['product-img']}>
        <img src={data.image} alt="" />
      </div>
      <h3>{data.title}</h3>
      <p className={styles['product-price']}>${data.price}</p>
    </div>
  )
}

export default Product