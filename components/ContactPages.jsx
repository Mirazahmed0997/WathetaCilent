"use client";
import Link from "next/link";
import React from "react";
import ScheduleADemo from "./ScheduleADemo";
import useContactpageMetaData from "@/utility/useContactpageMetaData";

export async function generateMetadata() {
  const data = await useContactpageMetaData();
  console.log(data?.metaTitel);
  return {
    title: data?.metaTitel,
    description: data?.metaDescription,
    openGraph: {
      images: [
        {
          url: data?.image || "/images/wathetahome.jpg",
          alt: "WaTheta Features",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

const ContactPages = () => {
  const phoneNumber = "+880 1855-108700";
  const email = "info@watheta.com";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <main>
      <header className="contactBg">
        <div className="flex justify-center items-center contactHeroContentDiv py-0 lg:py-10 xl:py-10">
          <div className="w-full">
            <div className="flex justify-center pb-5">
              <div className="flex items-center justify-center pricingMetaLogoDivMain">
                <figure className="pricingMetaLogoDiv">
                  <img src="/images/metaLogo.png" alt="Meta logo" />
                </figure>
                <figcaption className="ms-3">
                  <p className="pricingOfficialText">Official Partner</p>
                  <p className="metaBusinessText">Meta Business Solution</p>
                </figcaption>
              </div>
            </div>

            <div className="flex justify-center">
              <h1 className="contactHeadline">
                Let's create something amazing together!
              </h1>
            </div>
            <p className="text-center pricingPera py-2 mx-5 lg:mx-0 xl:mx-0 md:mx-16">
              Choose the perfect plan for your business. Scale as you grow.
            </p>

            <div className="flex justify-center py-2 mx-5 lg:mx-5 xl:mx-5 md:mx-16">
              <Link href="https://wa.me/8801318231252?text=Shedule for wahteta">
                <button className="text-sm bg-white py-3 px-6 rounded-full cardHover text-green-600 font-semibold">
                  Schedule A Call
                </button>
              </Link>
            </div>

            <section className="mx-5 lg:mx-60 xl:mx-60 pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 gap-5 lg:gap-5 xl:gap-5">
                <article className="bg-white p-4 rounded-lg shadow-lg pricingHerogridCardDiv">
                  <figure className="pricingHeorIconDiv">
                    <img
                      className="pricingHeorIcon"
                      src="/images/pricing1000003911.png"
                      alt="Meta Partner"
                    />
                  </figure>
                  <header>
                    <p className="text-md lg:text-2xl xl:text-2xl font-semibold pt-3">
                      Official Partner
                    </p>
                    <p className="text-sm opacity-50 pt-2">
                      Meta Business Partner
                    </p>
                  </header>
                </article>
                <article className="bg-white p-4 rounded-lg shadow-lg pricingHerogridCardDiv">
                  <figure className="pricingHeorIconDiv">
                    <img
                      className="pricingHeorIcon"
                      src="/images/group.png"
                      alt="Industry Experience"
                    />
                  </figure>
                  <header>
                    <p className="text-md lg:text-2xl xl:text-2xl font-semibold pt-3">
                      12+ Years
                    </p>
                    <p className="text-sm opacity-50 pt-2">Industry Experience</p>
                  </header>
                </article>
                <article className="bg-white p-4 rounded-lg shadow-lg pricingHerogridCardDiv">
                  <figure className="pricingHeorIconDiv">
                    <img
                      className="pricingHeorIcon"
                      src="/images/erth.png"
                      alt="Global Presence"
                    />
                  </figure>
                  <header>
                    <p className="text-md lg:text-2xl xl:text-2xl font-semibold pt-3">
                      50+ Countries
                    </p>
                    <p className="text-sm opacity-50 pt-2">Industry Experience</p>
                  </header>
                </article>
              </div>
            </section>
          </div>
        </div>
      </header>

      {/* Contact Details Section */}
      <section className="mx-5 lg:mx-40 xl:mx-40 md:mx-16 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-x-5 lg:gap-x-8 xl:gap-x-8 gap-y-5 lg:gap-y-8 xl:gap-y-8 py-20">
        <article
          onClick={handleCall}
          className="bg-white shadow-lg rounded-lg p-6 border cursor-pointer pricingHerogridCardDiv"
        >
          <figure className="contactHeorIconDiv">
            <img
              className="pricingHeorIcon"
              src="/images/call-back_5605560.png"
              alt="Call icon"
            />
          </figure>
          <address className="ms-2 py-4 not-italic">
            <h2 className="text-xl font-semibold pb-3">Call Us</h2>
            <p className="text-lg opacity-50">{phoneNumber}</p>
          </address>
        </article>

        <a href="https://wa.me/message/R7KY7C262ZF6A1" target="_blank">
          <article className="bg-white shadow-lg rounded-lg p-6 border cursor-pointer pricingHerogridCardDiv">
            <figure className="contactHeorIconDiv">
              <img
                className="pricingHeorIcon"
                src="/images/whatsapp_2504957.png"
                alt="WhatsApp icon"
              />
            </figure>
            <address className="ms-2 py-4">
              <h2 className="text-xl font-semibold pb-3">WhatsApp</h2>
              <p className="text-lg opacity-50">{phoneNumber}</p>
            </address>
          </article>
        </a>

        <article
          onClick={handleEmail}
          className="bg-white shadow-lg rounded-lg p-6 border cursor-pointer pricingHerogridCardDiv"
        >
          <figure className="contactHeorIconDiv">
            <img
              className="pricingHeorIcon"
              src="/images/message_7884167.png"
              alt="Email icon"
            />
          </figure>
          <address className="ms-2 py-4">
            <h2 className="text-xl font-semibold pb-3">Email</h2>
            <p className="text-lg opacity-50">{email}</p>
          </address>
        </article>

        <article className="bg-white shadow-lg rounded-lg p-6 border cursor-pointer pricingHerogridCardDiv">
          <figure className="contactHeorIconDiv">
            <img
              className="pricingHeorIcon"
              src="/images/building_18276050.png"
              alt="Office location"
            />
          </figure>
          <address className="ms-2 py-4">
            <h2 className="text-xl font-semibold pb-3">Office</h2>
            <p className="text-lg opacity-50">
              House- 13, 2nd Floor, Road- 01 Sector- 01, Block- k, Aftabnagar,
              Dhaka- 1214
            </p>
          </address>
        </article>

        <article className="bg-white shadow-lg rounded-lg p-6 border cursor-pointer pricingHerogridCardDiv">
          <figure className="contactHeorIconDiv">
            <img
              className="pricingHeorIcon"
              src="/images/clock_18398626.png"
              alt="Clock icon"
            />
          </figure>
          <div className="ms-2 py-4">
            <h2 className="text-xl font-semibold pb-3">Business Hours</h2>
            <p className="text-lg opacity-50">
              Saturday -Thursday: 10:00 AM - 6:00 PM
            </p>
          </div>
        </article>

        <article className="bg-white shadow-lg rounded-lg p-6 border cursor-pointer pricingHerogridCardDiv">
          <figure className="contactHeorIconDiv">
            <img
              className="pricingHeorIcon"
              src="/images/mosque_6684648.png"
              alt="Service Area"
            />
          </figure>
          <div className="ms-2 py-4">
            <h2 className="text-xl font-semibold pb-3">Service Area</h2>
            <p className="text-lg opacity-50">
              Global coverage with virtual support teams
            </p>
          </div>
        </article>
      </section>

      <ScheduleADemo />

      {/* Ready to Transform */}
      <section className="mx-3 lg:mx-48 xl:mx-48 md:mx-16 pt-16 pb-16">
        <div className="joinOurNewsletterbgImgDiv relative">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/images/getstartbusiness.png"
            />
            <img
              className="joinOurNewsletterbgImg"
              src="/images/PhoneBgnewsletter.png"
              alt="Newsletter background"
            />
          </picture>
          <div className="joinOurNewsletterContentDiv flex justify-center items-center absolute inset-0">
            <div>
              <div className="flex justify-center">
                <h2 className="text-white transformYourBusinessText text-center">
                  Ready to Transform Your Business?
                </h2>
              </div>
              <p className="text-md lg:text-lg xl:text-lg text-white text-center pt-2 lg:pt-4 xl:pt-4 leading-relaxed mx-5 lg:mx-0 xl:mx-0">
                Join 23,000+ businesses already growing with our platform
              </p>
              <div className="py-4">
                <button className="flex justify-center items-center readyToButton">
                  Get Started Now{" "}
                  <span className="ms-2 lg:ms-3 xl:ms-3">
                    <img src="/images/whitearrow.png" alt="arrow" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPages;