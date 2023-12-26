import { Link } from 'react-router-dom'
import styles from './ProductList.module.css'

const Product = ({ data, setProductID }) => {
  return (
    <Link to='product'>
      <div className={styles.product} onClick={() => setProductID(data.id)}>
        <div className={styles['product-img']}>
          <img src={data.image} alt="" />
        </div>
        <h3>{data.title}</h3>
        <p className={styles['product-price']}>${data.price}</p>
      </div>
    </Link>
  )
}

export default Product