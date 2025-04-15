import { cn } from '@/lib/utils'
import React from 'react'

export default function GlitchText({
  children,
  childrenReplace,
  className,
  classNameGlitch,
  classNameGlitch2
}: {
  children: React.ReactNode,
  childrenReplace?: React.ReactNode
  className?: string
  classNameGlitch?: string
  classNameGlitch2?: string
}) {
  return (
    <span className={cn("relative inline-block", className)}>
      {childrenReplace ?? children}
      <span
        className={cn("absolute top-0 left-0 w-full h-full overflow-hidden animate-glitch", classNameGlitch)}
        style={{ clipPath: "inset(50% 0 50% 0)" }}
      >
        {children}
      </span>
      <span
        className={cn("absolute top-0 left-0.5 w-full h-full overflow-hidden animate-glitch-2", classNameGlitch2)}
        style={{ clipPath: "inset(30% 0 30% 0)" }}
      >
        {children}
      </span>
    </span>
  )
}
