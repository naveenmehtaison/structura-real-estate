import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Icon } from './Icon'

const links = [
  { to: '/', label: 'होम', end: true },
  { to: '/properties', label: 'प्रॉपर्टी' },
  { to: '/sold', label: 'हमारा पिछला काम' },
  { to: '/construction', label: 'कंस्ट्रक्शन' },
  { to: '/about', label: 'हमारे बारे में' },
  { to: '/contact', label: 'संपर्क' },
] as const

type SiteHeaderProps = {
  searchPlaceholder?: string
  searchMode?: 'icon' | 'field' | 'none'
}

export function SiteHeader({
  searchPlaceholder = 'खोजें…',
  searchMode = 'icon',
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function submitSearch(e: React.FormEvent) {
    e.preventDefault()
    navigate(`/properties?q=${encodeURIComponent(query.trim())}`)
    setSearchOpen(false)
    setMenuOpen(false)
  }

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `font-label-md text-label-md transition-colors ${
      isActive
        ? 'border-b-2 border-primary pb-1 text-primary'
        : 'text-on-surface-variant hover:text-primary'
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface-container-lowest/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-max-width items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link
          to="/"
          className="font-headline-md text-headline-md font-bold tracking-tighter text-primary"
          onClick={() => setMenuOpen(false)}
        >
          Structura
        </Link>

        <div className="hidden items-center gap-lg md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={'end' in link ? link.end : false} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-md">
          {searchMode === 'field' ? (
            <form
              onSubmit={submitSearch}
              className="hidden items-center gap-2 border-b border-outline-variant lg:flex"
            >
              <Icon name="search" className="text-on-surface-variant" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-40 bg-transparent py-1 font-body-sm text-body-sm outline-none placeholder:text-on-surface-variant"
              />
            </form>
          ) : null}

          {searchMode === 'icon' ? (
            searchOpen ? (
              <form onSubmit={submitSearch} className="hidden items-center gap-2 lg:flex">
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-48 rounded border border-outline-variant bg-surface px-3 py-1.5 font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary"
                />
              </form>
            ) : (
              <button
                type="button"
                className="hidden text-on-surface-variant transition-colors hover:text-primary lg:block"
                aria-label="खोजें"
                onClick={() => setSearchOpen(true)}
              >
                <Icon name="search" />
              </button>
            )
          ) : null}

          <Link
            to="/contact"
            className="rounded bg-primary px-lg py-xs font-label-md text-label-md text-on-primary transition-all hover:opacity-80 active:scale-95"
          >
            पूछताछ करें
          </Link>

          <button
            type="button"
            className="text-on-surface md:hidden"
            aria-label={menuOpen ? 'मेनू बंद करें' : 'मेनू खोलें'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="border-t border-outline-variant bg-surface-container-lowest px-margin-mobile py-md md:hidden">
          <div className="flex flex-col gap-md">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={'end' in link ? link.end : false}
                onClick={() => setMenuOpen(false)}
                className={navClass}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/portfolio"
              onClick={() => setMenuOpen(false)}
              className="font-label-md text-label-md text-on-surface-variant"
            >
              पोर्टफोलियो
            </Link>
            <form onSubmit={submitSearch} className="flex gap-2 pt-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full rounded border border-outline-variant bg-surface px-3 py-2 font-body-sm text-body-sm outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded bg-primary px-4 font-label-md text-label-md text-on-primary"
              >
                जाएं
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </header>
  )
}
