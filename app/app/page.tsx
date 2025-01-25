"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FractalBackground } from "@/components/fractal-background"

export default function ComingSoon() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <FractalBackground />
      
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-24 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-3xl -m-4" />
              <div className="relative space-y-8 p-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  Coming Soon
                </h1>
                <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  We're working hard to bring you the future of decentralized AI. 
                  Stay tuned for the launch of AetherMind's revolutionary platform.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-gradient-to-r from-[#98E4E1] to-[#FF9E9E] text-black font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#98E4E1]/20"
                    asChild
                  >
                    <Link href="/">
                      ← Return to Home
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
} 