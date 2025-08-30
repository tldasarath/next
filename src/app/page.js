import AboutSection from "@/components/HomeSection/AboutSection";
import ClientSections from "@/components/HomeSection/ClientSections";
import HeroSection from "@/components/HomeSection/HeroSection";
import ImageTextSection from "@/components/HomeSection/ImageTextSection";
import ServiceSection from "@/components/HomeSection/ServiceSection";
import ValuesSection from "@/components/HomeSection/ValuesSection";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="relative z-20"> 
    <Navbar/>
      <HeroSection />
      <AboutSection />
      <ServiceSection/>
      <ImageTextSection/>
      <ValuesSection/>
      <ClientSections/>
    </main>
  );
}