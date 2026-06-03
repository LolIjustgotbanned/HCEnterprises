'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/constants'
import Button from '@/components/ui/Button'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] } },
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080F24] via-[#050A18] to-[#050A18]" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #D4AF6A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF6A]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF6A]/30 bg-[#D4AF6A]/5 text-[#D4AF6A] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#D4AF6A] animate-pulse" />
              Now helping local businesses grow
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-white block">More Calls.</span>
            <span className="bg-gradient-to-r from-[#D4AF6A] via-[#E8D5A3] to-[#C9972A] bg-clip-text text-transparent block">
              More Customers.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
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
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group"
            >
              See how it works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D4AF6A]/30 to-[#C9972A]/30 border border-[#1A2540]"
                  />
                ))}
              </div>
              <span>{SITE.socialProof}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-[#1A2540]" />
            <span>No long-term contracts. First leads in 30 days.</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050A18] to-transparent" />
    </section>
  )
}
