'use client'
import React from 'react'
import Image from 'next/image'

interface PortfolioItem {
  id: number
  title: string
  description: string
  image: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Luxury Home Aerial',
    description: 'Stunning aerial views of a luxury residential property',
    image: '/images/portfolio/residential-1.jpg'
  },
  {
    id: 2,
    title: 'Commercial Complex',
    description: 'Aerial photography of a modern commercial complex',
    image: '/images/portfolio/commercial-1.jpg'
  },
  {
    id: 3,
    title: 'Industrial Park',
    description: 'Comprehensive aerial coverage of an industrial facility',
    image: '/images/portfolio/industrial-1.jpg'
  },
  {
    id: 4,
    title: 'Land Development',
    description: 'Aerial survey of undeveloped land for future development',
    image: '/images/portfolio/land-1.jpg'
  }
]

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={item.id <= 3}
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 