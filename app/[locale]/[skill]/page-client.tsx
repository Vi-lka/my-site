"use client"

import { TypingAnimation } from '@/components/magicui/typing-animation';
import GlitchText from '@/components/special/glitch-text'
import GoBackButton from '@/components/special/go-back-button'
import ViewTransition from '@/components/ViewTransition';
import { SKILLS } from '@/lib/consts';
import { cn } from '@/lib/utils'
import React from 'react'
import { isMobile } from 'react-device-detect'

export default function PageClient({
  skill
}: {
  skill: typeof SKILLS[keyof typeof SKILLS];
}) {
  return (
    <section className={cn(
      "relative w-full min-h-screen flex flex-col gap-6 px-4 pt-20 overflow-hidden",
      isMobile ? "px-4" : "md:px-28",
    )}>
      <div className="relative">
        <GoBackButton backUrl="/#skills" className="absolute md:top-1/2 md:-translate-y-1/2 md:-left-12 -top-8 left-0 z-20" />
        <GlitchText 
          childrenReplace={
            <ViewTransition name={`skill-${skill.id}`}>
              <span className={cn(`skill-${skill.id}`, 'font-bold leading-[5rem] tracking-[-0.02em] text-4xl md:text-5xl lg:text-6xl')}>
                {skill.title}
              </span>
            </ViewTransition>
          }
          className="text-violet w-full leading-[5rem] z-20" 
          classNameGlitch="-top-[10px] text-background/50" 
          classNameGlitch2="-top-[9px] text-violet"
        >
          <span className='font-bold leading-[5rem] tracking-[-0.02em] text-4xl md:text-5xl lg:text-6xl'>
            {skill.title}
          </span>
        </GlitchText>
      </div>
      <div className='w-full'>
        <TypingAnimation startOnView delay={300} duration={20} className="text-xl md:text-2xl">
          &gt; pnpm add skills
        </TypingAnimation>
      </div>
    </section>
  )
}
