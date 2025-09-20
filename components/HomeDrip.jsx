import React from "react";

const HomeDrip = () => {
  return (
    <section className="py-12 lg:py-20 xl:py-20 md:py-16">
      <section className="flex flex-col lg:flex-row xl:flex-row md:flex-col items-start lg:items-center xl:items-center mx-3 lg:mx-32 xl:mx-32 md:mx-16 gap-10">
        {/* Content */}
        <article className="chatbotTextDivMain">
          <div className="ms-0 lg:ms-0 xl:ms-0 md:ms-8">
            <button className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center cardHover">
              Drip Campaigns
            </button>

            <h2 className="KeepYourBusinessText pt-4">
              Automate Nurturing, Upsell more efficiently than ever before.
            </h2>

            <p className="whatsAppChatBotsTextPera pt-4">
              Drip Campaigns tool allows you to effectively guide your prospects
              along the buyer's journey, converting leads into customers more
              swiftly
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4" aria-label="Performance statistics">
              <div>
                <p className="persentTextNumber">63%</p>
                <p className="w-1/2 pt-2 persentText">Acceleration in Sales Closure</p>
              </div>
              <div>
                <p className="persentTextNumber">25–30%</p>
                <p className="w-1/2 pt-2 persentText">higher retention</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="persentTextNumber">77%</p>
                <p className="w-5/12 pt-2 persentText">Click-Through Rate</p>
              </div>
              <div>
                <p className="persentTextNumber">70%</p>
                <p className="w-6/12 pt-2 persentText">Manpower Savings</p>
              </div>
            </div>

            <div className="pt-5 flex items-center">
              <button className="font-normal flex items-center justify-between bg-white px-8 py-2 rounded-full border cardHover">
                Try Now
                <span className="ms-3">
                  <img src="/images/rightarow.png" alt="arrow icon" />
                </span>
              </button>
              <button className="ms-8 border-b border-gray-700">Read more</button>
            </div>

            <div className="py-8 hidden lg:block xl:block xxl:block md:block">
              <p className="repleacesText">Replaces</p>
              <ul className="pt-5 flex items-center gap-1">
                <li className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img className="repleacesItemsLogo" src="/images/blackm.png" alt="ManyChats logo" />
                  </span>
                  ManyChats
                </li>
                <li className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img className="repleacesItemsLogo" src="/images/bluec.png" alt="Fuelchats logo" />
                  </span>
                  Fuelchats
                </li>
                <li className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img className="repleacesItemsLogo" src="/images/drip.png" alt="Drips logo" />
                  </span>
                  Drips
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* Image */}
        <figure className="flex justify-center items-center chatbotImgDivMain">
          <div className="whatsAppChatbotsImgDiv">
            <img
              className="whatsAppChatbotsImg"
              src="/images/multyCahnnel.gif"
              alt="Drip Campaign automation illustration"
            />
          </div>
        </figure>
      </section>

      {/* Replaces Section (Mobile) */}
      <aside className="py-8 block lg:hidden xl:hidden xxl:hidden md:hidden mx-5">
        <p className="repleacesText">Replaces</p>
        <ul className="pt-5 flex items-center gap-1">
          <li className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
            <span className="me-1 repleacesItemsLogoDiv">
              <img className="repleacesItemsLogo" src="/images/blackm.png" alt="ManyChats logo" />
            </span>
            ManyChats
          </li>
          <li className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
            <span className="me-1 repleacesItemsLogoDiv">
              <img className="repleacesItemsLogo" src="/images/bluec.png" alt="Fuelchats logo" />
            </span>
            Fuelchats
          </li>
          <li className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
            <span className="me-1 repleacesItemsLogoDiv">
              <img className="repleacesItemsLogo" src="/images/drip.png" alt="Drips logo" />
            </span>
            Drips
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default HomeDrip;