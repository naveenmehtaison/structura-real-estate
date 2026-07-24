import { Link } from 'react-router-dom'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-outline-variant bg-surface-container-highest">
      <div className="container-site grid grid-cols-1 gap-gutter py-16 md:grid-cols-4">
        <div>
          <div className="mb-4 font-headline text-headline-md font-bold tracking-tighter text-primary">
            Structura
          </div>
          <p className="mb-4 text-sm text-on-surface-variant">
            Architectural Excellence since 1994. Building high-quality residential and commercial
            spaces across the globe.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-outline transition hover:bg-secondary hover:text-white"
              aria-label="Website"
            >
              <Icon name="public" className="text-[18px]" />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-outline transition hover:bg-primary-container hover:text-white"
              aria-label="Share"
            >
              <Icon name="share" className="text-[18px]" />
            </a>
          </div>
        </div>

        <div>
          <h5 className="mb-4 text-label text-primary">Company</h5>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/about" className="text-sm text-on-surface-variant transition hover:text-secondary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-sm text-on-surface-variant transition hover:text-secondary">
                Project Portfolio
              </Link>
            </li>
            <li>
              <Link to="/sold" className="text-sm text-on-surface-variant transition hover:text-secondary">
                Sold Properties
              </Link>
            </li>
            <li>
              <Link to="/construction" className="text-sm text-on-surface-variant transition hover:text-secondary">
                Construction
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-label text-primary">Support</h5>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/contact" className="text-sm text-on-surface-variant transition hover:text-secondary">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="#" className="text-sm text-on-surface-variant transition hover:text-secondary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-on-surface-variant transition hover:text-secondary">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-on-surface-variant transition hover:text-secondary">
                Licensing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="mb-4 text-label text-primary">Newsletter</h5>
          <p className="mb-4 text-sm text-on-surface-variant">
            Subscribe to get the latest architectural trends and market updates.
          </p>
          <form
            className="flex"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-l-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-secondary"
            />
            <button
              type="submit"
              className="rounded-r-lg bg-primary px-4 text-label text-on-primary transition hover:opacity-90"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="container-site border-t border-outline-variant/30 py-4 text-center md:text-left">
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
          © 2024 Structura Architectural Excellence. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
