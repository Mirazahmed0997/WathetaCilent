import CONSTANT from '@/configs/constant.config'
import Link from 'next/link'
import React from 'react'

export default function OfferCards({ offers }) {
    if (!Array.isArray(offers?.data) || offers.data.length === 0) return null

    return (
        <section className='max-w-7xl mx-auto px-4 py-10 space-y-8'>
            <div className='text-center'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
                    Our Current Special Offers
                </h2>
                <p className='text-gray-500 mt-2'>Get the best value for your needs!</p>
            </div>

            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {offers.data.map((offer) => (
                    <Card key={offer.id} offer={offer} />
                ))}
            </div>
        </section>
    )
}

function Card({ offer }) {
    return (
        <Link href={`/offer/${offer.slug}`} className='bg-gradient-to-br from-blue-50 to-indigo-50 border border-indigo-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden'>
            {/* Image Section */}
            <div className='relative'>
                <img
                    src={CONSTANT?.API_URL + offer.image}
                    alt={offer.title}
                    className='w-full h-40 object-cover rounded-t-2xl'
                />
                {offer.status !== 'ACTIVE' && (
                    <span className='absolute top-3 left-3 bg-red-500/80 text-white px-2 py-0.5 rounded-full text-xs font-medium'>
                        {offer.status}
                    </span>
                )}
                {offer.isRecommended && (
                    <span className='absolute top-3 right-3 bg-green-500/80 text-white px-2 py-0.5 rounded-full text-xs font-medium'>
                        Recommended
                    </span>
                )}
            </div>

            {/* Content Section */}
            <div className='p-4 flex flex-col justify-between flex-1'>
                <div>
                    <h3 className='text-lg font-semibold text-gray-800 mb-1'>
                        {offer.title}
                    </h3>
                    <p className='text-gray-600 text-sm mb-3 line-clamp-2'>
                        {offer.description}
                    </p>

                    {offer.features?.length > 0 && (
                        <ul className='text-gray-700 text-sm space-y-1 mb-3'>
                            {offer.features.slice(0, 3).map((f) => (
                                <li key={f.feature.id} className='flex items-center gap-1'>
                                    <span className='text-indigo-500'>•</span> {f.feature.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Pricing & Link */}
                <div className='mt-auto flex items-center justify-between pt-2'>
                    <p className='w-full text-center bg-indigo-500 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-indigo-600 transition' >
                        Explore the offer
                    </p>
                </div>
            </div>
        </Link>
    )
}
