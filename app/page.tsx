import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Zenith Digital Solution - Transform Your Business with Digital Excellence",
  description: "Leading digital transformation partner offering cloud infrastructure, custom development, data analytics, cybersecurity, and mobile solutions. Empowering businesses with innovative technology solutions.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
