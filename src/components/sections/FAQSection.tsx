import { FAQ_ITEMS } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'
import AccordionItem from '@/components/ui/AccordionItem'

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6 bg-[#050A18]">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[#D4AF6A] text-sm font-medium tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Common Questions
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Everything you need to know before starting your engagement.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl border border-[#1A2540] bg-[#0D1630] overflow-hidden px-8">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
