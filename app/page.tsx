'use client'

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Roadmap } from "@/components/roadmap"
import { Footer } from "@/components/footer"
import { FractalBackground } from "@/components/fractal-background"
import { TypingAnimation } from "@/components/typing-animation"
import { motion } from "framer-motion"
import Image from "next/image"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollProgress } from "@/components/scroll-progress"
import { TiltCard } from "@/components/tilt-card"
import { Brain, Users, Zap, Network } from "lucide-react"

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

const navigation = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Litepaper", href: "/litepaper" },
]

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
  action: string;
}

const features: Feature[] = [
  {
    name: "AI Agent Deployment",
    description: "Connect your Web3 wallet and deploy your own autonomous AI agents to execute custom operations and strategies.",
    icon: Brain,
    action: "Deploy your personal agent"
  },
  {
    name: "Squad Integration",
    description: "Configure your agent teams with advanced collaboration features ensuring optimal performance and seamless coordination.",
    icon: Users,
    action: "Set up squad preferences"
  },
  {
    name: "Lightning Fast",
    description: "Experience real-time market analysis and instant trade execution powered by cutting-edge AI technology.",
    icon: Zap,
    action: "View performance metrics"
  },
  {
    name: "Decentralized Network",
    description: "Leverage the power of decentralized infrastructure for enhanced security and reliability.",
    icon: Network,
    action: "Explore the network"
  }
];

export default function Page() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <ParticleBackground />
      <FractalBackground />
      <ScrollProgress />
      
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-white/80 hover:text-white transition-colors group"
                >
                  {item.name}
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
                  <div className="flex flex-col gap-4 items-center">
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
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="border-white/10 hover:border-white/20 text-white font-semibold px-8 py-6 text-lg rounded-xl hover:scale-105 transition-all duration-300"
                        asChild
                      >
                        <Link href="/litepaper">
                          Read Litepaper
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section with Tilt Cards */}
          <section id="features" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 geometric-pattern opacity-5" />
            
            <div className="container mx-auto px-4">
              <div className="relative">
                <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-3xl -m-4" />
                <div className="relative space-y-8">
                  <SectionHeading>Powerful Features & Workflow</SectionHeading>

                  <div className="text-center mb-16">
                    <p className="text-gray-400 text-lg">
                      Discover how AetherMind revolutionizes Web3 with cutting-edge AI technology
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                    {features.map((feature) => (
                      <TiltCard key={feature.name}>
                        <div className="feature-card group p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
                          <div className="flex flex-col items-center text-center space-y-4">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20">
                              {React.createElement(feature.icon, { className: "w-10 h-10 text-white" })}
                            </div>
                            <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-200 to-pink-200 bg-clip-text text-transparent">
                              {feature.name}
                            </h3>
                            <p className="text-gray-400">
                              {feature.description}
                            </p>
                            <Link 
                              href={feature.name === "AI Agent Deployment" ? "/deploy" : 
                                    feature.name === "Squad Integration" ? "/squad" :
                                    feature.name === "Decentralized Network" ? "/explore" :
                                    feature.name === "Lightning Fast" ? "/metrics" : "#"}
                              className="mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-pink-500/10 hover:from-cyan-500/20 hover:to-pink-500/20 border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                              {feature.action}
                            </Link>
                          </div>
                        </div>
                      </TiltCard>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

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