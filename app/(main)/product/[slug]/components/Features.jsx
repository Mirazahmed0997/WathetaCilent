"use client"

import React from "react"

const features = [
    {
        id: 1,
        title: "Smart Lead Management",
        description:
            "Automatically capture, assign, and track leads across territories. Never lose a potential customer again.",
        keyPoints: [
            "Auto lead distribution",
            "Real-time notifications",
            "Integrated with CRM",
        ],
        image:
            "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 2,
        title: "Geo Attendance & Check-ins",
        description:
            "Enable your field team to mark attendance and log customer visits with GPS validation for authenticity.",
        keyPoints: ["Location-based check-in", "Offline support", "Instant sync"],
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 3,
        title: "Performance Analytics Dashboard",
        description:
            "Visualize performance metrics, targets, and conversion insights in one place.",
        keyPoints: [
            "Custom KPI tracking",
            "Downloadable reports",
            "AI-based suggestions",
        ],
        image:
            "https://images.unsplash.com/photo-1560264418-c4445382edbc?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 4,
        title: "Performance Analytics Dashboard",
        description:
            "Visualize performance metrics, targets, and conversion insights in one place.",
        keyPoints: [
            "Custom KPI tracking",
            "Downloadable reports",
            "AI-based suggestions",
        ],
        image:
            "https://images.unsplash.com/photo-1560264418-c4445382edbc?auto=format&fit=crop&w=900&q=80",
    },
]

export default function Features() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-20">
                    Powerful Features to Scale Your Sales
                </h2>

                <div className="relative space-y-10 md:space-y-0">
                    {features.map((feature, idx) => (
                        <div>
                            <div
                                key={feature.id}
                                className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 1 ? "md:flex-row-reverse" : "" }`}
                            >
                                {/* Number Circle */}
                                <div className="relative flex flex-col items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10">
                                        {idx + 1}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="md:w-1/2">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{feature.description}</p>
                                    <ul className="space-y-2">
                                        {feature.keyPoints.map((point, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-gray-700"
                                            >
                                                <span className="text-green-600 mt-1">•</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Image */}
                                <div className="md:w-1/2">
                                    <div className="rounded-xl overflow-hidden shadow-lg">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="object-cover w-full h-[350px]"
                                        />
                                    </div>
                                </div>
                            </div>
                            {idx < features.length - 1 && (
                                <div className="hidden md:flex items-center justify-center px-20">
                                    <img
                                        src="/line.svg"
                                        alt="connector line"
                                        className={`${idx % 2 === 1 ? "scale-x-[-1]" : ""}`}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
