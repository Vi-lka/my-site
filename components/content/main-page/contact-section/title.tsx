"use client"

import { TypingAnimation } from '@/components/magicui/typing-animation';
import GlitchText from '@/components/special/glitch-text';
import { useTranslations } from 'next-intl';
import React from 'react'

export default function Title() {
  const t = useTranslations('HomePage.contact');

  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const animated = sessionStorage.getItem('hasSeenContactTitleAnimation');
    if (animated) {
      setHasAnimated(true);
    } else {
      setHasAnimated(false);
    }
  }, []);

  return (
    <>
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
              sessionStorage.setItem('hasSeenContactTitleAnimation', 'true');
              setHasAnimated(true);
            }
          }}
        >
          &gt; sudo ls contact
        </TypingAnimation>
      </div>
    </>
  )
}
