import BgCanvas from "@/components/content/bg-canvas";
import HeroSection from "@/components/content/hero-section";
import IamSection from "@/components/content/iam-section";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center">
      <BgCanvas className="fixed top-0 z-10" />
      <HeroSection />
      <IamSection />
    </div>
  );
}
