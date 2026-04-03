import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Laptops from './components/Laptops/Laptops.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops}
    ]
  },
  {
    path: 'about',
    element: <h2>Rout from: About Us</h2>
  },
  {
    path: 'blogs',
    element: <h2>all my blogs are here</h2>
  },
  {
    path: 'app',
    Component: App
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
