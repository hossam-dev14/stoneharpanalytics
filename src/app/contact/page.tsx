
import Container from "@/components/container";
import ChooseUsSectionTwo from "@/components/sections/chooseUs/chooseUsSectionTwo";
import ContactHeaderSection from "@/components/sections/contactHeader/contactHeaderSection";
import SendMessageSection from "@/components/sections/contactHeader/SendMessageSection";

export default function page() {
  return (
    <main className="items-center justify-center">
      <ContactHeaderSection />
      <SendMessageSection />
      <ChooseUsSectionTwo />
    </main>
  );
}
