import AboutUsSection from "@/components/sections/aboutUs/aboutUsSection";
import OurMissionSection from "@/components/sections/ourMission/ourMissionSection";
import TeamSection from "@/components/sections/team/TeamSection";
import OurExpertiseSection from "@/components/sections/expertise/ourExpertiseSection";
import OurVisionSection from "@/components/sections/ourVision/ourVisionSection";
import PartnerSection from "@/components/sections/partner/partnerSection";

export default function page() {
  return (
    <main className="items-center justify-center">
      <AboutUsSection />
      <OurMissionSection />
      <OurExpertiseSection />
      <TeamSection />
      <OurVisionSection />
      <PartnerSection />
    </main>
  );
}
