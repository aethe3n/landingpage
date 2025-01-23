import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Milestone, Rocket, Zap, Globe } from 'lucide-react'

const milestones = [
  {
    quarter: "Q1 2025",
    title: "Beta Launch",
    description: "Initial release of AetherMind with core AI features and Web3 integration capabilities.",
    icon: Milestone,
  },
  {
    quarter: "Q2 2025",
    title: "Enhanced Analytics",
    description: "Advanced data analysis tools and improved decision-making algorithms.",
    icon: Zap,
  },
  {
    quarter: "Q3 2025",
    title: "DAO Integration",
    description: "Specialized tools for decentralized autonomous organizations.",
    icon: Rocket,
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
    <section id="roadmap" className="py-24 relative overflow-hidden bg-black/30">
      <div className="container mx-auto px-4">
        <SectionHeading>Roadmap</SectionHeading>
        <div className="absolute inset-0 geometric-pattern opacity-5" />
        
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-2xl -m-4" />
              <p className="relative text-gray-400 text-lg">
                Our journey to revolutionize Web3 with artificial intelligence
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {milestones.map((milestone) => (
              <div key={milestone.quarter} className="feature-card group">
                <div className="mb-6">
                  <div className="inline-block rounded-lg brand-gradient p-[1px]">
                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3">
                      <milestone.icon className="h-6 w-6 text-[#98E4E1]" />
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-[#98E4E1] font-medium">
                    {milestone.quarter}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">
                  {milestone.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 