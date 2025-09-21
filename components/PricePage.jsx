"use client";

import ScheduleADemo from "@/components/ScheduleADemo";
import Link from "next/link";
import React, { useState } from "react";
import PhonePriceSection from "./PhonePriceSection";
import { BadgeInfo, CheckCircle, XCircle } from "lucide-react";


const PricePage = ({ plans }) => {
  const [isToggle, setIsToggle] = useState("month");
  const [isHideOld, setHideOld] = useState(true);
  return (
    // </div>
    <div className="pt-20">
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
      <section className="mx-3 lg:mx-60 xl:mx-96 pt-6">
        <div className="lmitedBgDiv p-1 mx-5">
          <h1 className="text-center text-sm text-white blink-background">
            Limited Period Offer - Price Can Increase Anytime!
          </h1>
        </div>
      </section>






      <section className="bg-gray-50 py-16 px-6 h-auto">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pricing Plans
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Choose the right plan that fits your needs.
          </p>
          <div className='w-full flex item-center justify-center'>
            <button onClick={() => setHideOld(p => !p)} className={`cursor-pointer text-sm ${ isHideOld ? 'text-amber-500' : 'text-teal-500'}`}>
              Show {isHideOld ? 'Previous' : 'Current'}  Pricing
            </button>
          </div>
          <div className="flex justify-center py-10">
            <div className="pricingButtonTaggoleDiv ps-1 pe-1 py-1 space-x-1 rounded-full ">
              <button
                onClick={() => setIsToggle("month")}
                className={` px-5 py-1 rounded-full cursor-pointer ${isToggle === "month" && "pricingToggoleButton"
                  }`}
              >
                BDT
              </button>
              <button
                onClick={() => setIsToggle("year")}
                className={`px-5 py-1 rounded-full cursor-pointer ${isToggle === "year" && "pricingToggoleButton"
                  }`}
              >
                USD
                {/* <span className="saveText border rounded-full ms-1">
                {" "}
                <span>save 15%</span>{" "}
              </span> */}
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div
          className={`
            ${isHideOld 
              ? "opacity-100 translate-x-0 max-h-[1000px]" 
              : "opacity-0 translate-x-4 max-h-0 overflow-hidden pointer-events-none"} 
            grid grid-cols-1 md:flex md:items-center md:justify-around gap-8 max-w-7xl mx-auto
            transition-all duration-500 ease-in-out
          `}
        >
          {plans && plans?.data.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl shadow-md border bg-white flex flex-col transition hover:shadow-xl ${plan.isRecommended
                ? "border-blue-500 ring-2 ring-blue-300"
                : "border-gray-200"
                }`}
            >
              {/* Header */}
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 mt-2">
                    {plan.name}
                  </h3>
                  {plan.isPopular && (
                    <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>

                {/* Price */}
                <div className="mt-4">
                  <span className="text-3xl font-extrabold text-gray-900">
                    {isToggle === 'month' ? `৳${plan.priceOfferBDT}` : `$${plan?.priceOfferUSD}`}
                  </span>
                  <span className="ml-2 line-through text-gray-400 text-lg">
                    {isToggle === 'month' ? `৳${plan.priceRegularBDT}` : `$${plan?.priceRegularUSD}`}
                  </span>
                  <span className="block text-sm text-gray-500">
                    per {plan.duration} {plan.durationType.toLowerCase()}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="p-6 flex-1 overflow-visible">
                {Object.entries(plan.featureGroups || {}).map(
                  ([groupName, features]) => (
                    <div key={groupName} className="mb-5">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 border-b pb-1">
                        {groupName}
                      </h4>
                      <ul className="space-y-2">
                        {features.map((feature) => (
                          <li
                            key={feature.id}
                            className="flex items-start text-sm"
                          >
                            {feature.included ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-400 mr-2 mt-0.5" />
                            )}
                            <div>
                              <div
                                className={`${feature.included ? "text-gray-700" : "text-gray-400 line-through"
                                  } flex items-center space-x-1`}
                              >
                                <p>{feature.name}</p>

                                {/* Wrap icon + tooltip in a group */}
                                <div className="relative flex items-center group">
                                  <BadgeInfo className="w-4 h-4 text-gray-500 cursor-pointer" />

                                  {/* Tooltip */}
                                  <span
                                    className="
                                        absolute left-6 top-1/2 -translate-y-1/2
                                        w-52 text-xs text-white bg-gray-800 rounded-md shadow-lg px-3 py-2
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                        pointer-events-none z-50
                                      "
                                  >
                                    {feature.description}
                                  </span>
                                </div>
                              </div>

                              <p>
                                {/* {feature.limitValue !== null && feature.limitValue !== undefined && (
                                  <span className="text-xs text-gray-500">
                                    (Limit: {feature.limitValue})
                                  </span>
                                )} */}
                                {feature.planDescription && (
                                  <span className="text-xs text-gray-500">
                                    {feature.planDescription}
                                  </span>
                                )}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>

              {/* CTA */}
              <div className="p-6 border-t">
                <button
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition ${plan.isRecommended
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                >
                  {plan.isRecommended ? "Get Started" : "Choose Plan"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>



      <section
        className={`
          ${isHideOld 
            ? "opacity-0 -translate-x-4 max-h-0 overflow-hidden pointer-events-none" 
            : "opacity-100 translate-x-0 max-h-[1000px]"} 
          mx-5 lg:mx-40 xl:mx-40 md:mx-16
          transition-all duration-500 ease-in-out
        `}
      >
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
      <section className={`${isHideOld && 'hidden'} mx-5 md:mx-16 block lg:hidden xl:hidden`}>
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

      <section className="">
        <div className="text-center">
          <h1 className="font-semibold text-xl pt-5">
            Countrywise WhatsApp Conversation Pricing
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

      {/* get start business  */}

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

      {/* Aditional */}

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
      {/* Dedicated Support Services */}
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
      {/* Ready to Transform Your Business Communication? */}

      <ScheduleADemo />
    </div>
  );
};

export default PricePage;