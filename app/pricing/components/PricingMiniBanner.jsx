'use client';

import { useEffect, useState } from "react";

export default function PricingMiniBanner({ isHideOld, setHideOld }) {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const today = new Date();
        const hideDate = new Date("2025-10-01"); // 1 October 2025

        // Show banner only if today is before hideDate
        if (today < hideDate) {
            setShowBanner(true);
        }
    }, []);

    if (!showBanner) return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Pricing Plans
            </h2>
            <p className="mt-3 text-lg text-gray-600">
                Choose the right plan that fits your needs.
            </p>
        </div>
    )

    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Upcoming Pricing Plans
            </h2>
            <p className="mt-3 text-lg text-gray-600">
                Choose the right plan that fits your needs.
            </p>
            <div className='w-full flex item-center justify-center'>
                <button onClick={() => setHideOld(p => !p)} className={`cursor-pointer text-sm ${isHideOld ? 'text-amber-500' : 'text-teal-500'}`}>
                    Show {isHideOld ? 'Previous' : 'Current'} Pricing
                </button>
            </div>
        </div>
    );
}
