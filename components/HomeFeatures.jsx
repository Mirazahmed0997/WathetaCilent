import React from "react";
import Link from "next/link";

const HomeFeatures = () => {

  return (
    <div className="homeFeaturesbg py-5">
      {/* heasdline */}
      <div className="">
        <h1 className="text-center pt-10 HomeFeturesHeadline">Our Features</h1>
        <div className="flex justify-center w-full">
          <p className="text-center pt-2 mx-5 lg:mx-0 xl:mx-0 md:mx-0 w-full lg:w-7/12 xl:w-7/12 md:w-8/12 homeFeaturHedlindPera">
            Everything you need to capture leads, convert faster, and retain
            customers — all in one platform. From smart automation to real-time
            CRM, WaTheta gives you the tools to run your business directly
            through WhatsApp. Designed for simplicity. Built for performance.
          </p>
        </div>
      </div>
      {/* card */}
      <section className="py-10 mx-5 lg:mx-48 xl:mx-48">
        <div  
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 lg:gap-8 xl:gap-8"
        >
          <div className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/newWhats.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  WhatsApp API Platform
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  Send & receive messages via Official WhatsApp APIs and Web
                  hooks.
                </p>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/newMassen.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center feature">
                <h1 className="cardFeaturesHeadline text-center">
                  Facebook Integration
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  Integrate Facebook Messenger for seamless customer
                  communication.
                </p>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/newInsta.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Instagram Integration
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  Manage Instagram messages and interactions efficiently.
                </p>
              </div>
            </div>
          </div>
          {/* 4th */}
          <div className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/newCrm.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Intelligent CRM
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  Our In-Built CRM enables you to add various tags & attributes
                  to customer
                </p>
              </div>
            </div>
          </div>
          {/* 5th */}
          <div className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl hidden lg:block xl:block md:block">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/newBot.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Visual Bot Builder
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  Create Bots Easily Using Our Drag & Drop Bot Builder.
                </p>
              </div>
            </div>
          </div>
          {/* 6th */}
          <div className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl hidden lg:block xl:block md:block">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/newCalander.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Calendar Bot
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  Complete appointment booking ecosystem with smart scheduling.
                </p>
              </div>
            </div>
          </div>
          {/* 7th */}
          <div className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl hidden lg:block xl:block md:block">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/newTicket.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Tickets Bot
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  Comprehensive event ticketing system with QR code support.
                </p>
              </div>
            </div>
          </div>
          {/* 8th */}
          <div className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl hidden lg:block xl:block md:block">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/neewqr.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Dynamic QR Bot
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  Create and manage dynamic QR codes for various campaigns.
                </p>
              </div>
            </div>
          </div>
          {/* 9th */}
          <div className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl hidden lg:block xl:block md:block">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/newPoint.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Reward Points
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  Run comprehensive loyalty programs with point tracking.
                </p>
              </div>
            </div>
          </div>
          {/* 10th */}
          <div className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl hidden lg:block xl:block md:block">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/newExp.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Dynamic Experiences
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  Create dynamic images and HTML pages for rich interactions.
                </p>
              </div>
            </div>
          </div>
          {/* 11th */}
          <div className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl hidden lg:block xl:block md:block">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/newInbox.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Multichannel Team Inbox
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  Multi-channel chat panel for your team to manage communication
                  easily.
                </p>
              </div>
            </div>
          </div>
          {/* 12th */}
          <div className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl hidden lg:block xl:block md:block">
            <div className="">
              <div className="flex justify-center">
                <div className="homeFeaturesLogoDiv">
                  <img
                    className="homeFeaturesLogo"
                    src="/images/newBuilder.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="cardFeaturesHeadline text-center">
                  Automation Builder
                </h1>
                <p className="text-center pt-3 cardFeaturesPera">
                  Easily Integrate With Shopify, WooCommerce, and 1000+ Tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* button featuers */}
      <div className="flex justify-center py-5 lg:py-10 xl:py-10 md:py-8">
        <Link href="/features">
          <button className="bg-white px-5 lg:px-6 xl:px-6 py-2 rounded-full flex items-center border HomeFeturescardShadow">
            View all Features{" "}
            <img src="/images/rightarow.png" alt="" className="ms-3" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeFeatures;
