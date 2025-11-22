'use client';
import React from 'react';

export default function VisualBotSection() {
    return (
        <section className="relative w-full bg-gradient-to-br from-white via-indigo-50 to-purple-50 py-16 px-6 md:px-14 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center justify-between gap-64">

                {/* ===== IMAGE COLUMN ===== */}
                <div className="relative flex justify-center w-full h-[22rem] sm:h-[25rem] md:h-[30rem]">
                    {/* LEFT IMAGE */}
                    <div className="absolute top-0 left-1/2 -translate-x-[55%] w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-white/60 rotate-[-8deg] z-10 bg-white flex items-center justify-center">
                        <img
                            src="https://didongviet.vn/dchannel/wp-content/uploads/2022/08/cach-tat-binh-luan-tren-facebook-didongviet-1.jpg"
                            alt="Fancy left"
                            className="object-contain w-full h-full"
                        />
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="absolute top-6 left-1/2 translate-x-[20%] w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/60 rotate-[10deg] z-[5] bg-white flex items-center justify-center">
                        <img
                            src="https://img.freepik.com/free-vector/chatbot-conversation-vectorart_78370-4107.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="Fancy right"
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>

                {/* ===== CONTENT COLUMN ===== */}
                <div className="text-center lg:text-left mt-10 lg:mt-0">

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Visual Bot Builder Access
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mb-6 max-w-lg mx-auto lg:mx-0">
                        Build intelligent workflows with a drag-and-drop automation builder.
                        Design message flows, define triggers, and connect actions visually — giving you full control over your customer journey.

                    </p>
                    <p className="text-indigo-600 font-semibold uppercase tracking-wider mb-2">
                        Facebook Comment-to-Inbox Automation
                    </p>

                    <p className="list-disc list-inside text-gray-700 text-left inline-block lg:block space-y-1 mb-6">
                        Turn Facebook engagement into real conversations.
                        Automatically send messages to users who comment on your posts or ads — using ready templates and Comment Automation to boost response rates and conversions.

                    </p>

                    <div>
                        <button className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition">
                            Get Started →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}