import { LineShadowText } from '@/components/magicui/line-shadow-text';
import GlitchText from '@/components/special/glitch-text'
import React from 'react'

export default function Loading() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
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
      <section id="loading" className="relative w-full min-h-screen overflow-hidden bg-transparent flex items-center justify-center px-4">
        {/* Content container */}
        <div className="relative container mx-auto px-4 text-center z-20">
          {/* Animated V */}
          <div className="mb-8 relative">
            <div className="w-fit flex mx-auto items-end justify-center relative">
              <LineShadowText className="text-[10rem] md:text-[12rem] lg:text-[15rem]">
                V
              </LineShadowText>
            </div>

            {/* Digital readout effect */}
            <div className="absolute uppercase font-medium bottom-6 ml-1 left-1/2 transform -translate-x-1/2 text-violet lg:text-lg md::text-md text-sm tracking-widest">
              Loading<span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
