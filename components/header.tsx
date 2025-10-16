"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, User, LogOut } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, signOut } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-semibold tracking-tight text-transparent"
        >
          Zenith Digital
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
            Home
          </Link>
          <Link href="/solutions" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
            Solutions
          </Link>
          <Link href="/about" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <>
              <div className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2">
                <User className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-900">{user.name}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={signOut} className="text-gray-700 hover:text-gray-900">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/signin">
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-gray-900">
                  Sign In
                </Button>
              </Link>
              <Link href="/signin">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-lg md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            <Link
              href="/"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 border-t border-gray-200 pt-4">
              {user ? (
                <>
                  <div className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2">
                    <User className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">{user.name}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      signOut()
                      setMobileMenuOpen(false)
                    }}
                    className="w-full text-gray-700"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/signin">
                    <Button variant="ghost" size="sm" className="w-full text-gray-700">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signin">
                    <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
