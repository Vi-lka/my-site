"use client"

import { CodeBlock } from '@/components/CodeBlock';
import { type SKILLS, SKILLS_EXAMPLES } from '@/lib/consts';
import { motion } from 'motion/react';
import React from 'react'

export default function PageClient({
  skill
}: {
  skill: typeof SKILLS[keyof typeof SKILLS];
}) {
  return (
    <div className="w-full flex gap-6 mt-6">
      <motion.div>
        <CodeBlock 
          language={skill.id}
          code={SKILLS_EXAMPLES[skill.id]} 
          className="lg:w-1/2 w-full bg-transparent"
          classNameViewport="border"
          classNameCode="z-20 bg-transparent [&_pre]:!bg-transparent [&_pre]:!px-0"
        />
      </motion.div>
    </div>
  )
}
