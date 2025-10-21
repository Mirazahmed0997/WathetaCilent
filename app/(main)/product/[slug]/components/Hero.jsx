import React from 'react'

export default function Hero({ data }) {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <h1 className="text-5xl font-bold text-gray-900">{data.name}</h1>
                    <p className="mt-4 text-xl text-gray-600">{data.tagline}</p>
                    <div className="mt-8">
                        <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                            Book a Free Demo
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img
                        src={data.heroImage}
                        alt={data.name}
                        width={800}
                        height={600}
                        className="rounded-lg shadow-xl object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
