import { PRICING_TIERS } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PricingCard from '@/components/ui/PricingCard'

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 bg-[#080F24]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#D4AF6A] text-sm font-medium tracking-widest uppercase mb-4">
            Simple, Transparent Pricing
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Plans for Every Stage
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No surprise fees. No long-term lock-ins. Just results.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {PRICING_TIERS.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.08}>
              <PricingCard tier={tier} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            All plans include a 30-day results guarantee. Setup fees are one-time.{' '}
            <a href="#faq" className="text-[#D4AF6A] hover:underline">
              Read the FAQ
            </a>{' '}
            for details.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
