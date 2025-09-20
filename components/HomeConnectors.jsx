import React from "react";

const HomeConnectors = () => {
  return (
    <div className="connectorsbg py-12 lg:py-20 xl:py-20 md:py-16">
      <section
        className="flex flex-col-reverse lg:flex-row xl:flex-row md:flex-col-reverse items-start lg:items-center xl:items-center mx-3 lg:mx-32 xl:mx-32 md:mx-16 gap-10"
        aria-labelledby="connectors-heading"
      >
        <figure className="flex justify-center items-center chatbotImgDivMain">
          <div className="whatsAppChatbotsImgDiv">
            <img
              className="whatsAppChatbotsImg"
              src="/images/crm.gif"
              alt="CRM integration visual representation"
            />
          </div>
        </figure>

        <article className="chatbotTextDivMain">
          <header className="ms-0 lg:ms-5 xl:ms-5 md:ms-8">
            <h2 id="connectors-heading" className="sr-only">
              WhatsApp API Connectors & Workflows
            </h2>
            <button
              type="button"
              className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center cardHover"
              aria-label="Connector category"
            >
              Connectors
            </button>
            <p className="KeepYourBusinessText pt-4">
              Create custom workflows with 1000 plus integrations
            </p>
          </header>

          <p className="whatsAppChatBotsTextPera pt-4">
            Unlock seamless communication with WhatsApp powerful API connectors and webhook integrations, enabling real-time notifications, automation, and efficient customer engagement.
          </p>

          <section className="grid grid-cols-2 gap-4 pt-4" aria-label="Integration statistics">
            <div>
              <p className="persentTextNumber">70%</p>
              <p className="w-1/2 pt-2 persentText">Faster Integration</p>
            </div>
            <div>
              <p className="persentTextNumber">100%</p>
              <p className="w-1/2 pt-2 persentText">Saves on Developer Charges</p>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4 pt-4" aria-label="Platform capabilities">
            <div>
              <p className="persentTextNumber">100%</p>
              <p className="w-6/12 pt-2 persentText">No-Code Platform</p>
            </div>
          </section>

          <nav className="pt-5 flex items-center" aria-label="Action buttons">
            <button
              type="button"
              className="font-normal flex items-center justify-between bg-white px-8 py-2 rounded-full border cardHover"
              aria-label="Try the connector feature"
            >
              Try Now
              <span className="ms-3">
                <img src="/images/rightarow.png" alt="Arrow icon" />
              </span>
            </button>
            <button
              type="button"
              className="ms-8 border-b border-gray-700"
              aria-label="Read more about connectors"
            >
              Read more
            </button>
          </nav>

          <section className="py-8 hidden lg:block xl:block xxl:block md:block" aria-label="Platforms replaced by connectors">
            <p className="repleacesText">Replaces</p>
            <div className="pt-5 flex items-center gap-1">
              {[
                { name: "Zepier", img: "redflower.png" },
                { name: "Make", img: "rainbowm.png" },
                { name: "Pipedream", img: "boldp.png" },
                { name: "Pabbbly Connect", img: "greenp.png" },
              ].map(({ name, img }) => (
                <span
                  key={name}
                  className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover"
                >
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img
                      className="repleacesItemsLogo"
                      src={`/images/${img}`}
                      alt={`${name} logo`}
                    />
                  </span>
                  {name}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 pt-2">
              <span className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleasesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/blacktext.png"
                    alt="IFTTT logo"
                  />
                </span>
                IFFT
              </span>
            </div>
          </section>
        </article>
      </section>

      {/* Mobile version */}
      <section className="py-8 block lg:hidden xl:hidden xxl:hidden md:hidden mx-5" aria-label="Platforms replaced (mobile)">
        <p className="repleacesText">Replaces</p>
        <div className="pt-5 flex items-center gap-1">
          {[
            { name: "Zepier", img: "redflower.png" },
            { name: "Make", img: "rainbowm.png" },
            { name: "Pipedream", img: "boldp.png" },
            { name: "Pabbbly Connect", img: "greenp.png" },
          ].map(({ name, img }) => (
            <span
              key={name}
              className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover"
            >
              <span className="me-1 repleacesItemsLogoDiv">
                <img
                  className="repleacesItemsLogo"
                  src={`/images/${img}`}
                  alt={`${name} logo`}
                />
              </span>
              {name}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 pt-2">
          <span className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
            <span className="me-1 repleacesItemsLogoDiv">
              <img
                className="repleacesItemsLogo"
                src="/images/blacktext.png"
                alt="IFTTT logo"
              />
            </span>
            IFFT
          </span>
        </div>
      </section>
    </div>
  );
};

export default HomeConnectors;