import AuthProvider from './AuthProvider'
import { BrowserRouter as Router } from 'react-router-dom'

export default function Providers ({ children }) {
  return (
    <Router>
      <AuthProvider>
        {children}
      </AuthProvider>
    </Router>
  )
}