"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Link from "next/link";

const customerAccountData = [
  {
    id: 1,
    headline: "Ecommerce",
    perea: [
      "1 WhatsApp Store",
      "100 Products",
      "100 Orders",
      "100 Abandoned Carts",
    ],
    tik: "/images/sastik.png",
    cros: "/images/sascrose.png",
    icon: "/images/sasecomers.png",
  },
  {
    id: 2,
    headline: "Bots",
    perea: [
      "Do It Yourself Bot Builder",
      "External Actions / Apps Not Included",
    ],
    tik: "/images/sastik.png",
    cros: "/images/sascrose.png",
    icon: "/images/sassbot.png",
  },
  {
    id: 3,
    headline: "Suport",
    perea: ["WABA And CRM ~ SLA 3 Days", "10 Messages / Second Speed Limit"],
    tik: "/images/sastik.png",
    cros: "/images/sascrose.png",
    icon: "/images/saastext.png",
  },
  {
    id: 4,
    headline: "Crm",
    perea: [
      "Unlimited WhatsApp Channels",
      "1 Million Contacts",
      "5 GB Data Storage",
    ],
    tik: "/images/sastik.png",
    cros: "/images/sascrose.png",
    icon: "/images/Background.png",
  },
];
const addons = [
  {
    id: 1,
    price: 4,
    headline: "External Actions",
    icon: "/images/newBuilder.png",
    pera: "5000 Ex Actions or Charge / App / Unlimited Actions",
    section: "month"
  },
  {
    id: 2,
    price: 2,
    headline: "Team Member",
    icon: "/images/group.png",
    pera: "Per additional team member",
    section: "month"
  },
  {
    id: 3,
    price: 4,
    headline: "Instagram / Messenger / RCS",
    icon: "/images/massageIcon.png",
    pera: "Per additional social channel",
    section: "month"
  },
  {
    id: 4,
    price: 4,
    headline: "Calendars Bot",
    icon: "/images/newCalander.png",
    pera: "Calendar management bot",
    section: "month"
  },
  {
    id: 5,
    price: 0.05,
    headline: "QR Ticket",
    icon: "/images/neewqr.png",
    pera: "Per QR generated",
    section: "per ticket"
  },
  {
    id: 6,
    price: 0.02,
    headline: "Daynamic Image",
    icon: "/images/newExp.png",
    pera: "Per QR generated",
    section: "image"
  },
];
const services = [
  {
    id: 1,
    price: 25,
    headline: "Onboarding Support",
    icon: "/images/sashead.png",
    pera: "Sub Account For Onboarding Support",
  },
  {
    id: 2,
    price: 25,
    headline: "Basic Training",
    icon: "/images/sascap.png",
    pera: "Hour Waba, Crm, Inbox Training",
  },
  {
    id: 3,
    price: 40,
    headline: "Ecommerce Setup",
    icon: "/images/sascbag.png",
    pera: "Hour Ecommerce Setup",
  },
  {
    id: 4,
    price: 50,
    headline: "Bot Training",
    icon: "/images/sascod.png",
    pera: "Hour - Basic Bots Training",
  },
  {
    id: 5,
    price: 50,
    headline: "Automation Training",
    icon: "/images/sasthandar.png",
    pera: "Hour - Basic Automations Training",
  },
];
const enterprise = [
  {
    id: 1,
    headline: "Custom Branding",
    icon: "/images/sasenterColor.png",
    pera: "Your own branded platform with custom domain and white-label dashboard",
  },
  {
    id: 2,
    headline: "WhatsApp API",
    icon: "/images/sasentermassar.png",
    pera: "Direct integration with WhatsApp Business API as Meta Partner",
  },
  {
    id: 3,
    headline: "Visual Bot Builder",
    icon: "/images/sasenbot.png",
    pera: "Drag & drop bot builder with ready-to-use templates",
  },
  {
    id: 4,
    headline: "Multi-Tenant System",
    icon: "/images/sasdata.png",
    pera: "Manage multiple clients with isolated environments",
  },
  {
    id: 5,
    headline: "Developer API",
    icon: "/images/sascod.png",
    pera: "Full API access for custom integrations and extensions",
  },
  {
    id: 6,
    headline: "Enterprise Security",
    icon: "/images/sassenhild.png",
    pera: "Advanced security features with role-based access control",
  },
];

const SassPage = () => {
  const [isToggle, setIsToggle] = useState("BDT");
  return (
    <div className="pt-16 lg:pt-20 xl:pt-20 md:pt-24">
      <div className="saasBgDiv flex justify-center items-center">
        <div className="flex justify-center items-center contactHeroContentDiv py-0 lg:py-10 xl:py-10">
          <div className="w-full">
            <div className="flex justify-center pb-5 pt-10">
              <div className="flex items-center justify-center pricingMetaLogoDivMain">
                <div className="pricingMetaLogoDiv">
                  <img src="/images/metaLogo.png" alt="" />
                </div>
                <div className="ms-3">
                  <p className="pricingOfficialText">Official Partner</p>
                  <p className="metaBusinessText">Meta Business Solution</p>
                </div>
              </div>
            </div>

            <div className="text-center mx-1 lg:mx-40 xl:mx-48 xxl:mx-48">
              <h1 className="sasheadline text-center">
                Launch Your Own <br className="hidden lg:block xl:block xxl:block" /> WhatsApp And Omnichannel <br className="hidden lg:block xl:block xxl:block" /> Communication Platform
              </h1>
            </div>

            <div className="">
              <p className="text-center pricingPera py-2 mx-5 lg:mx-0 xl:mx-0 md:mx-16">
                Start with zero investment and grow your business
              </p>
            </div>

            <div className="flex flex-col lg:flex-row xl:flex-row justify-center gap-4 py-2 lg:py-5 xl:py-5 md:py-5 mx-5 lg:mx-5 xl:mx-5 md:mx-16">
              <div>
                <Link href='https://wa.me/8801318231252?text=inquire from wahteta'>
                <button className="text-sm lg:text-lg xl:text-lg xxl:text-lg flex justify-center items-center px-8 lg:px-8 xl:px-8 py-2 border rounded-full bg-white cursor-pointer font-semibold cardHover w-full">
                  {" "}
                  Schedule A Call{" "}
                  <span className="ms-1">
                    <img src="/images/rightarow.png" alt="" />
                  </span>{" "}
                </button>
                </Link>
              </div>
              <div>
                <Link href="https://dash.watheta.com/register">
                <button className="text-sm lg:text-lg xl:text-lg xxl:text-lg flex justify-center items-center px-8 lg:px-8 xl:px-8 py-2 border rounded-full text-white cursor-pointer cardHover w-full">
                  {" "}
                  Get Started{" "}
                  <span className="ms-1">
                    <img src="/images/whitearrow.png" alt="" />
                  </span>{" "}
                </button>
                </Link>
              </div>
            </div>

            {/* slider */}
            <div className="pt-10 mx-5 lg:mx-40 xl:mx-40 md:mx-8 pb-10">
              <Swiper
                spaceBetween={10}
                //   centeredSlides={true}
                //   freeMode={true}
                //   loop={true}
                //   autoplay={{
                //     delay: 0,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: false,
                //   }}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                //   speed={4000}
                //   modules={[FreeMode, Autoplay]}
                className="mySwiper"
                breakpoints={{
                  320: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                  },

                  768: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                  },

                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
              >
                <SwiperSlide className="">
                  <div className="py-4 px-2 cardBgColor cardHover cursor-pointer FeaturesCardDiv rounded-lg flex items-center justify-center">
                    <div className="">
                      <div className="flex justify-center">
                        <div className="featuresCardLogoDiv">
                          <img
                            className="featuresCardLogo"
                            src="/images/bot.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <p className="text-center text-sm pt-2">
                          {" "}
                          White Label Dashboard{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="">
                  <div className="py-4 px-2 cardBgColor cardHover cursor-pointer FeaturesCardDiv rounded-lg flex items-center justify-center">
                    <div className="">
                      <div className="flex justify-center">
                        <div className="featuresCardLogoDiv">
                          <img
                            className="featuresCardLogo"
                            src="/images/saserth.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <p className="text-center text-sm pt-2"> Custom Domain</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="">
                  <div className="py-4 px-2 cardBgColor cardHover cursor-pointer FeaturesCardDiv rounded-lg flex items-center justify-center">
                    <div className="">
                      <div className="flex justify-center">
                        <div className="featuresCardLogoDiv">
                          <img
                            className="featuresCardLogo"
                            src="/images/sasshild.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="felx justify-center">
                        <p className="text-center text-sm pt-2">
                          {" "}
                          Enterprise Security{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="">
                  <div className="py-4 px-2 cardBgColor cardHover cursor-pointer FeaturesCardDiv rounded-lg flex items-center justify-center">
                    <div className="">
                      <div className="flex justify-center">
                        <div className="featuresCardLogoDiv">
                          <img
                            className="featuresCardLogo"
                            src="/images/sashavatat.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-center">
                          <p className="text-center text-sm pt-2">
                            {" "}
                            Multi-Tenant Platform{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* white label pricing */}
      <section className="mx-5 lg:mx-40 xl:mx-40 md:mx-8 pt-10 lg:pt-20 xl:pt-24 xxl:pt-24 pb-20">
        {/* headline */}
        <div className="text-center pb-5">
          <h1 className="saswhitelablePriceHeadline">White Label Pricing</h1>
          <p className="saswhitelablePricePera pt-2">
            Launch your own OmniChannel Communication Platform with our scalable
            pricing
          </p>
        </div>
        {/* button */}
        <div className="flex justify-center pt-4 pb-10">
          <div className="pricingButtonTaggoleDiv ps-1 pe-1 py-1 space-x-1 rounded-full ">
            <button
              onClick={() => setIsToggle("BDT")}
              className={` px-5 py-1 rounded-full cursor-pointer ${
                isToggle === "BDT" && "pricingToggoleButton"
              }`}
            >
              BDT
            </button>
            <button
              onClick={() => setIsToggle("USD")}
              className={` px-5 py-1 rounded-full cursor-pointer ${
                isToggle === "USD" && "pricingToggoleButton"
              }`}
            >
              USD
            </button>
          </div>
        </div>
        {/* offer limited text */}
        <section className="pb-8 w-full">
          <div className="lmitedBgDiv p-1 rounded-full shadow-md">
            <h1 className="text-center text-sm">
              Limited Period Offer - Price Can increase Anytime!
            </h1>
          </div>
        </section>
        {/* pricediv */}
        <div className="sasPeiceDiv p-10 rounded-4xl">
          <div className="mx-2 lg:mx-40 xl:mx-40 xxl:mx-40 bg-white/50 rounded-xl">
            <h1 className="text-2xl font-medium text-center pt-5">
              Life Time Deal For One Time Payment
            </h1>
            
            <p className="text-5xl font-semibold text-center pt-10 pb-2">
              {
                isToggle === "BDT" ? "৳65000" : "$500"
              }
              
            </p>
            <p className="text-sm text-center opacity-60">
              One-time payment for Life Time Access
            </p>
            <div className="pt-14 pb-5 flex justify-center">
              <Link href='https://wa.me/8801318231252?text=inquire from wahteta'>
              <button className="text-sm lg:text-md xl:text-md xxl:text-md flex justify-center items-center px-8 lg:px-8 xl:px-8 py-2 lg:py-4 xl:py-4 border rounded-full bg-white cursor-pointer cardHover">
                {" "}
                Schedule A Call{" "}
                <span className="ms-1">
                  <img src="/images/rightarow.png" alt="" />
                </span>{" "}
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Bese Customer Package */}
      <section className="pt-10">
        {/* headline */}
        <div className="py-0 text-center">
          <h1 className="saswhitelablePriceHeadline">
            Bese Customer Package
          </h1>
          <p className="saswhitelablePricePera">
            Everything included in each Base package for just $5/month
          </p>
        </div>
        {/* card */}
        <div className="pt-14 mx-5 lg:mx-40 xl:mx-40 xxl:mx-40 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-cols-4 xl:grid-cols-4 xxl:grid-cols-4 gap-8">
            {customerAccountData.map((cust, index) => (
              <div className="bg-white shadow-lg p-8 rounded-lg hover:shadow-xl cursor-pointer" key={index}>
                {/* card icon */}
                <div className="dedicatedIconDiv">
                  <img className="dedicatedIcon" src={cust.icon} alt="" />
                </div>
                {/* card headline */}
                <h1 className="text-md lg:text-lg xl:text-lg pt-4 font-semibold">
                  {cust.headline}
                </h1>
                <div className="pt-5">
                  {cust.perea.map((pere, index) => (
                    <p className="flex items-center py-2 text-sm" key={index}>
                      {pere === "External Actions / Apps Not Included" ? (
                        <span className="me-2">
                          <img src="/images/sascrose.png" alt="" />
                        </span>
                      ) : (
                        <span className="me-2">
                          <img src="/images/sastik.png" alt="" />
                        </span>
                      )}

                      <span className="opacity-75">{pere}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Add-ons for Customer Account */}
      <section className="mx-5 lg:mx-40 xl:mx-40 md:mx-8 pt-10 lg:pt-20 xl:pt-24 xxl:pt-24 pb-20">
        {/* headline */}
        <div className="text-center">
          <h1 className="saswhitelablePriceHeadline">
            Add-ons for <br className="hidden lg:block xl:block xxl:block" />{" "}
            Customer Account
          </h1>
          <p className="saswhitelablePricePera pt-1">
            Customize each account with powerful add-ons
          </p>
        </div>
        {/* card satart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 md:grid-cols-3 pt-14 gap-8">
          {/* card */}
          {addons.map((add, index) => (
            <div className="adoncardbg p-5 shadow-lg hover:shadow-xl rounded-xl cursor-pointer" key={index}>
              {/* icon and price */}
              <div className="flex justify-between items-center px-2 py-2 rounded-xl">
                <div className="pricingHeorIconDiv">
                  <img className="pricingHeorIcon" src={add.icon} alt="" />
                </div>
                <p className="text-xl font-semibold ms-2">
                  ${add.price}
                  <span className="text-sm opacity-65">/
                    {
                      add.section
                    }</span>
                </p>
              </div>
              <div className="pt-4 pb-2">
                <h1 className="text-lg font-semibold">{add.headline}</h1>
                <p className="text-sm opacity-70 pt-4">{add.pera}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Support Services */}
      <section className="mx-5 lg:mx-40 xl:mx-40 md:mx-8 pt-10 lg:pt-20 xl:pt-24 xxl:pt-24 pb-20">
        {/* headline */}
        <div className="text-center">
          <h1 className="saswhitelablePriceHeadline">Support Services</h1>
          <p className="saswhitelablePricePera pt-1">
            Customize each account with powerful add-ons
          </p>
        </div>
        {/* card satart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 md:grid-cols-3 pt-14 gap-8">
          {/* card */}
          {services.map((add, index) => (
            <div className="adoncardbg p-5 shadow-lg hover:shadow-xl rounded-xl cursor-pointer" key={index}>
              {/* icon and price */}
              <div className="flex justify-between items-center px-2 py-2 rounded-xl">
                <div className="pricingHeorIconDiv">
                  <img className="pricingHeorIcon" src={add.icon} alt="" />
                </div>
                <p className="text-xl font-semibold ms-2">
                  ${add.price}
                  <span className="text-sm opacity-65">/per hour</span>
                </p>
              </div>
              <div className="pt-4 pb-2">
                <h1 className="text-lg font-semibold">{add.headline}</h1>
                <p className="text-sm opacity-70 pt-4">{add.pera}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Enterprise-Grade Features */}
      <section className="mx-5 lg:mx-40 xl:mx-40 md:mx-8 pt-10 lg:pt-20 xl:pt-24 xxl:pt-24 pb-20">
        {/* headline */}
        <div className="text-center">
          <h1 className="saswhitelablePriceHeadline">
            Enterprise-Grade Features
          </h1>
          <p className="saswhitelablePricePera pt-1">
            Everything you need to launch and scale your own WhatsApp Business
            Platform
          </p>
        </div>
        {/* card satart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 md:grid-cols-3 pt-14 gap-8">
          {/* card */}
          {enterprise.map((add, index) => (
            <div className="adoncardbg p-5 shadow-lg hover:shadow-xl rounded-xl cursor-pointer" key={index}>
              {/* icon and price */}
              <div className=" px-2 py-2 rounded-xl">
                <div className="dedicatedIconDiv">
                  <img className="dedicatedIcon" src={add.icon} alt="" />
                </div>
              </div>
              <div className="pt-4 pb-2">
                <h1 className="text-lg font-semibold">{add.headline}</h1>
                <p className="text-sm opacity-70 pt-4">{add.pera}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* start you jusry today */}
      <section className="sasstartbg py-20">
        <div className="mx-5 lg:mx-40 xl:mx-40 md:mx-8 sasstartDivBg rounded-2xl">
          <div className="p-10">
            <h1 className="saswhitelablePriceHeadline text-white text-center">
              Start Your Journey Today
            </h1>
            <p className="text-sm pt-1 text-center text-white">
              Launch your own WhatsApp Business Platform with zero initial
              investment
            </p>
            {/* card */}
            <div className="pt-8 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-8">
              {/* card */}
              <div className="adoncardbg p-5 shadow-lg hover:shadow-xl rounded-xl cursor-pointer">
                {/* icon */}
                <div className="flex justify-center">
                  <div className="dedicatedIconDiv">
                    <img
                      className="dedicatedIcon"
                      src="/images/blackthandar.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* content */}
                <div>
                  <h1 className="text-xl font-semibold text-center pt-5">
                    Meta Partner
                  </h1>
                  <p className="text-sm text-center pt-2 opacity-70">
                    Official Business Solution Provider
                  </p>
                </div>
              </div>
              {/* card */}
              <div className="adoncardbg p-5 shadow-lg hover:shadow-xl rounded-xl cursor-pointer">
                {/* icon */}
                <div className="flex justify-center">
                  <div className="dedicatedIconDiv">
                    <img
                      className="dedicatedIcon"
                      src="/images/blackshild.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* content */}
                <div>
                  <h1 className="text-xl font-semibold text-center pt-5">
                    Enterprise Grade
                  </h1>
                  <p className="text-sm text-center pt-2 opacity-70">
                    Secure & Scalable Platform
                  </p>
                </div>
              </div>
              {/* card */}
              <div className="adoncardbg p-5 shadow-lg hover:shadow-xl rounded-xl cursor-pointer">
                {/* icon */}
                <div className="flex justify-center">
                  <div className="dedicatedIconDiv">
                    <img
                      className="dedicatedIcon"
                      src="/images/blackmassage.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* content */}
                <div>
                  <h1 className="text-xl font-semibold text-center pt-5">
                    Enterprise Grade
                  </h1>
                  <p className="text-sm text-center pt-2 opacity-70">
                    Secure & Scalable Platform
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-14 pb-5 flex justify-center">
              <Link href='https://dash.watheta.com/register'>
              <button className="text-sm lg:text-md xl:text-md xxl:text-md flex justify-center items-center px-8 lg:px-8 xl:px-8 py-2 lg:py-4 xl:py-4 border rounded-full bg-white cursor-pointer cardHover">
                {" "}
                Get Started Now{" "}
                <span className="ms-1">
                  <img src="/images/rightarow.png" alt="" />
                </span>{" "}
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Ready to Transform Your Business? */}
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
                  Ready to Transform Your Business?
                </h1>
              </div>
              <p className="text-md lg:text-lg xl:text-lg text-white text-center pt-2 lg:pt-4 xl:pt-4 leading-relaxed mx-5 lg:mx-0 xl:mx-0">
                Join 23,000+ businesses already growing with our platform
              </p>
              <div className="py-4">
                <Link href="https://dash.watheta.com/register">
                <button className="flex justify-center items-center readyToButton cursor-pointer">
                  Get Started Now{" "}
                  <span className="ms-2 lg:ms-3 xl:ms-3">
                    <img src="/images/whitearrow.png" alt="" />
                  </span>{" "}
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SassPage;
