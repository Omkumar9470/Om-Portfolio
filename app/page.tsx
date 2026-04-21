import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { StartupSection } from '@/components/startup-section'
import { ActiveSection } from '@/components/active-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { AboutSection } from '@/components/about-section'
import { SchedulerSection } from '@/components/scheduler-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <StartupSection />
      <ActiveSection />
      <PortfolioSection />
      <AboutSection />
      <SchedulerSection />
      <Footer />
    </main>
  )
}
