import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Cloud, Code, Database, Lock, Smartphone, Zap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Solutions - Cloud, Development, Analytics & More | Zenith Digital",
  description: "Explore our comprehensive digital solutions: Cloud Infrastructure, Custom Development, Data Analytics, Cybersecurity, Mobile Apps, and DevOps Automation. Transform your business today.",
}

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud solutions that grow with your business. Deploy, manage, and scale applications effortlessly.",
      features: ["Auto-scaling", "99.9% uptime", "Global CDN", "Disaster recovery"],
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built to your exact specifications using cutting-edge technologies.",
      features: ["Agile methodology", "Modern tech stack", "API integration", "Quality assurance"],
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our advanced analytics and visualization tools.",
      features: ["Real-time dashboards", "Predictive analytics", "Data warehousing", "BI reporting"],
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets from evolving threats.",
      features: ["Threat detection", "Compliance management", "Security audits", "Incident response"],
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-platform", "Push notifications", "Offline support"],
    },
    {
      icon: Zap,
      title: "DevOps & Automation",
      description: "Streamline your development pipeline with automated workflows and continuous integration.",
      features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring", "Automated testing"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pb-16 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-6xl">
            Our Solutions
          </h1>
          <p className="text-balance text-lg leading-relaxed text-gray-600 md:text-xl">
            Comprehensive technology solutions designed to transform your business and drive innovation
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-3">
                <solution.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{solution.title}</h3>
              <p className="mb-6 leading-relaxed text-gray-600">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center shadow-2xl">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to get started?</h2>
          <p className="mb-8 text-balance text-lg text-white/90">
            Let's discuss how our solutions can help transform your business
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
