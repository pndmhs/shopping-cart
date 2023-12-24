import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../components/App/App'
import Hero from '../components/Hero/Hero'
import Shop from '../components/Shop/Shop'
import { useState } from 'react'
import ProductDetail from '../components/ProductDetail/ProductDetail'

const Router = () => {

  const [productID, setProductID] = useState(null)

  const [cartItems, setCartItems] = useState([])

  const handleProduct = (id) => {
    setProductID(id)
  }

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App cartItems={cartItems} />,
      children: [
        { path: '/', element: <Hero /> },
        { path: '/shop', element: <Shop setProductID={handleProduct}/>},
        { path: '/shop/product', element: <ProductDetail productID={productID} addToCart={addToCart} />}
      ]
    },
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default Router
