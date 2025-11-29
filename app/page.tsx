import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { AgentTypesSection } from "@/components/landing/agent-types-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { CTASection } from "@/components/landing/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AgentTypesSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
