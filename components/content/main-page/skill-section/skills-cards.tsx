"use client"

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React, { JSX } from 'react'
import { Icons } from './icons'
import { cn } from '@/lib/utils'
import { motion, Variants } from 'motion/react'
import { SKILLS } from '@/lib/consts'
import { Link } from 'next-view-transitions'
import ViewTransition from "@/components/ViewTransition"
import { useLocale } from 'next-intl'

type SkillsItemT = {
  id: string,
  title: string,
  icon: ({ className }: { className?: string; }) => JSX.Element,
}

const SKILLS_ITEMS: SkillsItemT[] = Object.values(SKILLS).map((skill) => ({
  id: skill.id,
  title: skill.title,
  icon: Icons[skill.id]
}))

export default function SkillsCards({
  delay,
  className
}: {
  delay?: number
  className?: string
}) {
  const locale = useLocale()
  const [hasAnimated, setHasAnimated] = React.useState(false);

  const delayAll = delay ? delay/1000 : 0

  const gridVariants: Variants = {
    show: {
      transition: { 
        staggerChildren: hasAnimated ? 0 : 0.1, 
        delayChildren: hasAnimated ? 0.4 : delayAll, 
      },
    },
    hidden: {
      transition: { staggerChildren: 0.1, staggerDirection: -1},
    },
  }

  const itemVariants: Variants = {
    show: {
      opacity: 1, 
      width: "auto",
      transition: {
        type: 'tween',
        opacity: { duration: 0.1 },
        staggerChildren: 0.05,
      },
    },
    hidden: {
      opacity: 0, 
      width: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1},
    }
  }

  const textVariants: Variants = {
    show: {
      opacity: 1,
      transition: { duration: 0.01 },
    },
    hidden: { 
      opacity: 0, 
      transition: { duration: 0.01 },
    },
  }

  React.useEffect(() => {
    const animated = sessionStorage.getItem('hasSeenSkillsAnimation');
    if (animated) {
      setHasAnimated(true);
    } else {
      setHasAnimated(false);
    }
  }, []);

  return (
    <motion.div
      variants={gridVariants}
      initial={hasAnimated ? 'show' : 'hidden'}
      whileInView={'show'}
      viewport={{ once: true }}
      onAnimationComplete={() => {
        if (!hasAnimated) {
          sessionStorage.setItem('hasSeenSkillsAnimation', 'true');
          setHasAnimated(true);
        }
      }}
      className={cn("grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4", className)}
    >
      {SKILLS_ITEMS.map((item, key) => {
        const characters = item.title.split("");
        return (
          <motion.div
            key={key}
            variants={itemVariants}
          >
            <Link href={`/${locale}/${item.id}`} passHref>
              <Card className="flex-row min-h-32 p-0 border-none">
                <CardHeader className={cn(
                  'group flex-1 pr-0 py-6 w-full rounded-md border transition-all z-20',
                  'dark:hover:bg-background/70 hover:bg-foreground/5 dark:border-border border-border/30 dark:hover:border-foreground/30 hover:border-border/70'
                )}>
                  <CardTitle>
                    <item.icon className='md:size-8 size-6' />
                  </CardTitle>
                  <ViewTransition name={`skill-${item.id}`}>
                    <CardDescription className={cn(`skill-${item.id}`, 'text-foreground inline-block leading-[5rem] tracking-[-0.02em] whitespace-nowrap')}>
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
                  </ViewTransition>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>
        )
      })}
    </motion.div>
  )
}