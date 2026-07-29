import { Link } from 'react-router-dom'

type BrandLogoProps = {
  className?: string
  to?: string
  onClick?: () => void
}

export function BrandLogo({ className = '', to = '/', onClick }: BrandLogoProps) {
  const mark = (
    <span className={`inline-flex items-center gap-2 text-primary ${className}`}>
      <svg
        className="h-8 w-8 shrink-0"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="12" fill="currentColor" />
        <path d="M8 46 L24 22 L36 36 L44 26 L56 46 Z" fill="#dae2fd" />
        <path d="M8 46 L24 22 L32 32 L20 46 Z" fill="#bec6e0" />
        <rect x="28" y="40" width="8" height="6" rx="1" fill="#131b2e" />
      </svg>
      <span className="font-headline-md text-headline-md font-bold tracking-tight">
        हिमालय होम्स
      </span>
    </span>
  )

  if (!to) return mark

  return (
    <Link to={to} className="inline-flex items-center" onClick={onClick} aria-label="हिमालय होम्स">
      {mark}
    </Link>
  )
}
