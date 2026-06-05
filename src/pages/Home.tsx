import HeroSection from '@/src/components/home/HeroSection';
import ModelStrip from '@/src/components/home/ModelStrip';
import PhilosophySection from '@/src/components/home/PhilosophySection';
import PerformanceStats from '@/src/components/home/PerformanceStats';
import TechPreview from '@/src/components/home/TechPreview';
import NewsletterSection from '@/src/components/home/NewsletterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ModelStrip />
      <PhilosophySection />
      {/* Featured Model Spotlight would go here - skipping for brevity to focus on core */}
      <PerformanceStats />
      <TechPreview />
      <NewsletterSection />
    </>
  );
}
