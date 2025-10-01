import Link from 'next/link'
import React from 'react'

export default function OfferCards() {
  return (
    <section className='max-w-7xl mx-auto px-4 py-12'>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden md:flex md:items-center'>
        {/* Image Section */}
        <div className='md:w-1/2'>
          <img
            src='/offer/fb-insta.avif'
            alt='Social Starter Pack'
            className='w-full h-auto object-cover'
          />
        </div>

        {/* Content Section */}
        <div className='md:w-1/2 p-6'>
          <div className='mb-4 flex items-end justify-between'>
            <h3 className='text-2xl font-bold text-gray-800'>Social Starter Pack</h3>
            <p>
              <span className='text-3xl font-bold'>৳ 5000</span>
              <span> /Per month</span>
            </p>
          </div>
          <p className='text-gray-600 mb-4'>
            Perfect for businesses starting out on Facebook and Instagram. Includes essential tools to grow your brand, engage customers, and drive sales through Meta platforms.
          </p>
          <ul className='list-disc list-inside text-gray-700 mb-6'>
            <li>Facebook Business Page</li>
            <li>Instagram Business Profile</li>
            <li>CRM Integration</li>
            <li>Basic Automation Tools</li>
          </ul>
          <Link href={`/offer/social`} className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'>
            Get Started
          </Link>
        </div>
      </div>
    </section>

  )
}
