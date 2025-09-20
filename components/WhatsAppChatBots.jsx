import React from "react";

const WhatsAppChatBots = () => {
  return (
    <div className="whatsAppChatBotsBg py-12 lg:py-20 xl:py-20 md:py-16">
      <section
        aria-labelledby="whatsapp-chatbot-heading"
        className="flex flex-col-reverse lg:flex-row xl:flex-row md:flex-col-reverse items-start lg:items-center xl:items-center mx-3 lg:mx-32 xl:mx-32 md:mx-16 gap-10"
      >
        {/* Image Section */}
        <figure className="flex justify-center items-center chatbotImgDivMain">
          <div className="whatsAppChatbotsImgDiv">
            <img
              className="whatsAppChatbotsImg"
              src="/images/crm.gif"
              alt="WhatsApp Chatbot animation demonstrating CRM features"
            />
          </div>
        </figure>

        {/* Text Content Section */}
        <article className="justify-start lg:justify-end xl:justify-end chatbotTextDivMain">
          <header>
            <h2 id="whatsapp-chatbot-heading" className="sr-only">
              WhatsApp Chatbot Section
            </h2>
            <button
              type="button"
              className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center cardHover"
            >
              Interactive Chatbot
            </button>
            <h3 className="KeepYourBusinessText pt-4">
              Keep your business open 24x7 without human
            </h3>
          </header>

          <p className="whatsAppChatBotsTextPera pt-4">
            Easily set up WhatsApp bots that reply instantly, ask the right
            questions, guide your customers step-by-step, and handle routine
            tasks
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <p className="persentTextNumber">100%</p>
              <p className="persentText">Boost in First Response Time</p>
            </div>
            <div>
              <p className="persentTextNumber">30%</p>
              <p className="pt-2 persentText">
                Improvement in Customer Satisfaction
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <p className="persentTextNumber">25%</p>
              <p className="pt-2 persentText">
                Rise in Sales Through Instant Engagement
              </p>
            </div>
            <div>
              <p className="persentTextNumber">34%</p>
              <p className="pt-2 persentText">
                Save in Operational Costs Y-O-Y
              </p>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="pt-5 flex items-center">
            <button
              type="button"
              className="font-normal flex items-center justify-between bg-white px-5 lg:px-8 xl:px-8 lg:py-2 xl:py-2 py-1 rounded-full border cardHover"
            >
              Try Now{" "}
              <span className="ms-3">
                <img src="/images/rightarow.png" alt="Arrow right icon" />
              </span>
            </button>
            <button type="button" className="ms-8 border-b-2 border-gray-800">
              Read more
            </button>
          </div>

          {/* Desktop "Replaces" Section */}
          <aside className="py-8 hidden lg:block xl:block xxl:block md:block">
            <p className="repleacesText">Replaces</p>
            <ul className="pt-5 flex items-center gap-1 flex-wrap">
              {[
                { src: "/images/blackm.png", alt: "ManyChats", name: "ManyChats" },
                { src: "/images/bluec.png", alt: "Fuelchats", name: "Fuelchats" },
                { src: "/images/wati.png", alt: "Wati", name: "Wati" },
                { src: "/images/zohobigin.png", alt: "Interkat", name: "Interkat" },
              ].map((item, i) => (
                <li key={i} className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img className="repleacesItemsLogo" src={item.src} alt={`${item.name} logo`} />
                  </span>
                  {item.name}
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-1 pt-2">
              <li className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img
                    className="repleacesItemsLogo"
                    src="/images/landbot.png"
                    alt="Landbot logo"
                  />
                </span>
                Landbot
              </li>
            </ul>
          </aside>
        </article>
      </section>

      {/* Mobile "Replaces" Section */}
      <aside className="py-8 block lg:hidden xl:hidden xxl:hidden md:hidden mx-5">
        <p className="repleacesText">Replaces</p>
        <ul className="pt-5 flex items-center gap-1 flex-wrap">
          {[
            { src: "/images/blackm.png", alt: "ManyChats", name: "ManyChats" },
            { src: "/images/bluec.png", alt: "Fuelchats", name: "Fuelchats" },
            { src: "/images/wati.png", alt: "Wati", name: "Wati" },
            { src: "/images/zohobigin.png", alt: "Interkat", name: "Interkat" },
          ].map((item, i) => (
            <li key={i} className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
              <span className="me-1 repleacesItemsLogoDiv">
                <img className="repleacesItemsLogo" src={item.src} alt={`${item.name} logo`} />
              </span>
              {item.name}
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-1 pt-2">
          <li className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
            <span className="me-1 repleacesItemsLogoDiv">
              <img
                className="repleacesItemsLogo"
                src="/images/landbot.png"
                alt="Landbot logo"
              />
            </span>
            Landbot
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default WhatsAppChatBots;