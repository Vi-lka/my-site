"use client"

import React from 'react'
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'
import { motion, MotionProps, Variants } from 'motion/react';
interface TextAnimateProps extends MotionProps {
  /**
   * The text content to animate
   */
  children: React.ReactNode;
  /**
   * The class name to be applied to the component
   */
  className?: string;
  classNameContainer?: string;
  /**
   * The delay before the animation starts
   */
  delay?: number;
  /**
   * The duration of the animation
   */
  duration?: number;
  /**
   * Whether to start animation when component enters viewport
   */
  startOnView?: boolean;
  /**
   * Whether to animate only once
   */
  once?: boolean;
}

export default function AnimatedCard({
  children,
  className,
  classNameContainer,
  startOnView = true,
  once = true,
  duration = 40,
  delay,
  ...props
}: TextAnimateProps) {

  const variants: Variants = {
    show: {
      opacity: 1, 
      width: "auto"
    },
    hidden: {
      opacity: 0, 
      width: 0
    }
  }

  const delayV = delay ? delay/1000 : undefined
  const durationV = duration/100

  return (
    <motion.div
      variants={variants}
      initial={"hidden"}
      transition={{
        duration: durationV,
        delay: delayV,
        type: "tween",
        opacity: { duration: 0.1, delay: delayV }
      }}
      whileInView={startOnView ? "show" : undefined}
      className={cn("", classNameContainer)}
      viewport={{ once }}
      {...props}
    >
      <Card className={className}>
        {children}
      </Card>
    </motion.div>
  )
}