"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"

export default function SignInPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { signIn, signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      if (isSignUp) {
        await signUp(name, email, password)
      } else {
        await signIn(email, password)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated background orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-96 w-96 animate-float rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl" />
        <div className="animation-delay-2000 absolute -right-20 top-40 h-96 w-96 animate-float rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl" />
        <div className="animation-delay-4000 absolute bottom-20 left-1/3 h-96 w-96 animate-float rounded-full bg-gradient-to-r from-pink-400/20 to-blue-400/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto flex min-h-screen items-center justify-center px-6 py-24">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
            <div className="mb-8 text-center">
              <Link
                href="/"
                className="mb-4 inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent"
              >
                Zenith Digital
              </Link>
              <h1 className="mb-2 text-2xl font-bold text-gray-900">
                {isSignUp ? "Create your account" : "Welcome back"}
              </h1>
              <p className="text-sm text-gray-600">
                {isSignUp ? "Start your journey with us today" : "Sign in to continue to your account"}
              </p>
            </div>

            {error && <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">{error}</div>}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600">
                    <input type="checkbox" className="rounded border-gray-300" />
                    Remember me
                  </label>
                  <Link href="#" className="text-blue-600 hover:text-blue-700">
                    Forgot password?
                  </Link>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              >
                {isLoading ? "Loading..." : isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp)
                  setError("")
                }}
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
