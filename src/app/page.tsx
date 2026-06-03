import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TrustedBySection from '@/components/sections/TrustedBySection'
import ValueSection from '@/components/sections/ValueSection'
import PricingSection from '@/components/sections/PricingSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ResourcesSection from '@/components/sections/ResourcesSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import CookieBanner from '@/components/ui/CookieBanner'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <ValueSection />
      <PricingSection />
      <ProcessSection />
      <ResourcesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
