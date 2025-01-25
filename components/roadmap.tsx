import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Milestone, Rocket, Zap, Globe, LineChart } from 'lucide-react'

const milestones = [
  {
    quarter: "Q1 2025",
    title: "Beta Launch",
    description: "Initial release of AetherMind with core AI features and Web3 integration capabilities.",
    icon: Milestone,
  },
  {
    quarter: "Q2 2025",
    title: "Chain Expansion",
    description: "Launch on Base Chain and integrate Solana ecosystem for enhanced cross-chain capabilities.",
    icon: Zap,
  },
  {
    quarter: "Q3 2025",
    title: "Enhanced Analytics",
    description: "Advanced data analysis tools and improved decision-making algorithms.",
    icon: LineChart,
  },
  {
    quarter: "Q4 2025",
    title: "Global Expansion",
    description: "Multi-chain support and international market penetration.",
    icon: Globe,
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-5" />
      
      <div className="container px-4 md:px-6">
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
                <div key={milestone.quarter} className="feature-card group">
                  <div className="flex justify-center mb-8">
                    <div className="rounded-2xl brand-gradient p-[1px] relative">
                      <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 relative group-hover:bg-black/40 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#98E4E1]/10 to-[#FF9E9E]/10 rounded-2xl" />
                        <milestone.icon className="h-10 w-10 text-[#98E4E1] relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-[#98E4E1]/30 to-[#FF9E9E]/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <div className="text-sm text-[#98E4E1] font-medium text-center mb-3">
                    {milestone.quarter}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white text-center">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed text-center">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 