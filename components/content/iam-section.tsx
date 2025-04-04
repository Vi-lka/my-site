import React from 'react'
import { useTranslations } from 'next-intl';
import { TypingAnimation } from '../magicui/typing-animation';
import { START_JOB_DATE } from '@/lib/consts';
import { cn } from '@/lib/utils';

export default function IamSection({
  className
}: {
  className?: string
}) {
  const t = useTranslations('HomePage');

  const currentDate = new Date()
  const startJobDate = new Date(START_JOB_DATE)
  const yearsSinceStartJob = currentDate.getFullYear() - startJobDate.getFullYear()

  return (
    <section className={cn('flex flex-col gap-12 sm:gap-24 px-4', className)}>
      <div className='flex items-center flex-wrap justify-center text-center gap-x-2'>
        <TypingAnimation startOnView duration={40} className='text-3xl md:text-4xl lg:text-5xl'>
          {t("iam.hi") + " " + t("iam.i")}
        </TypingAnimation>
        <TypingAnimation startOnView duration={40} delay={400} className='text-3xl md:text-4xl lg:text-5xl text-violet z-20'>
          {t("iam.am")}
        </TypingAnimation>
      </div>
      <div className='flex items-center flex-wrap justify-center text-center gap-x-2'>
        <TypingAnimation startOnView duration={40} delay={1000} className='text-3xl md:text-4xl lg:text-5xl'>
          {t("experience.front-end") + " " + t('experience.developer') + " "}
        </TypingAnimation>
        <TypingAnimation startOnView duration={40} delay={2000} className='text-3xl md:text-4xl lg:text-5xl text-violet z-20'>
          {t("experience.yearsCount", { yearsSinceStartJob })}
        </TypingAnimation>
        <TypingAnimation startOnView duration={40} delay={2200} className='text-3xl md:text-4xl lg:text-5xl'>
          {t("experience.years")}
        </TypingAnimation>
      </div>
    </section>
  )
}
