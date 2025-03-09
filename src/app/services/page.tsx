import ElintSection from "@/components/sections/elint/elintSection";
import GeointSection from "@/components/sections/geoint/geointSection";
import ImintSection from "@/components/sections/imint/ImintSection";
import ApproachSection from "@/components/sections/ourApproach/approachSection";
import PartnerSection from "@/components/sections/partner/partnerSection";
import ServicesSection from "@/components/sections/services/servicesSection";

export default function page() {
  return (
    <main className="items-center justify-center">
      <ServicesSection />
      <GeointSection />
      <ElintSection />
      <ImintSection />
      <ApproachSection />
      <PartnerSection />
    </main>
  );
}
