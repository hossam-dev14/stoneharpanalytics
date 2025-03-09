import HeroSection from "@/components/sections/hero/heroSection";
import EmpoweringSection from "@/components/sections/empowering/empoweringSection";
import ExpertiseSection from "@/components/sections/expertise/expertiseSection";
import FeatureSection from "@/components/sections/features/featuresSection";
import ChooseUsSection from "@/components/sections/chooseUs/chooseUsSection";
import GetInTouchSection from "@/components/sections/getInTouch/getInTouchSection";
import CarouselSection from "@/components/sections/carousel/carouselSection";

export default function Home() {
  return (
    <main className="items-center justify-center">
      <HeroSection />
      <CarouselSection />
      <EmpoweringSection />
      <FeatureSection />
      <ExpertiseSection />
      <ChooseUsSection />
      <GetInTouchSection />
    </main>
  );
}
