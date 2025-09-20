import React from "react";

const HomeGenerativeAI = () => {
  return (
    <section className="py-12 lg:py-20 xl:py-20 md:py-16">
      <div className="flex flex-col lg:flex-row xl:flex-row md:flex-col items-start lg:items-center xl:items-center mx-3 lg:mx-32 xl:mx-32 md:mx-16 gap-10">
        
        {/* Content Section */}
        <article className="chatbotTextDivMain">
          <header className="ms-0 lg:ms-0 xl:ms-0 md:ms-8">
            <button
              className="whatsAppChatBotsText px-6 py-1 rounded-full border flex items-center cardHover"
              type="button"
              aria-label="Leads Boards"
            >
              Leads Boards
            </button>

            <h2 className="KeepYourBusinessText pt-4">
              Transform Operations with Our Generative AI Integration
            </h2>

            <p className="whatsAppChatBotsTextPera pt-4">
              Our Generative AI is a game-changing tool that empowers your
              business operations, ensuring accuracy, efficiency, and
              productivity at every level.
            </p>
          </header>

          <section className="grid grid-cols-2 gap-4 pt-4" aria-label="AI Benefits">
            <div>
              <p className="persentTextNumber">200%</p>
              <p className="w-1/2 pt-2 persentText">Acceleration in Response Time</p>
            </div>
            <div>
              <p className="persentTextNumber">500%</p>
              <p className="w-1/2 pt-2 persentText">Boost in Employee Productivity</p>
            </div>
            <div>
              <p className="persentTextNumber">200%</p>
              <p className="w-6/12 pt-2 persentText">Time on Repetitive Tasks</p>
            </div>
            <div>
              <p className="persentTextNumber">200%</p>
              <p className="w-6/12 pt-2 persentText">Reduce Manpower Expenses</p>
            </div>
          </section>

          <nav className="pt-5 flex items-center" aria-label="Action Buttons">
            <button
              className="font-normal flex items-center justify-between bg-white px-8 py-2 rounded-full border cardHover"
              type="button"
              aria-label="Try Now"
            >
              Try Now
              <span className="ms-3">
                <img src="/images/rightarow.png" alt="Arrow Icon" />
              </span>
            </button>
            <button className="ms-8 border-b border-gray-700" type="button">
              Read more
            </button>
          </nav>

          <section className="py-8 hidden lg:block xl:block xxl:block md:block" aria-label="Replaces Tools">
            <h3 className="repleacesText">Replaces</h3>
            <ul className="pt-5 flex items-center gap-1">
              {[
                { name: "ManyChats", icon: "/images/blackm.png" },
                { name: "Fuelchats", icon: "/images/bluec.png" },
                { name: "Wati", icon: "/images/wati.png" },
                { name: "Interkat", icon: "/images/zohobigin.png" },
              ].map((tool) => (
                <li key={tool.name}>
                  <span className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                    <img
                      className="repleacesItemsLogo me-1"
                      src={tool.icon}
                      alt={`${tool.name} logo`}
                    />
                    {tool.name}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-1 pt-2">
              <li>
                <span className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                  <img
                    className="repleacesItemsLogo me-1"
                    src="/images/landbot.png"
                    alt="Landbot logo"
                  />
                  Landbot
                </span>
              </li>
            </ul>
          </section>
        </article>

        {/* Video Section */}
        <aside className="flex justify-center items-center chatbotImgDivMain">
          <div className="whatsAppChatbotsImgDiv">
            <video
              className="whatsAppChatbotsImg"
              src="/images/Boardsvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Demo video"
            />
          </div>
        </aside>
      </div>

      {/* Mobile Replaces Section */}
      <section className="py-8 block lg:hidden xl:hidden xxl:hidden md:hidden mx-5" aria-label="Replaces Tools Mobile">
        <h3 className="repleacesText">Replaces</h3>
        <ul className="pt-5 flex items-center gap-1">
          {[
            { name: "ManyChats", icon: "/images/blackm.png" },
            { name: "Fuelchats", icon: "/images/bluec.png" },
            { name: "Wati", icon: "/images/wati.png" },
            { name: "Interkat", icon: "/images/zohobigin.png" },
          ].map((tool) => (
            <li key={tool.name}>
              <span className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
                <img
                  className="repleacesItemsLogo me-1"
                  src={tool.icon}
                  alt={`${tool.name} logo`}
                />
                {tool.name}
              </span>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-1 pt-2">
          <li>
            <span className="bg-white px-2 py-1 rounded-full repleacesItems flex items-center border cardHover">
              <img
                className="repleacesItemsLogo me-1"
                src="/images/landbot.png"
                alt="Landbot logo"
              />
              Landbot
            </span>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default HomeGenerativeAI;