import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import type { ReactNode } from 'react'

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useAuth()
  console.log(token)

  if (!token) return <Navigate to='/login' replace />
  return <>{children}</>
}

export default ProtectedRoute
