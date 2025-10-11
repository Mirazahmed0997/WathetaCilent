"use client"

import * as React from "react"
import Link from "next/link"
import { BotMessageSquare, CircleCheckIcon, CircleHelpIcon, CircleIcon, MessageCircleQuestionMark, ShoppingBag } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const products = [
  {
    title: "WaTheta Solution",
    href: "/product/watheta-solution",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "E-commerce Panel",
    href: "/product/ecommerce-panel",
    description:
      "For sighted users to preview content available behind a link.",
  },
]

const industries = [
  {
    title: "All Industries",
    href: "/industry/all",
    description: "Industry-wise Use Cases and Solutions.",
  },
  {
    title: "E-commerce",
    href: "/industry/ecommerce-panel",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Education",
    href: "/industry/education",
    description:
      "Edtech, Coaches, Institutes.",
  },
  {
    title: "Finance & Insurance",
    href: "/industry/finance",
    description:
      "Fintech, Banking & more",
  },
]

export default function Navigation() {
  return (
    <nav className={'w-full h-16 px-10 sticky top-0 z-40 border-b bg-white/40 backdrop-blur-2xl shadow-sm flex items-center justify-between'}>
      {/* Logo */}
      <Link href="/" passHref aria-label="Home">
        <img className="h-10 object-contain" src="/images/logo.png" alt="Watheta Logo" />
      </Link>

      <NavigationMenu viewport={false}>
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {products.map((product) => (
                  <ListItem
                    key={product.title}
                    title={product.title}
                    href={product.href}
                  >
                    {product.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {industries.map((industry) => (
                  <ListItem
                    key={industry.title}
                    title={industry.title}
                    href={industry.href}
                  >
                    {industry.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/pricing">Price</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/features">Features</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-md gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="https://docs.watheta.com/" target="_blank" rel="noopener noreferrer" aria-label="Watheta Documentation">
                      <div className="font-medium flex items-center gap-2">
                        <MessageCircleQuestionMark className="w-4 h-4" />
                        <span>Help center</span>
                      </div>
                      <div className="text-muted-foreground">
                        Full documentation about WaTheta solution.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="https://docs.watheta.com/ecommerce" target="_blank" rel="noopener noreferrer" aria-label="Watheta Documentation">
                      <div className="font-medium flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" />
                        <span>E-commerce</span>
                      </div>
                      <div className="text-muted-foreground">
                        Getting Started With WhatsApp Commerce.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="https://docs.watheta.com/ai" target="_blank" rel="noopener noreferrer" aria-label="Watheta Documentation">
                      <div className="font-medium flex items-center gap-2">
                        <BotMessageSquare className="w-4 h-4" />
                        <span>AI</span>
                      </div>
                      <div className="text-muted-foreground">
                        How to Create An AI Chat Bot?
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/blog">Blog</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center space-x-2 w-auto">
        <Link href="https://dash.watheta.com/login" passHref aria-label="Login">
          <button className="hidden lg:block xl:block md:hidden">
            Log In
          </button>
        </Link>
        <Link href="https://dash.watheta.com/register" passHref aria-label="Get Started">
          <button className="get-started hidden lg:block xl:block md:hidden rounded-3xl text-sm">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
