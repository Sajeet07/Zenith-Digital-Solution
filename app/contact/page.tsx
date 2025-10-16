"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@zenithdigital.com",
      link: "mailto:hello@zenithdigital.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Tech Street, San Francisco, CA 94105",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pb-16 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-6xl">
            Get in Touch
          </h1>
          <p className="text-balance text-lg leading-relaxed text-gray-600 md:text-xl">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:p-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-700">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-700">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-700">
                  Company
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Company"
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 transition-colors hover:text-blue-600"
                  >
                    <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-3">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="mb-1 font-semibold text-gray-900">{info.title}</div>
                      <div className="text-gray-600">{info.details}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
