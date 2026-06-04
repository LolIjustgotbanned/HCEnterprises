'use client'

import { Check } from 'lucide-react'
import type { PricingTier } from '@/types'
import Button from './Button'

export default function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`relative flex flex-col p-6 border transition-colors duration-200 ${
        tier.highlighted
          ? 'border-[#D4AF6A]/40 bg-[#1A1A1A]'
          : 'border-[#2A2A2A] bg-[#0A0A0A]'
      }`}
    >
      {tier.badge && (
        <span className="absolute -top-px left-6 text-[10px] font-semibold tracking-widest uppercase text-[#D4AF6A] bg-[#D4AF6A]/10 px-3 py-1 border border-[#D4AF6A]/20 border-t-0">
          {tier.badge}
        </span>
      )}

      <div className="mt-4 mb-6">
        <h3 className="text-white font-semibold text-base mb-1">{tier.name}</h3>
        <p className="text-zinc-600 text-xs">{tier.target}</p>
      </div>

      <div className="mb-1">
        <span className="text-3xl font-bold text-white">{tier.price}</span>
        {tier.price !== 'Custom' && (
          <span className="text-zinc-500 text-sm">/mo</span>
        )}
      </div>
      <p className="text-zinc-600 text-xs mb-6">{tier.implementation}</p>

      <ul className="space-y-2.5 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-400">
            <Check className="w-3.5 h-3.5 text-[#D4AF6A] mt-0.5 shrink-0" />
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
    </div>
  )
}
