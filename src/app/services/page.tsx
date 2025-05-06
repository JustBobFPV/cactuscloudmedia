'use client'
import React from 'react'

export default function ServicesPage() {
  const services = [
    {
      title: 'Basic Package',
      price: '$99',
      description: 'Perfect for single-family homes and basic listings',
      features: [
        '6 high-quality aerial photos',
        '24-hour delivery',
        'Basic photo editing',
        'Property overview shots',
        'Downloadable digital files',
        'Social media ready'
      ]
    },
    {
      title: 'Premium Package',
      price: '$179',
      description: 'Ideal for luxury properties and comprehensive marketing',
      features: [
        '12 high-quality aerial photos',
        '30-second professionally edited aerial video',
        'Basic photo editing',
        '48-hour delivery',
        'Property highlights',
        'Drone video editing',
        'Social media clips',
        'Downloadable digital files'
      ]
    },
    {
      title: 'Custom Package',
      price: 'Contact for Quote',
      description: 'Tailored solutions for your specific needs',
      features: [
        'Custom photo count',
        'Extended video length',
        'Premium editing',
        'Priority delivery',
        'Custom angles',
        'Virtual tour integration',
        'Marketing consultation',
        'Exclusive rights'
      ]
    }
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional aerial photography and videography packages designed to showcase your property in its best light.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-3xl font-bold text-blue-900 mb-4">{service.price}</p>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">How long does a typical shoot take?</h3>
              <p className="text-gray-600">A typical aerial shoot takes 1-2 hours, depending on the property size and package selected.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">What areas do you service?</h3>
              <p className="text-gray-600">We currently service the greater Albuquerque metropolitan area and surrounding cities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Do you offer rush delivery?</h3>
              <p className="text-gray-600">Yes, we offer rush delivery options for an additional fee. Contact us for specific timing and pricing.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 