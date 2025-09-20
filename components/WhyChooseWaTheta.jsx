"use client";

import React from "react";


const WhyChooseWaTheta = () => {
  return (
    <section className="whaychooseWathetabg py-12 lg:py-20 xl:py-20 md:py-16">
      <div className="mx-5 lg:mx-40 xl:mx-40">
        {/* headline section */}
        <header className="flex flex-col lg:flex-row xl:flex-row justify-center lg:justify-between xl:justify-between md:justify-center">
          <div className="w-full">
            <h1 className="whyChooseWaThetaText">Why Choose WaTheta</h1>
          </div>
          <div className="flex justify-center lg:justify-end xl:justify-end pt-4">
            <p className="whyChooseWaThetaPera">
              WaTheta is the all-in-one platform built to power modern business. It transforms WhatsApp into a streamlined hub for capturing leads, closing sales, automating workflows, and delivering seamless customer support all from a single dashboard
            </p>
          </div>
        </header>

        {/* cards section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 pt-10 gap-10">
          <article className="card border cardBgColor rounded-3xl cardHover">
            <div className="card-body">
              <figure className="whyChooseWathetaCardImgDiv">
                <img
                  className="whyChooseCardImg"
                  src="/images/barriers.png"
                  alt="Break Engagement Barriers Icon"
                />
              </figure>
              <div className="py-5">
                <h2 className="whyChooseCardHeadline">Break Engagement Barriers</h2>
              </div>
              <p className="text-xl">
                Engage using WhatsApp and improve response rates over email, SMS and in-app messaging and campaigning
              </p>
            </div>
          </article>

          <article className="card border cardBgColor rounded-3xl cardHover">
            <div className="card-body">
              <figure className="whyChooseWathetaCardImgDiv">
                <img
                  className="whyChooseCardImg"
                  src="/images/upscale.png"
                  alt="Upscale Icon"
                />
              </figure>
              <div className="py-5">
                <h2 className="whyChooseCardHeadline">A Better Way To Upscale</h2>
              </div>
              <p className="text-xl">
                Upscale with multiple users on one single number & get a better return on investment than alternative WhatsApp BSPs.
              </p>
            </div>
          </article>

          <article className="card border cardBgColor rounded-3xl cardHover">
            <div className="card-body">
              <figure className="whyChooseWathetaCardImgDiv">
                <img
                  className="whyChooseCardImg"
                  src="/images/efficiently.png"
                  alt="Communicate Efficiently Icon"
                />
              </figure>
              <div className="py-5">
                <h2 className="whyChooseCardHeadline">Communicate At Scale Efficiently</h2>
              </div>
              <p className="text-xl">
                Easily start and manage conversations with thousands of customers and prospects through automation, chatbots & custom workflows.
              </p>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default WhyChooseWaTheta;