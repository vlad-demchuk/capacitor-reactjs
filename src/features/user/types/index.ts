import type { User } from '@/types/user.ts'
import type { ReactNode } from 'react'

export interface UserContext {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export interface UserProviderProps {
  user: User | null
  children: ReactNode
}
