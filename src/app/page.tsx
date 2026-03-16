import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PropuestaSection } from "@/components/sections/PropuestaSection";
import { ClasesSection } from "@/components/sections/ClasesSection";
import { SobreSection } from "@/components/sections/SobreSection";
import { HorariosSection } from "@/components/sections/HorariosSection";
import { ContactoSection } from "@/components/sections/ContactoSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PropuestaSection />
        <ClasesSection />
        <SobreSection />
        <HorariosSection />
        <ContactoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
