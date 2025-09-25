import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import HowItWorksSection from "./components/HowItWorksSection";
import AchievementsSection from "./components/AchievementsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FinalCTASection from "./components/FinalCTASection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-atlantic-cream font-nunito">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <AchievementsSection />
      <TestimonialsSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}