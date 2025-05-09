'use client'
import React from 'react'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
          <div className="absolute inset-0 bg-[url('/images/drone-pattern.png')] opacity-10 animate-pulse"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cactus Cloud Media
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Elevating Real Estate Marketing with
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-white mb-8">
              Professional Aerial Excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View Our Work
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Get a Quote
              </button>
            </div>
            <p className="text-blue-100 mt-8 text-sm md:text-base">
              Serving the Greater Albuquerque Metropolitan Area
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Cactus Cloud Media LLC is a new business dedicated to providing high-quality aerial photography and videography for real estate, commercial, and land projects. We use the latest drone technology to help your properties stand out.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to deliver professional, creative, and reliable aerial media services tailored to your needs.
            </p>
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
                8 high-quality aerial photos of your property, perfect for basic listings.
              </p>
              <ul className="space-y-2 mb-6">
                <li>• 8 aerial photos</li>
                <li>• 24-hour delivery</li>
                <li>• Basic editing</li>
                <li>• Property overview shots</li>
              </ul>
              <div className="text-xl font-bold text-blue-900 mb-4">$149</div>
              <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Learn More
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Premium Package</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive aerial coverage with both photos and a professionally edited video for maximum impact.
              </p>
              <ul className="space-y-2 mb-6">
                <li>• 15 high-quality aerial photos</li>
                <li>• 60-second professionally edited aerial video</li>
                <li>• Basic editing</li>
                <li>• 48-hour delivery</li>
                <li>• Property highlights</li>
              </ul>
              <div className="text-xl font-bold text-blue-900 mb-4">$249</div>
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
              <div className="text-xl font-bold text-blue-900 mb-4">Contact for Quote</div>
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
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">Get in Touch</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Ready to elevate your property marketing? Fill out the form below and we'll get back to you soon!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
} 