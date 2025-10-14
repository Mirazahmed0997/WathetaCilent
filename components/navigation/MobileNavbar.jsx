"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, Dot, Menu } from "lucide-react"

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

export default function MobileNavbar({
    products = [],
    industries = [],
    resources = [],
}) {
    const [open, setOpen] = React.useState(false)

    // Close the sheet when a link is clicked
    const handleClose = () => setOpen(false)

    return (
        <div>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="w-full">
                    <div className="fixed top-0 z-40 flex items-center justify-between px-4 py-2 border-b bg-white/40 backdrop-blur-2xl shadow-sm w-full">
                        <Link href="/" aria-label="Home" onClick={handleClose}>
                            <img
                                className="h-8 object-contain"
                                src="/images/logo.png"
                                alt="Watheta Logo"
                            />
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
                        {/* Home */}
                        <Link
                            href="/"
                            className="text-base font-medium hover:text-green-600"
                            onClick={handleClose}
                        >
                            Home
                        </Link>

                        {/* Products */}
                        {Array.isArray(products) && products.length > 0 && (
                            <Collapsible>
                                <CollapsibleTrigger className="w-full flex items-center justify-between text-left text-base font-medium hover:text-green-600">
                                    <span>Products</span>
                                    <ChevronDown className="w-3 h-3"/>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="pl-4 mt-2 border-l space-y-4">
                                    {products.map(({ title, href, icon: Icon }) => (
                                        <Link
                                            key={title}
                                            href={href}
                                            onClick={handleClose}
                                            className="flex items-start gap-2 text-sm text-gray-700 hover:text-green-600"
                                        >
                                            {Icon && <Icon className="w-4 h-4 mt-1 text-green-600" />}
                                            <span>{title}</span>
                                        </Link>
                                    ))}
                                </CollapsibleContent>
                            </Collapsible>
                        )}

                        {/* Industries */}
                        {Array.isArray(industries) && industries.length > 0 && (
                            <Collapsible>
                                <CollapsibleTrigger className="w-full flex items-center justify-between text-left text-base font-medium hover:text-green-600">
                                    <span>Industries</span>
                                    <ChevronDown className="w-3 h-3"/>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="pl-4 mt-2 border-l space-y-4">
                                    {industries.map(({ title, href, icon: Icon }) => (
                                        <Link
                                            key={title}
                                            href={href}
                                            onClick={handleClose}
                                            className="flex items-start gap-2 text-sm text-gray-700 hover:text-green-600"
                                        >
                                            {Icon && <Icon className="w-4 h-4 mt-1 text-green-600" />}
                                            <span>{title}</span>
                                        </Link>
                                    ))}
                                </CollapsibleContent>
                            </Collapsible>
                        )}

                        {/* Static Links */}
                        <Link
                            href="/pricing"
                            className="text-base font-medium hover:text-green-600"
                            onClick={handleClose}
                        >
                            Pricing
                        </Link>

                        <Link
                            href="/features"
                            className="text-base font-medium hover:text-green-600"
                            onClick={handleClose}
                        >
                            Features
                        </Link>

                        {/* Resources */}
                        {Array.isArray(resources) && resources.length > 0 && (
                            <Collapsible>
                                <CollapsibleTrigger className="w-full flex items-center justify-between text-left text-base font-medium hover:text-green-600">
                                    <span>Resources</span>
                                    <ChevronDown className="w-3 h-3"/>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="pl-4 mt-2 border-l space-y-4">
                                    {resources.map(({ title, href, icon: Icon }) => (
                                        <Link
                                            key={title}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={handleClose}
                                            className="flex items-start gap-2 text-sm text-gray-700 hover:text-green-600"
                                        >
                                            {Icon && <Icon className="w-4 h-4 mt-1 text-green-600" />}
                                            <span>{title}</span>
                                        </Link>
                                    ))}
                                </CollapsibleContent>
                            </Collapsible>
                        )}

                        <Link
                            href="/blog"
                            className="text-base font-medium hover:text-green-600"
                            onClick={handleClose}
                        >
                            Blog
                        </Link>

                        <Link
                            href="/contact"
                            className="text-base font-medium hover:text-green-600"
                            onClick={handleClose}
                        >
                            Contact
                        </Link>

                        {/* Auth Buttons */}
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
