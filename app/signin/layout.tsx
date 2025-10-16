import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In - Access Your Account | Zenith Digital Solution",
  description: "Sign in to your Zenith Digital Solution account to access our platform and manage your digital transformation projects. New user? Create an account to get started.",
}

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
