import React from 'react'

export default function CustomPricing() {
    return (
        <section className="mx-3 lg:mx-48 xl:mx-48 md:mx-16 pt-16 pb-16">
            <div className="joinOurNewsletterbgImgDiv">
                <img
                    className="joinOurNewsletterbgImg hidden lg:block xl:block"
                    src="/images/getstartbusiness.png"
                    alt=""
                />
                <img
                    className="joinOurNewsletterbgImg block lg:hidden xl:hidden"
                    src="/images/PhoneBgnewsletter.png"
                    alt=""
                />
                <div className="joinOurNewsletterContentDiv flex justify-center items-center">
                    <div className="">
                        <div className="flex justify-center">
                            <h1 className="text-white transformYourBusinessText text-center">
                                Are You looking for Custom or Corporate Package
                            </h1>
                        </div>
                        <p className="text-md lg:text-lg xl:text-lg text-white text-center pt-2 lg:pt-4 xl:pt-4 leading-relaxed mx-5 lg:mx-0 xl:mx-0">
                            Join 23,000+ businesses already growing with our platform
                        </p>

                        <div className="py-4">
                            <a href="https://wa.me/8801318231252?text=Looking for WaTheta Custom Package">
                                <button className="flex justify-center items-center readyToButton">
                                    Schedule A Call{" "}
                                    <span className="ms-2 lg:ms-3 xl:ms-3">
                                        <img src="/images/whitearrow.png" alt="" />
                                    </span>{" "}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
