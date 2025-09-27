import Image from 'next/image'
import React from 'react'

export default function WhyUs() {
    return (
        <section className='max-w-7xl mx-auto p-6 sm:p-8 md:p-10 space-y-10'>
            <div className='text-center'>
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold'>Why Facebook Messenger?</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                <div className='flex flex-col items-center space-y-3 px-2 py-6 bg-gray-100 rounded-2xl'>
                    <Image
                        src="/social/fb-dm.png"
                        height={100}
                        width={100}
                        alt="Mobile Chat"
                        className="w-20 aspect-square"
                    />
                    <p className='text-5xl font-bold text-blue-500'>80%</p>
                    <p className='text-sm text-gray-700'>Mobile Users Use Messenger App Daily</p>
                </div>
                
                <div className='flex flex-col items-center space-y-3 px-2 py-6 bg-blue-500 rounded-2xl'>
                    <Image
                        src="/social/fb-dm.png"
                        height={100}
                        width={100}
                        alt="Mobile Chat"
                        className="w-20 aspect-square"
                    />
                    <p className='text-5xl font-bold text-gray-100'>2 BN</p>
                    <p className='text-sm text-gray-100'>Active Users World Wide</p>
                </div>
                
                <div className='flex flex-col items-center space-y-3 px-2 py-6 bg-gray-100 rounded-2xl'>
                    <Image
                        src="/social/fb-dm.png"
                        height={100}
                        width={100}
                        alt="Mobile Chat"
                        className="w-20 aspect-square"
                    />
                    <p className='text-5xl font-bold text-blue-500'>8X</p>
                    <p className='text-sm text-gray-700'>More Response Rate than Email</p>
                </div>
            </div>
        </section>
    )
}
