"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Play } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-100" />

      {/* Floating gradient orbs */}
      <div className="absolute left-[10%] top-[20%] h-72 w-72 animate-float rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 opacity-30 blur-3xl" />
      <div className="absolute right-[15%] top-[30%] h-96 w-96 animate-float rounded-full bg-gradient-to-br from-purple-400 to-pink-300 opacity-30 blur-3xl animation-delay-2000" />
      <div className="absolute bottom-[20%] left-[20%] h-80 w-80 animate-float rounded-full bg-gradient-to-br from-indigo-400 to-blue-300 opacity-30 blur-3xl animation-delay-4000" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
        <div
          className={`mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 backdrop-blur-xl transition-all duration-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span>Transforming Businesses Through Technology</span>
        </div>

        <h1
          className={`mb-6 max-w-5xl text-balance text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 transition-all duration-700 delay-100 md:text-6xl lg:text-7xl xl:text-8xl ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Cloud Solutions for the{" "}
          <span className="relative inline-block">
            <span className="animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:200%_auto]">
              Digital Age
            </span>
          </span>
        </h1>

        <p
          className={`mb-12 max-w-2xl text-pretty text-lg leading-relaxed text-gray-600 transition-all duration-700 delay-200 md:text-xl lg:text-2xl ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Empowering enterprises with cutting-edge cloud infrastructure, robust cybersecurity, and seamless digital
          transformation solutions.
        </p>

        <div
          className={`flex flex-col items-center gap-4 transition-all duration-700 delay-300 sm:flex-row ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <Button
            size="lg"
            className="group relative h-12 overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-base font-semibold text-white shadow-xl shadow-blue-500/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
          >
            <span className="relative z-10 flex items-center">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group h-12 border-2 border-gray-300 bg-white/80 px-8 text-base font-semibold text-gray-900 backdrop-blur-xl transition-all hover:scale-105 hover:border-blue-400 hover:bg-white"
          >
            <Play className="mr-2 h-4 w-4" />
            Watch Demo
          </Button>
        </div>

        <div
          className={`mt-32 grid w-full max-w-5xl gap-8 transition-all duration-700 delay-500 sm:grid-cols-2 lg:grid-cols-4 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          {[
            { value: "500+", label: "Clients Worldwide", gradient: "from-blue-500 to-cyan-500" },
            { value: "99.9%", label: "Uptime SLA", gradient: "from-purple-500 to-pink-500" },
            { value: "24/7", label: "Support Available", gradient: "from-indigo-500 to-blue-500" },
            { value: "15+", label: "Years Experience", gradient: "from-violet-500 to-purple-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center gap-3 rounded-2xl border-2 border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:border-blue-300 hover:shadow-xl"
            >
              <div
                className={`bg-gradient-to-br ${stat.gradient} bg-clip-text text-5xl font-bold text-transparent lg:text-6xl`}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
