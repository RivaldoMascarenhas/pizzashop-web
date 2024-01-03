import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/app/dashboard'
import { SingIn } from './pages/auth/sing-in'
import { AppLayout } from './pages/layout/app'
import { AuthLayout } from './pages/layout/auth'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/sing-in',
    element: <AuthLayout />,
    children: [
      {
        path: '/sing-in',
        element: <SingIn />,
      },
    ],
  },
])
