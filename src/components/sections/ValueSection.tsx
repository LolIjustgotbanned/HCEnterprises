import { Globe, LayoutDashboard, TrendingUp } from 'lucide-react'
import { VALUE_PILLARS } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  LayoutDashboard,
  TrendingUp,
}

export default function ValueSection() {
  return (
    <section id="services" className="py-24 px-6 bg-[#050A18]">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#D4AF6A] text-xs font-medium tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Built for Local Businesses That Want to Grow
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto">
            Three services that bring you more calls, more bookings, and more customers — handled for you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1A2540]">
          {VALUE_PILLARS.map((pillar, i) => {
            const Icon = iconMap[pillar.icon]
            return (
              <AnimatedSection key={pillar.title} delay={i * 0.08}>
                <div className="bg-[#050A18] p-8 h-full">
                  <div className="mb-5">
                    {Icon && <Icon className="w-6 h-6 text-[#D4AF6A]" />}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{pillar.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
