import { PROCESS_PHASES } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-6 bg-[#000000]">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#D4AF6A] text-xs font-medium tracking-widest uppercase mb-4">
            Our Approach
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-zinc-500 text-base max-w-md mx-auto">
            We handle everything. You just show up and do the work.
          </p>
        </AnimatedSection>

        <div className="space-y-0 border border-[#2A2A2A]">
          {PROCESS_PHASES.map((phase, i) => (
            <AnimatedSection key={phase.number} delay={i * 0.1}>
              <div className="flex gap-8 p-8 border-b border-[#2A2A2A] last:border-b-0">
                <span className="text-[#D4AF6A] font-mono text-sm shrink-0 mt-0.5">{phase.number}</span>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">{phase.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{phase.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
