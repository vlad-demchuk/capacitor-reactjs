import { use } from 'react'
import { UserContext } from './UserContext.tsx'

export const useUser = () => {
  const context = use(UserContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
