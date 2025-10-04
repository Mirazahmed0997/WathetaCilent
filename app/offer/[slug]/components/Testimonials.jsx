'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

// Stagger container for animation
const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

// Animation for each testimonial card
const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
}

export default function Testimonials() {
    const testimonials = [
        {
            name: "John Doe",
            role: "CEO, Example Corp",
            video: "/social/video/review.mp4",
        },
        {
            name: "Sarah Smith",
            role: "Marketing Manager, BrandX",
            video: "/social/video/review.mp4",
        },
        {
            name: "David Lee",
            role: "Entrepreneur",
            video: "/social/video/review.mp4",
        },
    ]

    return (
        <section className="max-w-6xl mx-auto px-4 py-24">
            {/* Header */}
            <div className="text-center mb-12 space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
                <p className="text-gray-500 text-lg sm:text-xl">Real experiences from real clients</p>
            </div>

            {/* Testimonials Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
                    >
                        <VideoCard testimonial={t} />

                        <div className="p-5 text-center">
                            <h4 className="text-lg font-semibold">{t.name}</h4>
                            <p className="text-gray-500 text-sm mt-1">{t.role}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

// Video Card component
function VideoCard({ testimonial }) {
    const [play, setPlay] = useState(false)
    const [thumbnail, setThumbnail] = useState(null)
    const videoRef = useRef(null)

    useEffect(() => {
        if (!videoRef.current) return

        const video = videoRef.current
        video.currentTime = 1
        video.addEventListener('loadeddata', () => {
            const canvas = document.createElement('canvas')
            canvas.width = video.videoWidth
            canvas.height = video.videoHeight
            const ctx = canvas.getContext('2d')
            if (ctx) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
                setThumbnail(canvas.toDataURL('image/png'))
            }
        })
    }, [])

    return (
        <div
            className="relative w-full h-64 sm:h-72 md:h-80 lg:h-64 cursor-pointer group bg-gray-900"
            onClick={() => setPlay(true)}
        >
            {!play ? (
                <>
                    {thumbnail ? (
                        <img
                            src={thumbnail}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white">
                            Loading...
                        </div>
                    )}

                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <Play size={50} className="text-white" />
                    </div>

                    {/* Hidden video for thumbnail capture */}
                    <video ref={videoRef} src={testimonial.video} className="hidden" />
                </>
            ) : (
                <video
                    src={testimonial.video}
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                />
            )}
        </div>
    )
}
