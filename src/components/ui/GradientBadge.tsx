import { cn } from '@/lib/utils'

interface GradientBadgeProps {
  children: React.ReactNode
  color?: 'gold' | 'amber' | 'slate' | 'purple'
  className?: string
}

export default function GradientBadge({
  children,
  color = 'gold',
  className,
}: GradientBadgeProps) {
  const colors = {
    gold: 'border-[#D4AF6A]/40 text-[#D4AF6A] bg-[#D4AF6A]/10',
    amber: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
    slate: 'border-zinc-600/40 text-zinc-400 bg-zinc-700/20',
    purple: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border tracking-wide',
        colors[color],
        className
      )}
    >
      {children}
    </span>
  )
}
