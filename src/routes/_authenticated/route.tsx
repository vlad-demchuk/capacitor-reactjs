import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { authService } from '@/services/auth.service.ts'
import { UserProvider } from '@/features/user/state'
import { Header } from '@/components/Header.tsx'

export const Route = createFileRoute('/_authenticated')({
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
    <UserProvider user={user}>
      <Header />
      <Outlet />
    </UserProvider>
  )
}
