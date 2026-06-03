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
  tagline: 'More Calls. More Customers. Less Hassle.',
  subTagline:
    'HC Enterprises builds professional websites, sets up your CRM, and markets your business online — so you can focus on the work, not the screen.',
  cta: 'Get More Customers',
  email: 'hello@hcenterprises.co',
  socialProof: 'Helping Local Businesses Get More Customers',
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'Resources', href: '#resources' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const VALUE_PILLARS: ValuePillar[] = [
  {
    icon: 'Globe',
    title: 'AI-Powered Websites',
    description:
      'We design and build fast, professional websites using the latest AI tools — ready in days, not months. Your site will look great on every phone and screen.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'CRM & Automation',
    description:
      'We set up your GoHighLevel CRM so every lead gets followed up automatically. Track customers, book appointments, and never lose a lead again.',
  },
  {
    icon: 'TrendingUp',
    title: 'SEO & Social Media',
    description:
      'We get your business showing up on Google and posting consistently on Instagram, TikTok, and Facebook — so customers find you before they find your competition.',
  },
]

export const INDUSTRIES = [
  { icon: 'Scissors', label: 'Landscaping' },
  { icon: 'Camera', label: 'Security Cameras' },
  { icon: 'Car', label: 'Car Detailing' },
  { icon: 'Sun', label: 'Window Tinting' },
  { icon: 'PaintBucket', label: 'Painting' },
  { icon: 'Home', label: 'Roofing' },
  { icon: 'ShoppingBag', label: 'Online Startups' },
  { icon: 'Wrench', label: 'Blue Collar Trades' },
]

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Starter',
    price: '$499',
    implementation: '+ $299 setup',
    target: 'New & solo businesses',
    status: 'Available',
    statusColor: 'available',
    ctaLabel: 'Get Started',
    features: [
      'AI-built professional website',
      'GoHighLevel CRM setup',
      'Google Business Profile optimization',
      'Lead capture forms',
      'Monthly check-in call',
    ],
  },
  {
    name: 'Growth',
    price: '$899',
    implementation: '+ $499 setup',
    target: 'Established local businesses',
    badge: 'Most Popular',
    status: '3 Spots Left',
    statusColor: 'limited',
    highlighted: true,
    ctaLabel: 'Get Started',
    features: [
      'Everything in Starter',
      'Local SEO optimization',
      'Social media management (Instagram + Facebook + TikTok)',
      '3 posts per week per platform',
      'Automated lead follow-up sequences',
      'Bi-weekly performance report',
    ],
  },
  {
    name: 'Scale',
    price: '$1,799',
    implementation: '+ $999 setup',
    target: 'Multi-service or expanding businesses',
    status: '2 Spots Left',
    statusColor: 'limited',
    ctaLabel: 'Get Started',
    features: [
      'Everything in Growth',
      'Paid ad campaigns (Google + Meta)',
      'Unlimited content creation',
      'Dedicated account manager',
      'Weekly strategy calls',
      'Priority support (same-day response)',
    ],
  },
  {
    name: 'Custom',
    price: 'Custom',
    implementation: 'Custom onboarding',
    target: 'Multi-location / franchise',
    status: 'Book a call',
    statusColor: 'referral',
    ctaLabel: 'Book a Call',
    features: [
      'Everything in Scale',
      'Multi-location management',
      'Custom integrations & automations',
      'White-glove onboarding',
      'Dedicated growth strategist',
      'Custom reporting dashboard',
    ],
  },
]

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    number: '01',
    title: 'We Build Your Foundation',
    description:
      'We create your website and set up your CRM in 7–14 days. You\'ll have a professional online presence and a system that captures every lead from day one.',
  },
  {
    number: '02',
    title: 'We Get You Found',
    description:
      'We optimize your Google presence and start posting on social media. Customers in your area start finding your business when they search for your service.',
  },
  {
    number: '03',
    title: 'We Keep It Growing',
    description:
      'Every month we track what\'s working, adjust your strategy, and keep leads coming in — so your business grows while you focus on the job.',
  },
]

export const RESOURCES: Resource[] = [
  {
    type: 'Free Guide',
    title: '5 Ways to Get More Local Clients in 2025',
    description:
      'The exact strategies local service businesses use to fill their schedule with Google, social media, and automation — without spending a fortune on ads.',
  },
  {
    type: 'Free Checklist',
    title: 'Google Business Profile Setup Checklist',
    description:
      'Step-by-step: set up and optimize your Google Business Profile so you show up when locals search for your service. Takes under 30 minutes.',
  },
  {
    type: 'Free Report',
    title: 'Why Your Website Isn\'t Getting You Calls',
    description:
      'The 7 most common mistakes on local business websites that cost you leads every day — and how to fix them.',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Do I need a website if I already get work through referrals?',
    answer:
      'Referrals are great, but 87% of people check a business online before calling — even if they were referred. A professional website makes you look credible and captures leads around the clock, even while you\'re on the job.',
  },
  {
    question: 'What is a CRM and why does my business need one?',
    answer:
      'A CRM (we use GoHighLevel) is software that tracks every lead, sends automatic follow-up texts and emails, and books appointments for you. It means no more lost leads and no more manually texting every new inquiry.',
  },
  {
    question: 'How long does it take to build my website?',
    answer:
      'Most websites are live within 7–14 days of your onboarding call. We use AI tools to build faster without cutting corners on quality.',
  },
  {
    question: 'Will SEO actually work for my type of business?',
    answer:
      'Yes — local SEO is one of the highest ROI investments for service businesses. When someone in your city searches "car detailer near me" or "roofing company [city]", we make sure your business shows up.',
  },
  {
    question: 'Do I have to create my own social media content?',
    answer:
      'No. We handle content creation and posting for you across Instagram, TikTok, and Facebook. You just keep doing what you do — we document and post it.',
  },
  {
    question: 'What results can I realistically expect?',
    answer:
      'Most clients see new inbound leads within the first 30 days. SEO results compound over 3–6 months. We track everything and show you exactly what\'s working each month.',
  },
]

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Free Guides', href: '#resources' },
      { label: 'Checklists', href: '#resources' },
      { label: 'FAQ', href: '#faq' },
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
  'Green Cuts Lawn Co.',
  'ProShield Security',
  'Elite Detail Co.',
  'Summit Roofing',
  'ColorPro Painting',
  'TintPros',
  'CleanCut Landscaping',
  'Armour Cameras',
  'Premier Auto Spa',
  'BrightCoat Painters',
]
