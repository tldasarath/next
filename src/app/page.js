import AboutSection from "@/components/AboutSection";
import ClientSections from "@/components/ClientSections";
import HeroSection from "@/components/HeroSection";
import ImageTextSection from "@/components/ImageTextSection";
import Navbar from "@/components/Navbar";
import ServiceSection from "@/components/ServiceSection";
import ValuesSection from "@/components/ValuesSection";

export default function Home() {
  return (
    <main className="relative z-20"> 
    <Navbar/>
      <HeroSection />
      <AboutSection />
      <ServiceSection/>
      <ImageTextSection/>
      <ValuesSection/>
      {/* <ClientSections/> */}
    </main>
  );
}