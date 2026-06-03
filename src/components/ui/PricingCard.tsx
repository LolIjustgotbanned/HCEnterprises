'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import type { PricingTier } from '@/types'
import GradientBadge from './GradientBadge'
import Button from './Button'

export default function PricingCard({ tier }: { tier: PricingTier }) {
  const statusColorMap = {
    available: 'gold' as const,
    limited: 'amber' as const,
    referral: 'slate' as const,
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`relative flex flex-col rounded-2xl p-6 border transition-all duration-300 ${
        tier.highlighted
          ? 'border-[#D4AF6A]/50 bg-gradient-to-b from-[#D4AF6A]/5 to-[#0D1630] shadow-xl shadow-[#D4AF6A]/10'
          : 'border-[#1A2540] bg-[#0D1630] hover:border-[#D4AF6A]/20'
      }`}
    >
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <GradientBadge color="gold">{tier.badge}</GradientBadge>
        </div>
      )}

      <div className="mb-6">
        <GradientBadge color={statusColorMap[tier.statusColor]}>
          {tier.status}
        </GradientBadge>
      </div>

      <h3 className="text-xl font-semibold text-white mb-1">{tier.name}</h3>
      <p className="text-xs text-slate-500 mb-4">{tier.target}</p>

      <div className="mb-2">
        <span
          className={`text-3xl font-bold ${
            tier.highlighted
              ? 'bg-gradient-to-r from-[#D4AF6A] to-[#C9972A] bg-clip-text text-transparent'
              : 'text-white'
          }`}
        >
          {tier.price}
        </span>
        {tier.price !== 'Custom' && (
          <span className="text-slate-400 text-sm">/mo</span>
        )}
      </div>
      <p className="text-xs text-slate-500 mb-6">{tier.implementation}</p>

      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
            <Check className="w-4 h-4 text-[#D4AF6A] mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href="#contact"
        variant={tier.highlighted ? 'gold' : 'outline'}
        className="w-full"
      >
        {tier.ctaLabel}
      </Button>
    </motion.div>
  )
}
