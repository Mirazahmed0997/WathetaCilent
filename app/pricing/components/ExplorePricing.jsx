import React from 'react'

export default function ExplorePricing() {
    return (
        <section className="">
            <div className="text-center">
                <h1 className="font-semibold text-xl pt-5">
                    Country wise WhatsApp Conversation Pricing
                </h1>
                <div className="flex justify-center py-2 lg:py-3 xl:py-3 md:py-2">
                    <a
                        href="https://business.whatsapp.com/products/platform-pricing"
                        target="_blank"
                    >
                        <button className="get-started px-5 lg:px-6 xl:px-6 py-2 rounded-full flex items-center border HomeFeturescardShadow">
                            Explore Pricing{" "}
                            <img src="/images/rightarow.png" alt="" className="ms-3" />
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}
