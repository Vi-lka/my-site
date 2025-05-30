"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

type ExtendT = {
  classNameViewport?: string;
  classNameBar?: string;
  refViewport?: React.LegacyRef<HTMLDivElement>;
  onScrollViewport?: React.UIEventHandler<HTMLDivElement>
};

type ScrollAreaT = React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & ExtendT;

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaT
>(({ 
  className, 
  classNameViewport, 
  classNameBar, 
  refViewport, 
  children,
  onScrollViewport, 
  ...props 
}, ref) => (
    <ScrollAreaPrimitive.Root
      ref={ref}
      data-slot="scroll-area"
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        ref={refViewport}
        onScroll={onScrollViewport}
        data-slot="scroll-area-viewport"
        className={cn("focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1", classNameViewport)}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar className={classNameBar} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
)
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full dark:opacity-50 opacity-10"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
