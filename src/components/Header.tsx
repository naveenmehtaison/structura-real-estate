import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Icon } from './Icon'

const links = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/construction', label: 'Construction' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function submitSearch(e: React.FormEvent) {
    e.preventDefault()
    navigate(`/properties?q=${encodeURIComponent(query.trim())}`)
    setSearchOpen(false)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface-container-lowest">
      <nav className="container-site flex h-20 items-center justify-between">
        <Link to="/" className="font-headline text-headline-md font-bold tracking-tighter text-primary">
          Structura
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-label transition-colors ${
                  isActive
                    ? 'border-b-2 border-primary pb-1 text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {searchOpen ? (
            <form onSubmit={submitSearch} className="hidden items-center gap-2 lg:flex">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search properties…"
                className="w-48 rounded border border-outline-variant bg-surface-container-low px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-secondary"
              />
            </form>
          ) : null}
          <button
            type="button"
            className="hidden text-on-surface-variant lg:block"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
          >
            <Icon name="search" />
          </button>
          <Link
            to="/contact"
            className="rounded bg-primary px-6 py-2 text-label text-on-primary transition hover:opacity-90 active:opacity-80"
          >
            Inquire
          </Link>
          <button
            type="button"
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-outline-variant bg-surface-container-lowest px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-label ${isActive ? 'text-primary' : 'text-on-surface-variant'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/portfolio"
              onClick={() => setOpen(false)}
              className="text-label text-on-surface-variant"
            >
              Portfolio
            </Link>
            <Link
              to="/sold"
              onClick={() => setOpen(false)}
              className="text-label text-on-surface-variant"
            >
              Sold Properties
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
