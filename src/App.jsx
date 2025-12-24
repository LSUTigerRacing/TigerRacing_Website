import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import ScrollToTop from './hooks/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <AppRoutes/>
    </BrowserRouter>
  )
}