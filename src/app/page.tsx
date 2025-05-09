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
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Professional drone photography and videography packages designed to make your listings stand out in the Albuquerque market.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Basic Aerial Photo Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full border-t-4 border-blue-400">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Basic Aerial Photo</h3>
                <div className="text-2xl font-bold text-blue-900 mb-4">$100</div>
                <p className="text-gray-600 mb-6">
                  Essential aerial photography to showcase your property's exterior and surroundings.
                </p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    10-15 high-resolution aerial photos
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Exterior angles & property overview
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Basic photo editing included
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    24-hour delivery
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    ~30-45 min on-site shoot
                  </li>
                </ul>
              </div>
              <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors mt-4">
                Learn More
              </button>
            </div>

            {/* Standard Photo + Video Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full border-t-4 border-blue-600">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Standard Photo + Video</h3>
                <div className="text-2xl font-bold text-blue-900 mb-4">$150</div>
                <p className="text-gray-600 mb-6">
                  Comprehensive coverage with both aerial photos and engaging video content.
                </p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    15-20 aerial photos of property and surroundings
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    30-60 second highlight video
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Basic music overlay
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    48-hour delivery
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    ~1 hour on-site shoot
                  </li>
                </ul>
              </div>
              <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors mt-4">
                Learn More
              </button>
            </div>

            {/* Premium Video Tour Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full border-t-4 border-blue-700 relative">
              <div className="absolute top-0 right-0 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Premium Video Tour</h3>
                <div className="text-2xl font-bold text-blue-900 mb-4">$200</div>
                <p className="text-gray-600 mb-6">
                  Professional aerial video tour with dynamic footage for an immersive experience.
                </p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    20+ aerial photos of property and surroundings
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    1-2 minute branded aerial video tour
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Enhanced editing and color grading
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Advanced aerial angles and perspectives
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    ~1.5 hours on-site
                  </li>
                </ul>
              </div>
              <button className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mt-4">
                Learn More
              </button>
            </div>

            {/* Luxury Showcase Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full border-t-4 border-blue-900">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Luxury Showcase</h3>
                <div className="text-2xl font-bold text-blue-900 mb-4">$300</div>
                <p className="text-gray-600 mb-6">
                  Premium all-inclusive package for high-end properties that demand exceptional marketing.
                </p>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    25+ professional aerial photos
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    2-3 minute cinematic aerial video
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Aerial property reveal sequences
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Complimentary twilight shoot
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    ~2+ hours on-site
                  </li>
                </ul>
              </div>
              <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors mt-4">
                Learn More
              </button>
            </div>
          </div>

          {/* Add-ons Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Add-on Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* FPV Flythrough */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h4 className="text-xl font-semibold mb-2">Dynamic FPV Flythrough</h4>
                <p className="text-gray-600 mb-2">Immersive property flyover with dramatic aerial footage using our DJI Avata 2.</p>
                <p className="text-blue-900 font-bold">From $150</p>
              </div>
              
              {/* Twilight Shoot */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h4 className="text-xl font-semibold mb-2">Twilight Photography</h4>
                <p className="text-gray-600 mb-2">Stunning dusk shots that highlight your property in magical evening light.</p>
                <p className="text-blue-900 font-bold">From $50</p>
              </div>
              
              {/* Social Media Content */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h4 className="text-xl font-semibold mb-2">Social Media Teasers</h4>
                <p className="text-gray-600 mb-2">Short, engaging video clips optimized for Instagram and Facebook to promote your listing.</p>
                <p className="text-blue-900 font-bold">From $25</p>
              </div>
            </div>
          </div>

          {/* Special Offer */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">New Client Special</h3>
            <p className="text-lg mb-6">15% off your first booking with Cactus Cloud Media</p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
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