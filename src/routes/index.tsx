import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { authService } from '@/features/auth/services'
import { Header as WelcomeHeader } from '@/features/welcome/components'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuthState = async () => {
      const user = await authService.getCurrentUser()
      if (user) {
        navigate({
          to: '/dashboard',
        })
      }
    }

    checkAuthState()
  }, [])

  return (

    <div>
      <WelcomeHeader />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Our App
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Get started by signing in to your account or creating a new one.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Existing Users
                </h3>
                <p className="text-gray-600 mb-4">
                  Already have an account? Sign in to access your dashboard.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  New Users
                </h3>
                <p className="text-gray-600 mb-4">
                  Join us today and start exploring all the features we offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
