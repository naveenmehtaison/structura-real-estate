import { Outlet } from 'react-router-dom'

/** Pages include their own header/footer from the Stitch HTML for exact UI. */
export function Layout() {
  return <Outlet />
}
