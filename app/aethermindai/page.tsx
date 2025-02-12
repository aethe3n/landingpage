'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FractalBackground } from "@/components/fractal-background"
import { ParticleBackground } from "@/components/particle-background"
import { Brain, MessageSquare, LineChart } from 'lucide-react'
import Link from 'next/link'
import { marked } from 'marked'

const features = [
  {
    title: "Market Intelligence",
    description: "Advanced AI-powered analysis of real-time market data across Web3 assets, with comprehensive market overviews.",
    icon: Brain
  },
  {
    title: "Smart Insights",
    description: "Natural language interaction with AI for detailed market analysis, backed by real-time data and expert sources.",
    icon: MessageSquare
  },
  {
    title: "Strategic Forecasting",
    description: "Machine learning-powered predictions and trend analysis using historical data patterns for informed decisions.",
    icon: LineChart
  }
]

const exampleQuestions = [
  "What's the current Bitcoin market sentiment and key price drivers?",
  "How are institutional investors positioning in the crypto market?",
  "What's the impact of recent regulatory developments on crypto markets?",
  "Analyze the correlation between DeFi tokens and ETH price movements",
  "What are the key technical indicators for BTC/USD right now?",
  "How are Layer 1 blockchains performing compared to Ethereum?"
]

export default function AetherMindAI() {
  const [userInput, setUserInput] = useState('')
  const [messages, setMessages] = useState<Array<{role: string, content: string}>>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showExamples, setShowExamples] = useState(true)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (input: string) => {
    if (!input.trim()) return

    setIsLoading(true)
    setShowExamples(false)
    const newMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, newMessage])
    setUserInput('')

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, messages: messages })
      })

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, there was an error processing your request.' }])
    }

    setIsLoading(false)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit(userInput)
  }

  const handleExampleClick = (question: string) => {
    setUserInput(question)
    handleSubmit(question)
  }

  return (
    <div className="relative min-h-screen bg-black">
      <ParticleBackground />
      <FractalBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Back to Home Link */}
        <div className="container mx-auto px-4 py-4">
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
            </Link>
          </motion.div>
        </div>

        <div className="flex-1 container mx-auto px-4 pb-4 flex flex-col">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              AetherMind AI Assistant
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Your intelligent companion for market analysis and insights
            </p>
          </motion.div>

          {/* Features Grid - Now more compact */}
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative p-4 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#98E4E1]/30 to-[#FF9E9E]/30 backdrop-blur-sm rounded-xl" />
                <div className="relative flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#98E4E1]/20 to-[#FF9E9E]/20">
                    {React.createElement(feature.icon, { className: "w-5 h-5 text-white" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chat Interface - Now takes up more space */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex flex-col min-h-[600px]">
              {showExamples && messages.length === 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Example Questions:</h3>
                  <div className="grid gap-2 md:grid-cols-2">
                    {exampleQuestions.map((question, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-xl bg-gradient-to-r from-[#98E4E1]/30 to-[#FF9E9E]/30 hover:from-[#98E4E1]/40 hover:to-[#FF9E9E]/40 cursor-pointer transition-colors border border-white/5"
                        onClick={() => handleExampleClick(question)}
                      >
                        <p className="text-white">{question}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex-1 overflow-y-auto mb-6 space-y-4 pr-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-[#98E4E1]/30 to-[#FF9E9E]/30 ml-12 border border-white/10'
                        : 'bg-white/20 mr-12 border border-white/5'
                    }`}
                  >
                    <div 
                      className="text-white prose prose-invert max-w-none 
                        prose-headings:text-[#98E4E1]
                        prose-strong:text-white/90 
                        prose-a:text-[#98E4E1] 
                        prose-a:no-underline 
                        prose-a:transition-all 
                        prose-a:duration-300 
                        hover:prose-a:text-[#98E4E1]/80
                        prose-a:relative
                        hover:prose-a:translate-x-1
                        prose-code:text-[#FF9E9E]"
                      dangerouslySetInnerHTML={{ 
                        __html: marked.parse(message.content, { breaks: true })
                          .toString()
                          .replace(
                            /Divine Sources:/g,
                            `<div class="mt-6 pt-4 border-t border-[#98E4E1]/20">
                              <h2 class="text-[#98E4E1] text-xl font-semibold mb-4 flex items-center gap-2">
                                <span class="text-2xl">✧</span> Divine Sources
                              </h2>
                            </div>`
                          )
                          .replace(
                            /(\d+\. \[.*?\]\(.*?\))/g,
                            (match) => {
                              const numberMatch = match.match(/(\d+)\./);
                              const linkMatch = match.match(/\[(.*?)\]\((.*?)\)/);
                              if (numberMatch && linkMatch) {
                                const [_, number] = numberMatch;
                                const [__, title, url] = linkMatch;
                                return `
                                  <div class="mb-3 flex items-start gap-2 group">
                                    <span class="text-[#98E4E1] opacity-80 group-hover:opacity-100 transition-opacity">✧</span>
                                    <div class="flex-1">
                                      <a href="${url}" 
                                         class="text-[#98E4E1] hover:text-[#98E4E1]/80 transition-all duration-300 block"
                                         target="_blank"
                                         rel="noopener noreferrer">
                                        ${title}
                                      </a>
                                      <div class="text-gray-500 text-sm mt-1 opacity-60 group-hover:opacity-100 transition-opacity">${url}</div>
                                    </div>
                                  </div>
                                `;
                              }
                              return match;
                            }
                          )
                          .replace(/✧/g, '<span class="text-[#98E4E1]">✧</span>')
                          .replace(/🌟/g, '<span class="text-[#FF9E9E]">🌟</span>')
                          .replace(/⚡/g, '<span class="text-[#FFD700]">⚡</span>')
                      }}
                    />
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-center">
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 animate-spin-slow">
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="url(#loader-gradient)"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="url(#loader-gradient)"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                          <defs>
                            <linearGradient id="loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#98E4E1" />
                              <stop offset="100%" stopColor="#FF9E9E" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="absolute inset-0 animate-pulse opacity-75">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-[#98E4E1]/20 to-[#FF9E9E]/20" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <form onSubmit={handleFormSubmit} className="flex gap-4">
                <Input
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Ask about market conditions..."
                  className="flex-1 bg-white/20 border-white/20 text-white placeholder:text-white/50"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-[#98E4E1] to-[#FF9E9E] text-black font-semibold px-8 hover:opacity-90 disabled:opacity-50"
                >
                  {isLoading ? 'Thinking...' : 'Send'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 