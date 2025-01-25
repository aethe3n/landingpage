'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const words = ["NFT Analytics", "DeFi Optimization", "Smart Trading"]

export function TypingAnimation() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="brand-text-gradient [text-shadow:0_0_30px_rgba(152,228,225,0.3)] block">
      <motion.span
        key={words[currentWordIndex]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {words[currentWordIndex]}
      </motion.span>
    </span>
  )
} 