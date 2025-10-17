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
  title: "Zenith Digital Solution - Cloud & Digital Transformation",
  description:
    "IT solutions provider specializing in cloud infrastructure, cybersecurity, and digital transformation. Empowering businesses worldwide.",
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
