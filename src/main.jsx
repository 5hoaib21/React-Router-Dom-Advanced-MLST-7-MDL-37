import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>Hello from React Router, okay</h2>
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
