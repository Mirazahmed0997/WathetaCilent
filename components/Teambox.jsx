import React from "react";

const Teambox = () => {
  return (
    <section className="homeTemboxBg py-12 lg:py-20 xl:py-20 md:py-16">
      <div className="flex flex-col-reverse lg:flex-row xl:flex-row md:flex-col-reverse items-start lg:items-center xl:items-center mx-3 lg:mx-32 xl:mx-32 md:mx-16 gap-10">
        {/* Video Section */}
        <figure className="flex justify-center items-center chatbotImgDivMain">
          <div className="whatsAppChatbotsImgDiv">
            <video
              className="whatsAppChatbotsImg"
              src="/images/Omnichannlevideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              title="Omnichannel inbox video showing unified messaging"
            />
          </div>
        </figure>

        {/* Text Section */}
        <article className="justify-start lg:justify-end xl:justify-end ms-0 lg:ms-5 xl:ms-5 md:ms-8 chatbotTextDivMain">
          <header>
            <button className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center cardHover" aria-label="Multichannel Inbox">
              Multichannel Inbox
            </button>
            <h2 className="KeepYourBusinessText pt-4">
              Centralize all your customer conversations in one inbox.
            </h2>
          </header>
          <p className="whatsAppChatBotsTextPera pt-4">
            Manage WhatsApp, Facebook Messenger, Instagram DMs so your team never misses a lead. Respond faster, close more deals
          </p>

          {/* Stats Section */}
          <section className="grid grid-cols-2 gap-4 pt-4" aria-label="Customer Support Stats">
            <div>
              <p className="persentTextNumber">70%</p>
              <p className="w-1/2 pt-2 persentText">
                Customers Prefer Human Assistance
              </p>
            </div>
            <div>
              <p className="persentTextNumber">30-50%</p>
              <p className="w-1/2 pt-2 persentText">
                Faster first response time.
              </p>
            </div>
          </section>
          <section className="grid grid-cols-2 gap-4 pt-4" aria-label="Satisfaction and Cost Stats">
            <div>
              <p className="persentTextNumber">33%</p>
              <p className="w-1/3 pt-2 persentText">
                Boost CSAT (Customer Satisfaction Score)
              </p>
            </div>
            <div>
              <p className="persentTextNumber">40%</p>
              <p className="w-6/12 pt-2 persentText">
                Reduction in Operational Costs Y-O-Y
              </p>
            </div>
          </section>

          {/* CTA Buttons */}
          <div className="pt-5 flex items-center">
            <button className="font-normal flex items-center justify-between bg-white px-8 py-2 rounded-full border cardHover" aria-label="Try Now Button">
              Try Now{" "}
              <span className="ms-3">
                <img src="/images/rightarow.png" alt="Arrow Right Icon" />
              </span>
            </button>
            <button className="ms-8 border-b border-gray-800" aria-label="Read more about Multichannel Inbox">
              Read more
            </button>
          </div>

          {/* Replaces List (Desktop) */}
          <div className="py-8 hidden lg:block xl:block xxl:block md:block">
            <p className="repleacesText">Replaces</p>
            <div className="pt-5 flex items-center gap-1">
              {[
                { src: "/images/livechat.png", label: "Livechat" },
                { src: "/images/salesiq.png", label: "Sales IQ" },
                { src: "/images/greenheadphone.png", label: "Freshchat" },
                { src: "/images/bluereck.png", label: "Intercom" },
              ].map((item, idx) => (
                <span key={idx} className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img className="repleacesItemsLogo" src={item.src} alt={`${item.label} Logo`} />
                  </span>
                  {item.label}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 pt-2">
              <span className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img className="repleacesItemsLogo" src="/images/wati.png" alt="Wati Logo" />
                </span>
                Wati
              </span>
            </div>
          </div>
        </article>
      </div>

      {/* Replaces List (Mobile) */}
      <div className="py-8 block lg:hidden xl:hidden xxl:hidden md:hidden mx-5">
        <p className="repleacesText">Replaces</p>
        <div className="pt-5 flex items-center gap-1">
          {[
            { src: "/images/livechat.png", label: "Livechat" },
            { src: "/images/salesiq.png", label: "Sales IQ" },
            { src: "/images/greenheadphone.png", label: "Freshchat" },
            { src: "/images/bluereck.png", label: "Intercom" },
          ].map((item, idx) => (
            <span key={idx} className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
              <span className="me-1 repleacesItemsLogoDiv">
                <img className="repleacesItemsLogo" src={item.src} alt={`${item.label} Logo`} />
              </span>
              {item.label}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 pt-2">
          <span className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
            <span className="me-1 repleacesItemsLogoDiv">
              <img className="repleacesItemsLogo" src="/images/wati.png" alt="Wati Logo" />
            </span>
            Wati
          </span>
        </div>
      </div>
    </section>
  );
};

export default Teambox;