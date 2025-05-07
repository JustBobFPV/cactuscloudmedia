'use client'
import React from 'react'
import Image from 'next/image'
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
              Cactus Cloud Media is a new business dedicated to providing high-quality aerial photography and videography for real estate, commercial, and land projects. We use the latest drone technology to help your properties stand out.
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