'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LineChart, ArrowLeft, BarChart, PieChart, TrendingUp, Activity, Target, History } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FractalBackground } from '@/components/fractal-background'
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

const metrics = [
  {
    title: "Real-Time Analytics",
    description: "Monitor your squad's performance with live data updates and instant insights.",
    icon: Activity
  },
  {
    title: "Historical Data",
    description: "Access comprehensive historical performance data and trend analysis.",
    icon: History
  },
  {
    title: "ROI Tracking",
    description: "Track return on investment and key performance indicators across all strategies.",
    icon: TrendingUp
  },
  {
    title: "Strategy Analysis",
    description: "Deep dive into individual strategy performance and optimization opportunities.",
    icon: Target
  },
  {
    title: "Market Impact",
    description: "Analyze your squad's market impact and trading efficiency metrics.",
    icon: BarChart
  },
  {
    title: "Portfolio Overview",
    description: "Get a comprehensive view of your portfolio allocation and performance.",
    icon: PieChart
  }
]

export default function MetricsPage() {
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
              <SectionHeading>Performance Metrics</SectionHeading>
              <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
                Gain deep insights into your AI agents' performance with comprehensive analytics
                and real-time monitoring tools.
              </p>
            </motion.div>

            {/* Metrics Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TiltCard>
                    <div className="h-full p-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20">
                          {React.createElement(metric.icon, { 
                            className: "w-10 h-10 text-white [filter:drop-shadow(0_0_10px_rgba(152,228,225,0.3))]" 
                          })}
                        </div>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-200 to-pink-200 bg-clip-text text-transparent">
                          {metric.title}
                        </h3>
                        <p className="text-gray-400">
                          {metric.description}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
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
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to dive deeper?</h3>
                  <p className="text-gray-400 mb-8">
                    Launch the app to access your full performance dashboard.
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
                      <Link href="/explore">
                        Explore the Network
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