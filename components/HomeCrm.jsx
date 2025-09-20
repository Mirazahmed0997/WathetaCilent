import React from "react";

const HomeCrm = () => {
  return (
    <div className="py-12 lg:py-20 xl:py-20 md:py-16">
      <section className="flex flex-col lg:flex-row xl:flex-row md:flex-col items-start lg:items-center xl:items-center mx-3 lg:mx-32 xl:mx-32 md:mx-16 gap-10">
        {/* Text Section */}
        <article className="chatbotTextDivMain">
          <header>
            <button className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center cardHover">
              Modular CRM
            </button>
            <p className="KeepYourBusinessText pt-4">
              A Conversational CRM to manage, segment, and convert leads faster
            </p>
          </header>
          <section>
            <p className="whatsAppChatBotsTextPera pt-4">
              A WhatsApp-integrated CRM system with Boards, Cards, Leads Funnel,
              Sheets and performance tracking.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">60%</p>
                <p className="pt-2 persentText">Increase in Sales</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">5%</p>
                <p className="pt-2 persentText">Faster Leads or Opportunities</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">40%</p>
                <p className="pt-2 persentText">Effective team coordination</p>
              </div>
              <div>
                <p className="persentTextNumber">75%</p>
                <p className="pt-2 persentText">Save on Operational Costs Y-O-Y</p>
              </div>
            </div>
            <footer className="pt-6 flex items-center">
              <button className="font-normal flex items-center justify-between bg-white px-8 py-2 rounded-full border cardHover">
                Try Now
                <span className="ms-3">
                  <img src="/images/rightarow.png" alt="Right arrow icon" />
                </span>
              </button>
              <button className="ms-8 border-b-2 border-gray-800">
                Read more
              </button>
            </footer>
          </section>
          <section className="py-8 hidden lg:block xl:block xxl:block md:block">
            <p className="repleacesText">Replaces</p>
            <div className="pt-5 flex items-center gap-1">
              <p className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/excel.png"
                    alt="Excel logo"
                  />
                </span>
                Excel
              </p>
              <p className="bg-white px-1 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/googlesheets.png"
                    alt="Google Sheets logo"
                  />
                </span>
                Google Sheets
              </p>
              <p className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/trello.png"
                    alt="Trello logo"
                  />
                </span>
                Trello
              </p>
              <p className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/zohobigin.png"
                    alt="Zoho Bigin logo"
                  />
                </span>
                Zoho Bigin
              </p>
            </div>
            <div className="flex items-center gap-1 pt-2">
              <p className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/zohocrm.png"
                    alt="Zoho CRM logo"
                  />
                </span>
                Zoho CRM
              </p>
              <p className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/hubspot.png"
                    alt="Hubspot logo"
                  />
                </span>
                Hubspot
              </p>
              <p className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/bluebgwhitetext.png"
                    alt="Salesforce logo"
                  />
                </span>
                Salesforce
              </p>
              <p className="bg-white px-2 lg:px-1 xl:px-1 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/orangehumen.png"
                    alt="Fresh Sales logo"
                  />
                </span>
                Fresh Sales
              </p>
            </div>
            <div className="flex items-center gap-1 pt-2">
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/blackp.png"
                    alt="Pipedrive logo"
                  />
                </span>
                Pipedrive
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/colorarrow.png"
                    alt="Go High Level logo"
                  />
                </span>
                Go High Level
              </p>
              <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/bluewhite.png"
                    alt="Leadsquared logo"
                  />
                </span>
                Leadsquared
              </p>
            </div>
          </section>
        </article>
        {/* Video Section */}
        <div className="flex justify-center items-center chatbotImgDivMain">
          <div className="whatsAppChatbotsImgDiv">
            <video
              className="whatsAppChatbotsImg"
              src="/images/CRMvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              alt="CRM Demo Video"
            />
          </div>
        </div>
      </section>

      {/* Mobile view for replacements */}
      <div className="py-8 block lg:hidden xl:hidden xxl:hidden md:hidden mx-5">
        <p className="repleacesText">Replaces</p>
        <div className="pt-5 flex items-center gap-1">
          <p className="bg-white px-2 lg:px-5 xl:px-5 py-1 rounded-full repleacesItems flex items-center border cardHover">
            <span className="me-1 repleacesItemsLogoDiv">
              <img
                className="repleacesItemsLogo"
                src="/images/excel.png"
                alt="Excel logo"
              />
            </span>
            Excel
          </p>
          {/* Add the rest of the items here as well */}
        </div>
      </div>
    </div>
  );
};

export default HomeCrm;