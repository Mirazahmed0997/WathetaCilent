'use client'
import transitions from '@/animations/transitions'
import React from 'react'
import { motion } from 'framer-motion'
import PromoVideo from './PromoVideo'

export default function Hero() {
    const title = 'Grow Your Business with the power of Facebook & Instagram API'

    // split title into words while keeping spaces
    const words = title.split(/(\s+)/)

    return (
        <section className="w-full gap-10 place-items-center pt-24">
            <motion.div
                variants={transitions.FadeInFromBottom}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-10 max-w-6xl"
            >
                <p>AI-Powered✨</p>
                <h1 className="px-6 sm:px-10 md:px-20 text-center text-2xl sm:text-3xl md:text-5xl font-bold">
                    {words.map((word, idx) => {
                        if (word.toLowerCase().includes("facebook")) {
                            return (
                                <span key={idx} className="text-[#1877F2]">
                                    {word}
                                </span>
                            )
                        }
                        if (word.toLowerCase().includes("instagram")) {
                            return (
                                <span
                                    key={idx}
                                    className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                                >
                                    {word}
                                </span>
                            )
                        }
                        return <span key={idx}>{word}</span>
                    })}
                </h1>
                <button className="px-8 py-4 bg-[#6cc17b] text-white rounded-full">
                    Start Now
                </button>
                {/* Promotional Video Section */}
                <PromoVideo url={'https://youtu.be/c1VinHqToUY?si=k0LpRozNVm1XkgSD'}/>
            </motion.div>

        </section>
    )
}



{/* <div className='flex flex-col items-center gap-10'>
    <div className="relative flex justify-center items-center h-full">
        <motion.div
            variants={transitions.FadeInFromTop}
            initial="initial"
            animate="animate"
            className="z-20 w-10 h-auto absolute top-20 -left-5"
        >
            <TiltCardAnimation>
                <Image
                    src="/social/fb.png"
                    height={200}
                    width={200}
                    unoptimized
                    className="w-full h-full"
                />
            </TiltCardAnimation>
        </motion.div>
        <motion.div
            variants={transitions.FadeInFromTop}
            initial="initial"
            animate="animate"
            className="z-20 w-10 h-auto absolute -top-10 right-12"
        >
            <TiltCardAnimation>
                <Image
                    src="/social/insta.png"
                    height={200}
                    width={200}
                    unoptimized
                    className="w-full h-full"
                />
            </TiltCardAnimation>
        </motion.div>
        <motion.div
            variants={transitions.FadeInFromBottom}
            initial="initial"
            animate="animate"
            className="z-20 w-10 h-auto absolute bottom-60 -left-10"
        >
            <TiltCardAnimation>
                <Image
                    src="/social/fb-dm.png"
                    height={200}
                    width={200}
                    unoptimized
                    alt="Facebook DM"
                    className="w-full h-full"
                />
            </TiltCardAnimation>
        </motion.div>
        <motion.div
            variants={transitions.FadeInFromRight}
            initial="initial"
            animate="animate"
            className="z-20 w-10 h-auto absolute bottom-36 right-0"
        >
            <TiltCardAnimation>
                <Image
                    src="/social/insta-dm.png"
                    height={200}
                    width={200}
                    alt="Instagram DM"
                    className="w-full h-full"
                />
            </TiltCardAnimation>
        </motion.div>

        <motion.div
            variants={transitions.FadeInFromLeft}
            initial="initial"
            animate="animate"
        >
            <TiltCardAnimation>
                <Image
                    src="/social/mobile-chat.png"
                    height={700}
                    width={300}
                    alt="Mobile Chat"
                    className="h-auto z-10"
                />
            </TiltCardAnimation>
        </motion.div>
    </div>

    <motion.div
        variants={transitions.FadeInFromBottom}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className='space-y-4 text-center'>
        <h3 className='text-lg sm:text-xl md:text-2xl'>Social Media Shouldn't Take Over Your Day</h3>
        <p className='px-6 sm:px-10 md:px-20'>You're juggling content, switching tabs, writing captions, checking analytics and starting over again tomorrow. It's draining.</p>
    </motion.div>
</div> */}