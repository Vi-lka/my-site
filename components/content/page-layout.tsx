import { cn } from '@/lib/utils'
import React from 'react'
import BgCanvas from './bg-canvas'
import GlitchText from '../special/glitch-text'

export default function PageLayout({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div className={cn("relative flex flex-col items-center justify-center", className)}>
      <BgCanvas className="fixed top-0 z-10" style={{ viewTransitionName: "no-transition-bg" }} />
      {/* HUD-like elements */}
      <div className="fixed top-5 left-5 text-violet text-xs md:flex flex-col hidden z-5">
        <GlitchText className="text-violet" classNameGlitch="text-background/60" classNameGlitch2="text-violet">
          SYS.STATUS: ONLINE
        </GlitchText>
        <GlitchText className="text-violet" classNameGlitch="text-background/60" classNameGlitch2="text-violet">
          SECURITY: ACTIVE
        </GlitchText>
      </div>
  
      <div className="fixed bottom-5 right-5 text-violet text-xs text-right md:flex flex-col hidden z-5">
        <GlitchText className="text-violet" classNameGlitch="text-background/60" classNameGlitch2="text-violet">
          USER: VITALY PERMYAKOV
        </GlitchText>
        <GlitchText className="text-violet" classNameGlitch="text-background/60" classNameGlitch2="text-violet">
          STATUS: SEARCH JOB
        </GlitchText>
      </div>
        {children}
    </div>
  )
}
