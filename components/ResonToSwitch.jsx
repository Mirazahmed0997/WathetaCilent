"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ResonToSwitch = () => {
  const [activeButton, setActiveButton] = useState("next");

  return (
    <section
      className="py-0 lg:py-16 xl:py-16 md:py-8 relative"
      aria-labelledby="reasons-to-switch-heading"
    >
      {/* Headline */}
      <header className="pt-6 lg:pt-0 xl:pt-0 md:pt-5">
        <h2
          id="reasons-to-switch-heading"
          className="ps-5 lg:ps-0 xl:ps-0 md:ps-0 ms-0 lg:ms-40 xl:ms-40 md:ms-0 lg:py-5 resonToSwitchHeadline"
        >
          04 Reasons To Switch To Add Whatsapp Business API
        </h2>
      </header>

      {/* Swiper Slider */}
      <div
        className="pt-5 ms-5 lg:ms-48 xl:ms-48 md:ms-5 relative"
        role="region"
        aria-label="Reasons to switch carousel"
      >
        <Swiper
          spaceBetween={35}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1.3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3.3,
              spaceBetween: 35,
            },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide className="pb-2 lg:pb-4 xl:pb-4">
            <article className="card cardBgColor HomeFeturescardShadow border HomeReasonToSwitchCard">
              <div className="card-body">
                <div className="resonIconDiv">
                  <img
                    className="resonIcon"
                    src="/images/rocket.png"
                    alt="Rocket icon representing marketing"
                  />
                </div>
                <h3 className="resonCardHeadline pt-3 w-8/12">
                  Conversational Marketing
                </h3>
                <p className="resonCardPera">
                  WhatsApp CTA on social Ads, broadcast, customer profiling.
                </p>
              </div>
            </article>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="pb-2 lg:pb-4 xl:pb-4">
            <article className="card cardBgColor border HomeFeturescardShadow HomeReasonToSwitchCard">
              <div className="card-body">
                <div className="resonIconDiv">
                  <img
                    className="resonIcon"
                    src="/images/setting.png"
                    alt="Settings icon representing commerce"
                  />
                </div>
                <h3 className="resonCardHeadline pt-3 w-8/12">
                  Conversational Commerce
                </h3>
                <p className="resonCardPera">
                  WhatsApp automation, order management, sales reporting.
                </p>
              </div>
            </article>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="pb-2 lg:pb-4 xl:pb-4">
            <article className="card cardBgColor border HomeFeturescardShadow HomeReasonToSwitchCard">
              <div className="card-body">
                <div className="resonIconDiv">
                  <img
                    className="resonIcon"
                    src="/images/reson2nd.png"
                    alt="Automation icon"
                  />
                </div>
                <h3 className="resonCardHeadline pt-3 w-10/12">
                  Advanced Automation
                </h3>
                <p className="resonCardPera pb-2">
                  Make your Business automation convert in to WhatsApp, Drip
                  campaign, AI based chatbot & automatic trigger.
                </p>
              </div>
            </article>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide className="pb-2 lg:pb-4 xl:pb-4">
            <article className="card cardBgColor border HomeFeturescardShadow HomeReasonToSwitchCard">
              <div className="card-body">
                <div className="resonIconDiv">
                  <img
                    className="resonIcon"
                    src="/images/resonicon.png"
                    alt="Support icon"
                  />
                </div>
                <h3 className="resonCardHeadline pt-3 w-7/12">
                  Conversational Support
                </h3>
                <p className="resonCardPera">
                  Shared inbox, chatbot, customer satisfaction report with
                  others.
                </p>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>

        {/* Slider Navigation Buttons */}
        <div className="absolute lg:-top-20 xl:-top-20 right-44 lg:right-44 xl:right-44 md:right-80 flex space-x-2 lg:space-x-5 xl:space-x-5 pb-8 lg:pb-0 xl:pb-0 md:pb-10 pt-4 lg:pt-0 xl:pt-0 md:pt-4">
          <button
            className={`custom-prev bg-white p-3 rounded-full border transition-all cursor-pointer ${
              activeButton === "prev"
                ? "border-gray-500 shadow-md"
                : "border-gray-300"
            }`}
            onClick={() => setActiveButton("prev")}
            aria-label="Previous slide"
          >
            <img src="/images/sliderleft.png" alt="Previous arrow" />
          </button>

          <button
            className={`custom-next bg-white p-3 rounded-full border transition-all cursor-pointer ${
              activeButton === "next"
                ? "border-gray-500 shadow-md"
                : "border-gray-300"
            }`}
            onClick={() => setActiveButton("next")}
            aria-label="Next slide"
          >
            <img src="/images/sliderright.png" alt="Next arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResonToSwitch;