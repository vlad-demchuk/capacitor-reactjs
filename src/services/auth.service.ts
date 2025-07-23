import type { User } from '@/types/user.ts'

class AuthService {
  private user: User | null = null

  async getCurrentUser(): Promise<User | null> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock logic - check localStorage, validate token, etc.
        const savedUser = localStorage.getItem('user')
        if (savedUser) {
          this.user = JSON.parse(savedUser)
        }
        resolve(this.user)
      }, 100)
    })
  }

  async signIn(email: string, password: string): Promise<User> {
    // Mock sign in - replace with actual API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const user = {
            id: '1',
            email,
            name: email.split('@')[0],
            avatar: `https://github.com/shadcn.png`,
          }
          this.user = user
          localStorage.setItem('user', JSON.stringify(user))
          resolve(user)
        } else {
          reject(new Error('Invalid credentials'))
        }
      }, 500)
    })
  }

  async signOut(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.user = null
        localStorage.removeItem('user')
        resolve()
      }, 100)
    })
  }
}

export const authService = new AuthService()
