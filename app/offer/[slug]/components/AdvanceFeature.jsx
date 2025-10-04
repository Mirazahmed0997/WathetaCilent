"use client";
import React from "react";

const features = [
    { title: "Multiple Human Live Chat", desc1: "Have multiple team members to drive Live Chat Support on the Same WhatsApp Business Number.", desc2: "Filter Chats according to tags, campaigns and attributes for Smart Agent Chat Routing." },
    { title: "Powerful Analytics", desc1: "Get deep insights into your customer interactions and agent performance.", desc2: "Track KPIs and conversion funnels in real time." },
    { title: "Campaign Automation", desc1: "Automate WhatsApp campaigns with triggers, segments and scheduling.", desc2: "Save time and drive higher engagement automatically." },
    { title: "Smart Bot + Human Handover", desc1: "Let AI bots answer FAQs instantly.", desc2: "Seamlessly transfer to human agents when complex issues arise." },
    { title: "Multi-Channel Inbox", desc1: "Manage WhatsApp, Facebook, Instagram, and email in one place.", desc2: "No more juggling between apps and devices." },
    { title: "Data Security", desc1: "Keep your customer data safe with enterprise-grade security.", desc2: "GDPR-compliant and encrypted end-to-end." },
];

// Correct grouping logic:
// index 0 -> single group (col-span-1)
// after that, we form groups of 2 indices: [1,2], [3,4], [5,6], ...
// these groups alternate between col-2 and col-1. Group 0 ([1,2]) => col-2, group 1 ([3,4]) => col-1, group 2 ([5,6]) => col-2, etc.
function getColSpan(index) {
    if (index === 0) return "col-span-1 bg-purple-50";

    const group = Math.floor((index - 1) / 2); // 0 -> covers 1,2 ; 1 -> covers 3,4 ; etc.
    const isEvenGroup = group % 2 === 0; // even groups -> col-2, odd groups -> col-1

    return isEvenGroup
        ? "col-span-2 bg-indigo-50"
        : "col-span-1 bg-purple-50";
}

export default function AdvanceFeature() {
    return (
        <section className="w-full max-w-[70vw] mx-auto px-4 py-20 space-y-14 text-center">

            <div className="space-y-5">
                <h1 className="text-3xl sm:text-5xl font-bold">
                    Advanced Features that drive Conversions
                </h1>
                <p className="text-center text-lg md:text-xl font-medium text-gray-600">
                    3X Your revenues using WaTheta Marketing Platform
                </p>
            </div>
            <div className="grid grid-cols-3 gap-6 items-stretch">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`w-full h-full p-4 rounded-2xl ${getColSpan(index)} hover:ring ring-gray-300 hover:shadow-2xl`}
                    >
                        <div className="flex flex-col justify-between w-full h-full">
                            <article className="space-y-2">
                                <h3 className="text-2xl font-bold">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.desc1}</p>
                                <p className="text-sm text-gray-600">{feature.desc2}</p>
                            </article>

                            <aside className="w-full flex mt-4 rounded-md">
                                <video
                                    className="w-full h-auto aspect-video object-cover rounded-md"
                                    src="/images/Boardsvideo.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    aria-label="Demo video"
                                />
                            </aside>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
