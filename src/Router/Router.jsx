import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../components/App/App'
import Hero from '../components/Hero/Hero'
import Shop from '../components/Shop/Shop'
import { useState } from 'react'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import SearchResult from '../components/SearchResult/SearchResult'

const Router = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Hero /> },
        { path: '/shop', element: <Shop />},
        { path: '/shop/product', element: <ProductDetail />},
        { path: '/search', element: <SearchResult /> }
      ]
    },
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default Router
