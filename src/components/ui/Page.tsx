type PageShellProps = {
  children: React.ReactNode
  className?: string
  /** Vertical padding; default true */
  padded?: boolean
  as?: 'main' | 'div' | 'section'
}

export function PageShell({
  children,
  className = '',
  padded = true,
  as: Tag = 'main',
}: PageShellProps) {
  return (
    <Tag
      className={[
        'mx-auto w-full max-w-max-width px-margin-mobile md:px-margin-desktop',
        padded ? 'py-xl' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  )
}

type PageHeroProps = {
  title: string
  subtitle?: string
  eyebrow?: string
  actions?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  actions,
  align = 'left',
  className = '',
}: PageHeroProps) {
  return (
    <div
      className={[
        'mb-xl',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow ? (
        <p className="mb-sm font-label-md text-label-md uppercase tracking-widest text-on-primary-container">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display-lg text-display-lg-mobile text-primary md:text-display-lg">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          {subtitle}
        </p>
      ) : null}
      {actions ? <div className="mt-lg flex flex-wrap gap-md">{actions}</div> : null}
    </div>
  )
}

type CardProps = {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

/** Unified listing/content card */
export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={[
        'overflow-hidden rounded border border-outline-variant bg-surface-container-lowest',
        hover ? 'transition-shadow hover:shadow-lg' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
