'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion'
import { BounceInFromLeft, BounceInFromRight, FadeInFromLeft, FadeInFromRight } from "@/animations/Variants";

export default function Features() {
    const socialFeatures = [
        {
            image: "/social/fb-chat.png",
            slug: "chatbot_for_instagram",
            title: "Facebook Messenger Chatbot",
            description:
                "No more waiting time , give answers 24 x 7 to your customers with our Advanced AI Powered Smart Replies.",
        },
        {
            image: "/social/insta-chat.png",
            slug: "chatbot_for_instagram",
            title: "Chatbot for Instagram",
            description:
                "Instagram is all about instant engagements — increase customer satisfaction with instant AI replies 24 x 7.",
        },
        {
            image: "/social/insta-story.png",
            slug: "facebook_messenger_chatbot",
            title: "Story Mentions",
            description:
                "Get notified whenever your brand is mentioned by your customers in their Instagram Stories.",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto p-6 sm:p-8 md:p-10 space-y-20">
            {socialFeatures.map((feature, index) => (
                <FeatureItem
                    key={feature.slug}
                    feature={feature}
                    reverse={index % 2 === 1} // true for odd indexes (2nd item)
                />
            ))}
        </section>
    );
}

function FeatureItem({ feature, reverse }) {
    return (
        <div className={`h-screen flex flex-col md:flex-row items-center gap-8 md:gap-16 ${reverse ? "md:flex-row-reverse" : ""}`}>
            {/* image column */}
            <motion.div
                variants={reverse ? FadeInFromRight : FadeInFromLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }} // trigger when 20% visible
                className="w-full h-full md:w-1/2 flex justify-center">
                <Image
                    src={feature.image}
                    alt={feature.title}
                    width={360}
                    height={360}
                    className="object-contain w-full h-full"
                />
            </motion.div>

            {/* text column */}
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <h3 className="font-bold text-lg sm:text-2xl md:text-3xl">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <Link
                    href={`#`}
                    className="inline-block px-6 py-3 border border-[#6cc17b] rounded-full hover:bg-[#6cc17b] hover:text-white transition"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
}
