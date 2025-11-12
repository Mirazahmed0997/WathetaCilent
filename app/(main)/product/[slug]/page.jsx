import React from "react";
import { notFound } from "next/navigation";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import ProductCarousel from "./components/ProductCarousel";
import CoreFeatures from "./components/CoreFeatures";
import CTA from "./components/CTA";
import Benefits from "./components/Benefits";


export const productData = {
  sections: [
    {
      type: "hero",
      active: true,
      order: 1,
      data: {
        name: "Field Sales Automation Software",
        tagline:
          "Empower your field sales team with smart automation and real-time insights.",
        heroImage:
          "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80",
      },
    },
    {
      type: "clients",
      active: false,
      order: 2,
      data: {
        title: "Founders & Marketers Love Us",
        description: "Trusted by top companies around the world",
        logos: [
          { src: "/images/aribnd.png", alt: "Airbnb" },
          { src: "/images/adobe.png", alt: "Adobe" },
          { src: "/images/BMW.png", alt: "BMW" },
          { src: "/images/canadian.png", alt: "Canadian" },
          { src: "/images/Carniba.png", alt: "Carniba" },
        ],
      },
    },
    {
      type: "features",
      active: true,
      order: 3,
      data: [
        {
          icon: "MapPin",
          title: "Geo-Based Attendance",
          description:
            "Allow your field team to mark attendance from anywhere with GPS-based verification.",
        },
        {
          icon: "Users",
          title: "Team Activity Tracking",
          description:
            "Track visits, check-ins, and daily progress in real time through a unified dashboard.",
        },
        {
          icon: "Smartphone",
          title: "Mobile CRM Access",
          description:
            "Give your field sales team instant access to leads, customers, and orders on mobile.",
        },
        {
          icon: "BarChart3",
          title: "Analytics Dashboard",
          description:
            "Get detailed insights on performance, conversions, and productivity metrics.",
        },
        {
          icon: "Timer",
          title: "Route Optimization",
          description:
            "Save time and fuel with smart routing suggestions based on live traffic data.",
        },
        {
          icon: "CheckCircle",
          title: "Custom Reports",
          description:
            "Create automated reports for attendance, performance, and visit summaries.",
        },
      ],
    },
    {
      type: "benefits",
      active: true,
      order: 4,
      data: [
        {
          title: "Boost Productivity",
          text: "Automate daily reporting and reduce manual data entry to save time.",
        },
        {
          title: "Improve Visibility",
          text: "Monitor every field activity and sales movement from a single dashboard.",
        },
        {
          title: "Enhance Customer Experience",
          text: "Ensure faster response and better service quality through real-time tracking.",
        },
      ],
    },
    {
      type: "faqs",
      active: true,
      order: 5,
      data: [
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
      ],
    },
  ],
};

export default async function ProductPage({ params }) {
  const { slug } = await params;
  
  const product = productData;

  if (!product) return notFound();

  // 🔹 Section renderer
  const renderSection = (section) => {
    switch (section.type.toUpperCase()) {
      case "HERO":
        return <Hero data={section.data} />;
      case "CLIENTS":
        return <Clients data={section.data} />;
      case "FEATURES":
        return <Features data={section.data} />;
      case "BENEFITS":
        return <Benefits data={section.data} />;
      case "FAQS":
        return <FAQ data={section.data} />;
      case "COREFEATURES":
        return <CoreFeatures data={section.data} />;
      case "PRODUCTCAROUSEL":
        return <ProductCarousel data={section.data} />;
      case "CTA":
        return <CTA data={section.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-24 max-w-screen overflow-hidden">
      {product.sections
        .filter((section) => section.active)
        .sort((a, b) => a.order - b.order)
        .map((section, idx) => (
          <div key={idx}>{renderSection(section)}</div>
        ))}
    </div>
  );
}










// import React from "react"
// import { notFound } from "next/navigation"
// import Image from "next/image"
// import { CheckCircle, MapPin, Users, BarChart3, Smartphone, Timer } from "lucide-react"
// import Hero from "./components/Hero"
// import Clients from "./components/Clients"
// import FAQ from "./components/FAQ"
// import Features from "./components/Features"
// import ProductCarousel from "./components/ProductCarousel"
// import CoreFeatures from "./components/CoreFeatures"

// const productData = {
//     hero: {
//         name: "Field Sales Automation Software",
//         tagline: "Empower your field sales team with smart automation and real-time insights.",
//         heroImage:
//             "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80",
//     },
//     clients: {
//         title: 'Founders & Marketers Love Us',
//         description: 'Trusted by top companies around the world',
//         logos: [
//             { src: "/images/aribnd.png", alt: "Airbnb" },
//             { src: "/images/adobe.png", alt: "Adobe" },
//             { src: "/images/BMW.png", alt: "BMW" },
//             { src: "/images/canadian.png", alt: "canadian" },
//             { src: "/images/Carniba.png", alt: "Carniba" },
//             { src: "/images/aribnd.png", alt: "Airbnb" },
//             { src: "/images/adobe.png", alt: "Adobe" },
//             { src: "/images/BMW.png", alt: "BMW" },
//             { src: "/images/canadian.png", alt: "canadian" },
//             { src: "/images/Carniba.png", alt: "Carniba" },
//         ],
//     },
//     features: [
//         {
//             icon: <MapPin className="w-10 h-10 text-green-600 mb-4" />,
//             title: "Geo-Based Attendance",
//             description:
//                 "Allow your field team to mark attendance from anywhere with GPS-based verification.",
//         },
//         {
//             icon: <Users className="w-10 h-10 text-green-600 mb-4" />,
//             title: "Team Activity Tracking",
//             description:
//                 "Track visits, check-ins, and daily progress in real time through a unified dashboard.",
//         },
//         {
//             icon: <Smartphone className="w-10 h-10 text-green-600 mb-4" />,
//             title: "Mobile CRM Access",
//             description:
//                 "Give your field sales team instant access to leads, customers, and orders on mobile.",
//         },
//         {
//             icon: <BarChart3 className="w-10 h-10 text-green-600 mb-4" />,
//             title: "Analytics Dashboard",
//             description:
//                 "Get detailed insights on performance, conversions, and productivity metrics.",
//         },
//         {
//             icon: <Timer className="w-10 h-10 text-green-600 mb-4" />,
//             title: "Route Optimization",
//             description:
//                 "Save time and fuel with smart routing suggestions based on live traffic data.",
//         },
//         {
//             icon: <CheckCircle className="w-10 h-10 text-green-600 mb-4" />,
//             title: "Custom Reports",
//             description:
//                 "Create automated reports for attendance, performance, and visit summaries.",
//         },
//     ],
//     benefits: [
//         {
//             title: "Boost Productivity",
//             text: "Automate daily reporting and reduce manual data entry to save time.",
//         },
//         {
//             title: "Improve Visibility",
//             text: "Monitor every field activity and sales movement from a single dashboard.",
//         },
//         {
//             title: "Enhance Customer Experience",
//             text: "Ensure faster response and better service quality through real-time tracking.",
//         },
//     ],
//     faqs: [
//         {
//             question: "What is Watheta?",
//             answer:
//                 "Watheta is a marketing and communication platform designed to help businesses connect with their customers via WhatsApp, Facebook, Instagram, and more — all in one unified inbox.",
//         },
//         {
//             question: "How does Live Chat work on Watheta?",
//             answer:
//                 "Multiple team members can manage live WhatsApp chats from a single business number. You can also filter chats by tags, campaigns, or customer attributes for smart agent routing.",
//         },
//         {
//             question: "Can I automate my campaigns?",
//             answer:
//                 "Yes! With Watheta you can schedule WhatsApp campaigns, create triggers, and use audience segmentation to deliver messages at the right time — automatically.",
//         },
//         {
//             question: "Is Watheta secure?",
//             answer:
//                 "Absolutely. Watheta follows enterprise-grade security protocols, ensuring your data is encrypted end-to-end and fully GDPR compliant.",
//         },
//         {
//             question: "Do I need technical skills to integrate Watheta?",
//             answer:
//                 "Not at all. Watheta offers ready-to-use integrations with CRMs, ERPs, and third-party tools. No complex setup required.",
//         },
//     ],
// }



// export default async function ProductPage({ params }) {
//     const { slug } = await params
//     const product = productData
//     if (!product) return notFound()

//     return (
//         <div className="space-y-24 max-w-screen overflow-hidden">
//             {/* Hero Section */}
//             <Hero data={product?.hero} />

//             {/* Clients / Logos */}
//             <Clients data={product?.clients} />
//             <Features/>
//             <ProductCarousel/>
//             <FAQ data={product?.faqs} />
//             <CoreFeatures data={product?.features}/>

//             {/* Features Section */}

//             {/* Benefits Section */}
            // <section className="bg-gray-50 py-20">
            //     <div className="container mx-auto px-6">
            //         <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
            //             How It Helps
            //         </h2>
            //         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            //             {product.benefits.map((b, idx) => (
            //                 <div
            //                     key={idx}
            //                     className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            //                 >
            //                     <h4 className="text-xl font-semibold text-green-600 mb-2">
            //                         {b.title}
            //                     </h4>
            //                     <p className="text-gray-700">{b.text}</p>
            //                 </div>
            //             ))}
            //         </div>
            //     </div>
            // </section>

            // {/* CTA Section */}
            // <section className="bg-green-600 py-20">
            //     <div className="container mx-auto px-6 text-center text-white">
            //         <h2 className="text-3xl font-semibold mb-6">
            //             Ready to supercharge your field sales?
            //         </h2>
            //         <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            //             Request a Demo
            //         </button>
            //     </div>
            // </section>
//         </div>
//     )
// }
