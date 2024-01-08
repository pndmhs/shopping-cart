import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../App/App'
import { useNavigate } from 'react-router-dom'
import styles from './ProductList.module.css'

const Product = ({ data }) => {
  const { handleProduct } = useContext(ShopContext)
  const navigate = useNavigate()

  return (
    <div
    className={styles.product}
    onClick={() => {
      handleProduct(data.id)
      navigate('/shop/product')
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