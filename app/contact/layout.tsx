import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Zenith Digital Solution",
  description: "Have a project in mind? Contact Zenith Digital Solution today. Reach us via email at hello@zenithdigital.com or call +1 (555) 123-4567. We'd love to hear from you.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
