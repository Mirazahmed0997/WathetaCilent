'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion'
import transitions from "@/animations/transitions";

export default function Features({ data }) {
    return (
        <section className="max-w-7xl mx-auto p-6 sm:p-8 md:p-10 space-y-20">
            {data.map((feature, index) => (
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
                variants={reverse ? transitions.FadeInFromRight : transitions.FadeInFromLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }} // trigger when 20% visible
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
            <div className={`w-full md:w-1/2 space-y-4 text-center md:text-left ${reverse ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="font-bold text-lg sm:text-2xl md:text-3xl">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
            </div>
        </div>
    );
}
