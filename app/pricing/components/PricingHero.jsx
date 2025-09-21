import React from 'react'

export default function PricingHero() {
    return (
        <section>
            {/* hero */}
            <div className="pricingBg">
                {/* meta logo */}
                <div className="flex justify-center items-center pricingHeroContentDiv py-5 lg:py-10 xl:py-10">
                    <div className="w-full">
                        <div className="flex justify-center pb-5">
                            <div className="flex items-center justify-center pricingMetaLogoDivMain">
                                <div className="pricingMetaLogoDiv">
                                    <img
                                        className="pricingMetaLogo"
                                        src="/images/metaLogo.png"
                                        alt=""
                                    />
                                </div>
                                <div className="ms-3">
                                    <p className="pricingOfficialText">Official Partner</p>
                                    <p className="metaBusinessText">Meta Business Solution</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <h1 className="pricingHeadline">
                                Simple, Transparent Pricing Plans
                            </h1>
                        </div>
                        <div className="">
                            <p className="text-center pricingPera py-2 mx-5 lg:mx-0 xl:mx-0 md:mx-16">
                                Choose the perfect plan for your business. Scale as you grow.
                            </p>
                        </div>
                        <div className="flex justify-center py-2 mx-5 lg:mx-5 xl:mx-5 md:mx-16">
                            <button className="flex items-center pricingWhatsAppText px-10 py-2 rounded-full">
                                {" "}
                                <span className="me-2">
                                    <img src="/images/tike.png" alt="" />
                                </span>{" "}
                                WhatsApp messaging at actual Meta rates, with less markup
                            </button>
                        </div>

                        <div className="mx-5 lg:mx-60 xl:mx-96 pt-6">
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                                    <div className="pricingHeorIconDiv">
                                        <img
                                            className="pricingHeorIcon"
                                            src="/images/group.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className="pricingHerogridCardPera ms-2">
                                        Dedicated Account Manager
                                    </p>
                                </div>

                                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                                    <div className="pricingHeorIconDiv">
                                        <img
                                            className="pricingHeorIcon"
                                            src="/images/pricing1000003911.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className="pricingHerogridCardPera ms-2">
                                        Enterprise-Grade Platform
                                    </p>
                                </div>

                                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                                    <div className="pricingHeorIconDiv">
                                        <img
                                            className="pricingHeorIcon"
                                            src="/images/headphone.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className="pricingHerogridCardPera ms-2">
                                        24/7 WhatsApp Support
                                    </p>
                                </div>

                                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                                    <div className="pricingHeorIconDiv">
                                        <img
                                            className="pricingHeorIcon"
                                            src="/images/erth.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className="pricingHerogridCardPera ms-2">
                                        Global Business Solution
                                    </p>
                                </div>

                                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                                    <div className="pricingHeorIconDiv">
                                        <img
                                            className="pricingHeorIcon"
                                            src="/images/sild.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className="pricingHerogridCardPera ms-2">
                                        End-to-End Encrypted
                                    </p>
                                </div>

                                <div className="pricingHerogridCardDiv flex justify-center items-center px-2 py-2 rounded-xl">
                                    <div className="pricingHeorIconDiv">
                                        <img
                                            className="pricingHeorIcon"
                                            src="/images/thander.png"
                                            alt=""
                                        />
                                    </div>
                                    <p className="pricingHerogridCardPera ms-2">
                                        Real-time Message Delivery
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* pricing */}
            {/* Limited time offer section */}
            <div className="mx-3 lg:mx-60 xl:mx-96 pt-6">
                <div className="lmitedBgDiv p-1 mx-5">
                    <h1 className="text-center text-sm text-white blink-background">
                        Limited Period Offer - Price Can Increase Anytime!
                    </h1>
                </div>
            </div>
        </section>
    )
}
