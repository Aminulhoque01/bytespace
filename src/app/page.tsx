import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import CommunityTestimonials from "../components/sections/CommunityTestimonials";
import CreatorCTASection from "../components/sections/CreatorCTASection";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import LearningPathsSection from "../components/sections/LearningPath";
import ProfessionalGrowthSection from "../components/sections/ProfessionalGrowth";
import SkillSection from "../components/sections/SkillSection";
 

 

export default function Home() {
  return (
    <main className="bytespace-grid min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Features/>
      <SkillSection />
      <LearningPathsSection/>
      <ProfessionalGrowthSection/>
      <CreatorCTASection/>
      <CommunityTestimonials/>
      <Footer/>
    </main>
  );
}