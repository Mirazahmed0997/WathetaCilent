'use client';

import { useEffect, useState } from "react";

export default function LimitedOfferBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const today = new Date();
        const hideDate = new Date("2025-10-01"); // 1 October 2025

        // Show banner only if today is before hideDate
        if (today < hideDate) {
            setShowBanner(true);
        }
    }, []);

    if (!showBanner) return null;

    return (
        <div className="mx-3 lg:mx-60 xl:mx-96 pt-6">
            <div className="lmitedBgDiv p-1 mx-5">
                <h1 className="text-center text-sm text-white blink-background">
                    Limited-Time Offer Ended on 30 September 2025 - New Pricing Applies from 1 October 2025
                </h1>
            </div>
        </div>
    );
}
