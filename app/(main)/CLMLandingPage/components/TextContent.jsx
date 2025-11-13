import React from 'react';

const TextContent = () => {
    return (
        <section className="w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6 sm:px-10 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                {/* ==== LEFT BOX ==== */}
                <div className="bg-indigo-600 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
                    <h3 className="text-2xl font-bold mb-3">AI-Powered Automation Builder
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                        Let AI handle repetitive communication.
                        Create intelligent automation that:
                        Sends personalized replies in real-time.
                        Schedules reminders and follow-ups.
                        Segments customers automatically based on behavior.
                        All without writing a single line of code.
                    </p>
                    {/* <button className="mt-6 px-5 py-2.5 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-indigo-50 transition">
                        Learn More →
                    </button> */}
                </div>

                {/* ==== RIGHT BOX ==== */}
                <div className="bg-pink-500 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
                    <h3 className="text-2xl font-bold mb-3">Click-to-WhatsApp Ad Integration
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                        Connect your Meta Ads directly to WhatsApp.
                        When users click, WaTheta’s automation greets them instantly, captures leads, and tags them in your CRM for effortless nurturing and remarketing.

                    </p>
                    {/* <button className="mt-6 px-5 py-2.5 bg-white text-pink-600 font-semibold rounded-lg shadow hover:bg-pink-50 transition">
                        Get Started →
                    </button> */}
                </div>

            </div>
        </section>
    );
};

export default TextContent;