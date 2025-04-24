"use client"

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { isMobile } from "react-device-detect";
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';

export default function GlitchDialog({
  trigger,
  title,
  children,
  className,
  disabled
}: {
  trigger: React.ReactNode,
  title: string,
  children: React.ReactNode,
  className?: string
  disabled?: boolean
}) {
  const isDesktop = useMediaQuery("(width >= 64rem)"); // 1024px

  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleOpen = (openV: boolean): void => {
    if (!disabled) {
      if (isDesktop && !isMobile) {
        setAnimate(true);
      }
      setOpen(openV);  
    }
  };

  // Reset animation state after it completes
  useEffect(() => {
    if (animate && isDesktop && !isMobile && !disabled) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 300); // Match animation duration (300ms)
      return () => clearTimeout(timer);
    }
  }, [animate, isDesktop, disabled]);

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogTrigger className={cn(
        "cursor-pointer w-fit h-fit",
        (open && animate) && "animate-terminal-glitch-dialog",
        (!open && animate) && "animate-terminal-glitch-dialog !direction-reverse"
      )}>
        {trigger}
      </DialogTrigger>
      <DialogContent className={cn(
        className,
        (isDesktop && !isMobile && !disabled) && "data-[state=open]:animate-none data-[state=closed]:animate-none data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100",
        (open && animate) && "animate-terminal-glitch-dialog",
        (!open && animate) && "animate-terminal-glitch-dialog !direction-reverse"
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
