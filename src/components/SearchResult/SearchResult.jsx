import useFetch from '../../Hooks/useFetch'
import Product from '../ProductList/Product'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import styles from './SearchResult.module.css'
import { useContext } from 'react'
import { ShopContext } from '../App/App'

const SearchResult = () => {
  const { searchQuery } = useContext(ShopContext)

  const { data, err, isLoading } = useFetch('https://fakestoreapi.com/products')

  const filterData = (data) => {
    return data.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }

  if (isLoading) {
    return <Loading />
  }

  if (err) {
    return <Error message={err}/>
  }

  return (
    <div className={styles['search-result-container']}>
      <h1>Search result for "{searchQuery}"</h1>
      {filterData(data).length === 0 && <p>No items found, please try again</p>}
      <div className={styles['search-result']}>
        {filterData(data).length > 0 && filterData(data).map(product => <Product key={product.id} data={product} />)}
      </div>
    </div>
  )
}

export default SearchResult