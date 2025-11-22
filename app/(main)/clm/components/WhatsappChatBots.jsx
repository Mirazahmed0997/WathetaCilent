import Link from "next/link";

export default function WhatsappChatBots() {
    return (
        <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            {/* ===== LEFT CONTENT ===== */}
            <div className="flex-1 w-full max-w-xl text-center lg:text-left">
                {/* Badge */}
                <div className="inline-block bg-purple-100 text-purple-700 font-medium text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full mb-4">
                    Ready-to-Use WhatsApp Automation Templates
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                    Start automating in minutes with <br className="hidden sm:block" /> pre-built WhatsApp templates designed for:
                </h2>

              


                <ul className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0 list-disc list-inside space-y-2">
                    <li>
                        <strong>Lead Conversion</strong> – Instantly follow up with new leads and boost sales.
                    </li>
                    <li>
                        <strong>Cart Recovery</strong> – Bring back abandoned carts with personalized reminders.
                    </li>
                    <li>
                        <strong>Order Updates</strong> – Keep customers informed at every step.
                    </li>
                    <li>
                        Activate, customize, and launch — no coding required.
                    </li>
                </ul>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 mb-10">
                    <div className="bg-yellow-100 text-yellow-800 font-bold rounded-xl p-4 text-center">
                        <p className="text-xl sm:text-2xl mb-1">100%</p>
                        <p className="text-xs sm:text-sm font-medium">
                            Boost in First Response Time
                        </p>
                    </div>

                    <div className="bg-green-100 text-green-800 font-bold rounded-xl p-4 text-center">
                        <p className="text-xl sm:text-2xl mb-1">25%</p>
                        <p className="text-xs sm:text-sm font-medium">
                            Rise in Sales Through Instant Engagement
                        </p>
                    </div>

                    <div className="bg-purple-100 text-purple-800 font-bold rounded-xl p-4 text-center">
                        <p className="text-xl sm:text-2xl mb-1">30%</p>
                        <p className="text-xs sm:text-sm font-medium">
                            Improvement in Customer Satisfaction
                        </p>
                    </div>

                    <div className="bg-blue-100 text-blue-800 font-bold rounded-xl p-4 text-center">
                        <p className="text-xl sm:text-2xl mb-1">34%</p>
                        <p className="text-xs sm:text-sm font-medium">
                            Saved in Operational Costs Y-O-Y
                        </p>
                    </div>
                </div>


                  {/* Paragraph */}
                {/* <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                    Lead Conversion – Instantly follow up with new leads and boost sales.
                    Cart Recovery – Bring back abandoned carts with personalized reminders.
                </p> */}

                {/* Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <Link
                        href="#"
                        className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-50 transition"
                    >
                        Read More →
                    </Link>
                    <Link
                        href="#"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-indigo-700 transition"
                    >
                        Try for Free →
                    </Link>
                </div>
            </div>

            {/* ===== RIGHT IMAGE ===== */}
            <div className="flex-1 relative flex justify-center w-full">
                <div className="relative w-full max-w-lg h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] bg-white rounded-3xl shadow-xl flex items-center justify-center overflow-hidden">
                    <img
                        src="https://pickyassist.com/en/img/home-page-new/Keep-your-business-open-without-human.webp"
                        alt="WhatsApp Chatbot Demo"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </section>

    );
}
