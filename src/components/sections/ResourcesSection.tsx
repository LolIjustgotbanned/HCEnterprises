import { ArrowUpRight } from 'lucide-react'
import { RESOURCES } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GradientBadge from '@/components/ui/GradientBadge'

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-24 px-6 bg-[#080F24]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#D4AF6A] text-sm font-medium tracking-widest uppercase mb-4">
            Free Resources
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Intelligence for Modern Operators
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Practical frameworks and tools used by our clients — available to you at no cost.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESOURCES.map((resource, i) => (
            <AnimatedSection key={resource.title} delay={i * 0.1}>
              <div className="group rounded-2xl p-8 border border-[#1A2540] bg-[#0D1630] hover:-translate-y-1 hover:shadow-2xl hover:border-[#D4AF6A]/20 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <GradientBadge color="gold" className="mb-4 w-fit">
                  {resource.type}
                </GradientBadge>
                <h3 className="text-white font-semibold text-lg mb-3 leading-snug flex-1">
                  {resource.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {resource.description}
                </p>
                <div className="flex items-center gap-2 text-[#D4AF6A] text-sm font-medium group-hover:gap-3 transition-all">
                  Download Now
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
