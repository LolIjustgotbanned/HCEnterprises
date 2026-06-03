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
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#D4AF6A] text-sm font-medium tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Built for Local Businesses
            <br />
            <span className="text-slate-400">That Want to Grow</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Three services that bring you more calls, more bookings, and more customers — handled for you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUE_PILLARS.map((pillar, i) => {
            const Icon = iconMap[pillar.icon]
            return (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <div className="group rounded-2xl p-8 border border-[#1A2540] bg-[#0D1630] hover:border-[#D4AF6A]/30 hover:shadow-xl hover:shadow-[#D4AF6A]/5 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF6A]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF6A]/15 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-[#D4AF6A]" />}
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-3">{pillar.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
