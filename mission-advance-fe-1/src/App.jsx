import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import DashboardPage from './pages/Dashboard'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
    {
      path: "/dashboard",
      element: <DashboardPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
