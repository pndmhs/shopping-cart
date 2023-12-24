import useFetch from '../../Hooks/useFetch'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import styles from './ProductDetail.module.css'
import { useState } from 'react'

const ProductDetail = ({ productID, addToCart }) => {
  const { data, err, isLoading } = useFetch(`https://fakestoreapi.com/products/${productID}`)

  const [quantity, setQuantity] = useState(1)

  if (err) {
    return <Error message={err} />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={styles['product-detail']}>
      <div className={styles['product-img']}>
        <img src={data.image} alt={data.title} />
      </div>
      <div className={styles['product-info']}>
        <h1>{data.title}</h1>
        <p className={styles['product-price']}>${data.price}</p>
        <p className={styles['product-desc']}>{data.description}</p>
        <label htmlFor="quantity" className={styles['quantity']}>
          Quantity:
          <input type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <button className={styles['add-btn']} onClick={() => addToCart({...data, quantity})}>ADD TO BAG</button>
      </div>
    </div>
  )
}

export default ProductDetail