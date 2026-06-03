export interface NavLink {
  label: string
  href: string
}

export interface ValuePillar {
  icon: string
  title: string
  description: string
}

export interface PricingFeature {
  text: string
}

export interface PricingTier {
  name: string
  price: string
  implementation: string
  target: string
  badge?: string
  status: string
  statusColor: 'available' | 'limited' | 'referral'
  features: string[]
  highlighted?: boolean
  ctaLabel: string
}

export interface ProcessPhase {
  number: string
  title: string
  description: string
}

export interface Resource {
  type: string
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}
