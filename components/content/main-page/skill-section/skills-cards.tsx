"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React, { JSX } from 'react'
import { Icons } from './icons'
import { cn } from '@/lib/utils'
import { motion, Variants } from 'motion/react'

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

  const delayAll = delay ? delay/1000 : 0

  const gridVariants: Variants = {
    show: {
      transition: { staggerChildren: 0.2, delayChildren: delayAll, },
    },
    hidden: {
      transition: { staggerChildren: 0.2, staggerDirection: -1},
    },
  }

  const itemVariants: Variants = {
    show: {
      opacity: 1, 
      width: "auto",
      transition: {
        type: "tween",
        opacity: { duration: 0.1 },
        staggerChildren: 0.05, 
      }
    },
    hidden: {
      opacity: 0, 
      width: 0,
      transition: { staggerChildren: 0.2, staggerDirection: -1},
    }
  }

  const textVariants: Variants = {
    show: {
      opacity: 1,
      transition: { duration: 0.01 },
    },
    hidden: { 
      opacity: 0, 
      transition: { duration: 0 },
    },
  }

  return (
    <motion.div
      variants={gridVariants}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
      className={cn("grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4", className)}
    >
      {SKILLS_ITEMS.map((item, key) => {
        // const delayItem = delayAll + key*200
        const characters = item.title.split("");
        return (
          <motion.div
            key={key}
            variants={itemVariants}
          >
          <Card className="flex-row min-h-32">
            <CardHeader className='flex-1 pr-0 z-20'>
              <CardTitle>
                <item.icon className='md:size-8 size-6' />
              </CardTitle>
              <CardDescription className='text-foreground inline-block leading-[5rem] tracking-[-0.02em] whitespace-nowrap'>
                {characters.map((char, charKey) => (
                  <motion.span
                    key={`${key}-${charKey}`}
                    variants={textVariants}
                    className='font-bold text-base sm:text-lg lg:text-xl'
                  >
                    {char}
                  </motion.span>
                ))} 
              </CardDescription>
            </CardHeader>
            <CardContent className='pl-0 z-20'>
              {item.content}
            </CardContent>
          </Card>
          </motion.div>
          // <AnimatedCard key={key} startOnView duration={20} className='flex-row min-h-32 h-full'>
          // </AnimatedCard>
        )
      })}
    </motion.div>
  )
}
