'use client'
import React, { useState } from 'react'

interface PortfolioItem {
  id: number
  title: string
  category: string
  description: string
  image: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Luxury Home Aerial',
    category: 'residential',
    description: 'Stunning aerial views of a luxury residential property',
    image: '/images/portfolio/residential-1.jpg'
  },
  {
    id: 2,
    title: 'Commercial Complex',
    category: 'commercial',
    description: 'Aerial photography of a modern commercial complex',
    image: '/images/portfolio/commercial-1.jpg'
  },
  {
    id: 3,
    title: 'Industrial Park',
    category: 'industrial',
    description: 'Comprehensive aerial coverage of an industrial facility',
    image: '/images/portfolio/industrial-1.jpg'
  },
  {
    id: 4,
    title: 'Land Development',
    category: 'land',
    description: 'Aerial survey of undeveloped land for future development',
    image: '/images/portfolio/land-1.jpg'
  }
]

const categories = ['All', 'residential', 'commercial', 'industrial', 'land']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
        <p className="text-lg text-gray-600">Explore our aerial photography and videography work</p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <div className="mt-4">
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 