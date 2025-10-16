"use client"

import { Cloud, Shield, Zap, Database, Lock, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable and reliable cloud solutions tailored to your business needs with multi-cloud support.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade security protocols to protect your data and infrastructure from threats.",
    gradient: "from-purple-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize your operations with cutting-edge technology and strategic consulting.",
    gradient: "from-indigo-500 to-teal-500",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Comprehensive data solutions including storage, analytics, and real-time processing.",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    icon: Lock,
    title: "Compliance & Governance",
    description: "Ensure regulatory compliance with industry standards and best practices.",
    gradient: "from-violet-500 to-pink-500",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Leverage artificial intelligence and automation to optimize your workflows.",
    gradient: "from-cyan-500 to-blue-500",
  },
]

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...new Set([...prev, index])])
            }
          })
        },
        { threshold: 0.2 },
      )

      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-purple-50" />

      <div className="container relative mx-auto px-6">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/25">
            <Zap className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Comprehensive IT{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-gray-600 md:text-xl">
            Everything you need to build, secure, and scale your digital infrastructure
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`transition-all duration-700 ${
                visibleCards.includes(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="group relative h-full overflow-hidden border-2 border-gray-200 bg-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-300 hover:shadow-2xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                />

                <CardContent className="relative p-8">
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} p-[2px] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-white">
                      <feature.icon
                        className={`h-7 w-7 bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`}
                      />
                    </div>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-pretty leading-relaxed text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
