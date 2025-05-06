'use client'
import React, { useState } from 'react'

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const portfolioItems = [
    {
      title: 'Luxury Estate',
      category: 'Residential',
      description: 'Aerial photography and video for a 5-acre luxury estate',
      image: '/portfolio/luxury-estate.jpg'
    },
    {
      title: 'Commercial Complex',
      category: 'Commercial',
      description: '360° aerial tour of a modern office complex',
      image: '/portfolio/commercial-complex.jpg'
    },
    {
      title: 'Residential Development',
      category: 'Development',
      description: 'Aerial coverage of a new housing development',
      image: '/portfolio/residential-development.jpg'
    },
    {
      title: 'Golf Course',
      category: 'Recreational',
      description: 'Drone footage of a championship golf course',
      image: '/portfolio/golf-course.jpg'
    },
    {
      title: 'Industrial Park',
      category: 'Industrial',
      description: 'Aerial survey of a large industrial facility',
      image: '/portfolio/industrial-park.jpg'
    },
    {
      title: 'Resort Property',
      category: 'Hospitality',
      description: 'Comprehensive aerial coverage of a luxury resort',
      image: '/portfolio/resort-property.jpg'
    }
  ]

  const categories = ['All', 'Residential', 'Commercial', 'Development', 'Recreational', 'Industrial', 'Hospitality']

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our collection of aerial photography and videography projects.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-white text-gray-600 shadow hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 bg-gray-200">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Image Placeholder
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-semibold">{item.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Showcase Your Property?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you capture stunning aerial perspectives that will make your property stand out.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </main>
  )
} 