import {
  Scissors,
  Camera,
  Car,
  Sun,
  PaintBucket,
  Home,
  ShoppingBag,
  Wrench,
} from 'lucide-react'
import { INDUSTRIES } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Scissors,
  Camera,
  Car,
  Sun,
  PaintBucket,
  Home,
  ShoppingBag,
  Wrench,
}

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 px-6 bg-[#080F24]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-[#D4AF6A] text-sm font-medium tracking-widest uppercase mb-4">
            Who We Work With
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We specialize in helping local and blue-collar businesses get more customers online.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon]
            return (
              <AnimatedSection key={industry.label} delay={i * 0.06}>
                <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-[#1A2540] bg-[#0D1630] hover:border-[#D4AF6A]/30 hover:bg-[#D4AF6A]/5 transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF6A]/10 flex items-center justify-center group-hover:bg-[#D4AF6A]/20 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-[#D4AF6A]" />}
                  </div>
                  <span className="text-white text-sm font-medium text-center">{industry.label}</span>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
