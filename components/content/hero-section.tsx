import GlitchText from "../special/glitch-text"
import { LineShadowText } from "../magicui/line-shadow-text"
import { TypingAnimation } from "../magicui/typing-animation"
import { AnimatedSpan, Terminal } from "../magicui/terminal"
import { formatDate } from "@/lib/utils"
import { TextAnimate } from "../magicui/text-animate"
import { SKILLS } from "@/lib/consts"
import { useTranslations } from "next-intl"

export default function HeroSection() {
  const t = useTranslations('HomePage');
  
  const currentDate = new Date()
  const startJobDate = new Date("2022-01-01")
  const yearsSinceStartJob = currentDate.getFullYear() - startJobDate.getFullYear()

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center">
      {/* Content container */}
      <div className="relative container mx-auto px-4 text-center z-20">
        {/* Animated V */}
        <div className="mb-8 relative">
          <div className="w-fit flex mx-auto items-end justify-center relative">
            <LineShadowText className="text-[10rem] md:text-[12rem] lg:text-[15rem]">
              V
            </LineShadowText>
            {/* <TextAnimate animation="slideLeft" by="character" className="absolute uppercase text-4xl bottom-18 -right-12">
              italy
            </TextAnimate> */}
            {/* <TypingAnimation 
              className="absolute uppercase text-5xl bottom-18 -right-22"
            >
              italy
            </TypingAnimation> */}
          </div>

          {/* Digital readout effect */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-violet lg:text-sm text-xs tracking-widest">
            {`SYS.${formatDate(currentDate, { day: "2-digit", month: "2-digit", year: "numeric" })}`}.V // WELCOME!
          </div>
        </div>

        {/* Hero content */}
        <div className="flex items-center justify-center flex-wrap gap-3 text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight uppercase">
          <GlitchText className="text-violet" classNameGlitch="text-background/50" classNameGlitch2="text-violet">
            <TextAnimate animation="slideLeft" by="character" as="h1" duration={0.2}>
              {t("front-end")}
            </TextAnimate>
          </GlitchText>
          <TextAnimate animation="slideLeft" by="character" as="h1" delay={0.3} duration={0.2}>
            {t("development")}
          </TextAnimate>
        </div>
        <div className="text-foreground/70 uppercase max-w-2xl mx-auto mb-8 min-h-7">
          {/* <GlitchText classNameGlitch2="text-background/60"> */}
            <TextAnimate delay={0.7} animation="fadeIn" by="line" as="p" className="text-base sm:text-lg md:text-xl">
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
          <TypingAnimation delay={1000} duration={20} className="text-sm">
            &gt; pnpm dlx portfolio@latest init
          </TypingAnimation>

          <AnimatedSpan delay={2000} className="text-green-500">
            <span>✔ {t("welcome")}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2500} className="text-violet z-20">
            <span>- {t("iam")}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3000} className="text-violet z-20">
            <span>- {t("experience", { yearsSinceStartJob })}</span>
          </AnimatedSpan>

          <TypingAnimation duration={20} delay={3500} className="text-sm">
            &gt; pnpm add skills
          </TypingAnimation>

          {SKILLS.map((skill, index) => (
            <AnimatedSpan key={index} delay={4000 + index * 500} className="text-green-500">
              <span>✔ {skill}</span>
            </AnimatedSpan>
          ))}
        </Terminal>
      </div>

      {/* HUD-like elements */}
      <div className="absolute top-5 left-5 text-violet text-xs md:flex flex-col hidden z-0">
        <GlitchText className="text-violet" classNameGlitch="text-background/60" classNameGlitch2="text-violet">
          SYS.STATUS: ONLINE
        </GlitchText>
        <GlitchText className="text-violet" classNameGlitch="text-background/60" classNameGlitch2="text-violet">
          SECURITY: ACTIVE
        </GlitchText>
      </div>

      <div className="absolute bottom-5 right-5 text-violet text-xs text-right md:flex flex-col hidden z-0">
        <GlitchText className="text-violet" classNameGlitch="text-background/60" classNameGlitch2="text-violet">
          USER: {t("user")}
        </GlitchText>
        <GlitchText className="text-violet" classNameGlitch="text-background/60" classNameGlitch2="text-violet">
          STATUS: SEARCH JOB
        </GlitchText>
      </div>
    </section>
  )
}

