import BgCanvas from "@/components/content/bg-canvas";
import HeroSection from "@/components/content/hero-section";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center">
      <BgCanvas className="fixed top-0 z-10" />
      <HeroSection />
      <LineShadowText className="text-[15rem] z-20">
        V
      </LineShadowText>
    </div>
  );
}
