'use client'
import React from 'react'
import Image from 'next/image'
import MobileNav from '../components/MobileNav'
import ContactForm from '../components/ContactForm'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cactus Cloud Media
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Elevating Real Estate Marketing with Aerial Excellence
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors">
            View Our Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Cactus Cloud Media, we specialize in capturing stunning aerial perspectives of properties
              that help real estate professionals showcase their listings in the best possible light. With
              years of experience and state-of-the-art equipment, we deliver high-quality aerial photography
              and videography services that make your properties stand out.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <p className="text-gray-600">5+ years of aerial photography expertise</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Certified</h3>
                <p className="text-gray-600">FAA Part 107 Certified Drone Pilot</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Quality</h3>
                <p className="text-gray-600">4K video and high-resolution photography</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Basic Package</h3>
              <p className="text-gray-600 mb-6">
                6 high-quality aerial photos of your property, perfect for basic listings.
              </p>
              <ul className="space-y-2 mb-6">
                <li>• 6 aerial photos</li>
                <li>• 24-hour delivery</li>
                <li>• Basic editing</li>
              </ul>
              <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Learn More
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Premium Package</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive aerial coverage with both photos and video for maximum impact.
              </p>
              <ul className="space-y-2 mb-6">
                <li>• 12 aerial photos</li>
                <li>• 2-minute aerial video</li>
                <li>• Advanced editing</li>
                <li>• 48-hour delivery</li>
              </ul>
              <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Learn More
              </button>
            </div>

            {/* Custom Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Custom Package</h3>
              <p className="text-gray-600 mb-6">
                Tailored aerial solutions for your specific needs and requirements.
              </p>
              <ul className="space-y-2 mb-6">
                <li>• Custom photo count</li>
                <li>• Extended video length</li>
                <li>• Premium editing</li>
                <li>• Priority delivery</li>
              </ul>
              <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  )
} 