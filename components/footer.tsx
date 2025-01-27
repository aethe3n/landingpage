import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Twitter, MessageCircle, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black/70 backdrop-blur-md">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#98e4e1] to-[#ff9e9e] p-0.5">
                <div className="h-full w-full rounded-full bg-black/30 backdrop-blur-sm" />
              </div>
              <span className="text-xl font-bold text-white">AetherMind</span>
            </Link>
            <p className="text-sm text-gray-400">
              Your Web3 AI Companion for Intelligent Decisions
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#features" className="hover:text-[#98e4e1]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-[#98e4e1]">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="hover:text-[#98e4e1]">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/litepaper" className="hover:text-[#98e4e1]">
                  Litepaper
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://x.com/AetherMINDspace" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#98e4e1]"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link 
                href="https://t.me/AetherMINDofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#98e4e1]"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">Telegram</span>
              </Link>
              <Link 
                href="https://github.com/aethe3n" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#98e4e1]"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <form className="space-y-2">
              <Input
                className="bg-white/5 text-white placeholder-gray-400 border-white/10"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="w-full bg-gradient-to-r from-[#98e4e1] to-[#ff9e9e] text-black hover:opacity-90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 AetherMind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 