import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { authService } from '@/features/auth/services'
import { AuthProvider } from '@/features/auth/state'
import { Header } from '@/components/Header.tsx'

export const Route = createFileRoute('/_auth')({
  beforeLoad: async () => {
    const user = await authService.getCurrentUser()

    if (!user) {
      throw redirect({
        to: '/',
      })
    }

    return { user }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { user } = Route.useRouteContext();

  return (
    <AuthProvider user={user}>
      <Header />
      <Outlet />
    </AuthProvider>
  )
}
