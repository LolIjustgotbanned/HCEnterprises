import { PROCESS_PHASES } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-6 bg-[#050A18]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#D4AF6A] text-sm font-medium tracking-widest uppercase mb-4">
            Our Approach
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            How We Build Your Growth Engine
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A proven three-phase system that turns ambition into measurable outcomes.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] border-t border-dashed border-[#1A2540]" />

          {PROCESS_PHASES.map((phase, i) => (
            <AnimatedSection key={phase.number} delay={i * 0.15}>
              <div className="relative text-center md:text-left">
                {/* Large background number */}
                <div className="absolute -top-4 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 text-[120px] font-black text-[#0D1630] leading-none select-none pointer-events-none z-0">
                  {phase.number}
                </div>

                <div className="relative z-10 pt-8">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#D4AF6A]/10 border border-[#D4AF6A]/30 mb-4 mx-auto md:mx-0">
                    <span className="text-[#D4AF6A] text-xs font-bold">{phase.number}</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
