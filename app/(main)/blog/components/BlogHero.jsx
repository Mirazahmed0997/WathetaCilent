import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BlogHero({heroBlog}) {
    return (
        <Link href={`/blog/${heroBlog?.slug}`} className='hidden md:block'>
            <article className="w-full bg-teal-800 rounded-3xl overflow-hidden grid grid-cols-12">
                <div className="col-span-5 px-6 py-20 text-white flex flex-col justify-between">
                    <div className="space-y-4">
                        <h2 className="text-2xl">{heroBlog?.title}</h2>
                        <h3 className="text-sm line-clamp-3">{heroBlog?.subHeading}</h3>
                        <div className="flex flex-wrap gap-4 items-center">
                            {heroBlog?.tags && heroBlog?.tags.map(tag => (
                                <Link 
                                    href={`?tagId=${tag?.tag?.id}`} 
                                    key={tag?.tag?.id} 
                                    className="border hover:bg-amber-600 border-teal-600 px-3 py-0.5 rounded-full text-xs cursor-pointer hover:underline">
                                    # {tag?.tag?.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <p className="flex items-center space-x-2 text-xs group hover:underline">
                        <ArrowRight className='w-5 h-5 p-1 bg-amber-600 rounded-full group-hover:scale-110 group-hover:translate-x-1 transform transition duration-200' />
                        <span>Read full blog</span>
                    </p>
                </div>

                <div className="col-span-7 overflow-hidden">
                    <img
                        src={CONSTANT?.API_URL + heroBlog?.image}
                        height={500} width={500}
                        alt={heroBlog?.title}
                        className="w-full h-96 object-cover hover:scale-105 transform transition duration-200" />
                </div>
            </article>
        </Link>
    )
}
