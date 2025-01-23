'use client'

import { motion } from "framer-motion"

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl font-bold mb-6 text-center relative"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-3xl -mx-8 -my-4" />
      <div className="relative">
        <span className="brand-text-gradient [text-shadow:0_0_30px_rgba(152,228,225,0.3)]">
          {children}
        </span>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 brand-gradient rounded-full opacity-80" />
      </div>
    </motion.h2>
  )
} 