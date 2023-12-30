import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { AppLayout } from './pages/layout/app'
import { AuthLayout } from './pages/layout/auth'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
  {
    path: '/sing-in',
    element: <AuthLayout />,
    children: [
      {
        path: '/sing-in',
        element: <App />,
      },
    ],
  },
])
