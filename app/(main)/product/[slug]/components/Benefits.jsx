import React from 'react'

export default function Benefits({ data }) {
    console.log(data)
    return (
        <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                How It Helps
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((d, idx) => (
                    <div
                        key={idx}
                        className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
                    >
                        <h4 className="text-xl font-semibold text-green-600 mb-2">
                            {data.title}
                        </h4>
                        <p className="text-gray-700">{d.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}