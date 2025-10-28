"use client"

import * as React from "react"
import Link from "next/link"
import { BotMessageSquare, MessageCircleQuestionMark, ShoppingBag } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export default function Navbar({ products = [], industries = [], resources = [] }) {
  return (
    <nav className={'w-full h-16 px-10 fixed top-0 z-40 border-b bg-white/40 backdrop-blur-2xl shadow-sm flex items-center justify-between'}>
      {/* Logo */}
      <Link href="/" passHref aria-label="Home" className="hidden md:block">
        <img className="h-10 object-contain" src="/images/logo.png" alt="Watheta Logo" />
      </Link>

      <NavigationMenu viewport={false}>
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {Array.isArray(products) && products?.length > 0 && <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {products.map((product) => (
                  <ListItem
                    key={product.title}
                    title={product.title}
                    href={product.href}
                    Icon={product.icon}
                  >
                    {product.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>}

          {Array.isArray(industries) && industries?.length > 0 && <NavigationMenuItem>
            <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {industries.map((industry) => (
                  <ListItem
                    key={industry.title}
                    title={industry.title}
                    href={industry.href}
                    Icon={industry.icon}
                  >
                    {industry.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>}

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

          {Array.isArray(resources) && resources.length > 0 && (
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[350px] gap-2 md:w-[400px] lg:w-[500px]">
                  {resources.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      Icon={item.icon}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}

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
        <Link href="/pricing#pricingPlan" passHref aria-label="Get Started">
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
  Icon,
  ...props
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium flex items-center gap-2">
            {Icon && <Icon className="w-4 h-4 text-green-600" />}
            <span>{title}</span>
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
