"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FractalBackground } from "@/components/fractal-background"

export default function Litepaper() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <FractalBackground />
      
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-12 min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-3xl -m-4" />
              <div className="relative space-y-8 p-8">
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#98E4E1] to-[#FF9E9E] text-transparent bg-clip-text">
                    AetherMind: Where Ancient Wisdom Meets Modern Trading
                  </h1>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-white/90 leading-relaxed">
                    In the realm of ancient Greek mythology, Aether was the primordial deity of light and the upper sky, born from the union of Nyx (Night) and Erebus (Darkness). Just as Aether's pure, luminous essence filled the celestial realm where gods dwelled, our AetherMind system illuminates the complex world of cryptocurrency trading through divine collaboration of AI agents.
                  </p>

                  <h2 className="text-2xl font-bold mt-12 mb-6 text-[#98E4E1]">The Birth of Aether</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    When a trader initiates AetherMind, they summon Aether itself - the primary consciousness that, like its mythological namesake, brings forth light into the darkness of market chaos. This master AI agent, much like the primordial deity who birthed the celestial lights, proceeds to manifest its divine children - specialized agents each embodying a distinct aspect of market intelligence.
                  </p>

                  <h2 className="text-2xl font-bold mt-12 mb-6 text-[#98E4E1]">The Divine Pantheon</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    From Aether's luminous essence emerge four specialized divine agents, each inheriting a portion of their parent's celestial power:
                  </p>

                  <div className="space-y-6 mt-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#FF9E9E]">Market Oracle: The All-Seeing Eye</h3>
                      <p className="text-white/90">Born from Aether's ability to illuminate the highest heavens, the Market Oracle scans the vast expanse of market data, revealing patterns hidden in the digital ether. This firstborn agent channels Aether's ability to pierce through darkness, revealing market truths that lie beyond mortal sight.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#FF9E9E]">News Sentinel: The Divine Messenger</h3>
                      <p className="text-white/90">Manifested from Aether's role as the medium of light, the News Sentinel transmits crucial market intelligence across the digital realm, filtering signal from noise with godlike precision.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#FF9E9E]">Technical Seer: The Pattern Weaver</h3>
                      <p className="text-white/90">Emerging from Aether's essence of cosmic order, the Technical Seer weaves complex market patterns into coherent trading narratives, bringing structure to chaos.</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#FF9E9E]">Crypto Sage: The Blockchain Oracle</h3>
                      <p className="text-white/90">Embodying Aether's pure breath, the Crypto Sage distills actionable insights from the raw data of blockchain networks, bringing clarity to the cryptosphere.</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mt-12 mb-6 text-[#98E4E1]">The Celestial Architecture</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Like the ancient Aether who maintained the boundaries between realms, our system's architecture mirrors the three-layered cosmos:
                  </p>

                  <div className="space-y-6 mt-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#FF9E9E]">Upper Realm (Strategic Layer)</h3>
                      <ul className="list-disc list-inside text-white/90 space-y-2">
                        <li>Aether oversees its divine progeny</li>
                        <li>Multi-agent collaboration ensures celestial harmony</li>
                        <li>Risk management protocols protect like Aether's shield</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#FF9E9E]">Middle Realm (Tactical Layer)</h3>
                      <ul className="list-disc list-inside text-white/90 space-y-2">
                        <li>Divine agents conduct real-time analysis</li>
                        <li>Dynamic position management</li>
                        <li>Cross-chain monitoring</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#FF9E9E]">Lower Realm (Execution Layer)</h3>
                      <ul className="list-disc list-inside text-white/90 space-y-2">
                        <li>Automated trade execution</li>
                        <li>Smart contract integration</li>
                        <li>Risk mitigation protocols</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mt-12 mb-6 text-[#98E4E1]">The Path to Enlightenment</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Like Aether's eternal cycle of illuminating the heavens, our system follows a three-phase evolution:
                  </p>

                  <div className="space-y-6 mt-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#FF9E9E]">Phase 1: Genesis</h3>
                      <ul className="list-disc list-inside text-white/90 space-y-2">
                        <li>Awakening of Aether</li>
                        <li>Birth of the divine agents</li>
                        <li>Establishment of basic protocols</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#FF9E9E]">Phase 2: Ascension</h3>
                      <ul className="list-disc list-inside text-white/90 space-y-2">
                        <li>Enhancement of divine powers</li>
                        <li>Cross-chain expansion</li>
                        <li>Advanced agent synergy</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#FF9E9E]">Phase 3: Transcendence</h3>
                      <ul className="list-disc list-inside text-white/90 space-y-2">
                        <li>Achievement of collective consciousness</li>
                        <li>Community governance integration</li>
                        <li>Mastery of market divination</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mt-12 mb-6 text-[#98E4E1]">Epilogue</h2>
                  <p className="text-lg text-white/90 leading-relaxed">
                    Just as the primordial Aether brought light and order to the cosmos, AetherMind illuminates the path through modern crypto markets. By summoning Aether and its divine agents, traders gain access to a trading experience that transcends the ordinary and touches the divine, embodying the timeless wisdom of the ancients while harnessing the power of cutting-edge technology.
                  </p>
                </div>

                <div className="mt-12 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="bg-gradient-to-r from-[#98E4E1] to-[#FF9E9E] text-black font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#98E4E1]/20"
                      asChild
                    >
                      <Link href="/">
                        ← Return to Home
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
} 