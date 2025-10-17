import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { Suspense } from "react"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://zenithdigitalsolution.com.np"),
  title: {
    default: "Zenith Digital Solution - Cloud & Digital Transformation",
    template: "%s | Zenith Digital Solution",
  },
  description:
    "IT solutions provider specializing in cloud infrastructure, cybersecurity, and digital transformation. Empowering businesses worldwide.",
  keywords: [
    "cloud solutions",
    "digital transformation",
    "IT services",
    "cloud infrastructure",
    "cybersecurity",
    "custom development",
    "data analytics",
    "mobile applications",
    "DevOps automation",
    "Nepal IT company",
  ],
  authors: [{ name: "Zenith Digital Solution" }],
  creator: "Zenith Digital Solution",
  publisher: "Zenith Digital Solution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Zenith Digital Solution - Cloud & Digital Transformation",
    description:
      "IT solutions provider specializing in cloud infrastructure, cybersecurity, and digital transformation. Empowering businesses worldwide.",
    url: "https://zenithdigitalsolution.com.np/",
    siteName: "Zenith Digital Solution",
    images: [
      {
        url: "https://www.facebook.com/photo?fbid=122101583217065428&set=a.122101583247065428",
        width: 1200,
        height: 630,
        alt: "Zenith Digital Solution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Digital Solution - Cloud & Digital Transformation",
    description:
      "IT solutions provider specializing in cloud infrastructure, cybersecurity, and digital transformation. Empowering businesses worldwide.",
    images: ["https://www.facebook.com/photo?fbid=122101583217065428&set=a.122101583247065428"],
    creator: "@zenithdigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zenithdigitalsolution.com.np/",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>

      <body className="font-sans antialiased">
        <AuthProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </AuthProvider>
        <Analytics />
        
        {/* JSON-LD Schema Markup */}
        <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "Zenith Digital Solution",
              "alternateName": "Zenith",
              "url": "https://zenithdigitalsolution.com.np/",
              "logo": "https://www.facebook.com/photo?fbid=122101583217065428&set=a.122101583247065428",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61581962867329",
                "https://www.linkedin.com/company/zenith-digital-solution/"
              ]
            }
          `}
        </Script>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RF20MDQ75T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RF20MDQ75T');
          `}
        </Script>
      </body>
    </html>
  )
}
