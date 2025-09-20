import React from "react";

const HomeBroadcaster = () => {
  return (
    <div className="broadcasterBg py-12 lg:py-20 xl:py-20 md:py-16">
      <section
        className="flex flex-col-reverse lg:flex-row xl:flex-row md:flex-col-reverse items-start lg:items-center xl:items-center mx-3 lg:mx-32 xl:mx-32 md:mx-16 gap-10"
        aria-labelledby="broadcast-heading"
      >
        <figure className="w-full flex justify-center items-center chatbotImgDivMain">
          <div className="whatsAppChatbotsImgDiv">
            <video
              className="whatsAppChatbotsImg"
              src="/images/Broadcastvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Broadcast feature demo video"
            />
          </div>
        </figure>

        <article className="chatbotTextDivMain">
          <header className="ms-0 lg:ms-5 xl:ms-5 md:ms-8">
            <h2 id="broadcast-heading" className="sr-only">
              WhatsApp Broadcast Features
            </h2>
            <button
              type="button"
              className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center cardHover"
              aria-label="Broadcast feature"
            >
              Broadcast
            </button>
            <p className="KeepYourBusinessText pt-4">
              Broadcast product releases, newsletter, promotional offers
            </p>
          </header>

          <p className="whatsAppChatBotsTextPera pt-4">
            Instant bulk messaging for promotions, transactions, and
            announcements. Personalize each message using carousel posts,
            images, videos.
          </p>

          <section className="grid grid-cols-2 gap-4 pt-4" aria-label="Broadcast benefits stats">
            <div>
              <p className="persentTextNumber">40%</p>
              <p className="w-1/2 pt-2 persentText">Uptick in Sales</p>
            </div>
            <div>
              <p className="persentTextNumber">98%</p>
              <p className="w-7/12 pt-2 persentText">open rate</p>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4 pt-4" aria-label="Additional broadcast stats">
            <div>
              <p className="persentTextNumber">3x</p>
              <p className="w-1/3 pt-2 persentText">More engagement than SMS</p>
            </div>
            <div>
              <p className="persentTextNumber">10x</p>
              <p className="w-6/12 pt-2 persentText">ROI in festive campaigns</p>
            </div>
          </section>

          <nav className="pt-5 flex items-center" aria-label="Call to action buttons">
            <button
              type="button"
              className="font-normal flex items-center justify-between bg-white px-8 py-2 rounded-full border cardHover"
              aria-label="Try broadcast feature"
            >
              Try Now
              <span className="ms-3">
                <img src="/images/rightarow.png" alt="Arrow right icon" />
              </span>
            </button>
            <button type="button" className="ms-8 border-b border-gray-800" aria-label="Read more about broadcast">
              Read more
            </button>
          </nav>

          <section className="py-8 hidden lg:block xl:block xxl:block md:block" aria-label="Tools replaced by WaTheta">
            <p className="repleacesText">Replaces</p>
            <div className="pt-5 flex items-center gap-1">
              {[
                { name: "ManyChats", img: "blackm.png" },
                { name: "Fuelchats", img: "bluec.png" },
                { name: "Wait", img: "greenheadphone.png" },
                { name: "Interkat", img: "bluereck.png" },
              ].map(({ name, img }) => (
                <span
                  key={name}
                  className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover"
                >
                  <span className="me-1 repleacesItemsLogoDiv">
                    <img className="repleacesItemsLogo" src={`/images/${img}`} alt={`${name} logo`} />
                  </span>
                  {name}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 pt-2">
              <span className="bg-white px-2 lg:px-2 xl:px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <span className="me-1 repleacesItemsLogoDiv">
                  <img className="repleacesItemsLogo" src="/images/heandblue.png" alt="Haptik logo" />
                </span>
                Haptik
              </span>
            </div>
          </section>
        </article>
      </section>

      {/* Mobile Version of "Replaces" Section */}
      <section className="py-8 block lg:hidden xl:hidden xxl:hidden md:hidden mx-5" aria-label="Tools replaced on mobile">
        <p className="repleacesText">Replaces</p>
        <div className="pt-5 flex items-center gap-1">
          {[
            { name: "ManyChats", img: "blackm.png" },
            { name: "Fuelchats", img: "bluec.png" },
            { name: "Wait", img: "greenheadphone.png" },
            { name: "Interkat", img: "bluereck.png" },
          ].map(({ name, img }) => (
            <span
              key={name}
              className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover"
            >
              <span className="me-1 repleacesItemsLogoDiv">
                <img className="repleacesItemsLogo" src={`/images/${img}`} alt={`${name} logo`} />
              </span>
              {name}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 pt-2">
          <span className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
            <span className="me-1 repleacesItemsLogoDiv">
              <img className="repleacesItemsLogo" src="/images/heandblue.png" alt="Haptik logo" />
            </span>
            Haptik
          </span>
        </div>
      </section>
    </div>
  );
};

export default HomeBroadcaster;