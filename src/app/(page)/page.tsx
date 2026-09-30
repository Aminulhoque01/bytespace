 
 
import CommunityTestimonials from "../../components/sections/CommunityTestimonials";
import CreatorCTASection from "../../components/sections/CreatorCTASection";
import Features from "../../components/sections/Features";
import Hero from "../../components/sections/Hero";
import LearningPathsSection from "../../components/sections/LearningPath";
import ProfessionalGrowthSection from "../../components/sections/ProfessionalGrowth";
import SkillSection from "../../components/sections/SkillSection";
 

 

export default function Home() {
  return (
    <main className="bytespace-grid min-h-screen overflow-hidden">
       
      <div className="relative z-10">
       
        <Hero />
      </div>
      <Features/>
      <SkillSection />
      <LearningPathsSection/>
      <ProfessionalGrowthSection/>
      <CreatorCTASection/>
      <CommunityTestimonials/>
     
    </main>
  );
}