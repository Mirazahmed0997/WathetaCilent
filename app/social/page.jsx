import React from 'react'
import Hero from './components/Hero'
import MetaCertified from './components/MetaCertified'
import Features from './components/Features'
import Addons from './components/Addons'
import WhyUs from './components/WhyUs'

export default function SocialPage() {
  return (
    <div className='px-2 sm:px-4 md:px-6'>
        <Hero/>
        <WhyUs/>
        <Features/>
        <MetaCertified/>
        <Addons/>
    </div>
  )
}
