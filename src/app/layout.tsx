import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '../components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cactus Cloud Media',
  description: 'Professional aerial photography and videography services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-300">Email: info@cactuscloudmedia.com</p>
                <p className="text-gray-300">Phone: (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Aerial Photography</li>
                  <li>Video Production</li>
                  <li>Property Tours</li>
                  <li>Event Coverage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} Cactus Cloud Media. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 