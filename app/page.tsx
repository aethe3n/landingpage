'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Roadmap } from "@/components/roadmap"
import { Footer } from "@/components/footer"
import { FractalBackground } from "@/components/fractal-background"
import { TypingAnimation } from "@/components/typing-animation"
import { motion } from "framer-motion"

// Section Heading Component
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl font-bold mb-6 text-center relative"
    >
      <span className="brand-text-gradient [text-shadow:0_0_30px_rgba(152,228,225,0.3)]">
        {children}
      </span>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 brand-gradient rounded-full opacity-80" />
    </motion.h2>
  )
}

export default function Page() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <FractalBackground />
      
      <div className="relative z-10">
        {/* Navigation */}
        <motion.header 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 w-full z-50 glass backdrop-blur-xl bg-black/20"
        >
          <div className="container mx-auto flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-full brand-gradient p-0.5 transition-transform duration-300 group-hover:scale-110">
                <div className="h-full w-full rounded-full bg-black/30 backdrop-blur-sm" />
              </div>
              <span className="text-xl font-bold text-white">AetherMind</span>
            </Link>
            <nav className="hidden md:flex gap-8">
              {["Features", "How It Works", "Roadmap"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="relative text-white/80 hover:text-white transition-colors group"
                >
                  {item}
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-[#98E4E1] to-[#FF9E9E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </nav>
          </div>
        </motion.header>

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 relative"
              >
                <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-3xl -m-8 p-8" />
                <div className="relative">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                    <span className="text-white">Your Web3 AI Companion for</span>
                    <br />
                    <TypingAnimation />
                  </h1>
                  <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                    Experience the future of decentralized AI with AetherMind. Seamlessly integrate
                    intelligent decision-making into your Web3 ecosystem.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="bg-gradient-to-r from-[#98E4E1] to-[#FF9E9E] text-black font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#98E4E1]/20"
                      asChild
                    >
                      <Link href="/app">
                        Launch App →
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <Features />

          {/* How It Works Section */}
          <HowItWorks />

          {/* Roadmap Section */}
          <Roadmap />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}