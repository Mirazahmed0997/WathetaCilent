'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const menuItems = [
        {
            name: 'Products',
            categories: [
                {
                    title: 'Electronics',
                    subcategories: ['Phones', 'Laptops', 'Cameras', 'Accessories'],
                },
                {
                    title: 'Home Appliances',
                    subcategories: ['Refrigerators', 'Microwaves', 'Washing Machines'],
                },
                {
                    title: 'Furniture',
                    subcategories: ['Sofas', 'Beds', 'Tables', 'Chairs'],
                },
            ],
        },
        {
            name: 'Services',
            categories: [
                {
                    title: 'Installation',
                    subcategories: ['Electronics Setup', 'Furniture Assembly'],
                },
                {
                    title: 'Maintenance',
                    subcategories: ['AC Servicing', 'Plumbing', 'Electrical'],
                },
            ],
        },
        { name: 'About' },
        { name: 'Contact' },
    ];

    return (
        <nav className="bg-white shadow-md border-b">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="text-2xl font-bold text-green-600 cursor-pointer">Green</div>

                {/* Nav Links */}
                <ul className="hidden md:flex space-x-8">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-green-600 transition">
                                <span>{item.name}</span>
                                {item.categories && <ChevronDown size={16} />}
                            </button>

                            {/* Dropdown */}
                            {item.categories && activeDropdown === item.name && (
                                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg border rounded-lg p-6 w-[600px] z-50">
                                    <div className="grid grid-cols-3 gap-6">
                                        {item.categories.map((cat, i) => (
                                            <div key={i}>
                                                <h4 className="text-gray-900 font-semibold mb-2">{cat.title}</h4>
                                                <ul className="space-y-1">
                                                    {cat.subcategories.map((sub, j) => (
                                                        <li key={j}>
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 hover:text-green-600 text-sm transition"
                                                            >
                                                                {sub}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu (optional toggle for later) */}
                <div className="md:hidden text-gray-700 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
            </div>
        </nav>
    );
}
