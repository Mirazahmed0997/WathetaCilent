import { Rocket } from 'lucide-react'
import React from 'react'

export default function Start() {
    return (
        <section className="relative flex items-center justify-center rounded-4xl min-h-[30vh] bg-gradient-to-r from-blue-500 via-sky-400 to-teal-400 overflow-hidden">
            {/* Vignette overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_70%,rgba(0,0,0,0.5)_100%)]"></div>

            <div className="relative flex flex-col items-center px-6">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                    Automate your business now
                </h2>
                <button className="px-8 py-3 flex items-center space-x-2 cursor-pointer bg-white text-blue-600 font-semibold rounded-full shadow-md hover:tracking-widest transition-all duration-200 hover:bg-blue-50 hover:shadow-lg">
                    <Rocket/>
                    <span>Start</span>
                </button>
            </div>
        </section>
    )
}
