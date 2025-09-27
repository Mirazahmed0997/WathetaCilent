import React from 'react'

export default function Start() {
    return (
        <section className="flex items-center justify-center min-h-[30vh] bg-gradient-to-r from-blue-500 via-sky-400 to-teal-400">
            <div className="text-center px-6">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6">
                    Automate your business now
                </h2>
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-50 hover:shadow-lg transition">
                    Start
                </button>
            </div>
        </section>
    )
}
