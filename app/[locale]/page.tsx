import HeroSection from "@/components/content/main-page/hero-section";
import IamSection from "@/components/content/main-page/iam-section";
import SkillsSection from "@/components/content/main-page/skill-section";
import PageLayout from "@/components/content/page-layout";
import { Locale } from "@/i18n/config";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function Home({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = use(params);
  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <PageLayout className="gap-24 sm:gap-60 min-h-screen">
      <HeroSection />
      <IamSection />
      <SkillsSection />
    </PageLayout>
  );
}
