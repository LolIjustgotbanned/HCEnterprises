import { SITE, FAQ_ITEMS, PRICING_TIERS } from '@/lib/constants'

const SITE_URL = 'https://hc-enterprises.vercel.app'

export default function JsonLd() {
  const business = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    description: SITE.subTagline,
    email: SITE.email,
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: ['United States', 'Canada'],
    },
    serviceType: [
      'Website Design',
      'CRM Setup',
      'Local SEO',
      'Social Media Marketing',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Marketing Plans',
      itemListElement: PRICING_TIERS.filter((t) => t.price !== 'Custom').map(
        (tier) => ({
          '@type': 'Offer',
          name: tier.name,
          price: tier.price.replace(/[^0-9.]/g, ''),
          priceCurrency: 'USD',
          description: tier.target,
        })
      ),
    },
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}
