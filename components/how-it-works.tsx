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
        <div className="relative">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-3xl -m-4" />
          <div className="relative space-y-8">
            <SectionHeading>How It Works</SectionHeading>

            <div className="text-center mb-16">
              <p className="text-gray-400 text-lg">
                Get started with AetherMind in four simple steps
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {steps.map((step) => (
                <div key={step.number} className="feature-card">
                  <div className="flex justify-center mb-8">
                    <div className="rounded-2xl brand-gradient p-[1px] relative">
                      <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 relative group-hover:bg-black/40 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#98E4E1]/10 to-[#FF9E9E]/10 rounded-2xl" />
                        <span className="text-2xl font-bold text-[#98E4E1] relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                          {step.number}
                        </span>
                      </div>
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-[#98E4E1]/30 to-[#FF9E9E]/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed text-center">
                    {step.description}
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