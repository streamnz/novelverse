import HeroSection from "@/components/sections/HeroSection";
import TechStackSection from "@/components/sections/TechStackSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ComingSoonSection from "@/components/sections/ComingSoonSection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-dark-900 text-white overflow-x-hidden">
      <HeroSection />
      <TechStackSection />
      <FeaturesSection />
      <ComingSoonSection />
      <Footer />
    </main>
  );
}
