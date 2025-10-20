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
import { fetchDataAsServer } from '@/utils/axiosServer'
import apiConfig from '@/configs/api.config'

export default async function SocialPage({ params }) {
  const { slug } = await params;
  const offersDetails = await fetchDataAsServer(apiConfig?.GET_OFFER_BY_SLUG + slug)
  const offerData = {
    sections: [
      {
        type: 'hero', order: 1, active: true, data: {
          header: 'AI-Powered✨',
          title: 'Grow Your Business with the power of Facebook & Instagram API',
          description: [
            'Broadcast, Automate, Engage, Sell - Do Everything with the Smartest WhatsApp Engagement Platform',
            'Powered by meta Official APIs⚡',
          ],
          youtubeUrl: 'https://youtu.be/c1VinHqToUY?si=k0LpRozNVm1XkgSD'
        }
      },

      {
        type: 'clients', order: 2, active: true, data: {
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
      },

      {
        type: 'summary', order: 3, active: true, data: {
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
        },
      },

      {
        type: 'metaCertified', order: 4, active: true, data: {
          text: "100% Meta Approved Direct Integration"
        },
      },

      {
        type: 'features', order: 5, active: true, data: [
          {
            image: "/social/fb-chat.png",
            slug: "chatbot_for_instagram",
            title: "Facebook Messenger Chatbot",
            description:
              "No more waiting time , give answers 24 x 7 to your customers with our Advanced AI Powered Smart Replies.",
          },
          {
            image: "/social/insta-chat.png",
            slug: "chatbot_for_instagram",
            title: "Chatbot for Instagram",
            description:
              "Instagram is all about instant engagements — increase customer satisfaction with instant AI replies 24 x 7.",
          },
          {
            image: "/social/insta-story.png",
            slug: "facebook_messenger_chatbot",
            title: "Story Mentions",
            description:
              "Get notified whenever your brand is mentioned by your customers in their Instagram Stories.",
          },
        ]
      },

      {
        type: 'start', order: 6, active: true, data: ''
      },

      {
        type: 'advanceFeatures', order: 7, active: true, data: [
          { title: "Multiple Human Live Chat", desc1: "Have multiple team members to drive Live Chat Support on the Same WhatsApp Business Number.", desc2: "Filter Chats according to tags, campaigns and attributes for Smart Agent Chat Routing." },
          { title: "Powerful Analytics", desc1: "Get deep insights into your customer interactions and agent performance.", desc2: "Track KPIs and conversion funnels in real time." },
          { title: "Campaign Automation", desc1: "Automate WhatsApp campaigns with triggers, segments and scheduling.", desc2: "Save time and drive higher engagement automatically." },
          { title: "Smart Bot + Human Handover", desc1: "Let AI bots answer FAQs instantly.", desc2: "Seamlessly transfer to human agents when complex issues arise." },
          { title: "Multi-Channel Inbox", desc1: "Manage WhatsApp, Facebook, Instagram, and email in one place.", desc2: "No more juggling between apps and devices." },
          { title: "Data Security", desc1: "Keep your customer data safe with enterprise-grade security.", desc2: "GDPR-compliant and encrypted end-to-end." },
        ],
      },

      {
        type: 'addons', order: 8, active: true, data: [
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
        ],
      },

      {
        type: 'faqs', order: 9, active: true, data: [
          {
            question: "What is Watheta?",
            answer:
              "Watheta is a marketing and communication platform designed to help businesses connect with their customers via WhatsApp, Facebook, Instagram, and more — all in one unified inbox.",
          },
          {
            question: "How does Live Chat work on Watheta?",
            answer:
              "Multiple team members can manage live WhatsApp chats from a single business number. You can also filter chats by tags, campaigns, or customer attributes for smart agent routing.",
          },
          {
            question: "Can I automate my campaigns?",
            answer:
              "Yes! With Watheta you can schedule WhatsApp campaigns, create triggers, and use audience segmentation to deliver messages at the right time — automatically.",
          },
          {
            question: "Is Watheta secure?",
            answer:
              "Absolutely. Watheta follows enterprise-grade security protocols, ensuring your data is encrypted end-to-end and fully GDPR compliant.",
          },
          {
            question: "Do I need technical skills to integrate Watheta?",
            answer:
              "Not at all. Watheta offers ready-to-use integrations with CRMs, ERPs, and third-party tools. No complex setup required.",
          },
        ]
      },

      {
        type: 'testimonials', order: 10, active: true, data: [
          {
            name: "John Doe",
            role: "CEO, Example Corp",
            video: "/social/video/review.mp4",
          },
          {
            name: "Sarah Smith",
            role: "Marketing Manager, BrandX",
            video: "/social/video/review.mp4",
          },
          {
            name: "David Lee",
            role: "Entrepreneur",
            video: "/social/video/review.mp4",
          },
        ]
      },
    ],
  }

  const renderSection = (section) => {
    switch (section.type) {
      case "HERO":
        return <Hero data={section.data} />;
      case "CLIENTS":
        return <Clients data={section.data} />;
      case "SUMMARY":
        return <Summary data={section.data} />;
      case "FEATURES":
        return <Features data={section.data} />;
      case "START":
        return <Start />;
      case "META_CERTIFIED":
        return <MetaCertified data={section.data} />;
      case "ADDONS":
        return <Addons data={section.data} />;
      case "ADVANCE_FEATURES":
        return <AdvanceFeature data={section.data} />;
      case "FAQS":
        return <FAQ data={section.data} />;
      case "TESTIMONIALS":
        return <Testimonials data={section.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="px-2 sm:px-4 md:px-6">
      {/* {offersDetails && JSON.stringify(offersDetails.sections[0], null, 2)}
      {offerData && JSON.stringify(offerData.sections[0], null, 2)} */}
      {!offersDetails && <div className='w-full h-screen flex items-center justify-center'>
        <span>Offer not found !!</span>
      </div>}
      {offersDetails?.sections && offersDetails.sections
        .filter((section) => section.active)     // ✅ only active ones
        .sort((a, b) => a.order - b.order)      // ✅ sort by order
        .map((section, index) => (
          <div key={index}>{renderSection(section)}</div>
        ))}
    </div>
  )
}
