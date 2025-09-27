'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import transitionsIndexed from '@/animations/transitionsIndexed';

export default function Addons() {
    const addons = [
        {
            icon: '/social/addons/Instagram- Commerce-icon.png',
            title: 'Team Member',
            description: 'Additional team member access',
            price: 10,
            priceDuration: 'Per month'
        },
        {
            icon: '/social/addons/Instagram- Commerce-icon.png',
            title: 'Team Member',
            description: 'Additional team member access',
            price: 5,
            priceDuration: 'Per month'
        },
        {
            icon: '/social/addons/Instagram- Commerce-icon.png',
            title: 'Team Member',
            description: 'Additional team member access',
            price: 5,
            priceDuration: 'Per month'
        },
        {
            icon: '/social/addons/Instagram- Commerce-icon.png',
            title: 'Team Member',
            description: 'Additional team member access',
            price: 5,
            priceDuration: 'Per month'
        },
    ]
    return (
        <section className="max-w-7xl mx-auto p-6 sm:p-8 md:p-10 space-y-10">
            <div className='text-center'>
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold'>Additional Services</h1>
                <p className='text-lg sm:text-xl'>Customize your plan with these add-ons</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                {addons.map((a, index) => (
                    <motion.div 
                        key={index} 
                        variants={transitionsIndexed.FadeInFromBottomIndexed}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 0.5 }}
                        custom={index + 1}
                        className='flex flex-col items-center p-2 rounded-lg bg-sky-50 ring ring-sky-50 hover:ring-sky-200 shadow-xl hover:shadow-2xl'>
                        <Image
                            src={a?.icon}
                            height={50}
                            width={50}
                            alt="Instagram- Commerce-icon"
                            className="bg-blue-500/30 p-2 m-2 rounded-full aspect-square"
                        />
                        <h2 className='text-xl font-bold'>{a?.title}</h2>
                        <p>{a?.description}</p>
                        <p className='space-x-2'>
                            <span className='text-xl text-blue-500'>${a?.price}</span>
                            <span className='text-sm'>/{a?.priceDuration}</span>
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
