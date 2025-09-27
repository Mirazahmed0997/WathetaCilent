'use client'
import transitions from '@/animations/transitions'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import TiltCardAnimation from './TiltCardAnimation'

export default function Hero() {
    return (
        <section className='w-full min-h-screen h-full grid md:grid-cols-2 gap-10 place-items-center'>
            <div className='flex flex-col items-center gap-10'>
                <div className="relative flex justify-center items-center h-full">
                    {/* Floating Icons */}
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

                    {/* Centered Mobile Chat */}
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
            </div>
            <motion.div
                variants={transitions.FadeInFromRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className='flex flex-col items-center space-y-20'>
                <h1 className="px-6 sm:px-10 md:px-20 text-center text-2xl sm:text-3xl md:text-5xl font-bold">
                    Grow Your Business with the power of{' '}
                    <span className="text-[#1877F2]">Facebook</span> &{' '}
                    <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Instagram
                    </span>{' '}
                    API
                </h1>
                <button className='px-8 py-4 bg-[#6cc17b] text-white rounded-full'>Start Now</button>
            </motion.div>

        </section>
    )
}
