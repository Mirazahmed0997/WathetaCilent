import FAQ from "../../offer/[slug]/components/FAQ";
import Benefits from "../../product/[slug]/components/Benefits";
import Clients from "../../product/[slug]/components/Clients";
import CoreFeatures from "../../product/[slug]/components/CoreFeatures";
import CTA from "../../product/[slug]/components/CTA";
import Features from "../../product/[slug]/components/Features";
import Hero from "../../product/[slug]/components/Hero";
import ProductCarousel from "../../product/[slug]/components/ProductCarousel";





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
        active: true,
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

export default function page({params}) {

    // const {slug} = params
    const product = productData;

    if (!product) return notFound();  
    
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

