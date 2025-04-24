"use client"

import { Timeline } from '@/components/special/timeline'
import React from 'react'
import { projects } from './projects'
import { motion, type Variants } from 'motion/react'
import { cn } from '@/lib/utils'

export default function TimelineProjects({
  className
}: {
  className?: string
}) {
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const animated = sessionStorage.getItem('hasSeenProjectsTimelineAnimation');
    if (animated) {
      setHasAnimated(true);
    } else {
      setHasAnimated(false);
    }
  }, []);

  const variants: Variants = {
    show: {
      opacity: 1,
    },
    hidden: {
      opacity: 0, 
    }
  }

  return (
    <motion.div
      variants={variants}
      initial={hasAnimated ? "show" : "hidden"}
      transition={{
        duration: hasAnimated ? 0 : 0.3,
        delay: hasAnimated ? 0 : 0.8,
        type: "tween",
      }}
      whileInView={"show"}
      className={cn("relative w-full", className)}
      viewport={{ once: true }}
      onAnimationComplete={() => {
        if (!hasAnimated) {
          sessionStorage.setItem('hasSeenProjectsTimelineAnimation', 'true');
          setHasAnimated(true);
        }
      }}
    >
      <Timeline data={projects} className='' />
    </motion.div>
  )
}
