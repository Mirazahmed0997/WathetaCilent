"use client";

import { useState } from "react";
import { Tag } from "lucide-react";

export default async function CouponsSection() {
    
    //   const coupons = [
    //     {
    //       id: "1",
    //       code: "SAVE20",
    //       name: "Festival Offer",
    //       discountType: "PERCENT",
    //       discountValue: 20,
    //     },
    //     {
    //       id: "2",
    //       code: "BDT500",
    //       name: "New User Deal",
    //       discountType: "AMOUNT",
    //       discountValue: 500,
    //     },
    //     {
    //       id: "3",
    //       code: "WELCOME25",
    //       name: "Welcome Bonus",
    //       discountType: "PERCENT",
    //       discountValue: 25,
    //     },
    //     {
    //       id: "4",
    //       code: "MEGA1000",
    //       name: "Mega Discount",
    //       discountType: "AMOUNT",
    //       discountValue: 1000,
    //     },
    //   ];


    // const couponRes = await fetchDataAsServer(apiConfig?.GET_COUPON_LIST);
    // const coupons = Array.isArray(couponRes?.data) ? couponRes.data : (Array.isArray(couponRes) ? couponRes : []);


    return (
        <section className="py-16 bg-gray-50" id="coupons">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Our Available Coupons
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coupons.map((coupon) => (
                        <CouponCard key={coupon.id} coupon={coupon} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CouponCard({ coupon }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(coupon.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-2 mb-3">
                <Tag className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg font-semibold">{coupon.name}</h3>
            </div>

            <p className="text-gray-600 text-sm mb-1">
                <span className="font-semibold">Code:</span> {coupon.code}
            </p>

            <p className="text-gray-600 text-sm mb-1">
                <span className="font-semibold">Type:</span> {coupon.discountType}
            </p>

            <p className="text-gray-600 text-sm mb-4">
                <span className="font-semibold">Value:</span>{" "}
                {coupon.discountType === "PERCENT"
                    ? `${coupon.discountValue}%`
                    : `${coupon.discountValue} BDT`}
            </p>

            <button
                onClick={handleCopy}
                className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition text-sm font-medium"
            >
                {copied ? "Copied!" : "Copy Code"}
            </button>
        </div>
    );
}
