'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

// Lucide icons
import {
    Smartphone,
    Laptop,
    Camera,
    Headphones,
    Refrigerator,
    Microwave,
    WashingMachine,
    Sofa,
    BedDouble,
    Table,
    Armchair,
    Wrench,
    Cog,
    Plug,
    Info,
    Phone,
} from 'lucide-react'

// icon mapping
const iconMap = {
    Phones: Smartphone,
    Laptops: Laptop,
    Cameras: Camera,
    Accessories: Headphones,
    Refrigerators: Refrigerator,
    Microwaves: Microwave,
    'Washing Machines': WashingMachine,
    Sofas: Sofa,
    Beds: BedDouble,
    Tables: Table,
    Chairs: Armchair,
    'Electronics Setup': Plug,
    'Furniture Assembly': Wrench,
    'AC Servicing': Cog,
    Plumbing: Wrench,
    Electrical: Plug,
    About: Info,
    Contact: Phone,
}

export default function Navbar() {
    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'Pricing', link: '/pricing' },
        {
            name: 'Products',
            categories: [
                {
                    title: 'Electronics',
                    subcategories: [
                        { name: 'Phones', link: '/products/phones' },
                        { name: 'Laptops', link: '/products/laptops' },
                        { name: 'Cameras', link: '/products/cameras' },
                        { name: 'Accessories', link: '/products/accessories' },
                    ],
                },
                {
                    title: 'Home Appliances',
                    subcategories: [
                        { name: 'Refrigerators', link: '/products/refrigerators' },
                        { name: 'Microwaves', link: '/products/microwaves' },
                        { name: 'Washing Machines', link: '/products/washing-machines' },
                    ],
                },
                {
                    title: 'Furniture',
                    subcategories: [
                        { name: 'Sofas', link: '/products/sofas' },
                        { name: 'Beds', link: '/products/beds' },
                        { name: 'Tables', link: '/products/tables' },
                        { name: 'Chairs', link: '/products/chairs' },
                    ],
                },
            ],
        },
        {
            name: 'Services',
            categories: [
                {
                    title: 'Installation',
                    subcategories: [
                        { name: 'Electronics Setup', link: '/services/electronics-setup' },
                        { name: 'Furniture Assembly', link: '/services/furniture-assembly' },
                    ],
                },
                {
                    title: 'Maintenance',
                    subcategories: [
                        { name: 'AC Servicing', link: '/services/ac-servicing' },
                        { name: 'Plumbing', link: '/services/plumbing' },
                        { name: 'Electrical', link: '/services/electrical' },
                    ],
                },
            ],
        },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
    ]

    return (
        <nav className="w-full border-b bg-white shadow-sm">
            <div className="max-w-full mx-auto flex items-center justify-between px-6 h-16">
                {/* Logo */}
                <Link href="/" passHref aria-label="Home">
                        <img className="h-10 object-contain" src="/images/logo.png" alt="Watheta Logo" />
                </Link>

                {/* Navigation */}
                <NavigationMenu>
                    <NavigationMenuList>
                        {menuItems.map((item, index) => (
                            <NavigationMenuItem key={index}>
                                {item.categories ? (
                                    <>
                                        <NavigationMenuTrigger className="text-gray-700 font-medium hover:text-green-600">
                                            {item.name}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="grid grid-cols-3 gap-6 p-6 w-[650px]">
                                                {item.categories.map((cat, i) => (
                                                    <div key={i}>
                                                        <h4 className="text-gray-900 font-semibold mb-2">
                                                            {cat.title}
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {cat.subcategories.map((sub, j) => {
                                                                const Icon = iconMap[sub.name] || Plug
                                                                return (
                                                                    <ListItem
                                                                        key={j}
                                                                        href={sub.link}
                                                                        title={sub.name}
                                                                        icon={<Icon size={16} />}
                                                                    >
                                                                        Explore our {sub.name.toLowerCase()} collection.
                                                                    </ListItem>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link
                                            href={item.link}
                                            className={cn(
                                                'text-gray-700 font-medium hover:text-green-600 px-3 py-2 transition'
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    )
}

// Reusable ListItem component (from ShadCN docs)
function ListItem({ title, href, icon, children }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                    <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        {icon}
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
