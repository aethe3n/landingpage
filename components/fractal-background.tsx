'use client'

import { useEffect, useRef } from 'react'

export function FractalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.lineWidth = 1.5 // Make lines slightly thicker
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Fractal parameters
    let time = 0
    const circles: Array<{
      x: number
      y: number
      radius: number
      rotation: number
      speed: number
      scale: number
    }> = []

    // Initialize circles with varying sizes
    for (let i = 0; i < 12; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 60 + 30,
        rotation: Math.random() * Math.PI * 2,
        speed: (Math.random() - 0.5) * 0.001, // Slower rotation
        scale: Math.random() * 0.5 + 0.5
      })
    }

    // Draw fractal rose pattern
    function drawRose(x: number, y: number, radius: number, rotation: number, scale: number) {
      if (!ctx) return
      
      ctx.beginPath()
      const petals = 6
      const points = 360

      for (let i = 0; i <= points; i++) {
        const angle = (i * Math.PI * 2) / points
        const r = radius * scale * Math.sin(petals * (angle + rotation))
        const px = x + r * Math.cos(angle)
        const py = y + r * Math.sin(angle)
        
        if (i === 0) {
          ctx.moveTo(px, py)
        } else {
          ctx.lineTo(px, py)
        }
      }
      
      // Cyan color with lower opacity
      ctx.strokeStyle = `rgba(152, 228, 225, 0.3)`
      ctx.stroke()
      
      // Draw second layer with offset
      ctx.beginPath()
      for (let i = 0; i <= points; i++) {
        const angle = (i * Math.PI * 2) / points
        const r = (radius * scale * 0.8) * Math.sin(petals * (angle + rotation + Math.PI / petals))
        const px = x + r * Math.cos(angle)
        const py = y + r * Math.sin(angle)
        
        if (i === 0) {
          ctx.moveTo(px, py)
        } else {
          ctx.lineTo(px, py)
        }
      }
      
      // Pink color with lower opacity
      ctx.strokeStyle = `rgba(255, 158, 158, 0.2)`
      ctx.stroke()
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return
      
      // More subtle fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.015)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      circles.forEach(circle => {
        circle.rotation += circle.speed
        drawRose(circle.x, circle.y, circle.radius, circle.rotation, circle.scale)
        
        // Smoother movement
        circle.x += Math.cos(time * 0.0005 + circle.rotation) * 0.3
        circle.y += Math.sin(time * 0.0005 + circle.rotation) * 0.3

        // Wrap around screen with buffer
        const buffer = circle.radius * 2
        if (circle.x < -buffer) circle.x = canvas.width + buffer
        if (circle.x > canvas.width + buffer) circle.x = -buffer
        if (circle.y < -buffer) circle.y = canvas.height + buffer
        if (circle.y > canvas.height + buffer) circle.y = -buffer
      })

      time++
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-gradient-to-br from-[#98e4e1]/5 via-[#7fccde]/5 to-[#ff9e9e]/5 backdrop-blur-[100px]"
    />
  )
} 