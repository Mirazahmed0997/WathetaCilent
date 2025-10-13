"use client"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Bot, MapPin, BarChart, FileText, Navigation, MessageSquare } from "lucide-react"

const slides = [
    {
        id: 1,
        icon: <Bot className="w-12 h-12 text-green-600" />,
        title: "Smart Lead Management",
        description: "Automatically capture and track leads efficiently.",
    },
    {
        id: 2,
        icon: <MapPin className="w-12 h-12 text-green-600" />,
        title: "Geo Attendance & Check-ins",
        description: "Enable your field team to log attendance with GPS validation.",
    },
    {
        id: 3,
        icon: <BarChart className="w-12 h-12 text-green-600" />,
        title: "Performance Analytics Dashboard",
        description: "Visualize performance metrics and conversion insights.",
    },
    {
        id: 4,
        icon: <FileText className="w-12 h-12 text-green-600" />,
        title: "Automated Reporting",
        description: "Generate reports automatically for better insights.",
    },
    {
        id: 5,
        icon: <Navigation className="w-12 h-12 text-green-600" />,
        title: "Route Optimization",
        description: "Optimize travel routes for field teams to save time.",
    },
    {
        id: 6,
        icon: <MessageSquare className="w-12 h-12 text-green-600" />,
        title: "Customer Feedback",
        description: "Collect and track customer feedback efficiently.",
    },
]

// Group slides in chunks of 3
const chunkArray = (arr, size) => {
    const result = []
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }
    return result
}

export default function ProductCarousel() {
    const groupedSlides = chunkArray(slides, 3)

    return (
        <div className="py-16 bg-green-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Product Highlights
                </h2>

                <Carousel className="space-x-4" plugins={[Autoplay({ delay: 4000, }),]}>
                    <CarouselContent>
                        {groupedSlides.map((group, idx) => (
                            <CarouselItem key={idx} className="flex gap-6">
                                {group.map((slide) => (
                                    <div
                                        key={slide.id}
                                        className="flex-1 rounded-lg border border-gray-200 p-6 shadow hover:shadow-lg transition bg-white flex flex-col items-center text-center"
                                    >
                                        <div className="mb-4">{slide.icon}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{slide.title}</h3>
                                        <p className="text-gray-600">{slide.description}</p>
                                    </div>
                                ))}
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}
