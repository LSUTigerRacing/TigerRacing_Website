import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { AppRoutes } from './routes'

export default function App() {
  return (
    // <AuthProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    // </AuthProvider>
  )
}