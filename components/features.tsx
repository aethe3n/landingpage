import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Shield, Zap, Network } from 'lucide-react'
import { SectionHeading } from "@/components/section-heading"

const features = [
  {
    number: "01",
    name: "AI-Powered Decisions",
    description: "Connect your Web3 wallet and let our advanced machine learning algorithms provide intelligent insights for your operations.",
    icon: Brain,
    action: "Connect and activate AI analysis",
  },
  {
    number: "02",
    name: "Secure Integration",
    description: "Configure your preferences with enterprise-grade security ensuring your data and transactions remain protected.",
    icon: Shield,
    action: "Set up secure preferences",
  },
  {
    number: "03",
    name: "Lightning Fast",
    description: "Experience optimized performance as AetherMind analyzes blockchain data with real-time processing and instant responses.",
    icon: Zap,
    action: "Process data in real-time",
  },
  {
    number: "04",
    name: "Decentralized Network",
    description: "Execute decisions leveraging the power of blockchain technology for transparent and trustless operations.",
    icon: Network,
    action: "Make informed decisions",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-5" />
      
      <div className="container mx-auto px-4">
        <SectionHeading>Powerful Features & Workflow</SectionHeading>

        <div className="text-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-2xl -m-4" />
            <p className="relative text-gray-400 text-lg">
              Discover how AetherMind revolutionizes Web3 with cutting-edge AI technology in four simple steps
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div key={feature.name} className="feature-card group">
              <div className="mb-6 relative">
                <div className="inline-block rounded-2xl brand-gradient p-[1px] relative">
                  <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 relative group-hover:bg-black/40 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#98E4E1]/10 to-[#FF9E9E]/10 rounded-2xl" />
                    <feature.icon className="h-8 w-8 text-[#98E4E1] relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-[#98E4E1]/30 to-[#FF9E9E]/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4 text-sm font-bold bg-gradient-to-r from-[#98E4E1] to-[#FF9E9E] bg-clip-text text-transparent">
                  {feature.number}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.name}
              </h3>
              
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              <div className="text-sm text-[#98E4E1] opacity-0 group-hover:opacity-100 transition-opacity">
                {feature.action} →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 