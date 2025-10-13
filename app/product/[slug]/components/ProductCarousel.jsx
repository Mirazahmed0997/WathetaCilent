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
import {
    Bot,
    MapPin,
    BarChart,
    FileText,
    Navigation,
    MessageSquare,
} from "lucide-react"

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

export default function ProductCarousel() {
    return (
        <div className="py-16 bg-green-50">
            <div className="w-full px-10 mx-auto flex flex-col items-center">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Product Highlights
                </h2>

                <Carousel
                    plugins={[Autoplay({ delay: 4000 })]}
                    opts={{ align: "start" }}
                    className="w-80 sm:w-xl lg:w-7xl"
                >
                    <CarouselContent>
                        {slides.map((slide) => (
                            <CarouselItem
                                key={slide.id}
                                className="basis-full md:basis-1/2 lg:basis-1/3 px-4" // ✅ responsive width
                            >
                                <div className="rounded-lg border border-gray-200 p-6 shadow hover:shadow-lg transition bg-white flex flex-col items-center text-center">
                                    <div className="mb-4">{slide.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {slide.title}
                                    </h3>
                                    <p className="text-gray-600">{slide.description}</p>
                                </div>
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
