import { cn } from '@/lib/utils'
import React from 'react'
import { OrbitingIcons } from './orbiting-icons'
import { isMobile } from 'react-device-detect';
import SkillsCards from './skills-cards';
import Title from './title';

export default function SkillsSection({
  className
}: {
  className?: string
}) {
  return (
    <section id="skills" className={cn(
      'relative w-full flex flex-col gap-6 items-center justify-center px-4 py-12 overflow-hidden', 
      isMobile ? "px-4" : "md:px-28",
      className
    )}>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-20 opacity-20 scale-125 sm:scale-150 lg:scale-200'>
        <OrbitingIcons />
      </div>
      <Title />
      <SkillsCards delay={700} className='w-full' />
    </section>
  )
}
