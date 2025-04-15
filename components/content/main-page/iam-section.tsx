"use client"

import React from 'react'
import { useTranslations } from 'next-intl';
import { TypingAnimation } from '../../magicui/typing-animation';
import { START_JOB_DATE } from '@/lib/consts';
import { cn } from '@/lib/utils';
import GlitchText from '@/components/special/glitch-text';

export default function IamSection({
  className
}: {
  className?: string
}) {
  const t = useTranslations('HomePage');

  const [hasAnimated, setHasAnimated] = React.useState(false);

  const currentDate = new Date()
  const startJobDate = new Date(START_JOB_DATE)
  const yearsSinceStartJob = currentDate.getFullYear() - startJobDate.getFullYear()

  React.useEffect(() => {
    const animated = sessionStorage.getItem('hasSeenIamAnimation');
    if (animated) {
      setHasAnimated(true);
    } else {
      setHasAnimated(false);
    }
  }, []);

  return (
    <section className={cn('flex flex-col gap-12 sm:gap-24 min-h-[50vh] items-center px-4', className)}>
      <div className='flex items-center flex-wrap justify-center text-center gap-x-2'>
        <TypingAnimation 
          startOnView 
          duration={25} 
          className='text-3xl md:text-4xl lg:text-5xl' 
          disabled={hasAnimated}
        >
          {t("iam.hi") + " " + t("iam.i")}
        </TypingAnimation>
        <GlitchText className="text-violet z-20" classNameGlitch="text-background/50" classNameGlitch2="text-violet">
          <TypingAnimation 
            startOnView 
            duration={25} 
            delay={300} 
            className='text-3xl md:text-4xl lg:text-5xl' 
            disabled={hasAnimated}
          >
            {t("iam.am")}
          </TypingAnimation>
        </GlitchText>
      </div>
      <div className='flex items-center flex-wrap justify-center text-center gap-x-2'>
        <TypingAnimation 
          startOnView 
          duration={25} 
          delay={600} 
          className='text-3xl md:text-4xl lg:text-5xl' 
          disabled={hasAnimated}
        >
          {t("experience.front-end") + " " + t('experience.developer') + " "}
        </TypingAnimation>
        <GlitchText className="text-violet z-20" classNameGlitch="text-background/50" classNameGlitch2="text-violet">
          <TypingAnimation 
            startOnView 
            duration={25} 
            delay={1100} 
            className='text-3xl md:text-4xl lg:text-5xl' 
            disabled={hasAnimated}
          >
            {t("experience.yearsCount", { yearsSinceStartJob })}
          </TypingAnimation>
        </GlitchText>
        <TypingAnimation 
          startOnView 
          duration={25} 
          delay={1200} 
          className='text-3xl md:text-4xl lg:text-5xl' 
          disabled={hasAnimated}
          onComplete={() => {
            if (!hasAnimated) {
              sessionStorage.setItem('hasSeenIamAnimation', 'true');
              setHasAnimated(true);
            }
          }}
        >
          {t("experience.years")}
        </TypingAnimation>
      </div>
    </section>
  )
}
