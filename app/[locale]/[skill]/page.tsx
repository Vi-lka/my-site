import PageLayout from "@/components/content/page-layout";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import GlitchText from "@/components/special/glitch-text";
import { type Locale } from "@/i18n/config";
import { SKILLS } from "@/lib/consts";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { use } from "react";
import ViewTransition from '@/components/ViewTransition';
import { cn } from "@/lib/utils";
import { isMobile } from "react-device-detect";
import GoBackButton from "@/components/special/go-back-button";
import PageClient from "./page-client";

export const dynamic = 'force-static'

export async function generateStaticParams() {
  return Object.values(SKILLS).map((skill) => ({
    params: { skill: skill.id },
  }))
}

export default function Page({
  params,
}: {
  params: Promise<{ locale: string; skill: string }>
}) {
  const {locale, skill} = use(params);
  // Enable static rendering
  setRequestLocale(locale as Locale);

  const currentSkill = Object.values(SKILLS).find((item) => item.id === skill);

  if (!currentSkill) notFound()

  return (
    <PageLayout className="min-h-screen">
      <section className={cn(
        "relative w-full min-h-screen flex flex-col px-4 pt-20 overflow-hidden",
        isMobile ? "px-4" : "md:px-28",
      )}>
        <div className="relative">
          <GoBackButton backUrl="/#skills" className="absolute md:top-1/2 md:-translate-y-1/2 md:-left-12 -top-8 left-0 z-20" />
          <GlitchText 
            childrenReplace={
              <ViewTransition name={`skill-${currentSkill.id}`}>
                <span className={cn(`skill-${currentSkill.id}`, 'font-bold leading-[5rem] tracking-[-0.02em] text-4xl md:text-5xl lg:text-6xl')}>
                  {currentSkill.title}
                </span>
              </ViewTransition>
            }
            className="text-violet w-full leading-[5rem] z-20" 
            classNameGlitch="-top-[10px] text-background/50" 
            classNameGlitch2="-top-[9px] text-violet"
          >
            <span className='font-bold leading-[5rem] tracking-[-0.02em] text-4xl md:text-5xl lg:text-6xl'>
              {currentSkill.title}
            </span>
          </GlitchText>
        </div>
        <div className='w-full'>
          <TypingAnimation startOnView delay={400} duration={10} className="text-xl md:text-2xl">
            &gt; pnpm dlx typescript init
          </TypingAnimation>
        </div>
        <PageClient skill={currentSkill} />
      </section>
    </PageLayout>
  )
}