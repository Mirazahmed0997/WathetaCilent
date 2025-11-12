"use client"

import {
  BotMessageSquare,
  Boxes,
  Building2,
  GraduationCap,
  Landmark,
  MessageCircleQuestionMark,
  ShoppingBag,
} from "lucide-react"

import MobileNavbar from './MobileNavbar'
import Navbar from './Navbar'

export default function Navigation() {
  const products = [
    {
      title: "WaTheta Solution",
      href: "/product/watheta-solution",
      description: "All-in-one communication automation and CRM solution.",
      icon: BotMessageSquare,
    },
    {
      title: "E-commerce Panel",
      href: "/product/ecommerce-panel",
      description: "Seamless e-commerce management with integrated chat & AI tools.",
      icon: ShoppingBag,
    },
  ]

  const industries = [
    {
      title: "All Industries",
      href: "/industry/all",
      description: "Industry-wise use cases and automation solutions.",
      icon: Boxes,
    },
    {
      title: "E-commerce",
      href: "/industry/ecommerce",
      description: "Smart retail automation for online stores.",
      icon: ShoppingBag,
    },
    {
      title: "Education",
      href: "/industry/education",
      description: "Edtech, institutions & coaching automation.",
      icon: GraduationCap,
    },
    {
      title: "Finance & Insurance",
      href: "/industry/finance",
      description: "Fintech, banking & insurance communication tools.",
      icon: Landmark,
    },
    {
      title: "Corporate",
      href: "/industry/corporate",
      description: "Internal automation and lead management tools.",
      icon: Building2,
    },
  ];

  const resources = [
    {
      title: "Help Center",
      href: "https://docs.watheta.com/",
      description: "Full documentation about WaTheta solution.",
      icon: MessageCircleQuestionMark,
    },
    {
      title: "E-commerce",
      href: "https://docs.watheta.com/ecommerce",
      description: "Getting Started With WhatsApp Commerce.",
      icon: ShoppingBag,
    },
    {
      title: "AI",
      href: "https://docs.watheta.com/ai",
      description: "How to Create An AI Chat Bot?",
      icon: BotMessageSquare,
    },
  ]

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden lg:block">
        <Navbar products={products || []} industries={industries || []} resources={resources || []} />
      </div>

      {/* Mobile Navbar */}
      <div className="block lg:hidden">
        <MobileNavbar products={products || []} industries={industries || []} resources={resources || []} />
      </div>
    </div>
  )
}
