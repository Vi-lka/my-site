"use client"

import GlitchText from "../../special/glitch-text"
import { LineShadowText } from "../../magicui/line-shadow-text"
import { TypingAnimation } from "../../magicui/typing-animation"
import { AnimatedSpan, Terminal } from "../../magicui/terminal"
import { formatDate } from "@/lib/utils"
import { TextAnimate } from "../../magicui/text-animate"
import { SKILLS_TERMINAL, START_JOB_DATE } from "@/lib/consts"
import { useTranslations } from "next-intl"
import React from "react"

export default function HeroSection() {
  const t = useTranslations('HomePage');

  const [hasAnimatedHero, setHasAnimatedHero] = React.useState(false);
  const [hasAnimatedTerminal, setHasAnimatedTerminal] = React.useState(false);
  
  const currentDate = new Date()
  const startJobDate = new Date(START_JOB_DATE)
  const yearsSinceStartJob = currentDate.getFullYear() - startJobDate.getFullYear()

  React.useEffect(() => {
    const animatedHero = sessionStorage.getItem('hasSeenHeroAnimation');
    const animatedTerminal = sessionStorage.getItem('hasSeenTerminalAnimation');
    if (animatedHero) {
      setHasAnimatedHero(true);
    } else {
      setHasAnimatedHero(false);
    }
    if (animatedTerminal) {
      setHasAnimatedTerminal(true);
    } else {
      setHasAnimatedTerminal(false);
    }
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-transparent flex items-center justify-center px-4">
      {/* Content container */}
      <div className="relative container mx-auto px-4 text-center z-20">
        {/* Animated V */}
        <div className="mb-8 relative">
          <div className="w-fit flex mx-auto items-end justify-center relative">
            <LineShadowText className="text-[10rem] md:text-[12rem] lg:text-[15rem]">
              V
            </LineShadowText>
          </div>

          {/* Digital readout effect */}
          <div className="absolute w-full -bottom-4 left-1/2 transform -translate-x-1/2 text-violet lg:text-sm text-xs tracking-tight font-mono">
            {`SYS.${formatDate(currentDate, { day: "2-digit", month: "2-digit", year: "numeric" })}`}.V // WELCOME!
          </div>
        </div>

        {/* Hero content */}
        <div className="flex items-center justify-center flex-wrap gap-3 text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight uppercase">
          <GlitchText className="text-violet" classNameGlitch="text-background/50" classNameGlitch2="text-violet">
            <TextAnimate 
              once 
              animation="slideLeft" 
              by="character" 
              as="h1" 
              duration={0.1}
              initial={hasAnimatedHero ? 'show' : 'hidden'}
            >
              {t("front-end")}
            </TextAnimate>
          </GlitchText>
          <TextAnimate 
            once 
            animation="slideLeft" 
            by="character" 
            as="h1" 
            delay={0.2} 
            duration={0.1}
            initial={hasAnimatedHero ? 'show' : 'hidden'}
          >
            {t("development")}
          </TextAnimate>
        </div>
        <div className="text-foreground/70 uppercase max-w-2xl mx-auto mb-8 min-h-7">
          {/* <GlitchText classNameGlitch2="text-background/60"> */}
            <TextAnimate 
              once 
              delay={0.4} 
              animation="fadeIn" 
              by="line" 
              as="p" 
              className="text-sm sm:text-lg md:text-xl"
              initial={hasAnimatedHero ? 'show' : 'hidden'}
              onAnimationComplete={() => {
                if (!hasAnimatedHero) {
                  sessionStorage.setItem('hasSeenHeroAnimation', 'true');
                  setHasAnimatedHero(true);
                }
              }}
            >
              React, Next.js // TypeScript // Tailwind
            </TextAnimate>
          {/* </GlitchText> */}
        </div>

        {/* CTA buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-violet hover:bg-violet text-black px-8 py-6 text-lg  border border-violet">
            INITIALIZE
          </Button>
          <Button
            variant="outline"
            className="border-violet text-violet hover:bg-amber-900/20 px-8 py-6 text-lg "
          >
            ACCESS DATA
          </Button>
        </div> */}
      </div>

      <div className="absolute md:top-0 md:right-5 md:left-auto -top-8 left-2 dark:opacity-100 opacity-70 z-0">
        <Terminal className="text-sm w-96 bg-transparent border-none" classNameBar="opacity-0">
          <TypingAnimation delay={700} duration={10} className="font-mono text-sm" disabled={hasAnimatedTerminal}>
            &gt; pnpm dlx portfolio@latest init
          </TypingAnimation>

          <AnimatedSpan delay={1000} className="font-mono text-green-500" disabled={hasAnimatedTerminal}>
            <span>✔ {t("welcome")}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={1300} className="font-mono text-violet z-20" disabled={hasAnimatedTerminal}>
            <span>- {t("iam.full")}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={1800} className="font-mono text-violet z-20" disabled={hasAnimatedTerminal}>
            <span>- {t("experience.full", { yearsSinceStartJob })}</span>
          </AnimatedSpan>

          <TypingAnimation duration={10} delay={2400} className="font-mono text-sm" disabled={hasAnimatedTerminal}>
            &gt; pnpm add skills
          </TypingAnimation>

          {SKILLS_TERMINAL.map((skill, index) => (
            <AnimatedSpan 
              key={index} 
              delay={2600 + index * 350} 
              className="font-mono text-green-500"
              disabled={hasAnimatedTerminal}
              onAnimationComplete={() => {
                if (!hasAnimatedTerminal && index === SKILLS_TERMINAL.length - 1) {
                  sessionStorage.setItem('hasSeenTerminalAnimation', 'true');
                  setHasAnimatedTerminal(true);
                }
              }}
            >
              <span>✔ {skill}</span>
            </AnimatedSpan>
          ))}
        </Terminal>
      </div>
    </section>
  )
}

