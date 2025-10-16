import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, Globe, Users, Target } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Zenith Digital Solution | Our Story & Values",
  description: "Learn about Zenith Digital Solution, a team of passionate technologists helping businesses thrive in the digital age. 500+ projects delivered, 200+ happy clients across 15+ countries since 2015.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering innovative solutions that drive real business value.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships based on trust and results.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support and localized expertise.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code to customer service.",
    },
  ]

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Countries Served" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pb-16 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-6xl">
            About Zenith Digital
          </h1>
          <p className="text-balance text-lg leading-relaxed text-gray-600 md:text-xl">
            We're a team of passionate technologists dedicated to helping businesses thrive in the digital age
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white p-12 shadow-xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Story</h2>
          <div className="space-y-4 leading-relaxed text-gray-600">
            <p>
              Founded in 2015, Zenith Digital Solution emerged from a simple belief: technology should empower
              businesses, not complicate them. What started as a small team of developers has grown into a full-service
              digital solutions provider serving clients across the globe.
            </p>
            <p>
              Today, we combine cutting-edge technology with deep industry expertise to deliver solutions that drive
              real business outcomes. Our team of 50+ professionals brings together diverse skills in cloud computing,
              software development, data analytics, and cybersecurity.
            </p>
            <p>
              We've helped over 200 companies transform their operations, from startups finding their footing to
              enterprises scaling globally. Every project is an opportunity to push boundaries and create something
              exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg">
              <div className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Values</h2>
          <p className="text-balance text-lg text-gray-600">The principles that guide everything we do</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-3">
                <value.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
              <p className="leading-relaxed text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
