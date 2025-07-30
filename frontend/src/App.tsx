import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { AppRoutes } from './routes'
import ScrollToTop from './hooks/ScrollToTop'

export default function App() {
  return (
    // <AuthProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    // </AuthProvider>
  )
}