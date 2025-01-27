'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TiltCard } from './tilt-card'
import { Milestone, Zap, LineChart, Globe } from 'lucide-react'

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

const milestones = [
  {
    quarter: "Q1 2025",
    title: "Beta Launch",
    description: "Initial release of AetherMind platform with core AI agent functionality.",
    icon: Milestone
  },
  {
    quarter: "Q2 2025",
    title: "Chain Expansion",
    description: "Launch on Base Chain and integrate Solana ecosystem for enhanced cross-chain capabilities.",
    icon: Zap
  },
  {
    quarter: "Q3 2025",
    title: "Enhanced Analytics",
    description: "Advanced data analysis tools and improved decision-making algorithms.",
    icon: LineChart
  },
  {
    quarter: "Q4 2025",
    title: "Global Expansion",
    description: "Scaling operations and expanding ecosystem partnerships worldwide.",
    icon: Globe
  }
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-5" />
      
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-3xl -m-4" />
          <div className="relative space-y-8">
            <SectionHeading>Roadmap</SectionHeading>

            <div className="text-center mb-16">
              <p className="text-gray-400 text-lg">
                Our journey to revolutionize Web3 with artificial intelligence
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {milestones.map((milestone) => (
                <TiltCard key={milestone.title}>
                  <div className="feature-card group p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20">
                        {React.createElement(milestone.icon, { className: "w-10 h-10 text-white" })}
                      </div>
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-pink-500/10 text-sm font-medium text-white/80">
                        {milestone.quarter}
                      </div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-200 to-pink-200 bg-clip-text text-transparent">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 