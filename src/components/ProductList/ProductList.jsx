import { useState } from 'react'
import useFetch from '../../Hooks/useFetch'
import Product from './Product'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import { Link } from 'react-router-dom'
import styles from './ProductList.module.css'

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
        {data.map(product => <Product data={product} key={product.id} />)}
      </div>
    </div>
  )
}

export default ProductList