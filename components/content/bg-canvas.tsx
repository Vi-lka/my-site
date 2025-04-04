"use client"

import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import React from 'react'

export default function BgCanvas({
  className
}: {
  className?: string
}) {
  const { resolvedTheme } = useTheme()

  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Cyberpunk background
    const drawCyberpunkBackground = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, resolvedTheme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(10, 10, 10, 0.2)")
      gradient.addColorStop(1, resolvedTheme === "dark" ? "rgba(10, 10, 10, 0.5)" : "rgba(255, 255, 255, 0.5)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Digital scan lines
      ctx.fillStyle = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.15)"
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillRect(0, y, canvas.width, 1)
      }

      // Random circuit lines
      ctx.strokeStyle = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.15)"
      ctx.lineWidth = 1

      const circuitPoints = 5
      for (let i = 0; i < circuitPoints; i++) {
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height

        ctx.beginPath()
        ctx.moveTo(startX, startY)

        let x = startX
        let y = startY

        // Create angular circuit-like paths
        for (let j = 0; j < 5; j++) {
          // Decide whether to move horizontally or vertically
          if (Math.random() > 0.5) {
            x += (Math.random() - 0.5) * 200
          } else {
            y += (Math.random() - 0.5) * 200
          }

          ctx.lineTo(x, y)
        }

        ctx.stroke()
      }

      // Add glitch effect occasionally
      if (Math.random() > 0.95) {
        const glitchCount = 3
        for (let i = 0; i < glitchCount; i++) {
          const x = Math.random() * canvas.width
          const y = Math.random() * canvas.height
          const width = Math.random() * 100 + 50
          const height = Math.random() * 20 + 5

          ctx.fillStyle = resolvedTheme === "dark" ? `rgba(255, 255, 255, ${Math.random() * 0.15})` : `rgba(0, 0, 0, ${Math.random() * 0.15})`
          ctx.fillRect(x, y, width, height)
        }
      }
    }

    // Animation loop
    let animationFrame: number
    const animate = () => {
      drawCyberpunkBackground()
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [resolvedTheme])

  return (
    <canvas ref={canvasRef} className={cn("absolute inset-0 w-full h-full z-10", className)} />
  )
}
