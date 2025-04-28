"use client";

import useIsSticky from "@/lib/hooks/useIsSticky";
import { cn } from "@/lib/utils";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  className?: string
}

export const Timeline = ({ 
  data,
  className,
  children
}: { 
  data: TimelineEntry[],
  className?: string,
  children?: React.ReactNode
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Функция для обновления высоты
  const updateHeight = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.height > 0) {
        setHeight(rect.height);
      }
    }
  }, []);

  // Используем ResizeObserver для отслеживания изменений размеров
  useEffect(() => {
    updateHeight(); // Начальное измерение

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    const element = ref.current

    if (element) {
      resizeObserver.observe(element);
    }

    return () => {
      if (element) {
        resizeObserver.unobserve(element);
      }
    };
  }, [updateHeight]);

  // Используем IntersectionObserver для измерения, когда элемент виден
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          updateHeight();
        }
      },
      { threshold: 0.1 }
    );

    const element = ref.current

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [updateHeight]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={cn("w-full", className)}
      ref={containerRef}
    >
      {children}
      <div ref={ref} className="relative mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem key={index} data={item} />
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[19px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-blue-500 via-violet to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

function TimelineItem({ data }: { data: TimelineEntry }) {
  const circleRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const isStickyCircle = useIsSticky(circleRef);
  const isStickyTitle = useIsSticky(titleRef);
  return (
    <div
      className={cn("flex justify-start pt-20 md:pt-40 first-of-type:pt-6 first-of-type:md:pt-10 gap-3 lg:gap-10", data.className)}
    >
      <div 
        ref={circleRef}
        className="sticky flex flex-col md:flex-row items-center top-20 self-start lg:max-w-2xs md:max-w-52 md:w-full z-1"
      >
        <div className={cn(
          "h-10 absolute left-0 w-10 rounded-full bg-background flex items-center justify-center",
        )}>
          <div className={cn(
            "h-4 w-4 rounded-full bg-muted border p-2 transition-all", 
            isStickyCircle ? "border-violet scale-125" : "border-border scale-100"
          )}/>
        </div>
        <h3 className="hidden md:block text-xl md:pl-12 md:text-3xl lg:text-5xl font-medium text-foreground font-mono">
          {data.title}
        </h3>
      </div>

      <div className="pt-1 pl-14 pr-4 md:pl-4 w-full z-20">
        <h3 
          ref={titleRef}
          className="sticky top-20 md:hidden block text-2xl mb-4 text-left font-medium text-foreground/80 font-mono"
        >
          <span className={cn(
            "block w-fit",
            isStickyTitle ? "rotate-90 -translate-x-12 translate-y-1" : "",
            "transition-all"
          )}>
            {data.title}
          </span>
        </h3>
        {data.content}
      </div>
    </div>
  )
}