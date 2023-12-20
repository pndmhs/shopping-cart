import { useState } from 'react'
import useFetch from '../../Hooks/useFetch'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import styles from './ProductList.module.css'

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

const ProductList = ({ category }) => {
  const { data, err, isLoading } = useFetch(category.fetchUrl)

  if (isLoading) {
    return <Loading />
  }

  if (err) {
    return <Error message={err}/>
  }

  return (
    <div className={styles['product-container']}>
      <span>{data.length} items</span>
      <div className={styles['product-list']}>
        {data.map(product => <Product data={product} key={product.id}/>)}
      </div>
    </div>
  )
}

export default ProductList