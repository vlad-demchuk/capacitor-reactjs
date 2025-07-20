import { createContext } from 'react'
import type { AuthContext as IAuthContext } from '@/features/auth/types'

export const AuthContext = createContext<IAuthContext | null>(null)
