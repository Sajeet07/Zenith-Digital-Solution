"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

interface User {
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string) => Promise<void>
  signOut: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("zenith_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("zenith_users") || "[]")
    const foundUser = users.find((u: any) => u.email === email && u.password === password)

    if (foundUser) {
      const userData = { name: foundUser.name, email: foundUser.email }
      setUser(userData)
      localStorage.setItem("zenith_user", JSON.stringify(userData))
      router.push("/")
    } else {
      throw new Error("Invalid email or password")
    }
  }

  const signUp = async (name: string, email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("zenith_users") || "[]")

    // Check if user already exists
    if (users.some((u: any) => u.email === email)) {
      throw new Error("User already exists")
    }

    const newUser = { name, email, password }
    users.push(newUser)
    localStorage.setItem("zenith_users", JSON.stringify(users))

    const userData = { name, email }
    setUser(userData)
    localStorage.setItem("zenith_user", JSON.stringify(userData))
    router.push("/")
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("zenith_user")
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, signIn, signUp, signOut, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
