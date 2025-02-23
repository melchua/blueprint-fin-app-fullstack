import { Settings, Home, Calculator, CreditCard } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import { Link } from '@tanstack/react-router'
const menuItems = [
  {
    label: 'Home',
    href: '/',
    icon: Home,
  },
  {
    label: 'Settings',
    href: '/about',
    icon: Settings,
  },
]

const discoveryItems = [
  {
    label: 'Retirement Planner',
    href: '/retirement-planner',
    icon: Calculator,
  },
  {
    label: 'Budgeting',
    href: '/budgeting',
    icon: CreditCard,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>Blueprint Financial</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map(item => (
                <SidebarMenuItem key={item.href}>
                  <Link to={item.href}>
                    <div className="flex items-center gap-4 p-1">
                      <item.icon />
                      {item.label}
                    </div>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Discovery</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {discoveryItems.map(item => (
                <SidebarMenuItem key={item.href}>
                  <Link to={item.href}>
                    <div className="flex items-center gap-4 p-1">
                      <item.icon />
                      {item.label}
                    </div>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarMenuButton size="lg">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            Chris Liew
          </SidebarMenuButton>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
