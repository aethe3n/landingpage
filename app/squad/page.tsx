'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, ArrowLeft, Shield, Zap, LineChart, Network } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FractalBackground } from '@/components/fractal-background'

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

const features = [
  {
    title: "Team Coordination",
    description: "Create specialized agent teams that work together seamlessly to achieve your trading objectives.",
    icon: Users
  },
  {
    title: "Risk Management",
    description: "Set up advanced risk parameters and safety protocols for your agent squads.",
    icon: Shield
  },
  {
    title: "Performance Analytics",
    description: "Track and analyze your squad's performance with detailed metrics and insights.",
    icon: LineChart
  },
  {
    title: "Cross-Chain Operations",
    description: "Deploy squads across multiple chains for diversified trading strategies.",
    icon: Network
  }
]

export default function SquadPage() {
  return (
    <div className="relative min-h-screen">
      <FractalBackground />
      
      <div className="relative z-10">
        <header className="fixed top-0 w-full z-50 glass backdrop-blur-xl bg-black/20">
          <div className="container mx-auto flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
                <span className="text-white">Back to Home</span>
              </motion.div>
            </Link>
          </div>
        </header>

        <main className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <SectionHeading>Squad Integration</SectionHeading>
              <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
                Enhance your trading capabilities by configuring agent teams with advanced collaboration
                features for optimal performance and seamless coordination.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid gap-8 md:grid-cols-2 mb-16"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="relative p-6 rounded-2xl overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl" />
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20">
                      {React.createElement(feature.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="relative p-8 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 backdrop-blur-sm" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to build your squad?</h3>
                  <p className="text-gray-400 mb-8">
                    Launch the app to start configuring your AI agent squads.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-[#98E4E1] to-[#FF9E9E] text-black font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#98E4E1]/20"
                    >
                      <Link href="/app">
                        Launch App →
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/10 hover:border-white/20 text-white font-semibold px-8 py-6 text-lg rounded-xl hover:scale-105 transition-all duration-300"
                    >
                      <Link href="/metrics">
                        View Performance Metrics
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
} 