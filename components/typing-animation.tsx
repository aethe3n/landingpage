'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const phrases = [
  "Intelligent Decisions",
  "NFT Analytics",
  "DeFi Optimization",
  "Smart Contract Analysis",
  "Market Predictions",
  "Portfolio Management"
]

export function TypingAnimation() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(100)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(phrases[currentPhraseIndex].substring(0, text.length - 1))
        setDelta(50) // Faster when deleting
      }, delta)

      if (text === '') {
        setIsDeleting(false)
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        setDelta(500) // Pause before typing next word
      }
    } else {
      timeout = setTimeout(() => {
        setText(phrases[currentPhraseIndex].substring(0, text.length + 1))
        setDelta(100) // Normal typing speed
      }, delta)

      if (text === phrases[currentPhraseIndex]) {
        setDelta(2000) // Pause at end of word
        timeout = setTimeout(() => {
          setIsDeleting(true)
          setDelta(50)
        }, 2000)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, currentPhraseIndex, delta])

  return (
    <motion.span
      key={text}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="brand-text-gradient [text-shadow:0_0_25px_rgba(152,228,225,0.2)]"
    >
      {text}
      <span className="animate-pulse">|</span>
    </motion.span>
  )
} 