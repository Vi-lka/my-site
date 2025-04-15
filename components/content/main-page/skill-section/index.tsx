"use client"

import { cn } from '@/lib/utils'
import React from 'react'
import { OrbitingIcons } from './orbiting-icons'
import { useTranslations } from 'next-intl';
import GlitchText from '@/components/special/glitch-text';
import { TypingAnimation } from '@/components/magicui/typing-animation';
import { isMobile } from 'react-device-detect';
import SkillsCards from './skills-cards';

export default function SkillsSection({
  className
}: {
  className?: string
}) {
  const t = useTranslations('HomePage.skills');

  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const animated = sessionStorage.getItem('hasSeenSkillsTitleAnimation');
    if (animated) {
      setHasAnimated(true);
    } else {
      setHasAnimated(false);
    }
  }, []);

  return (
    <section id="skills" className={cn(
      'relative w-full min-h-screen flex flex-col gap-6 items-center justify-center px-4 py-12 overflow-hidden', 
      isMobile ? "px-4" : "md:px-28",
      className
    )}>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-20 opacity-20 scale-125 sm:scale-150 lg:scale-200'>
        <OrbitingIcons />
      </div>
      <GlitchText className="text-violet w-full z-20" classNameGlitch="text-background/50" classNameGlitch2="text-violet">
        <TypingAnimation 
          startOnView 
          duration={40} 
          className='text-4xl md:text-5xl lg:text-6xl'
          disabled={hasAnimated}
        >
          {t("title")}
        </TypingAnimation>
      </GlitchText>
      <div className='w-full'>
        <TypingAnimation 
          startOnView 
          delay={300} 
          duration={20} 
          className="text-xl md:text-2xl"
          disabled={hasAnimated}
          onComplete={() => {
            if (!hasAnimated) {
              sessionStorage.setItem('hasSeenSkillsTitleAnimation', 'true');
              setHasAnimated(true);
            }
          }}
        >
          &gt; pnpm add skills
        </TypingAnimation>
      </div>
      <SkillsCards delay={700} className='w-full' />
    </section>
  )
}
