import type {
  NavLink,
  ValuePillar,
  PricingTier,
  ProcessPhase,
  Resource,
  FAQItem,
  FooterColumn,
} from '@/types'

export const SITE = {
  name: 'HC Enterprises',
  tagline: 'We Engineer Growth. At Scale.',
  subTagline:
    'HC Enterprises unifies your brand strategy, digital systems, and performance marketing into one revenue-driving machine.',
  cta: 'Start Your Ascent',
  email: 'hello@hcenterprises.co',
  socialProof: 'Trusted By 50+ Brands Across North America',
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'Resources', href: '#resources' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const VALUE_PILLARS: ValuePillar[] = [
  {
    icon: 'Compass',
    title: 'Brand Architecture',
    description:
      'We audit your positioning, competitive landscape, and messaging to construct a brand identity that commands premium prices.',
  },
  {
    icon: 'Zap',
    title: 'Revenue Systems',
    description:
      'From CRM architecture to automated nurture sequences — we build the infrastructure that converts strangers into clients on autopilot.',
  },
  {
    icon: 'TrendingUp',
    title: 'Traffic at Scale',
    description:
      'Paid media, organic content, and SEO systems that compound over time, generating leads without proportionally increasing cost.',
  },
]

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Catalyst',
    price: '$3,500',
    implementation: '+ $750 onboarding',
    target: 'Ideal for $250k–$1M revenue brands',
    status: 'Available',
    statusColor: 'available',
    ctaLabel: 'Get Started',
    features: [
      'Brand audit & positioning workshop',
      '3 content campaigns per month',
      'Email nurture sequence setup',
      'Monthly performance report',
      'Slack community access',
    ],
  },
  {
    name: 'Ascent',
    price: '$8,500',
    implementation: '+ $1,750 onboarding',
    target: 'Ideal for $1M–$5M revenue brands',
    badge: 'Most Popular',
    status: '2 Spots Left',
    statusColor: 'limited',
    highlighted: true,
    ctaLabel: 'Get Started',
    features: [
      'Everything in Catalyst',
      'Unlimited campaign executions',
      'Full CRM buildout & automation',
      'Paid media management (Google + Meta)',
      'Bi-weekly strategy calls',
      'Dedicated account manager',
    ],
  },
  {
    name: 'Summit',
    price: '$25,000',
    implementation: '+ $5,000 onboarding',
    target: 'Ideal for $5M–$50M revenue brands',
    status: '1 Spot Left',
    statusColor: 'limited',
    ctaLabel: 'Get Started',
    features: [
      'Everything in Ascent',
      'Custom AI-assisted content systems',
      'Full team collaboration suite',
      'PR & partnership outreach',
      'Weekly executive briefings',
      '24/7 priority support line',
    ],
  },
  {
    name: 'Private Client',
    price: 'Custom',
    implementation: 'Custom onboarding',
    target: '$50M+ / Enterprise',
    status: 'By referral only',
    statusColor: 'referral',
    ctaLabel: 'Apply Now',
    features: [
      'Everything in Summit',
      'Dedicated executive team',
      'Custom technology buildout',
      'Equity & performance arrangements',
      'Board-level growth advisory',
      'Unlimited scope engagements',
    ],
  },
]

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description:
      'We conduct a deep diagnostic of your brand, market position, existing systems, and untapped revenue opportunities. You receive a custom growth roadmap before we begin.',
  },
  {
    number: '02',
    title: 'System Architecture',
    description:
      'We build the operational backbone — CRM, automations, content infrastructure, and ad accounts — configured specifically for your offer and audience.',
  },
  {
    number: '03',
    title: 'Scale & Optimize',
    description:
      'With systems live, we deploy traffic strategies and optimize relentlessly. Weekly data reviews ensure every dollar compounds into measurable growth.',
  },
]

export const RESOURCES: Resource[] = [
  {
    type: 'Free Report',
    title: 'The 2025 Brand Positioning Playbook',
    description:
      'A framework for repositioning your brand to command premium pricing in a commoditized market.',
  },
  {
    type: 'Free Tool',
    title: 'Paid Media ROI Calculator',
    description:
      'Forecast your return before spending a dollar. Input your margins and conversion rates, get your projected ROAS.',
  },
  {
    type: 'Free Download',
    title: 'Revenue Systems Audit Checklist',
    description:
      '47 questions to identify the exact bottlenecks costing your business revenue every month.',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What makes HC Enterprises different from a traditional agency?',
    answer:
      "We don't sell deliverables — we build systems. Every engagement is designed around a measurable revenue outcome, not a monthly content calendar.",
  },
  {
    question: 'How long until we see results?',
    answer:
      'Most clients see measurable KPI movement within 45–60 days. Full system maturity — where compounding effects kick in — typically occurs at the 90–120 day mark.',
  },
  {
    question: 'Do you work with businesses outside North America?',
    answer:
      'Yes. While our core team is North America-based, we work with English-speaking brands globally. Time zone alignment is assessed during onboarding.',
  },
  {
    question: 'Is there a minimum contract term?',
    answer:
      'All engagements begin with a 3-month minimum to allow systems to reach maturity. Month-to-month options are available at the Summit tier and above.',
  },
  {
    question: 'What is the onboarding process like?',
    answer:
      'After signing, you receive an onboarding questionnaire and are booked for a 90-minute discovery session within 5 business days. System build begins immediately after.',
  },
  {
    question: 'Can I upgrade my tier mid-engagement?',
    answer:
      'Yes. Tier upgrades are prorated and take effect at the start of the next billing cycle. Downgrades are subject to the 3-month minimum.',
  },
]

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Partners', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Free Tools', href: '#resources' },
      { label: 'Reports', href: '#resources' },
      { label: 'Webinars', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
]

export const CLIENT_NAMES = [
  'Meridian',
  'Vantage Co.',
  'Apex Group',
  'Luminary',
  'Cascade',
  'Pinnacle',
  'Ardent',
  'Nexus',
  'Stratos',
  'Ellipsis',
]
