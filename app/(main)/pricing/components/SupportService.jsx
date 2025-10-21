import React from 'react'

export default function SupportService() {
    return (
        <section className="mx-5 lg:mx-48 xl:mx-48 md:md-16 py-10">
            {/* headline */}
            <div>
                <h1 className="dedicatedText">Dedicated Support Services</h1>
                <p className="dedicatedPera pt-1">Get expert help when you need it</p>
            </div>
            {/* card */}
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 pt-6 gap-2 lg:gap-6 xl:gap-6">
                <div className="bg-white p-3 lg:p-5 xl:p-5 border rounded-lg dedicatedCardDiv">
                    {/* icon div */}
                    <div className="dedicatedIconDiv">
                        <img
                            className="dedicatedIcon"
                            src="/images/Group 1030003922.png"
                            alt=""
                        />
                    </div>
                    {/* text */}
                    <div>
                        <h1 className="dedicatedcardHeadline py-4">
                            WABA, CRM, Inbox Support
                        </h1>
                        <p className="aditionalPrice">
                            $10 <span className="aditonalpermaoth">/per hour</span>
                        </p>
                    </div>
                </div>
                <div className="bg-white p-3 lg:p-5 xl:p-5 border rounded-lg dedicatedCardDiv">
                    {/* icon div */}
                    <div className="dedicatedIconDiv">
                        <img
                            className="dedicatedIcon"
                            src="/images/Group 1005003922.png"
                            alt=""
                        />
                    </div>
                    {/* text */}
                    <div>
                        <h1 className="dedicatedcardHeadline py-4">Ecommerce Support</h1>
                        <p className="aditionalPrice">
                            $20 <span className="aditonalpermaoth">/per hour</span>
                        </p>
                    </div>
                </div>
                <div className="bg-white p-3 lg:p-5 xl:p-5 border rounded-lg dedicatedCardDiv">
                    {/* icon div */}
                    <div className="dedicatedIconDiv">
                        <img
                            className="dedicatedIcon"
                            src="/images/Group 1004003922 (1).png"
                            alt=""
                        />
                    </div>
                    {/* text */}
                    <div>
                        <h1 className="dedicatedcardHeadline py-4">Bots Support</h1>
                        <p className="aditionalPrice">
                            $20 <span className="aditonalpermaoth">/per hour</span>
                        </p>
                    </div>
                </div>
                <div className="bg-white p-3 lg:p-5 xl:p-5 border rounded-lg dedicatedCardDiv">
                    {/* icon div */}
                    <div className="dedicatedIconDiv">
                        <img
                            className="dedicatedIcon"
                            src="/images/Group 1900003922.png"
                            alt=""
                        />
                    </div>
                    {/* text */}
                    <div>
                        <h1 className="dedicatedcardHeadline py-4">
                            Automations Support
                        </h1>
                        <p className="aditionalPrice">
                            $20 <span className="aditonalpermaoth">/per hour</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
