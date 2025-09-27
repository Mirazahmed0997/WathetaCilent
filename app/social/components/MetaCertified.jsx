import { CircleCheck } from 'lucide-react'
import React from 'react'

export default function MetaCertified() {
  return (
    <section className='max-w-7xl md:mx-auto rounded-4xl text-4xl flex flex-col gap-4 md:flex-row items-center md:justify-between text-white bg-gradient-to-r from-[#1877F2] to-[#6aa7f8] p-6 sm:p-8 md:p-10'>
        <h2 className='text-center md:text-start font-bold'><span className='text-amber-400'>100%</span> Meta Approved Direct Integration</h2>
        <CircleCheck className='w-28 h-28'/>
    </section>
  )
}
