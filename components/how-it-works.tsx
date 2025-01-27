'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TiltCard } from './tilt-card'

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

const steps = [
  {
    number: "01",
    title: "Connect Wallet",
    description: "Link your Web3 wallet to access the AetherMind platform and its features."
  },
  {
    number: "02",
    title: "Configure AI Agents",
    description: "Set up your autonomous AI agents with custom parameters and strategies."
  },
  {
    number: "03",
    title: "Deploy Squads",
    description: "Group your agents into specialized squads for different market objectives."
  },
  {
    number: "04",
    title: "Monitor & Optimize",
    description: "Track performance metrics and fine-tune your strategies in real-time."
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-5" />
      
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-3xl -m-4" />
          <div className="relative space-y-8">
            <SectionHeading>Get started with AetherMind in four simple steps</SectionHeading>

            <div className="text-center mb-16">
              <p className="text-gray-400 text-lg">
                Begin your journey into decentralized AI trading with our streamlined onboarding process
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {steps.map((step) => (
                <TiltCard key={step.number}>
                  <div className="feature-card group p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-200 to-pink-200 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-200 to-pink-200 bg-clip-text text-transparent">
                        {step.title}
                      </h3>
                      <p className="text-gray-400">
                        {step.description}
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