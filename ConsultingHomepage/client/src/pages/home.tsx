import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CalculatorSection from "@/components/CalculatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ResultsSection />
      <BenefitsSection />
      <CalculatorSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
