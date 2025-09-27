'use client'
import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import getYoutubeVideo from '@/utils/getYoutubeVideo'

// Variants for stagger container
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.3 },
    },
}

// Variants for each testimonial card
const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
}

export default function Testimonials() {
    const testimonials = [
        {
            name: "John Doe",
            role: "CEO, Example Corp",
            video: "https://www.youtube.com/embed/QBlFQuDzoQE",
            thumbnail: "/images/client1.jpg",
        },
        {
            name: "Sarah Smith",
            role: "Marketing Manager, BrandX",
            video: "https://youtu.be/c1VinHqToUY?si=u6CwuVc7TuznAnjQ",
            thumbnail: "/images/client2.jpg",
        },
        {
            name: "David Lee",
            role: "Entrepreneur",
            video: "https://www.youtube.com/embed/QBlFQuDzoQE",
            thumbnail: "/images/client3.jpg",
        },
    ]

    return (
        <section className="max-w-7xl mx-auto p-6 sm:p-8 md:p-10">
            <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">What Our Clients Say</h2>
                <p className="text-gray-600 mt-2">Watch their experiences in their own words</p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        className="bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
                    >
                        <VideoCard testimonial={t} />
                        <div className="p-4 text-center">
                            <h4 className="font-bold text-lg">{t.name}</h4>
                            <p className="text-sm text-gray-500">{t.role}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

function VideoCard({ testimonial }) {
    const [play, setPlay] = useState(false)

    const { videoId, thumbnailUrl } = useMemo(() => {
        const id = getYoutubeVideo.id(testimonial.video);
        const thumbnail = getYoutubeVideo.thumbnail(id);
        return { videoId: id, thumbnailUrl: thumbnail };
    }, [testimonial.video]);

    return (
        <div
            className="relative w-full sm:w-64 md:w-72 lg:w-80 h-[450px] bg-black rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => setPlay(true)}
        >
            {!play ? (
                <>
                    {/* Thumbnail */}
                    <img
                        src={thumbnailUrl}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay Play Icon */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <Play size={50} className="text-white" />
                    </div>
                </>
            ) : (
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&playsinline=0`}
                    title={testimonial.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )}
        </div>
    )
}