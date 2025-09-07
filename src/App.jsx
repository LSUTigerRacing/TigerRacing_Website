import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { AppRoutes } from './routes'
import { LoadingComponent } from './components/Loading'
import ScrollToTop from './hooks/ScrollToTop'
import { LoadingProvider } from './hooks/LoadingContext'

export default function App() {
  return (
    // <AuthProvider>
    <LoadingProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <LoadingComponent/>
        <AppRoutes/>
      </BrowserRouter>
    </LoadingProvider>

    // </AuthProvider>
  )
}