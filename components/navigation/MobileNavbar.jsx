"use client"

import * as React from "react"
import Link from "next/link"
import {
    BotMessageSquare,
    Boxes,
    Building2,
    GraduationCap,
    Landmark,
    Menu,
    ShoppingBag,
} from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { Button } from "@/components/ui/button"

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
]

export default function MobileNavbar() {
    const [open, setOpen] = React.useState(false)

    // Close the sheet when a link is clicked
    const handleClose = () => setOpen(false)

    return (
        <div>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="w-full">
                    <div className="fixed top-0 z-40 flex items-center justify-between px-4 py-2 border-b bg-white/40 backdrop-blur-2xl shadow-sm">
                        <Link href="/" aria-label="Home" onClick={handleClose}>
                            <img className="h-8 object-contain" src="/images/logo.png" alt="Watheta Logo" />
                        </Link>
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Open menu"
                            onClick={() => setOpen(true)}
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </SheetTrigger>

                <SheetContent side="left" className="w-[85%] sm:w-[400px]">
                    <SheetHeader className="flex items-center justify-between">
                        <SheetTitle>
                            <Link href="/" className="flex items-center gap-2" onClick={handleClose}>
                                <img
                                    src="/images/logo.png"
                                    alt="Watheta Logo"
                                    className="h-8 object-contain"
                                />
                            </Link>
                        </SheetTitle>
                    </SheetHeader>

                    <nav className="mt-6 flex flex-col space-y-4 px-4 overflow-y-auto">
                        <Link href="/" className="text-base font-medium hover:text-green-600" onClick={handleClose}>
                            Home
                        </Link>

                        <Collapsible>
                            <CollapsibleTrigger className="w-full text-left text-base font-medium hover:text-green-600">
                                Products
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pl-4 mt-2 border-l space-y-4">
                                {products.map(({ title, href, icon: Icon }) => (
                                    <Link
                                        key={title}
                                        href={href}
                                        onClick={handleClose}
                                        className="flex items-start gap-2 text-sm text-gray-700 hover:text-green-600"
                                    >
                                        <Icon className="w-4 h-4 mt-1 text-green-600" />
                                        <span>{title}</span>
                                    </Link>
                                ))}
                            </CollapsibleContent>
                        </Collapsible>

                        <Collapsible>
                            <CollapsibleTrigger className="w-full text-left text-base font-medium hover:text-green-600">
                                Industries
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pl-4 mt-2 border-l space-y-4">
                                {industries.map(({ title, href, icon: Icon }) => (
                                    <Link
                                        key={title}
                                        href={href}
                                        onClick={handleClose}
                                        className="flex items-start gap-2 text-sm text-gray-700 hover:text-green-600"
                                    >
                                        <Icon className="w-4 h-4 mt-1 text-green-600" />
                                        <span>{title}</span>
                                    </Link>
                                ))}
                            </CollapsibleContent>
                        </Collapsible>

                        <Link href="/pricing" className="text-base font-medium hover:text-green-600" onClick={handleClose}>
                            Pricing
                        </Link>

                        <Link href="/features" className="text-base font-medium hover:text-green-600" onClick={handleClose}>
                            Features
                        </Link>

                        <Link href="/blog" className="text-base font-medium hover:text-green-600" onClick={handleClose}>
                            Blog
                        </Link>

                        <Link href="/contact" className="text-base font-medium hover:text-green-600" onClick={handleClose}>
                            Contact
                        </Link>

                        <div className="flex flex-col gap-2 pt-4 border-t mt-4">
                            <Link href="https://dash.watheta.com/login" onClick={handleClose}>
                                <Button variant="outline" className="w-full">
                                    Log In
                                </Button>
                            </Link>
                            <Link href="https://dash.watheta.com/register" onClick={handleClose}>
                                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}
