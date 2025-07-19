import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { Header } from '../components/Header'
import { AuthProvider } from '@/features/auth/state/contexts'

export const Route = createRootRoute({
  component: () => (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>

      <TanStackRouterDevtools />
    </AuthProvider>
  ),
})
