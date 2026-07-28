import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'onDark' | 'whatsapp' | 'success'
type ButtonSize = 'sm' | 'md' | 'lg'

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-primary hover:opacity-80 active:scale-95',
  secondary:
    'bg-primary-container text-on-primary hover:opacity-90 active:scale-95',
  outline:
    'border border-primary text-primary hover:bg-primary hover:text-on-primary',
  ghost:
    'border border-outline-variant text-primary hover:bg-surface-container-low',
  onDark:
    'border border-white/30 text-white hover:bg-white/10',
  whatsapp:
    'bg-whatsapp text-white hover:opacity-90',
  success:
    'bg-on-tertiary-container text-on-tertiary hover:opacity-90',
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'px-md py-xs text-label-sm',
  md: 'px-lg py-xs text-label-md',
  lg: 'px-xl py-md text-label-md',
}

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined }

type ButtonAsLink = CommonProps & { to: string; type?: never } & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'type'
>

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = [
    'inline-flex items-center justify-center gap-xs rounded font-label-md uppercase tracking-widest transition-all disabled:cursor-not-allowed disabled:opacity-50',
    variantClass[variant],
    sizeClass[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if ('to' in props && props.to) {
    const { to, ...rest } = props
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
