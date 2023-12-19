import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App/App'
import Hero from '../Hero/Hero'
import Shop from '../Shop/Shop'

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <Hero /> },
        { path: '/shop', element: <Shop />}
      ]
    },
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default Router
