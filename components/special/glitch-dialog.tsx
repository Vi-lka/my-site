"use client"

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';

export default function GlitchDialog({
  trigger,
  title,
  children,
  className
}: {
  trigger: React.ReactNode,
  title: string,
  children: React.ReactNode,
  className?: string
}) {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleOpen = (openV: boolean): void => {
    setAnimate(true);
    setOpen(openV);
  };

  // Reset animation state after it completes
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 300); // Match animation duration (300ms)
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogTrigger className={cn(
        "cursor-pointer w-fit h-fit",
        (open && animate) && "animate-terminal-glitch-dialog !direction-reverse",
        (!open && animate) && "animate-terminal-glitch-dialog"
      )}>
        {trigger}
      </DialogTrigger>
      <DialogContent className={cn(
        className, 
        (open && animate) && "animate-terminal-glitch-dialog !direction-reverse",
        (!open && animate) && "animate-terminal-glitch-dialog"
      )}>
        <DialogHeader className='sr-only'>
          <DialogTitle className='text-center text-xs sm:text-sm sr-only'>{title}</DialogTitle>
        </DialogHeader>
        <div className="px-4 md:px-0">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  )
}
