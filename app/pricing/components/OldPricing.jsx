import React from 'react'

export default function OldPricing({ isToggle }) {
    return (
        <div>
            <section className={` mx-5 lg:mx-40 xl:mx-40 md:mx-16 transition-all duration-500 ease-in-out`}>
                {/* toggole button */}
                {/* <div className="flex justify-center py-10">
          <div className="pricingButtonTaggoleDiv ps-3 pe-1 py-1 space-x-3 rounded-full">
            <button
              onClick={() => setIsToggle("month")}
              className={` px-5 py-1 rounded-full ${
                isToggle === "month" && "pricingToggoleButton"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setIsToggle("year")}
              className={`ps-5 pe-1 py-1 rounded-full ${
                isToggle === "year" && "pricingToggoleButton"
              }`}
            >
              Yearly
              <span className="saveText border rounded-full ms-1">
                {" "}
                <span>save 15%</span>{" "}
              </span>
            </button>
            
          </div>
        </div> */}
                {/* new toggole */}
                {/* pricing card section */}
                <section className="pt-5 pb-10 hidden lg:block xl:block">
                    <div className="grid grid-cols-4 items-center gap-5">
                        <div>
                            <h1 className="pricingFreaturesText">Features</h1>
                        </div>
                        <div className="silverPlanDiv flex items-center justify-center text-center">
                            <div>
                                <h1 className="packagePlaneNameText">Silver Plan</h1>

                                <div className="pricingTKText">
                                    {isToggle === "month" ? (
                                        <div>
                                            <p className="thougtText">৳ 9000</p>
                                            <p>৳ 5999</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="thougtText">$ 75</p>
                                            <p>$ 50</p>
                                        </div>
                                    )}
                                </div>
                                <p className="text-xs opacity-60">
                                    {isToggle === "month" ? "Per 3 Months" : "Per 3 Months"}
                                </p>
                                {/* <p className="text-xs opacity-60">
                  {isToggle === "month" ? "With one time setup charge 1000 BDT" : ""}
                </p> */}
                                <a href="https://dash.watheta.com/register" target="_blank">
                                    <button className="text-sm text-white bg-green-500 px-4 py-1 rounded-full mt-2 border cardHover">
                                        Sign Up Now
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="pricing-card -mt-3">
                            <div className="pricing-header">Recommended</div>
                            <div className="pricing-body">
                                <h1 className="packagePlaneNameText pt-0">Gold Plan</h1>
                                <div className="pricingTKText">
                                    {" "}
                                    {isToggle === "month" ? (
                                        <div>
                                            <p className="thougtText">৳ 18000</p>
                                            <p>৳ 14999</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="thougtText me-2">৳ 150</p>
                                            <p>$ 118</p>
                                        </div>
                                    )}
                                </div>
                                <p className="text-xs opacity-60">
                                    {isToggle === "month" ? "Per 6 Months" : "Per 6 Months"}
                                </p>
                                {/* <p className="text-xs opacity-60">
                  {isToggle === "month" ? "With one time setup charge 1000 BDT" : ""}
                </p> */}
                                <button className="text-sm text-white bg-green-500 px-4 py-1 rounded-full mt-2 border cardHover">
                                    Sign Up Now
                                </button>
                            </div>
                        </div>
                        <div className="platinumPlanDiv flex items-center justify-center text-center">
                            <div>
                                <h1 className="packagePlaneNameText">Platinum Plan V1</h1>
                                <div className="pricingTKText">
                                    {" "}
                                    {isToggle === "month" ? (
                                        <div>
                                            <p className="thougtText me-2">৳ 64999</p>
                                            <p>৳ 24999</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="thougtText me-2">$ 520</p>
                                            <p>$ 210</p>
                                        </div>
                                    )}{" "}
                                </div>
                                <p className="text-xs opacity-60">
                                    {isToggle === "month" ? "Per Yearly" : "Per Yearly"}
                                </p>
                                {/* <p className="text-xs opacity-60">
                  {isToggle === "month" ? "With one time setup charge 1000 BDT" : ""}
                </p> */}
                                <button className="text-sm text-white bg-green-500 px-4 py-1 rounded-full mt-2 border cardHover">
                                    Sign Up Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* discriction */}
                <section className="pb-20 hidden lg:block xl:block">
                    <div className="grid grid-cols-4">
                        <div className="">
                            <div className="border-b flex items-end">
                                <h1 className="mb-2 text-lg feturesHead pt-4">CRM Features</h1>
                            </div>
                            <div className="feturesTexts">
                                <p className="border-b featuresTextPadding flex items-center">
                                    WhatsApp API Channel{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                WhatsApp API Channel:
                                            </span>{" "}
                                            <br /> Connect to WhatsApp Business API for seamless
                                            communication with customers.
                                        </span>{" "}
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    Contacts in CRM{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                Contacts in CRM:
                                            </span>{" "}
                                            <br /> Store and manage customer data in one place for
                                            easy access and organization.
                                        </span>{" "}
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    Team Members{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow">
                                            <span className="font-semibold space-y-5">
                                                Team Members:
                                            </span>{" "}
                                            <br /> Add and collaborate with team members to enhance
                                            customer support and communication.
                                        </span>{" "}
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    WhatsApp Conversations Markup{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                WhatsApp Conversations Markup:
                                            </span>{" "}
                                            <br /> Enjoy WhatsApp conversations at Meta’s actual
                                            rates, without additional markup.
                                        </span>{" "}
                                    </span>
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="border-b featuresTextPadding flex items-center">
                                    <span className="tex-2xl feturesHead pt-4">
                                        Ecommerce Features
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    WhatsApp Commerce Store{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                WhatsApp Commerce Store:
                                            </span>{" "}
                                            <br /> Set up a fully integrated e-commerce store within
                                            WhatsApp for easy transactions
                                        </span>{" "}
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    Products Limit{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                Products Limit:
                                            </span>{" "}
                                            <br /> Manage up to the specified number of products in
                                            your WhatsApp commerce store.
                                        </span>{" "}
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    Orders Limit{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                Orders Limit:
                                            </span>{" "}
                                            <br /> Handle a set number of orders in the system each
                                            month for efficient tracking.
                                        </span>{" "}
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    Abandoned Carts{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                Abandoned Carts:
                                            </span>{" "}
                                            <br /> Retrieve and follow up with customers who leave
                                            items in their carts without completing the purchase.
                                        </span>{" "}
                                    </span>
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg feturesHead pt-4">
                                        Bots & Automation
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    Bot Building Blocks{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                Bot Building Blocks:
                                            </span>{" "}
                                            <br /> Create custom automation workflows using intuitive
                                            building blocks to enhance user engagement.
                                        </span>{" "}
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    Bot/Automation Triggers{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                Bot/Automation Triggers:
                                            </span>{" "}
                                            <br /> Set triggers that automatically activate actions in
                                            your automation processes.
                                        </span>{" "}
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    External Actions{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                External Actions:
                                            </span>{" "}
                                            <br /> Automate external actions like sending emails or
                                            updating databases to enhance customer interaction.
                                        </span>{" "}
                                    </span>
                                </p>
                            </div>

                            {/* service */}
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg feturesHead pt-4">Support</span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    WABA & CRM SLA{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                WABA & CRM SLA:
                                            </span>{" "}
                                            <br /> Guaranteed response and resolution times for
                                            WhatsApp API and CRM-related issues.
                                        </span>{" "}
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    Bot/Automation Support{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                Bot/Automation Support:
                                            </span>{" "}
                                            <br /> Access support for troubleshooting or improving
                                            your bots and automation workflows.
                                        </span>{" "}
                                    </span>
                                </p>
                            </div>

                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg feturesHead pt-4">
                                        Technical Limits
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    Messages/Second{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                Messages/Second:
                                            </span>{" "}
                                            <br /> The limit on the number of messages that can be
                                            sent per second, ensuring system stability.
                                        </span>{" "}
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    Monthly FUP Limit{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                Monthly FUP Limit:
                                            </span>{" "}
                                            <br /> The Fair Usage Policy limit for monthly usage,
                                            helping to manage resources effectively.
                                        </span>{" "}
                                    </span>
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg feturesHead pt-4">
                                        Social Media Channels (Add-ons)
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    <span className="priceingFacebbokIconDiv me-1">
                                        <img
                                            className="priceingFacebbokIcon"
                                            src="/images/communication_15047435.png"
                                            alt=""
                                        />
                                    </span>{" "}
                                    Facebook{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">Facebook:</span>{" "}
                                            <br /> Facebook Business page
                                        </span>{" "}
                                    </span>
                                </p>
                                <p className="featuresTextPadding border-b flex items-center">
                                    <span className="priceingFacebbokIconDiv me-1">
                                        <img
                                            className="priceingFacebbokIcon"
                                            src="/images/instagram_2111463.png"
                                            alt=""
                                        />
                                    </span>
                                    Instagram{" "}
                                    <span className="iIcon ps-1 cursor-pointer">
                                        {" "}
                                        ⓘ{" "}
                                        <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                            <span className="font-semibold space-y-5">
                                                Instagram:
                                            </span>{" "}
                                            <br /> Instragram Business profile
                                        </span>{" "}
                                    </span>
                                </p>
                            </div>
                        </div>
                        {/* silver */}
                        <div className="">
                            <div className="text-white border-b">
                                <h1 className="mb-2 text-lg feturesHead"></h1>
                            </div>
                            <div className="featuresDiscription">
                                <p className=" flex items-center border-b featuresTextPadding border-t">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1 WhatsApp API Channel
                                </p>
                                <p className=" flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    200k Contacts
                                </p>
                                <p className=" flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1 Team Members
                                </p>
                                <p className=" flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    10% markup on WhatsApp conversations
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white"></span>
                                </p>
                                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1 WhatsApp Commerce Store
                                </p>
                                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    100 Products
                                </p>
                                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    100 Orders
                                </p>
                                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    100 Abandoned Carts
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white"></span>
                                </p>
                                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    Do It Yourself
                                </p>
                                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1 Million Bot Triggers
                                </p>
                                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    200 External Actions
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white"></span>
                                </p>
                                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    Support in 1-3 Working Days
                                </p>
                                <p className="featuresDiscription flex items-center border-b featuresTextPadding text-red-500">
                                    <span className="me-2">
                                        <img src="/images/SVG.png" alt="" />
                                    </span>
                                    No Bot / Automation Support
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white"></span>
                                </p>
                                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    20 Messages / Second Limit
                                </p>
                                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    No Conv Monthly FUP Limit
                                </p>
                            </div>
                            {/* for social */}
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white"></span>
                                </p>
                                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1 Facebook Page
                                </p>
                                <p className="featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1 Instagram Page
                                </p>
                            </div>
                        </div>
                        {/* gold */}
                        <div className="border border-green-500 rounded-xl">
                            <div className="text-white border-b">
                                <h1 className="mb-2 text-lg feturesHead"></h1>
                            </div>
                            <div className="featuresDiscription">
                                <p className="ps-3 flex items-center border-b featuresTextPadding border-t">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    3 WhatsApp API Channel
                                </p>
                                <p className="ps-3 flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1 Milion Contacts
                                </p>
                                <p className="ps-3 flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    3 Team Members
                                </p>
                                <p className="ps-3 flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    10% markup on WhatsApp conversations
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="ps-3 border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white"></span>
                                </p>
                                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1 WhatsApp Commerce Store
                                </p>
                                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1000 Products
                                </p>
                                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1000 Orders
                                </p>
                                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1000 Abandoned Carts
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className=" spasingHeght flex items-center"></p>
                                <p className="ps-3 border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white"></span>
                                </p>
                                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    Upto 30 Blocks Bot Building
                                </p>
                                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    2 Million Bots / Automations Triggers
                                </p>
                                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    500 External Actions in Bots
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="ps-3 border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white"></span>
                                </p>
                                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    Support In 24 Working Hours
                                </p>
                                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    3 Bots / Automations Debugging
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="ps-3 spasingHeght flex items-center"></p>
                                <p className="border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white"></span>
                                </p>
                                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    40 Messages / Second Limit
                                </p>
                                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    No Conv Monthly FUP Limit
                                </p>
                                <p className="featuresDiscription flex items-center featuresTextPadding"></p>
                            </div>
                            {/* for social */}
                            <div className="feturesTexts">
                                <p className="ps-3 spasingHeght flex items-center"></p>
                                {/* <p className="border-b featuresTextPadding flex items-center">
                  <span className="tex-lg text-white"></span>
                </p> */}
                                <p className="ps-3 featuresDiscription flex items-center border-t border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    2 Facebook Page
                                </p>
                                <p className="ps-3 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    2 Instagram Page
                                </p>
                                <p className="featuresDiscription flex items-center featuresTextPadding"></p>
                            </div>
                        </div>
                        {/* platimun */}
                        <div className="">
                            <div className="text-white border-b-2">
                                <h1 className="mb-2 text-lg feturesHead"></h1>
                            </div>
                            <div className="featuresDiscription">
                                <p className="ps-2 flex items-center border-b border-t featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    5 WhatsApp API Channel
                                </p>
                                <p className="ps-2 flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1 Milion Contacts
                                </p>
                                <p className="ps-2 flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    5 Team Members
                                </p>
                                <p className="ps-2 flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    5% markup on WhatsApp conversations
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white">Ecommerce Features</span>
                                </p>
                                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1 WhatsApp Commerce Store
                                </p>
                                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    5000 Products
                                </p>
                                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    5000 Orders
                                </p>
                                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    5000 Abandoned Carts
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="ps-2 border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white">Ecommerce Features</span>
                                </p>
                                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    Upto 150 Blocks Bot Building
                                </p>
                                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    10 Million Bots / Automations Triggers
                                </p>
                                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    1000 External Actions in Bots
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="ps-2 spasingHeght flex items-center"></p>
                                <p className="ps-2 border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white"></span>
                                </p>
                                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    Support In 6 Working Hours
                                </p>
                                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    10 Bots / Automations Debugging
                                </p>
                            </div>
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="ps-2 border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white"></span>
                                </p>
                                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    100 Messages / Second Limit
                                </p>
                                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    No Conv Monthly FUP Limit
                                </p>
                            </div>
                            {/* for social */}
                            <div className="feturesTexts">
                                <p className="spasingHeght flex items-center"></p>
                                <p className="ps-2 border-b featuresTextPadding flex items-center">
                                    <span className="tex-lg text-white"></span>
                                </p>
                                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    2 Facebook Page
                                </p>
                                <p className="ps-2 featuresDiscription flex items-center border-b featuresTextPadding">
                                    <span className="me-2">
                                        <img src="/images/greenTik.png" alt="" />
                                    </span>
                                    2 Instagram Page
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            {/* explore pricing */}
            {/* pricing for phone */}
            <section className={`mx-5 md:mx-16 block lg:hidden xl:hidden`}>
                <div className="pb-10 grid grid-cols-1">
                    {/* price dive */}
                    {/* silver */}
                    <div>
                        <div className="silverPlanDiv flex items-center justify-center text-center">
                            <div>
                                <h1 className="packagePlaneNameText">Silver Plan</h1>

                                <div className="pricingTKText">
                                    {isToggle === "month" ? (
                                        <div>
                                            <p className="thougtText">৳ 9000</p>
                                            <p>৳ 5999</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="thougtText">$ 75</p>
                                            <p>$ 50</p>
                                        </div>
                                    )}
                                </div>
                                <p className="text-xs opacity-60">
                                    {isToggle === "month" ? "Per 3 Months" : "Per 3 Months"}
                                </p>
                                {/* <p className="text-xs opacity-60">
                  {isToggle === "month" ? "With one time setup charge 1000 BDT" : ""}
                </p> */}
                                <button className="text-sm text-white bg-green-500 px-4 py-1 rounded-full mt-2 border cardHover">
                                    Sign Up Now
                                </button>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-4">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        CRM Features
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        WhatsApp API Channel{" "}
                                        <span className="iIcon ps-0 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Monthly FUP Limit:
                                                </span>{" "}
                                                <br /> The Fair Usage Policy limit for monthly usage,
                                                helping to manage resources effectively.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1 WhatsApp API Channel
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding">
                                        Contacts in CRM{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Contacts in CRM:
                                                </span>{" "}
                                                <br /> The Fair Usage Policy limit for monthly usage,
                                                helping to manage resources effectively.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        200k Contacts
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding">
                                        Team Members{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Team Members:
                                                </span>{" "}
                                                <br /> Add and collaborate with team members to enhance
                                                customer support and communication.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1 Team Members
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className=" featuresTextPadding">
                                        WhatsApp Conversations Markup{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    WhatsApp Conversations Markup:
                                                </span>{" "}
                                                <br /> Enjoy WhatsApp conversations at Meta’s actual
                                                rates, without additional markup.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        10% markup on WhatsApp conversations
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        Ecommerce Features
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding flex">
                                        WhatsApp Commerce Store{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    WhatsApp Commerce Store:
                                                </span>{" "}
                                                <br /> Set up a fully integrated e-commerce store within
                                                WhatsApp for easy transactions.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1 WhatsApp Commerce Store
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Products Limit{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Products Limit:
                                                </span>{" "}
                                                <br /> Enjoy WhatsApp conversations at Meta’s actual
                                                rates, without additional markup.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        100 Products
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Orders Limit{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Orders Limit:
                                                </span>{" "}
                                                <br /> Handle a set number of orders in the system each
                                                month for efficient tracking.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        100 Orders
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 ">
                                    <p className=" featuresTextPadding flex items-center">
                                        Abandoned Carts{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Abandoned Carts:
                                                </span>{" "}
                                                <br /> Retrieve and follow up with customers who leave
                                                items in their carts without completing the purchase.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        100 Abandoned Carts
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        Bots & Automation
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Bot Building Blocks
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Bot Building Blocks:
                                                </span>{" "}
                                                <br /> Create custom automation workflows using
                                                intuitive building blocks to enhance user engagement.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        Do It Yourself
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <div className="flex">
                                        <p className=" featuresTextPadding">
                                            Bot/Automation Triggers{" "}
                                            <span className="iIcon ps-1 cursor-pointer flex items-center">
                                                {" "}
                                                ⓘ{" "}
                                                <span className="iIconText border bg-white pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                    <span className="font-semibold space-y-5">
                                                        Bot/Automation Triggers:
                                                    </span>{" "}
                                                    <br /> Set triggers that automatically activate
                                                    actions in your automation processes.
                                                </span>{" "}
                                            </span>
                                        </p>
                                    </div>

                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1 Million Bot Triggers
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        External Actions{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    External Actions:
                                                </span>{" "}
                                                <br /> Automate external actions like sending emails or
                                                updating databases to enhance customer interaction.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        200 External Actions
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    {/* <p className=" featuresTextPadding flex items-center">
                    Abandoned Carts{" "}
                    <span className="iIcon ps-1 cursor-pointer flex items-center">
                      {" "}
                      ⓘ{" "}
                      <span className="iIconText border bg-white pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                        <span className="font-semibold space-y-5">
                          Abandoned Carts:
                        </span>{" "}
                        <br /> Automate external actions like sending emails or
                        updating databases to enhance customer interaction.
                      </span>{" "}
                    </span>
                  </p> */}
                                    {/* <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    5000 Abandoned Carts
                  </p> */}
                                </div>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">Support</h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        WABA & CRM SLA{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    WABA & CRM SLA:
                                                </span>{" "}
                                                <br /> Guaranteed response and resolution times for
                                                WhatsApp API and CRM-related issues.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        Support in 1-3 Working Days
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className=" featuresTextPadding">
                                        Bot/Automation Support{" "}
                                        <span className="iIcon ps-0 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Bot/Automation Support:
                                                </span>{" "}
                                                <br /> Access support for troubleshooting or improving
                                                your bots and automation workflows.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding text-red-500">
                                        <span className="me-2">
                                            <img src="/images/svg.png" alt="" />
                                        </span>
                                        No Bot / Automation Support
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        Technical Limits
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Messages/Second{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Messages/Second:
                                                </span>{" "}
                                                <br /> The limit on the number of messages that can be
                                                sent per second, ensuring system stability.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        20 Messages / Second Limit
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className=" featuresTextPadding flex items-center">
                                        Monthly FUP Limit{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Monthly FUP Limit:
                                                </span>{" "}
                                                <br /> The Fair Usage Policy limit for monthly usage,
                                                helping to manage resources effectively.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding ">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        No Conv Monthly FUP Limit
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* facebook phone */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        Social Media Channels (Add-ons)
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className="featuresTextPadding border-b flex items-center">
                                        <span className="priceingFacebbokIconDiv me-1">
                                            <img
                                                className="priceingFacebbokIcon"
                                                src="/images/communication_15047435.png"
                                                alt=""
                                            />
                                        </span>{" "}
                                        Facebook{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                                <span className="font-semibold space-y-5">
                                                    Facebook:
                                                </span>{" "}
                                                <br /> Facebook Business page
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1 Facebook Page
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="featuresTextPadding border-b flex items-center">
                                        <span className="priceingFacebbokIconDiv me-1">
                                            <img
                                                className="priceingFacebbokIcon"
                                                src="/images/instagram_2111463.png"
                                                alt=""
                                            />
                                        </span>
                                        Instagram{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                                <span className="font-semibold space-y-5">
                                                    Instagram:
                                                </span>{" "}
                                                <br /> Instragram Business profile
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding border-b">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1 Instagram Page
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* gold */}
                    <div className="pt-10">
                        <div className="pricing-card">
                            <div className="pricing-header">Recommended</div>
                            <div className="pricing-body">
                                <h1 className="packagePlaneNameText pt-1">Gold Plan</h1>
                                <div className="pricingTKText">
                                    {isToggle === "month" ? (
                                        <div>
                                            <p className="thougtText">৳ 18000</p>
                                            <p>৳ 14999</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="thougtText">৳ 150</p>
                                            <p>$ 118</p>
                                        </div>
                                    )}
                                </div>
                                <p className="text-xs opacity-60">
                                    {isToggle === "month" ? "Per 6 Months" : "Per 6 Months"}
                                </p>
                                {/* <p className="text-xs opacity-60">
                  {isToggle === "month" ? "With one time setup charge 1000 BDT" : ""}
                </p> */}
                                <button className="text-sm text-white bg-green-500 px-4 py-1 rounded-full mt-2 border cardHover">
                                    Sign Up Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" border border-green-500 rounded-lg mt-10 p-2">
                        {/* details */}
                        <div className="pt-4">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        CRM Features
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding">
                                        WhatsApp API Channel{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    WhatsApp API Channel
                                                </span>{" "}
                                                <br /> Connect to WhatsApp Business API for seamless
                                                communication with customers.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        3 WhatsApp API Channel
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Contacts in CRM{" "}
                                        <span className="iIcon ps-1 cursor-pointer ">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Contacts in CRM
                                                </span>{" "}
                                                <br /> Store and manage customer data in one place for
                                                easy access and organization.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1 Milion Contacts
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Team Members{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-0 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Team Members
                                                </span>{" "}
                                                <br /> Add and collaborate with team members to enhance
                                                customer support and communication.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        3 Team Members
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className=" featuresTextPadding">
                                        WhatsApp Conversations Markup{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    WhatsApp Conversations Markup
                                                </span>{" "}
                                                <br /> Enjoy WhatsApp conversations at Meta’s actual
                                                rates, without additional markup.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        5% markup on WhatsApp conversations
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        Ecommerce Features
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding flex">
                                        WhatsApp Commerce Store{" "}
                                        <span className="iIcon ps-0 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    WhatsApp Commerce Store
                                                </span>{" "}
                                                <br />
                                                Set up a fully integrated e-commerce store within
                                                WhatsApp for easy transactions.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1 WhatsApp Commerce Store
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Products Limit{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Products Limit
                                                </span>{" "}
                                                <br /> Manage up to the specified number of products in
                                                your WhatsApp commerce store.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1000 Products
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Orders Limit{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Orders Limit
                                                </span>{" "}
                                                <br />
                                                Handle a set number of orders in the system each month
                                                for efficient tracking.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1000 Orders
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 ">
                                    <p className=" featuresTextPadding flex items-center">
                                        Abandoned Carts{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Abandoned Carts
                                                </span>{" "}
                                                <br />
                                                Retrieve and follow up with customers who leave items in
                                                their carts without completing the purchase.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1000 Abandoned Carts
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        Bots & Automation
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Bot Building Blocks{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Bot Building Blocks
                                                </span>{" "}
                                                <br /> Create custom automation workflows using
                                                intuitive building blocks to enhance user engagement.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        Upto 30 Blocks Bot Building
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding">
                                        Bot/Automation Triggers{" "}
                                        <span className="iIcon ps-0 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Bot/Automation Triggers
                                                </span>{" "}
                                                <br /> Set triggers that automatically activate actions
                                                in your automation processes.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        2 Million Bots / Automations Triggers
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        External Actions{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    External Actions
                                                </span>{" "}
                                                <br /> Automate external actions like sending emails or
                                                updating databases to enhance customer interaction.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        500 External Actions in Bots
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">Support</h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        WABA & CRM SLA{" "}
                                        <span className="iIcon ps-1 cursor-pointer flex items-center">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    WABA & CRM SLA
                                                </span>{" "}
                                                <br /> Guaranteed response and resolution times for
                                                WhatsApp API and CRM-related issues.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        Support in 24 Working Hours
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className=" featuresTextPadding flex">
                                        Bot/Automation Support{" "}
                                        <span className="iIcon ps-0 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Bot/Automation Support
                                                </span>{" "}
                                                <br /> Access support for troubleshooting or improving
                                                your bots and automation workflows.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        3 Bots / Automations Debugging
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        Technical Limits
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Messages/Second{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Messages/Second
                                                </span>{" "}
                                                <br />
                                                The limit on the number of messages that can be sent per
                                                second, ensuring system stability.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        20 Messages / Second Limit
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className=" featuresTextPadding flex items-center">
                                        Monthly FUP Limit{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Monthly FUP Limit
                                                </span>{" "}
                                                <br /> The Fair Usage Policy limit for monthly usage,
                                                helping to manage resources effectively.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding ">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        No Conv Monthly FUP Limit
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* social details */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        Social Media Channels (Add-ons)
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className="featuresTextPadding border-b flex items-center">
                                        <span className="priceingFacebbokIconDiv me-1">
                                            <img
                                                className="priceingFacebbokIcon"
                                                src="/images/communication_15047435.png"
                                                alt=""
                                            />
                                        </span>{" "}
                                        Facebook{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                                <span className="font-semibold space-y-5">
                                                    Facebook:
                                                </span>{" "}
                                                <br /> Instragram Business profile
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        2 Facebook Page
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="featuresTextPadding border-b flex items-center">
                                        <span className="priceingFacebbokIconDiv me-1">
                                            <img
                                                className="priceingFacebbokIcon"
                                                src="/images/instagram_2111463.png"
                                                alt=""
                                            />
                                        </span>
                                        Instagram{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                                <span className="font-semibold space-y-5">
                                                    Instagram:
                                                </span>{" "}
                                                <br /> Instragram Business profile
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding border-b">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        2 Instagram Page
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="pt-3">
              <div className="feturesTexts">
                <div className="border-b-2 flex items-end">
                  <h1 className="mb-2 text-lg feturesHead pt-4">
                    Technical Limits
                  </h1>
                </div>
                <div className="grid grid-cols-2 w-full border-b">
                  <p className=" featuresTextPadding flex items-center">
                    Messages/Second ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    40 Messages / Second Limit
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className=" featuresTextPadding flex items-center">
                    Monthly FUP Limit ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center  featuresTextPadding ">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    No Conv Monthly FUP Limit
                  </p>
                </div>
              </div>
            </div> */}
                    </div>
                    {/* platinum */}
                    <div className="pt-10">
                        <div className="platinumPlanDiv flex items-center justify-center text-center">
                            <div>
                                <h1 className="packagePlaneNameText">Platinum V1</h1>
                                <div className="pricingTKText">
                                    {isToggle === "month" ? (
                                        <div>
                                            <p className="thougtText me-2">৳ 64999</p>
                                            <p>৳ 24999</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="thougtText me-2">$ 520</p>
                                            <p>$ 210</p>
                                        </div>
                                    )}
                                </div>
                                <p className="text-xs opacity-60">
                                    {isToggle === "month" ? "Per Year" : "Per Year"}
                                </p>
                                {/* <p className="text-xs opacity-60">
                  {isToggle === "month" ? "With one time setup charge 1000 BDT" : ""}
                </p> */}
                                <button className="text-sm text-white bg-green-500 px-4 py-1 rounded-full mt-2 border cardHover">
                                    Sign Up Now
                                </button>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-4">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        CRM Features
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        WhatsApp API Channel{" "}
                                        <span className="iIcon ps-0 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    WhatsApp API Channel
                                                </span>{" "}
                                                <br /> Connect to WhatsApp Business API for seamless
                                                communication with customers.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        5 WhatsApp API Channel
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Contacts in CRM{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Contacts in CRM
                                                </span>{" "}
                                                <br />
                                                Store and manage customer data in one place for easy
                                                access and organization.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1 Milion Contacts
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Team Members{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Team Members
                                                </span>{" "}
                                                <br />
                                                Add and collaborate with team members to enhance
                                                customer support and communication.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        5 Team Members
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className=" featuresTextPadding">
                                        WhatsApp Conversations <br /> Markup{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    WhatsApp Conversations Markup
                                                </span>{" "}
                                                <br />
                                                Enjoy WhatsApp conversations at Meta’s actual rates,
                                                without additional markup.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        5% markup on WhatsApp conversations
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        Ecommerce Features
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding">
                                        WhatsApp Commerce Store{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    WhatsApp Commerce Store
                                                </span>{" "}
                                                <br />
                                                Set up a fully integrated e-commerce store within
                                                WhatsApp for easy transactions.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1 WhatsApp Commerce Store
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Products Limit{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Products Limit
                                                </span>{" "}
                                                <br />
                                                Manage up to the specified number of products in your
                                                WhatsApp commerce store.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        5000 Products
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Orders Limit{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Orders Limit
                                                </span>{" "}
                                                <br />
                                                Handle a set number of orders in the system each month
                                                for efficient tracking.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        5000 Orders
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 ">
                                    <p className=" featuresTextPadding flex items-center">
                                        Abandoned Carts{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Abandoned Carts
                                                </span>{" "}
                                                <br />
                                                Retrieve and follow up with customers who leave items in
                                                their carts without completing the purchase.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        5000 Abandoned Carts
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        Bots & Automation
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Bot Building Blocks{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Bot Building Blocks
                                                </span>{" "}
                                                <br />
                                                Create custom automation workflows using intuitive
                                                building blocks to enhance user engagement.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        Upto 150 Blocks Bot Building
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding">
                                        Bot/Automation Triggers{" "}
                                        <span className="iIcon pe-2 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Bot/Automation Triggers
                                                </span>{" "}
                                                <br />
                                                Set triggers that automatically activate actions in your
                                                automation processes.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        10 Million Bots / Automations Triggers
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        External Actions{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    External Actions
                                                </span>{" "}
                                                <br />
                                                Automate external actions like sending emails or
                                                updating databases to enhance customer interaction.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        1000 External Actions in Bots
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    {/* <p className=" featuresTextPadding flex items-center">
                    Abandoned Carts ⓘ
                  </p>
                  <p className="featuresDiscription flex items-center featuresTextPadding">
                    <span className="me-2">
                      <img src="/images/greenTik.png" alt="" />
                    </span>
                    5000 Abandoned Carts
                  </p> */}
                                </div>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">Support</h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding">
                                        WABA & CRM SLA{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    WABA & CRM SLA
                                                </span>{" "}
                                                <br />
                                                Guaranteed response and resolution times for WhatsApp
                                                API and CRM-related issues.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        Support in 6 Working Days
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className=" featuresTextPadding">
                                        Bot/Automation Support{" "}
                                        <span className="iIcon pe-2 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Bot/Automation Support
                                                </span>{" "}
                                                <br />
                                                Access support for troubleshooting or improving your
                                                bots and automation workflows.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        10 Bots / Automations Debugging
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* details */}
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        Technical Limits
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className=" featuresTextPadding flex items-center">
                                        Messages/Second{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Messages/Second
                                                </span>{" "}
                                                <br />
                                                The limit on the number of messages that can be sent per
                                                second, ensuring system stability.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        100 Messages / Second Limit
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className=" featuresTextPadding flex items-center">
                                        Monthly FUP Limit{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border pe-1 ps-5 py-3 ms-5 shadow rounded-md text-sm">
                                                <span className="font-semibold space-y-5">
                                                    Monthly FUP Limit
                                                </span>{" "}
                                                <br />
                                                The Fair Usage Policy limit for monthly usage, helping
                                                to manage resources effectively.
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding ">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        No Conv Monthly FUP Limit
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-3">
                            <div className="feturesTexts">
                                <div className="border-b-2 flex items-end">
                                    <h1 className="mb-2 text-lg feturesHead pt-4">
                                        Social Media Channels (Add-ons)
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 w-full border-b">
                                    <p className="featuresTextPadding border-b flex items-center">
                                        <span className="priceingFacebbokIconDiv me-1">
                                            <img
                                                className="priceingFacebbokIcon"
                                                src="/images/communication_15047435.png"
                                                alt=""
                                            />
                                        </span>{" "}
                                        Facebook{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                                <span className="font-semibold space-y-5">
                                                    Facebook:
                                                </span>{" "}
                                                <br /> Facebook Business page
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center featuresTextPadding">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        2 Facebook Page
                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="featuresTextPadding border-b flex items-center">
                                        <span className="priceingFacebbokIconDiv me-1">
                                            <img
                                                className="priceingFacebbokIcon"
                                                src="/images/instagram_2111463.png"
                                                alt=""
                                            />
                                        </span>
                                        Instagram{" "}
                                        <span className="iIcon ps-1 cursor-pointer">
                                            {" "}
                                            ⓘ{" "}
                                            <span className="iIconText border bg-white pe-0 ps-5 py-3 ms-5 shadow rounded-md">
                                                <span className="font-semibold space-y-5">
                                                    Instragram:
                                                </span>{" "}
                                                <br /> Instragram Business profile
                                            </span>{" "}
                                        </span>
                                    </p>
                                    <p className="featuresDiscription flex items-center  featuresTextPadding border-b">
                                        <span className="me-2">
                                            <img src="/images/greenTik.png" alt="" />
                                        </span>
                                        2 Instagram Page
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
