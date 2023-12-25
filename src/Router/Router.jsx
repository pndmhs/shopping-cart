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
    const existedProduct = cartItems.find(item => item.id === product.id)
    if (existedProduct) {
      changeQuantity(product.id, product.quantity + existedProduct.quantity)
      return
    }

    setCartItems([...cartItems, product])
  }

  const changeQuantity = (productID, quantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productID) {
        return { ...item, quantity}
      }

      return item
    })

    setCartItems(updatedCart)
  }

  const deleteProduct = (productID) => {
    const updatedCart = cartItems.filter((item) => item.id !== productID)
    setCartItems(updatedCart)
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App cartItems={cartItems} changeQuantity={changeQuantity} deleteProduct={deleteProduct} />,
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
