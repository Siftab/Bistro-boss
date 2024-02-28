import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Providers/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={myRoutes}></RouterProvider>

        </HelmetProvider>
      </QueryClientProvider>

    </AuthProvider>

  </React.StrictMode>,
)
