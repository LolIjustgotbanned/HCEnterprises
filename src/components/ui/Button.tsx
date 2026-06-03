import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  href?: string
}

export default function Button({
  children,
  className,
  variant = 'gold',
  size = 'md',
  href,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer'

  const variants = {
    gold: 'bg-gradient-to-r from-[#D4AF6A] to-[#C9972A] text-[#050A18] hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF6A]/20',
    outline:
      'border border-[#D4AF6A]/40 text-[#D4AF6A] hover:border-[#D4AF6A] hover:bg-[#D4AF6A]/5',
    ghost: 'text-slate-400 hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const cls = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
