import { createFileRoute, redirect } from '@tanstack/react-router'
import { authService } from '@/features/auth/services'

export const Route = createFileRoute('/signup')({
  beforeLoad: async () => {
    const user = await authService.getCurrentUser();

    if (user) {
      throw redirect({
        to: '/dashboard',
      })
    }
  },
  component: SignUpComponent,
})

function SignUpComponent() {
  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Sign Up
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Create your account to get started.
        </p>
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Sign up form implementation would go here.
          </p>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="/signin" className="text-blue-600 hover:text-blue-700">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
