import { ArrowRight } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Seamlessly integrate your Web3 wallet and start exploring.",
  },
  {
    number: "02",
    title: "Configure",
    description: "Set up your AI preferences and customize your experience.",
  },
  {
    number: "03",
    title: "Analyze",
    description: "Let AetherMind process and analyze blockchain data.",
  },
  {
    number: "04",
    title: "Execute",
    description: "Make informed decisions based on AI-driven insights.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-5" />
      
      <div className="container px-4 md:px-6">
        <SectionHeading>How It Works</SectionHeading>

        <div className="text-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-2xl -m-4" />
            <p className="relative text-gray-400 text-lg">
              Get started with AetherMind in four simple steps
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <ArrowRight className="absolute -right-4 top-8 hidden h-8 w-8 text-[#98E4E1] lg:block" />
              )}
              <div className="feature-card">
                <div className="mb-6">
                  <div className="inline-block rounded-lg brand-gradient p-[1px]">
                    <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3">
                      <span className="text-lg font-bold text-[#98E4E1]">{step.number}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 