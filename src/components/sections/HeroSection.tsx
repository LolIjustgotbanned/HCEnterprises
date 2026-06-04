'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/constants'
import Button from '@/components/ui/Button'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] } },
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 bg-[#000000]"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6 text-white"
          >
            More Calls.<br />
            <span className="text-[#D4AF6A]">More Customers.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-zinc-400 text-base sm:text-xl max-w-xl mx-auto leading-relaxed mb-10"
          >
            {SITE.subTagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="#contact" size="lg">
              {SITE.cta}
            </Button>
            <a
              href="#process"
              className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm group"
            >
              See how it works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-12 text-zinc-600 text-sm"
          >
            No long-term contracts. First leads in 30 days.
          </motion.p>

        </motion.div>
      </div>
    </section>
  )
}
