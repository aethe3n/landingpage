'use client'

import { motion } from "framer-motion"
import { FractalBackground } from "@/components/fractal-background"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <FractalBackground />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-xl rounded-3xl -m-8" />
            <div className="relative p-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-8">
                <span className="brand-text-gradient [text-shadow:0_0_30px_rgba(152,228,225,0.3)]">
                  Coming Soon!
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                We are working hard to bring you something amazing.
              </p>
              <Link href="/">
                <Button className="glass text-lg px-8 py-4 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#98E4E1]/20 to-[#FF9E9E]/20 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
                  <div className="relative z-10 flex items-center gap-2">
                    Return Home <span className="opacity-80">&rarr;</span>
                  </div>
                  <div className="absolute -inset-1 group-hover:opacity-100 opacity-0 transition-opacity duration-300 blur-lg bg-gradient-to-r from-[#98E4E1]/30 to-[#FF9E9E]/30" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 