import CONSTANT from '@/configs/constant.config'
import Link from 'next/link'
import React from 'react'

export default function OfferCards({ offers }) {
    // ✅ Return null if offers or offers.data is missing or empty
    if (!Array.isArray(offers?.data) || offers.data.length === 0) return null

    return (
        <section className='max-w-7xl mx-auto px-4 py-12 space-y-4'>
            <div className='text-center'>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our current special offers
                </h2>
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {offers.data.map((offer) => (
                    <Card key={offer.id} offer={offer} />
                ))}
            </div>
        </section>
    )
}

function Card({ offer }) {
    return (
        <div className='bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-2xl flex flex-col'>
            {/* Image Section */}
            <div className='relative'>
                <img
                    src={CONSTANT?.API_URL + offer.image}
                    alt={offer.title}
                    className='w-full h-48 md:h-56 object-cover'
                />
                {offer.status !== 'ACTIVE' && (
                    <span className='absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                        {offer.status}
                    </span>
                )}
                {offer.isRecommended && (
                    <span className='absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                        Recommended
                    </span>
                )}
                {offer.isPopular && (
                    <span className='absolute bottom-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                        Popular
                    </span>
                )}
            </div>

            {/* Content Section */}
            <div className='p-6 flex flex-col justify-between flex-1'>
                <div>
                    <h3 className='text-xl font-bold text-gray-800 mb-2'>{offer.title}</h3>
                    <p className='text-gray-600 mb-4 line-clamp-3'>{offer.description}</p>

                    {offer.features?.length > 0 && (
                        <ul className='list-disc list-inside text-gray-700 mb-4 space-y-1'>
                            {offer.features.map((f) => (
                                <li key={f.feature.id}>{f.feature.name}</li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Pricing & Link */}
                <div className='mt-auto flex items-center justify-between'>
                    <div className='text-lg font-semibold text-gray-800'>
                        ৳ {offer.priceBDT}{' '}
                        <span className='text-gray-500 text-sm'>/{offer.duration}</span>
                    </div>
                    <Link
                        href={`/offer/${offer.slug}`}
                        className='bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition'
                    >
                        Get Offer
                    </Link>
                </div>
            </div>
        </div>
    )
}
