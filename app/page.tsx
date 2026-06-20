import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import StatsBar from "@/components/stats/StatsBar";
import ServicesSection from "@/components/services/ServicesSection";
import SkillsSection from "@/components/skills/SkillsSection";
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <StatsBar />
      <ServicesSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
