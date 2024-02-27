import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={myRoutes}></RouterProvider>

      </HelmetProvider>
    </AuthProvider>

  </React.StrictMode>,
)
