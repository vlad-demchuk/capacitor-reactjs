import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-gray-50">
        <main>
          <Outlet />
        </main>
      </div>

      <TanStackRouterDevtools />
    </>
  ),
})
