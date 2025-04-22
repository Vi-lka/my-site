import { cn } from '@/lib/utils'
import React from 'react'
import { isMobile } from 'react-device-detect'
import Title from './title'
import { Timeline } from '@/components/special/timeline';
import { projects } from './projects';

export default function ProjectsSection({
  className
}: {
  className?: string
}) {
  return (
    <section id="projects" className={cn(
      'relative w-full flex flex-col gap-6 items-center justify-center px-4 py-12 overflow-clip', 
      isMobile ? "px-4" : "md:px-28",
      className
    )}>
      <Title />
      <div className="relative w-full">
        <Timeline data={projects} className='' />
      </div>
    </section>
  )
}
