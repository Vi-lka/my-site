"use client"

import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import React from 'react'
import { isMobile } from 'react-device-detect';

export default function BgCanvas({
  className,
  style
}: {
  className?: string;
  style?: React.CSSProperties
}) {
  const { resolvedTheme } = useTheme()

  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
  
    const staticCanvas = document.createElement("canvas");
    const staticCtx = staticCanvas.getContext("2d");
    if (!staticCtx) return;
  
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        staticCanvas.width = canvas.width;
        staticCanvas.height = canvas.height;
        drawStaticBackground()
      }
    };
  
    const drawStaticBackground = () => {
      staticCtx.clearRect(0, 0, staticCanvas.width, staticCanvas.height);
  
      // Gradient
      const gradient = staticCtx.createLinearGradient(0, 0, 0, staticCanvas.height);
      gradient.addColorStop(0, resolvedTheme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(10, 10, 10, 0.2)");
      gradient.addColorStop(1, resolvedTheme === "dark" ? "rgba(10, 10, 10, 0.2)" : "rgba(255, 255, 255, 0.5)");
      staticCtx.fillStyle = gradient;
      staticCtx.fillRect(0, 0, staticCanvas.width, staticCanvas.height);
  
      // Lines
      staticCtx.fillStyle = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)";
      for (let y = 0; y < staticCanvas.height; y += 4) {
        staticCtx.fillRect(0, y, staticCanvas.width, 1);
      }
    };

    const glitchCanvases = Array.from({ length: 5 }, () => {
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = 150;
      tempCanvas.height = 25;
      const tempCtx = tempCanvas.getContext("2d");
      if (tempCtx) {
        tempCtx.fillStyle = resolvedTheme === "dark" ? `rgba(255, 255, 255, ${Math.random() * 0.5})` : `rgba(0, 0, 0, ${Math.random() * 0.5})`;
        tempCtx.fillRect(0, 0, 150, 25);  
      }
      return tempCanvas;
    });
  
    const drawCyberpunkBackground = () => {
      if (!ctx || !canvas) return;
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Отрисовываем статический фон
      ctx.drawImage(staticCanvas, 0, 0);
  
      // Dynamic elements (lines and glitch)
      ctx.strokeStyle = resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.15)";
      ctx.lineWidth = 1;
  
      const circuitPoints = 5;
      for (let i = 0; i < circuitPoints; i++) {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;
  
        ctx.beginPath();
        ctx.moveTo(startX, startY);
  
        let x = startX;
        let y = startY;
  
        for (let j = 0; j < 5; j++) {
          if (Math.random() > 0.5) {
            x += (Math.random() - 0.5) * 200;
          } else {
            y += (Math.random() - 0.5) * 200;
          }
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
  
      // Glitch
      if (Math.random() > 0.98) {
        const glitchCount = 5;
        for (let i = 0; i < glitchCount; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          ctx.drawImage(glitchCanvases[i % glitchCanvases.length], x, y);
        }
      }
    };
  
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
  
    let animationFrame: number;
    let lastFrameTime = 0;
    const frameInterval = isMobile ? 500 : 100;
  
    const animate = (currentTime = 0) => {
      if (currentTime - lastFrameTime >= frameInterval) {
        drawCyberpunkBackground();
        lastFrameTime = currentTime;
      }
      animationFrame = requestAnimationFrame(animate);
    };
  
    animate();
  
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [resolvedTheme]);

  return (
    <canvas ref={canvasRef} className={cn("absolute inset-0 w-full h-screen z-10", className)} style={style} />
  )
}
