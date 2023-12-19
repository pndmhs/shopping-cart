import { useState } from 'react'
import Product from '../Product/Product'
import styles from './Shop.module.css'
import Loading from '../Loading/Loading'
import useFetch from '../Hooks/useFetch'

const ProductList = ({ data }) => {
  return (
    <div className={styles['product-container']}>
      <span>{data.length} items</span>
      <div className={styles['product-list']}>
        {data.map(product => <Product data={product} key={product.id}/>)}
      </div>
    </div>
  )
}

const Shop = () => {
  const [url, setUrl] = useState('https://fakestoreapi.com/products')

  const { data, err, isLoading } = useFetch(url)

  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    {
      name: "All Products",
      fetchUrl: "https://fakestoreapi.com/products"
    },
    {
      name: "Men's Clothing",
      fetchUrl: "https://fakestoreapi.com/products/category/men's%20clothing"
    },
    {
      name: "Women's Clothing",
      fetchUrl: "https://fakestoreapi.com/products/category/women's%20clothing"
    },
    {
      name: "Electronics",
      fetchUrl: "https://fakestoreapi.com/products/category/electronics"
    },
    {
      name: "Jewelery",
      fetchUrl: "https://fakestoreapi.com/products/category/jewelery"
    }
  ]

  const handleCategory = (index, fetchUrl) => {
    setActiveCategory(index)
    setUrl(fetchUrl)
  }

  return (
    <div className={styles.shop}>
      <h1>{activeCategory !== null ? categories[activeCategory].name : 'All Products'}</h1>
      <div className={styles['category-container']}>
        <h2>Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li
            key={index}
            onClick={() => handleCategory(index, category.fetchUrl)}
            className={activeCategory === index ? styles.active : ''}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      { isLoading ? <Loading /> : <ProductList data={data} /> }
      
    </div>
  )
}

export default Shop