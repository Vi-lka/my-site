"use client"

import TypeScriptDemo from '@/components/content/skills/typescript-demo';
import { type SKILLS } from '@/lib/consts';
import React from 'react'

export default function Demo({
  skill,
  delay
}: {
  skill: typeof SKILLS[keyof typeof SKILLS];
  delay: number;
}) {
  switch (skill.id) {
    case "typescript":
      return <TypeScriptDemo delay={delay} className='h-[calc(100vh-236px)] md:h-[calc(100vh-286px)]' />;
  
    default:
      return null;
  }
}
