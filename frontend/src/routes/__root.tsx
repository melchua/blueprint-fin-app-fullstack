import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

export const Route = createRootRoute({
  component: () => (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col">
        <div className="p-2 flex gap-2">
          <SidebarTrigger />
        </div>
        <hr />
        <div className="flex">
          <Outlet />
        </div>

        <TanStackRouterDevtools />
      </div>
    </SidebarProvider>
  ),
})
