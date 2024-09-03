import { FeaturedHostels } from "@/components/HomePage/FeaturedHostels";
import { HeroSection } from "@/components/HomePage/HeroSection";
import { HowItWorks } from "@/components/HomePage/HowItWorks";

export default function HomePage() {
  return (
    <main className="space-y-12 mb-12">
      <HeroSection />
      <FeaturedHostels />
      <HowItWorks />
    </main>
  );
}
