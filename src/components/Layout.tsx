import { Outlet } from 'react-router-dom'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body-md text-body-md text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      <SiteHeader />
      <div className="flex-1">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  )
}
