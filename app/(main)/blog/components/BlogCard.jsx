import CONSTANT from '@/configs/constant.config'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BlogCard({ blog, hreflang = 'en'}) {
    return (
        <Link key={blog?.id}  rel="alternate" hreflang={hreflang} href={`/blog/${blog?.slug}`} className="w-full bg-teal-800 rounded-3xl overflow-hidden">
            <article>
                <div className="col-span-7 overflow-hidden">
                    <img
                        src={CONSTANT?.API_URL + blog?.image}
                        height={500} width={500}
                        alt={blog?.title}
                        className="w-full h-72 object-cover hover:scale-105 transform transition duration-200" />
                </div>

                <div className="col-span-5 p-4 text-white flex flex-col space-y-1 justify-between">
                    <div className='text-xs flex items-center justify-between'>
                        <p className="flex items-center space-x-2  group hover:underline">
                            <ArrowRight className='w-5 h-5 p-1 bg-amber-600 rounded-full group-hover:scale-110 group-hover:translate-x-1 transform transition duration-200' />
                            <span>Read full blog</span>
                        </p>
                        <div className="flex flex-wrap gap-2 items-center">
                            {blog?.tags && blog?.tags.map(tag => (
                                <Link
                                    href={`?tagId=${tag?.tag?.id}`}
                                    key={tag?.tag?.id}
                                    className="border hover:bg-amber-600 border-teal-600 px-3 py-0.5 rounded-full text-xs cursor-pointer hover:underline">
                                    # {tag?.tag?.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl">{blog?.title}</h2>
                    </div>
                    {/* <div>
                        <p className='text-xs'>{blog?.category?.name}{` / `}{blog?.subcategory?.name}</p>
                    </div> */}
                </div>
            </article>
        </Link>
    )
}
