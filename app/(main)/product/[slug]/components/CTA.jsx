import React from 'react'

export default function CTA({ data }) {
    return (
        <section className="bg-green-600 py-20">
                <div className="container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl font-semibold mb-6">
                        Ready to supercharge your field sales?
                    </h2>
                    <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition">
                        Request a Demo
                    </button>
                </div>
            </section>
    )
}