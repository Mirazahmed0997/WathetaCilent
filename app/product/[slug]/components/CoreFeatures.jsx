import React from 'react'

export default function CoreFeatures({ data }) {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                    {data?.title}
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((f, idx) => (
                        <div
                            key={idx}
                            className="p-8 border rounded-xl hover:shadow-lg transition bg-white"
                        >
                            {f.icon}
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {f.title}
                            </h3>
                            <p className="text-gray-600">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
