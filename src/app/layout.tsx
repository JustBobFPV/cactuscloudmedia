import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MobileNav from '@/components/MobileNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cactus Cloud Media - Aerial Photography & Videography',
  description: 'Professional aerial photography and videography services for real estate and commercial properties.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-blue-900">Cactus Cloud Media</div>
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="text-gray-600 hover:text-blue-900">Services</a>
                <a href="#portfolio" className="text-gray-600 hover:text-blue-900">Portfolio</a>
                <a href="#about" className="text-gray-600 hover:text-blue-900">About</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-900">Contact</a>
              </div>
              <MobileNav />
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Cactus Cloud Media</h3>
                <p className="text-gray-400">Elevating your property marketing with aerial excellence.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-400">Email: info@cactuscloudmedia.com</p>
                <p className="text-gray-400">Phone: (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 