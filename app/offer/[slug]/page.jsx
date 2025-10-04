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
  const offerData = {
    hero: {
      header: 'AI-Powered✨',
      title: 'Grow Your Business with the power of Facebook & Instagram API',
      description: [
        'Broadcast, Automate, Engage, Sell - Do Everything with the Smartest WhatsApp Engagement Platform',
        'Powered by meta Official APIs⚡',
      ],
      youtubeUrl: 'https://youtu.be/c1VinHqToUY?si=k0LpRozNVm1XkgSD'
    },
    clients: {
      title: 'Founders & Marketers Love Us',
      description: 'Trusted by top companies around the world',
      logos: [
        { src: "/images/aribnd.png", alt: "Airbnb" },
        { src: "/images/adobe.png", alt: "Adobe" },
        { src: "/images/BMW.png", alt: "BMW" },
        { src: "/images/canadian.png", alt: "canadian" },
        { src: "/images/Carniba.png", alt: "Carniba" },
        { src: "/images/aribnd.png", alt: "Airbnb" },
        { src: "/images/adobe.png", alt: "Adobe" },
        { src: "/images/BMW.png", alt: "BMW" },
        { src: "/images/canadian.png", alt: "canadian" },
        { src: "/images/Carniba.png", alt: "Carniba" },
      ],
    },
    summary: {
      title: 'Broadcast Promotional Messages on WhatsApp',
      description: 'Enjoy a Limitless Broadcasting experience on WhatsApp',
      image: '/offer/summary.webp',
      features: [
        {
          title: 'Add CTAs. Drive 3x Conversions',
          description: 'Turn conversations into conversions with eye-catching CTA and Quick Reply buttons.'
        },
        {
          title: '8+ Powerful Messaging Categories',
          description: 'Send Promotions, Offers, Coupon codes, Carousels and more — Risk-Free!'
        },
        {
          title: 'WhatsApp Official Business API',
          description: 'Broadcast messages safely & effectively with the official WhatsApp Business API.'
        },
        {
          title: 'Schedule your WhatsApp Messages',
          description: 'Streamline your workflow — schedule broadcasts up to 2 months in advance.'
        },
      ]
    }
  }
  return (
    <div className='px-2 sm:px-4 md:px-6'>
      {offerData?.hero && <Hero data={offerData?.hero} />}
      {offerData?.clients && <Clients data={offerData?.clients} />}
      {offerData?.summary && <Summary data={offerData?.summary} />}
      {/* <WhyUs/> */}
      <MetaCertified />
      <Features />
      <Start />
      <AdvanceFeature />
      <Addons />
      <FAQ />
      <Testimonials />
    </div>
  )
}
