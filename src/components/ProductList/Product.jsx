import { useNavigate } from 'react-router-dom'
import styles from './ProductList.module.css'

const Product = ({ data }) => {
  const navigate = useNavigate()

  return (
    <div
    className={styles.product}
    onClick={() => {
      navigate(`/shop/product/${data.id}`)
    }}>
      <div className={styles['product-img']}>
        <img src={data.image} alt="" />
      </div>
      <h3>{data.title}</h3>
      <p className={styles['product-price']}>${data.price}</p>
    </div>
  )
}

export default Product