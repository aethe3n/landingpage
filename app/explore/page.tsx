'use client'

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Network, Globe, Activity, Users, Cpu, Lock } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { FractalBackground } from "@/components/fractal-background"
import { TiltCard } from "@/components/tilt-card"

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

const networkFeatures = [
  {
    title: "Global Reach",
    description: "Access a worldwide network of AI agents and nodes operating across multiple chains and protocols.",
    icon: Globe,
  },
  {
    title: "Network Activity",
    description: "Monitor real-time transactions, agent operations, and network performance with advanced analytics.",
    icon: Activity,
  },
  {
    title: "Node Distribution",
    description: "View the geographical and protocol distribution of nodes with real-time status monitoring.",
    icon: Network,
  },
  {
    title: "Community Stats",
    description: "Track active users, deployed agents, and total value secured across the decentralized network.",
    icon: Users,
  },
  {
    title: "Processing Power",
    description: "Visualize the distributed computational resources and AI processing capacity of the network.",
    icon: Cpu,
  },
  {
    title: "Security Metrics",
    description: "Monitor network security parameters and decentralization metrics in real-time.",
    icon: Lock,
  },
]

export default function ExplorePage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <ParticleBackground />
      <FractalBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        {/* Back to Home Link */}
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
            >
              <span className="relative">← Back to Home</span>
              <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-[#98E4E1] to-[#FF9E9E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-3xl -m-4" />
            <div className="relative space-y-8 p-8">
              <SectionHeading>Explore the Network</SectionHeading>
              
              <div className="text-center mb-12">
                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                  Dive into the decentralized infrastructure powering AetherMind. Monitor network activity,
                  explore node distribution, and analyze real-time performance metrics across the ecosystem.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {networkFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TiltCard>
                      <div className="h-full p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20">
                            {React.createElement(feature.icon, { 
                              className: "w-10 h-10 text-white [filter:drop-shadow(0_0_10px_rgba(152,228,225,0.3))]" 
                            })}
                          </div>
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-200 to-pink-200 bg-clip-text text-transparent">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-bold text-white">Ready to dive deeper?</h3>
                  <p className="text-gray-400 mb-8">
                    Launch the app to access your full network dashboard.
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
                      <Link href="/">
                        Back Home
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 