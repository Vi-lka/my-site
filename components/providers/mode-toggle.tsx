"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button, buttonVariants } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

export function ModeToggle({
  variant = "outline",
  className
}: {
  variant?: VariantProps<typeof buttonVariants>["variant"]
  className?: string
}) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      className={cn("relative rounded-full w-8 h-8", className)}
      variant={variant}
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
      <Moon className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
      {/* <span className="sr-only">Toggle theme</span> */}
    </Button>
  );
}
