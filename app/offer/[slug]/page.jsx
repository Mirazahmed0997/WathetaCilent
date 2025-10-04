import React from 'react'
import Hero from './components/Hero'
import MetaCertified from './components/MetaCertified'
import Features from './components/Features'
import Addons from './components/Addons'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Start from './components/Start'
import Clients from './components/Clients'
import Summary from './components/Summary'
import AdvanceFeature from './components/AdvanceFeature'
import FAQ from './components/FAQ'

export default function SocialPage() {
  return (
    <div className='w-screen px-2 sm:px-4 md:px-6'>
        <Hero/>
        <Clients/>
        <Summary/>
        {/* <WhyUs/> */}
        <MetaCertified/>
        <Features/>
        <Start/>
        <AdvanceFeature/>
        <Addons/>
        <FAQ/>
        <Testimonials/>
    </div>
  )
}
