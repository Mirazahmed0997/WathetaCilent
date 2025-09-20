import React from "react";

const WhtasAppCommerce = () => {
  return (
    <div className="py-12 lg:py-20 xl:py-20 md:py-16">
      <section
        className="flex flex-col lg:flex-row xl:flex-row md:flex-col items-start lg:items-center xl:items-center mx-3 lg:mx-32 xl:mx-32 md:mx-16 gap-10"
        aria-labelledby="whatsapp-ecommerce-title"
      >
        {/* Text Content */}
        <article className="chatbotTextDivMain">
          <header className="ms-0 lg:ms-0 xl:ms-0 md:ms-8">
            <h2
              id="whatsapp-ecommerce-title"
              className="sr-only"
            >
              WhatsApp E-commerce Section
            </h2>
            <button className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center cardHover">
              E-commerce on WhatsApp
            </button>
            <p className="KeepYourBusinessText pt-4">
              Engage your customer, showcase product, facilitate transactions
            </p>
            <p className="whatsAppChatBotsTextPera pt-4">
              Let your customers browse, add-to-cart, and place orders directly
              inside WhatsApp. No websites. No drop-offs. Seamless shopping
              experience in the app they already use.
            </p>
          </header>

          {/* Statistics */}
          <section className="grid grid-cols-2 gap-4 pt-4" aria-label="Business Stats">
            <div>
              <p className="persentTextNumber">30%</p>
              <p className="w-1/2 pt-2 persentText">decrease in abandon carts</p>
            </div>
            <div>
              <p className="persentTextNumber">45%</p>
              <p className="w-1/2 pt-2 persentText">Recurring Sales</p>
            </div>
            <div>
              <p className="persentTextNumber">22%</p>
              <p className="w-5/12 pt-2 persentText">Increase in repeat orders</p>
            </div>
          </section>

          {/* Buttons */}
          <div className="pt-5 flex items-center">
            <button className="font-normal flex items-center justify-between bg-white px-8 py-2 rounded-full border cardHover">
              Try Now
              <span className="ms-3">
                <img src="/images/rightarow.png" alt="Arrow icon" />
              </span>
            </button>
            <button className="ms-8 border-b border-gray-700">Read more</button>
          </div>

          {/* Replaces (Large Screen) */}
          <aside className="py-8 hidden lg:block xl:block xxl:block md:block">
            <p className="repleacesText">Replaces</p>
            <ul className="pt-5 flex items-center gap-1 flex-wrap">
              {[
                { src: "/images/wati.png", name: "Wati" },
                { src: "/images/gallabox.png", name: "GallaBox" },
                { src: "/images/zohobigin.png", name: "Interkat" },
                { src: "/images/heandblue.png", name: "Haptik" },
                { src: "/images/superlemon.png", name: "Superlemon" },
              ].map(({ src, name }, i) => (
                <li key={i}>
                  <span className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                    <span className="me-1 repleacesItemsLogoDiv">
                      <img
                        className="repleacesItemsLogo"
                        src={src}
                        alt={`${name} logo`}
                      />
                    </span>
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </article>

        {/* Image Section */}
        <figure className="flex justify-center items-center chatbotImgDivMain">
          <div className="whatsAppChatbotsImgDiv">
            <img
              className="whatsAppChatbotsImg"
              src="/images/crm.gif"
              alt="CRM demo on WhatsApp"
            />
          </div>
        </figure>
      </section>

      {/* Replaces (Small Screen) */}
      <aside className="py-8 block lg:hidden xl:hidden xxl:hidden md:hidden mx-5">
        <p className="repleacesText">Replaces</p>
        <ul className="pt-5 flex items-center gap-1 flex-wrap">
          {[
            { src: "/images/wati.png", name: "Wati" },
            { src: "/images/gallabox.png", name: "GallaBox" },
            { src: "/images/zohobigin.png", name: "Interkat" },
            { src: "/images/heandblue.png", name: "Haptik" },
            { src: "/images/superlemon.png", name: "Superlemon" },
          ].map(({ src, name }, i) => (
            <li key={i}>
              <span className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src={src}
                    alt={`${name} logo`}
                  />
                </span>
                {name}
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default WhtasAppCommerce;