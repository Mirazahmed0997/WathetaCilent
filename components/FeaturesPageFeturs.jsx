import React from "react";

const FeaturesPageFeturs = () => {
  return (
    <div className="homeFeaturesbg py-5">
      {/* headline */}
      <header>
        <h1 className="text-center pt-10 HomeFeturesHeadline">Our Features</h1>
        <div className="flex justify-center w-full">
          <p className="text-center pt-2 mx-5 lg:mx-0 xl:mx-0 md:mx-0 w-full lg:w-7/12 xl:w-7/12 md:w-8/12 homeFeaturHedlindPera">
            Everything you need to capture leads, convert faster, and retain
            customers — all in one platform. From smart automation to real-time
            CRM, WaTheta gives you the tools to run your business directly
            through WhatsApp. Designed for simplicity. Built for performance.
          </p>
        </div>
      </header>

      {/* features cards */}
      <section className="py-10 mx-5 lg:mx-48 xl:mx-48">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 lg:gap-8 xl:gap-8">
          {/* 1st */}
          <article className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="flex justify-center">
              <div className="homeFeaturesLogoDiv">
                <img className="homeFeaturesLogo" src="/images/newWhats.png" alt="WhatsApp API Platform" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="cardFeaturesHeadline text-center">WhatsApp API Platform</h2>
              <p className="text-center pt-3 cardFeaturesPera">
                Send & receive messages via Official WhatsApp APIs and Web hooks.
              </p>
            </div>
          </article>

          {/* 2nd */}
          <article className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="flex justify-center">
              <div className="homeFeaturesLogoDiv">
                <img className="homeFeaturesLogo" src="/images/newMassen.png" alt="Facebook Messenger Integration" />
              </div>
            </div>
            <div className="text-center feature">
              <h2 className="cardFeaturesHeadline text-center">Facebook Integration</h2>
              <p className="text-center pt-3 cardFeaturesPera">
                Integrate Facebook Messenger for seamless customer communication.
              </p>
            </div>
          </article>

          {/* 3rd */}
          <article className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="flex justify-center">
              <div className="homeFeaturesLogoDiv">
                <img className="homeFeaturesLogo" src="/images/newInsta.png" alt="Instagram Integration" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="cardFeaturesHeadline text-center">Instagram Integration</h2>
              <p className="text-center pt-3 cardFeaturesPera">
                Manage Instagram messages and interactions efficiently.
              </p>
            </div>
          </article>

          {/* 4th */}
          <article className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="flex justify-center">
              <div className="homeFeaturesLogoDiv">
                <img className="homeFeaturesLogo" src="/images/newCrm.png" alt="CRM Integration" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="cardFeaturesHeadline text-center">Intelligent CRM</h2>
              <p className="text-center pt-3 cardFeaturesPera">
                Our In-Built CRM enables you to add various tags & attributes to customer
              </p>
            </div>
          </article>

          {/* 5th */}
          <article className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="flex justify-center">
              <div className="homeFeaturesLogoDiv">
                <img className="homeFeaturesLogo" src="/images/newBot.png" alt="Bot Builder" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="cardFeaturesHeadline text-center">Visual Bot Builder</h2>
              <p className="text-center pt-3 cardFeaturesPera">
                Create Bots Easily Using Our Drag & Drop Bot Builder.
              </p>
            </div>
          </article>

          {/* 6th */}
          <article className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="flex justify-center">
              <div className="homeFeaturesLogoDiv">
                <img className="homeFeaturesLogo" src="/images/newCalander.png" alt="Calendar Scheduling Bot" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="cardFeaturesHeadline text-center">Calendar Bot</h2>
              <p className="text-center pt-3 cardFeaturesPera">
                Complete appointment booking ecosystem with smart scheduling.
              </p>
            </div>
          </article>

          {/* 7th */}
          <article className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="flex justify-center">
              <div className="homeFeaturesLogoDiv">
                <img className="homeFeaturesLogo" src="/images/newTicket.png" alt="Event Ticketing Bot" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="cardFeaturesHeadline text-center">Tickets Bot</h2>
              <p className="text-center pt-3 cardFeaturesPera">
                Comprehensive event ticketing system with QR code support.
              </p>
            </div>
          </article>

          {/* 8th */}
          <article className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="flex justify-center">
              <div className="homeFeaturesLogoDiv">
                <img className="homeFeaturesLogo" src="/images/neewqr.png" alt="Dynamic QR Bot" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="cardFeaturesHeadline text-center">Dynamic QR Bot</h2>
              <p className="text-center pt-3 cardFeaturesPera">
                Create and manage dynamic QR codes for various campaigns.
              </p>
            </div>
          </article>

          {/* 9th */}
          <article className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="flex justify-center">
              <div className="homeFeaturesLogoDiv">
                <img className="homeFeaturesLogo" src="/images/newPoint.png" alt="Reward Points System" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="cardFeaturesHeadline text-center">Reward Points</h2>
              <p className="text-center pt-3 cardFeaturesPera">
                Run comprehensive loyalty programs with point tracking.
              </p>
            </div>
          </article>

          {/* 10th */}
          <article className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="flex justify-center">
              <div className="homeFeaturesLogoDiv">
                <img className="homeFeaturesLogo" src="/images/newExp.png" alt="Dynamic Experience Builder" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="cardFeaturesHeadline text-center">Dynamic Experiences</h2>
              <p className="text-center pt-3 cardFeaturesPera">
                Create dynamic images and HTML pages for rich interactions.
              </p>
            </div>
          </article>

          {/* 11th */}
          <article className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="flex justify-center">
              <div className="homeFeaturesLogoDiv">
                <img className="homeFeaturesLogo" src="/images/newInbox.png" alt="Team Inbox Panel" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="cardFeaturesHeadline text-center">Multichannel Team Inbox</h2>
              <p className="text-center pt-3 cardFeaturesPera">
                Multi-channel chat panel for your team to manage communication easily.
              </p>
            </div>
          </article>

          {/* 12th */}
          <article className="pt-5 pb-5 px-2 lg:px-4 xl:px-4 md:px-3 cardBgColor w-full HomeFeturescardShadow rounded-2xl">
            <div className="flex justify-center">
              <div className="homeFeaturesLogoDiv">
                <img className="homeFeaturesLogo" src="/images/newBuilder.png" alt="Automation Builder Integration" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="cardFeaturesHeadline text-center">Automation Builder</h2>
              <p className="text-center pt-3 cardFeaturesPera">
                Easily Integrate With Shopify, WooCommerce, and 1000+ Tools.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* button features */}
      <div className="flex justify-center py-5 lg:py-10 xl:py-10 md:py-8"></div>
    </div>
  );
};

export default FeaturesPageFeturs;