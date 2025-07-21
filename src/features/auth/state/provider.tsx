import React, { useEffect, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { AuthContext } from './context'
import type { AuthProviderProps } from '@/features/auth/types'
import type { User } from '@/types/user.ts'
import { authService } from '@/features/auth/services'

export const AuthProvider: React.FC<AuthProviderProps> = ({ user: userProp, children }) => {
  const [user, setUser] = useState<User | null>(userProp)
  const [isLoading] = useState(false)
  const navigate = useNavigate();

  const signIn = async (email: string, password: string) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const currentUser = await authService.signIn(email, password)
      setUser(currentUser)
    } catch (error) {
      throw error
    }
  }

  const signOut = async () => {
    try {
      await authService.signOut()
      setUser(null)
      navigate({ to: '/' })
    } catch (error) {
      console.error('Sign out failed:', error)
    }
  }

  useEffect(() => {
    setUser(userProp)
  }, [userProp?.id])


  // useEffect(() => {
  //   const initializeAuth = async () => {
  //     try {
  //       const currentUser = await authService.getCurrentUser()
  //       setUser(currentUser)
  //       return currentUser
  //     } catch (error) {
  //       console.error('Auth initialization failed:', error)
  //       return null
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }
  //
  //   initializeAuth()
  // }, [])

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
