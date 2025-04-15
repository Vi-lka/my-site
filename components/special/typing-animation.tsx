import { cn } from "@/lib/utils";
import { motion, type MotionProps, type Variants } from "motion/react";

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  startOnView?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  startOnView = false,
  ...props
}: TypingAnimationProps) {
  const characters = children.split("");

  const durationV = duration/100
  const delayV = delay/1000
  const staggerChildren = durationV / characters.length

  const textVariants: Variants = {
    visible: {
      transition: { staggerChildren, delayChildren: delayV, },
    },
    hidden: {
      transition: { staggerChildren, staggerDirection: -1},
    },
  }

  const letterVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0,
        type: "spring",
      },
    },
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8,
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <motion.p
      variants={textVariants}
      initial={"hidden"}
      whileInView={startOnView ? "visible" : undefined}
      viewport={{ once: true }}
      className={cn(
        "text-4xl font-bold leading-[5rem] tracking-[-0.02em] inline-block whitespace-pre-wrap relative",
        className,
      )}
      {...props}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={letterVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};