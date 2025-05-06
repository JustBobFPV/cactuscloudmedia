'use client'
import React, { useState } from 'react'
import Image from 'next/image'

type PortfolioItem = {
  id: number
  title: string
  category: 'residential' | 'commercial' | 'aerial'
  imageUrl: string
  description: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Luxury Home Aerial View',
    category: 'residential',
    imageUrl: '/portfolio/residential-1.jpg',
    description: 'Stunning aerial view of a luxury residential property',
  },
  {
    id: 2,
    title: 'Commercial Complex',
    category: 'commercial',
    imageUrl: '/portfolio/commercial-1.jpg',
    description: 'Aerial photography of a modern commercial complex',
  },
  {
    id: 3,
    title: 'Sunset Property Tour',
    category: 'aerial',
    imageUrl: '/portfolio/aerial-1.jpg',
    description: 'Beautiful sunset aerial tour of a property',
  },
  // Add more portfolio items as needed
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Work</h2>
        
        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === 'all'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory('residential')}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === 'residential'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Residential
          </button>
          <button
            onClick={() => setSelectedCategory('commercial')}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === 'commercial'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Commercial
          </button>
          <button
            onClick={() => setSelectedCategory('aerial')}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === 'aerial'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Aerial
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-64 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gray-300">
                  {/* Replace with actual image when available */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    {item.title}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">View Details</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{selectedItem.title}</h3>
                  <div className="relative h-96 mb-4">
                    <div className="absolute inset-0 bg-gray-300">
                      {/* Replace with actual image when available */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                        {selectedItem.title}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{selectedItem.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 