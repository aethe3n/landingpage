import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Users, Zap, Network } from 'lucide-react'
import { SectionHeading } from "@/components/section-heading"

const features = [
  {
    name: "AI Agent Deployment",
    description: "Connect your Web3 wallet and deploy your own autonomous AI agents to execute custom operations and strategies.",
    icon: Brain,
    action: "Deploy your personal agent",
  },
  {
    name: "Squad Integration",
    description: "Configure your agent teams with advanced collaboration features ensuring optimal performance and seamless coordination.",
    icon: Users,
    action: "Set up squad preferences",
  },
  {
    name: "Lightning Fast",
    description: "Experience optimized performance as AetherMind analyzes blockchain data with real-time processing and instant responses.",
    icon: Zap,
    action: "Process data in real-time",
  },
  {
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
                <div key={feature.name} className="feature-card group">
                  <div className="flex justify-center mb-8">
                    <div className="rounded-2xl brand-gradient p-[1px] relative">
                      <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 relative group-hover:bg-black/40 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#98E4E1]/10 to-[#FF9E9E]/10 rounded-2xl" />
                        <feature.icon className="h-10 w-10 text-[#98E4E1] relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-[#98E4E1]/30 to-[#FF9E9E]/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white text-center">
                    {feature.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed text-center">
                    {feature.description}
                  </p>
                  
                  <div className="text-sm text-[#98E4E1] opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    {feature.action} →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 