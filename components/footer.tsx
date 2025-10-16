import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-semibold tracking-tight text-transparent"
            >
              Zenith Digital
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Empowering businesses through innovative IT solutions and digital transformation.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Solutions</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#" className="transition-colors hover:text-gray-900">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-900">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-900">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-900">
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#" className="transition-colors hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#" className="transition-colors hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-gray-900">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Zenith Digital Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
