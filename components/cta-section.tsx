"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 shadow-2xl md:p-16">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-gradient bg-[length:200%_200%]" />

          {/* Subtle pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-white/90">
              Join hundreds of companies that trust Zenith Digital Solution for their IT infrastructure and digital
              transformation needs.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="group h-12 bg-white px-8 text-base font-semibold text-gray-900 shadow-xl hover:scale-105 hover:bg-gray-50"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-2 border-white bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
