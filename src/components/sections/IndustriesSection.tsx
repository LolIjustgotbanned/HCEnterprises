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
    <section id="industries" className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-[#D4AF6A] text-xs font-medium tracking-widest uppercase mb-4">
            Who We Work With
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">
            Industries We Serve
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon]
            return (
              <AnimatedSection key={industry.label} delay={i * 0.05}>
                <div className="flex items-center gap-2 px-3 py-3 sm:px-5 sm:py-4 rounded-xl border border-[#2A2A2A] bg-[#1A1A1A]">
                  {Icon && <Icon className="w-4 h-4 text-[#D4AF6A] shrink-0" />}
                  <span className="text-zinc-300 text-sm">{industry.label}</span>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
