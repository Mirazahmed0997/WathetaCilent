import React from "react";

const Conversational = () => {
  return (
    <section className="conversationalbg p-5 lg:p-16 xl:p-16 md:p-8">
      <div className="mx-0 lg:mx-32 xl:mx-32 md:mx-5">
        {/* Headline */}
        <header className="flex justify-center py-2 lg:py-5 xl:py-5 md:py-4">
          <h1 className="conversationalHeadline text-center">
            Conversational Automation For Every Industry
          </h1>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-5 lg:gap-x-12 gap-y-8 pt-5 xl:pt-10 lg:pt-10">
          {[
            { title: "BFSI", icon: "/images/houselogo.png" },
            { title: "Retail", icon: "/images/threeball.png" },
            { title: "Food & Beverage", icon: "/images/applebotol.png" },
            { title: "Education", icon: "/images/bass.png" },
            { title: "Healthcare", icon: "/images/love.png" },
            { title: "Travel", icon: "/images/plan.png" },
          ].map((item, index) => (
            <article
              key={index}
              className="card border cardBgColor rounded-3xl cardHover"
            >
              <div className="card-body">
                <h2 className="conversationalCardTitle">{item.title}</h2>
                <div className="py-2 lg:py-5 xl:py-5 flex justify-between items-center">
                  <a
                    href="#"
                    className="conversationallearnMoreButton flex items-center"
                  >
                    <span className="conversationalArrowDiv">
                      <img
                        src="/images/uprightarrow.png"
                        alt={`Learn more about ${item.title}`}
                      />
                    </span>
                    <span className="ms-2">Learn More</span>
                  </a>
                  <figure className="conversationalIconDiv">
                    <img
                      className="conversationalIcon"
                      src={item.icon}
                      alt={`${item.title} Icon`}
                    />
                  </figure>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Industry Button */}
        <div className="pt-10 flex justify-center">
          <a
            href="#"
            className="flex items-center border rounded-full text-sm lg:text-lg xl:text-lg px-5 lg:px-8 xl:px-8 py-3 lg:py-3 xl:py-3 bg-white viewallindustryButtonText cardHover"
          >
            View all industry
            <span className="ms-2">
              <img src="/images/rightarow.png" alt="View all arrow" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Conversational;