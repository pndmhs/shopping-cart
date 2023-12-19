import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../components/App/App'
import Hero from '../components/Hero/Hero'
import Shop from '../components/Shop/Shop'

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
