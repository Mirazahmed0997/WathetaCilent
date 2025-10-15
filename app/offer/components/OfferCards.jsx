import CONSTANT from '@/configs/constant.config'
import Link from 'next/link'
import React from 'react'

export default function OfferCards({ offers }) {
  return (
    <section className='max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {Array.isArray(offers?.data) && offers.data.length > 0 ? (
        offers.data.map((offer) => (
          <div key={offer.id} className='bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row'>

            {/* Image Section */}
            <div className='md:w-1/2'>
              <img
                src={CONSTANT?.API_URL + offer.image}
                alt={offer.title}
                className='w-full h-full object-cover'
              />
            </div>

            {/* Content Section */}
            <div className='md:w-1/2 p-6 flex flex-col justify-between'>
              <div>
                <div className='mb-4 flex items-end justify-between'>
                  <h3 className='text-2xl font-bold text-gray-800'>{offer.title}</h3>
                  <p>
                    <span className='text-3xl font-bold'>৳ {offer.priceBDT}</span>
                    <span className='text-gray-600'> / {offer.duration}</span>
                  </p>
                </div>
                <p className='text-gray-600 mb-4'>{offer.description}</p>
                {offer.features?.length > 0 && (
                  <ul className='list-disc list-inside text-gray-700 mb-6'>
                    {offer.features.map((f) => (
                      <li key={f.feature.id}>{f.feature.name}</li>
                    ))}
                  </ul>
                )}
              </div>

              <Link
                href={`/offer/${offer.slug}`}
                className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-max mt-4'
              >
                Get Offer
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className='text-center text-gray-500 col-span-full'>No offers available.</p>
      )}
    </section>
  )
}
