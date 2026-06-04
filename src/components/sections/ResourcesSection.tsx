import { ArrowUpRight } from 'lucide-react'
import { RESOURCES } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-24 px-6 bg-[#080F24]">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#D4AF6A] text-xs font-medium tracking-widest uppercase mb-4">
            Free Resources
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Tools for Local Business Owners
          </h2>
          <p className="text-slate-500 text-base max-w-md mx-auto">
            Practical guides available at no cost.
          </p>
        </AnimatedSection>

        <div className="space-y-0 border border-[#1A2540]">
          {RESOURCES.map((resource, i) => (
            <AnimatedSection key={resource.title} delay={i * 0.08}>
              <div className="group flex items-center justify-between gap-6 p-7 border-b border-[#1A2540] last:border-b-0 hover:bg-[#0D1630] transition-colors cursor-pointer">
                <div className="flex items-start gap-5">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#D4AF6A] shrink-0 mt-1 w-20">
                    {resource.type}
                  </span>
                  <div>
                    <h3 className="text-white font-medium text-sm mb-1">{resource.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{resource.description}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-[#D4AF6A] transition-colors shrink-0" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
