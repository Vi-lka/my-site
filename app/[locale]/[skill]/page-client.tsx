"use client"

import { CodeBlock } from '@/components/CodeBlock';
import { type SKILLS, SKILLS_EXAMPLES } from '@/lib/consts';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import { motion, type Variants } from 'motion/react';
import React from 'react'
import Demo from './demo';

export default function PageClient({
  skill
}: {
  skill: typeof SKILLS[keyof typeof SKILLS];
}) {
  const isDesktop = useMediaQuery("(width >= 64rem)"); // 1024px

  const codeDelay = 0.7
  const demoDelay = codeDelay + 0.5

  const codeVariants: Variants = {
    show: {
      opacity: 1, 
      width: isDesktop ? "50%" : "100%",
      transition: {
        type: 'tween',
        duration: 0.5,
        delay: codeDelay,
        opacity: { 
          duration: 0.1, 
          delay: codeDelay 
        },
      },
    },
    hidden: {
      opacity: 0, 
      width: 0,
    }
  }
  const demoVariants: Variants = {
    show: {
      opacity: 1, 
      width: isDesktop ? "50%" : "100%",
      transition: {
        type: 'tween',
        duration: 0.5,
        delay: demoDelay,
        opacity: { 
          duration: 0.1, 
          delay: demoDelay
        },
      },
    },
    hidden: {
      opacity: 0, 
      width: 0,
    }
  }

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 mt-6">
      <motion.div
        variants={codeVariants}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true }}
      >
        <CodeBlock 
          language={skill.id}
          code={SKILLS_EXAMPLES[skill.id]} 
          className="w-full bg-transparent"
          classNameViewport="border h-[calc(100vh-236px)] md:h-[calc(100vh-286px)]"
          classNameCode="z-20"
        />
      </motion.div>
      <motion.div
        variants={demoVariants}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true }}
        className='w-full flex justify-center dark:bg-transparent bg-background/70 z-20'
      >
        <Demo skill={skill} delay={demoDelay} />
      </motion.div>
    </div>
  )
}
