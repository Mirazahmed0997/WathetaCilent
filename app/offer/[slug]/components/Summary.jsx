import React from "react";
import { Megaphone, MessageCircle, Calendar, MousePointerClick } from "lucide-react";

export default function Summary() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 gap-10 items-center">
            <div>
                <div className="space-y-1.5">
                    <h1 className="text-3xl sm:text-5xl font-bold">
                        Broadcast Promotional Messages on WhatsApp
                    </h1>
                    <p className="text-center text-lg md:text-xl font-medium text-gray-600">
                        Enjoy a Limitless Broadcasting experience on WhatsApp
                    </p>
                </div>

                <div className="grid gap-2 mt-12">
                    {/* Card 1 */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl shadow-sm border bg-white">
                        <Megaphone className="w-10 h-10 text-green-600 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-semibold">8+ Powerful Messaging Categories</h3>
                            <p className="text-gray-600 text-xs">
                                Send Promotions, Offers, Coupon codes, Carousels and more — Risk-Free!
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl shadow-sm border bg-white">
                        <MousePointerClick className="w-10 h-10 text-green-600 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-semibold">Add CTAs. Drive 3x Conversions</h3>
                            <p className="text-gray-600 text-xs">
                                Turn conversations into conversions with eye-catching CTA and Quick Reply buttons.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl shadow-sm border bg-white">
                        <MessageCircle className="w-10 h-10 text-green-600 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-semibold">WhatsApp Official Business API</h3>
                            <p className="text-gray-600 text-xs">
                                Broadcast messages safely & effectively with the official WhatsApp Business API.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl shadow-sm border bg-white">
                        <Calendar className="w-10 h-10 text-green-600 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-semibold">Schedule your WhatsApp Messages</h3>
                            <p className="text-gray-600 text-xs">
                                Streamline your workflow — schedule broadcasts up to 2 months in advance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hero Section */}
            <div className="w-full flex flex-col items-center text-center">
                <img
                    src="/offer/summary.webp"
                    alt="WhatsApp Broadcast Summary"
                    className="rounded-2xl shadow-lg w-full max-h-[400px] object-cover"
                />
            </div>

            {/* CTA */}
            {/* <div className="mt-16 text-center">
                <button className="px-8 py-4 rounded-2xl text-lg font-semibold bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all">
                    Start for FREE
                </button>
                <p className="mt-4 text-gray-500 text-sm">No credit card required</p>
            </div> */}
        </section>
    );
}
