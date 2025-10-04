import React from "react";
import { Megaphone, MessageCircle, Calendar, MousePointerClick } from "lucide-react";

export default function Summary({ data }) {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 gap-2 items-center">
            <div>
                <div className="space-y-1.5">
                    <h1 className="text-xl sm:text-3xl font-bold">{data?.title}</h1>
                    <p className="text-sm md:text-base font-medium text-gray-600">{data?.description}</p>
                </div>
11
                <div className="grid gap-2 mt-12">
                    {data?.features?.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 ">
                            <Megaphone className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                            <div>
                                <h3 className="text-lg font-semibold">{feature.title}</h3>
                                <p className="text-gray-600 text-xs">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Hero Section */}
            <div className="w-full flex flex-col items-center text-center space-y-4">
                <img
                    src="/offer/summary.webp"
                    alt="WhatsApp Broadcast Summary"
                    className="rounded-2xl shadow-lg w-full max-h-[400px] object-cover"
                />
            </div>
        </section>
    );
}
