"use client"

import { cn } from '@/lib/utils'
import { useTransitionRouter } from 'next-view-transitions'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeftToLine } from 'lucide-react'

export default function GoBackButton({
  backUrl,
  className
}: {
  backUrl?: string
  className?: string
}) {
  const router = useTransitionRouter()
  return (
    <Button 
      variant="ghost" 
      className={cn(
        "w-fit h-fit aspect-square p-1 has-[>svg]:px-1 hover:bg-accent/50 hover:text-accent-foreground",
        className
      )}
      onMouseEnter={() => {
        if (backUrl) router.prefetch(backUrl)
      }}
      onClick={() => {
        if (backUrl) router.push(backUrl)
        else router.back()
      }}
    >
      <ArrowLeftToLine className="md:size-8 size-6" />
    </Button>
  )
}
