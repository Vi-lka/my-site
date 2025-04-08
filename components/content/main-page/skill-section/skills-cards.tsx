"use client"

import AnimatedCard from '@/components/special/animated-card'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React, { JSX } from 'react'
import { Icons } from './icons'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { cn } from '@/lib/utils'

type SkillsItemT = {
  title: string,
  icon: ({ className }: { className?: string; }) => JSX.Element,
  content: React.ReactNode
}

const SKILLS_ITEMS: SkillsItemT[] = [
  {
    title: "TypeScript",
    icon: Icons.typescript,
    content: <></>
  },
  {
    title: "React",
    icon: Icons.react,
    content: <></>
  },
  {
    title: "Next.js",
    icon: Icons.next,
    content: <></>
  },
  {
    title: "Tailwind CSS",
    icon: Icons.tailwind,
    content: <></>
  },
  {
    title: "Drizzle ORM",
    icon: Icons.drizzle,
    content: <></>
  },
  {
    title: "Prisma",
    icon: Icons.prisma,
    content: <></>
  },
  {
    title: "REST API",
    icon: Icons.restApi,
    content: <></>
  },
  {
    title: "GraphQL",
    icon: Icons.graphQL,
    content: <></>
  },
  {
    title: "tRPC",
    icon: Icons.trpc,
    content: <></>
  },
  {
    title: "WebSockets",
    icon: Icons.webSocket,
    content: <></>
  },
  {
    title: "Tanstack",
    icon: Icons.tanstack,
    content: <></>
  },
  {
    title: "React Router",
    icon: Icons.reactRouter,
    content: <></>
  },
  {
    title: "Zustand",
    icon: Icons.zustand,
    content: <></>
  },
  {
    title: "Redux Toolkit",
    icon: Icons.redux,
    content: <></>
  },
  {
    title: "Jotai",
    icon: Icons.jotai,
    content: <></>
  },
  {
    title: "nuqs",
    icon: Icons.nuqs,
    content: <></>
  },
  {
    title: "Three.js",
    icon: Icons.threeJs,
    content: <></>
  },
  {
    title: "Spring",
    icon: Icons.spring,
    content: <></>
  },
  {
    title: "Motion",
    icon: Icons.motion,
    content: <></>
  },
  {
    title: "Docker",
    icon: Icons.docker,
    content: <></>
  }
]

export default function SkillsCards({
  delay,
  className
}: {
  delay?: number
  className?: string
}) {

  const delayAll = delay ? delay : 0

  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4", className)}>
      {SKILLS_ITEMS.map((item, key) => {
        const delayItem = delayAll + key*200
        return (
          <AnimatedCard key={key} startOnView delay={delayItem} duration={20} className='flex-row min-h-32 h-full'>
            <CardHeader className='flex-1 pr-0 z-20'>
              <CardTitle>
                <item.icon className='md:size-8 size-6' />
              </CardTitle>
              <CardDescription className='text-foreground'>
                <TypingAnimation startOnView delay={100 + delayItem} duration={20} className="text-base sm:text-lg lg:text-xl">
                  {item.title}
                </TypingAnimation>
              </CardDescription>
            </CardHeader>
            <CardContent className='pl-0 z-20'>
              {item.content}
            </CardContent>
          </AnimatedCard>
        )
      })}
    </div>
  )
}
