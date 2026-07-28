type FieldProps = {
  label: string
  htmlFor?: string
  labelSize?: 'sm' | 'md'
  children: React.ReactNode
  className?: string
}

export function Field({ label, htmlFor, labelSize = 'md', children, className = '' }: FieldProps) {
  const labelClass =
    labelSize === 'sm'
      ? 'mb-1 block font-label-sm text-label-sm text-on-surface-variant'
      : 'mb-2 block font-label-md text-label-md text-on-surface-variant'

  return (
    <label htmlFor={htmlFor} className={`block ${className}`}>
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  )
}

const controlBase =
  'field-input w-full rounded border border-outline-variant bg-white px-sm py-2 font-body-md text-body-md outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>

export function Input({ className = '', ...props }: InputProps) {
  return <input className={`${controlBase} ${className}`} {...props} />
}

export function Textarea({ className = '', ...props }: TextareaProps) {
  return <textarea className={`${controlBase} ${className}`} {...props} />
}

export function Select({ className = '', children, ...props }: SelectProps) {
  return (
    <select className={`${controlBase} ${className}`} {...props}>
      {children}
    </select>
  )
}
