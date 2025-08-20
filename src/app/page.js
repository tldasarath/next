import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ImageTextSection from "@/components/ImageTextSection";
import ServiceSection from "@/components/ServiceSection";

export default function Home() {
  return (
    <main className="relative z-20"> 
      <HeroSection />
      <AboutSection />
      <ServiceSection/>
      <ImageTextSection/>
    </main>
  );
}