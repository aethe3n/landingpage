"use client"

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
}

export function TiltCard({ children }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * -10
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseEnter = () => {
    setScale(1.02)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      }}
      className="transition-transform duration-200 ease-out"
    >
      <div className="relative">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#98E4E1]/20 to-[#FF9E9E]/20 rounded-2xl transform -translate-y-1 translate-z-12 blur-xl opacity-50 transition-opacity group-hover:opacity-75"
          style={{
            transform: `translateZ(-10px)`,
          }}
        />
        {children}
      </div>
    </motion.div>
  )
} 