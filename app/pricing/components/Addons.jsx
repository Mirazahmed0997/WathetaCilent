import React from 'react'

export default function Addons() {
    return (
        <section className="additionalbg py-16">
            <div className="mx-5 lg:mx-48 xl:mx-48 md:mx-16">
                {/* headline */}
                <div className="text-center">
                    <h1 className="additonalText text-center">Additional Services</h1>
                    <p className="additonalPera pt-1">
                        Customize your plan with these add-ons
                    </p>
                </div>
                {/* card  */}
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 lg:gap-8 xl:gap-8 pt-10">
                    <div className="cardBgColor py-5 px-6 border rounded-lg">
                        {/* icon */}
                        <div className="additonalCardIconDiv pt-2">
                            <img
                                className="additonalCardIcon"
                                src="/images/group.png"
                                alt=""
                            />
                        </div>
                        <div className="py-4">
                            <h1 className="text-md lg:text-lg xl:text-lg md:text-md font-semibold">
                                Team Member
                            </h1>
                            <p className="aditionlCardPera pt-1">
                                Additional team member access
                            </p>
                            <p className="pt-2 aditionalPrice">
                                $5 <span className="aditonalpermaoth">/per month</span>
                            </p>
                        </div>
                    </div>
                    <div className="cardBgColor py-5 px-6 border rounded-lg">
                        {/* icon */}
                        <div className="additonalCardIconDiv pt-2">
                            <img
                                className="additonalCardIcon"
                                src="/images/massageIcon.png"
                                alt=""
                            />
                        </div>
                        <div className="py-4">
                            <h1 className="text-md lg:text-lg xl:text-lg md:text-md font-semibold">
                                Facebook Channel
                            </h1>
                            <p className="aditionlCardPera pt-1">
                                Additional social media channel
                            </p>
                            <p className="pt-2 aditionalPrice">
                                $5 <span className="aditonalpermaoth">/per month</span>
                            </p>
                        </div>
                    </div>
                    <div className="cardBgColor py-5 px-6 border rounded-lg">
                        {/* icon */}
                        <div className="additonalCardIconDiv pt-2">
                            <img
                                className="additonalCardIcon"
                                src="/images/Group 1010003922.png"
                                alt=""
                            />
                        </div>
                        <div className="py-4">
                            <h1 className="text-md lg:text-lg xl:text-lg md:text-md font-semibold">
                                External Actions
                            </h1>
                            <p className="aditionlCardPera pt-1">
                                Additional external actions
                            </p>
                            <p className="pt-2 aditionalPrice">
                                $5 <span className="aditonalpermaoth">/per 5000 actions</span>
                            </p>
                        </div>
                    </div>
                    <div className="cardBgColor py-5 px-6 border rounded-lg">
                        {/* icon */}
                        <div className="additonalCardIconDiv pt-2">
                            <img
                                className="additonalCardIcon"
                                src="/images/Group 1000003922 (1).png"
                                alt=""
                            />
                        </div>
                        <div className="py-4">
                            <h1 className="text-md lg:text-lg xl:text-lg md:text-md font-semibold">
                                Bot Triggers
                            </h1>
                            <p className="aditionlCardPera pt-1">Additional bot trigger</p>
                            <p className="pt-2 aditionalPrice">
                                $5 <span className="aditonalpermaoth">/per store</span>
                            </p>
                        </div>
                    </div>
                    <div className="cardBgColor py-5 px-6 border rounded-lg">
                        {/* icon */}
                        <div className="additonalCardIconDiv pt-2">
                            <img
                                className="additonalCardIcon"
                                src="/images/Group 1000003922 (2).png"
                                alt=""
                            />
                        </div>
                        <div className="py-4">
                            <h1 className="text-md lg:text-lg xl:text-lg md:text-md font-semibold">
                                Ecom Store
                            </h1>
                            <p className="aditionlCardPera pt-1">
                                Additional e-commerce store
                            </p>
                            <p className="pt-2 aditionalPrice">
                                $5 <span className="aditonalpermaoth">/per store</span>
                            </p>
                        </div>
                    </div>
                    <div className="cardBgColor py-5 px-6 border rounded-lg">
                        {/* icon */}
                        <div className="additonalCardIconDiv pt-2">
                            <img
                                className="additonalCardIcon"
                                src="/images/massageIcon.png"
                                alt=""
                            />
                        </div>
                        <div className="py-4">
                            <h1 className="text-md lg:text-lg xl:text-lg md:text-md font-semibold">
                                Instagram Channel
                            </h1>
                            <p className="aditionlCardPera pt-1">
                                Additional social media channel
                            </p>
                            <p className="pt-2 aditionalPrice">
                                $5 <span className="aditonalpermaoth">/per month</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
