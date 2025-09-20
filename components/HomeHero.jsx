import Link from "next/link";
import React from "react";

const HomeHero = () => {
  return (
    <div className="homeHerobg HomeHeroDivHeight flex justify-center lg:justify-center xl:justify-center items-center lg:items-center xl:items-center">
      <div className="w-full">
        <div className="mx-5 lg:mx-40 xl:mx-40 md:mx-10">
          <div className="flex justify-center lg:justify-center xl:justify-center md:justify-center mx-auto lg:mx-auto xl:mx-auto">
            {/* headline */}
            <header className="pt-16 lg:pt-28 xl:pt-28 md:pt-40" role="banner">
              <h1 className="heroNewHeadline max-w-[100%] lg:max-w-[862px] xl:max-w-[862px] text-center lg:text-center xl:text-center">
                Grow Your Business With <span className="whatsAppApiText">Power of WhatsApp</span>
              </h1>
              <p className="max-w-[100%] lg:max-w-[762px] xl:mx-w-[762px] text-center lg:text-center xl:text-center pt-3 lg:pt-5 xl:pt-5 newHeroPera">
                Connect with customers across all channels through a single, powerful platform. Automate conversations, boost sales, and deliver exceptional support.
              </p>
              <p className="text-center pt-4 powerText">
                Powered by Official WhatsApp APIs <span>⚡</span>
              </p>
              <nav aria-label="hero-cta">
                <div className="py-5 lg:py-5 xl:py-5 flex justify-center lg:justify-center xl:justify-center lg:gap-5 xl:gap-5 gap-2 md:gap-3">
                  <Link href="https://dash.watheta.com/register">
                    <button className="homeHeroGetButton">Get Started</button>
                  </Link>
                  <Link href="https://wa.me/8801318231252?text=inquire from wahteta">
                    <button className="rounded-full flex items-center homeScheduleButton">
                      Schedule A Call{" "}
                      <span className="ms-1">
                        <img src="/images/rightarow.png" alt="Arrow icon" />
                      </span>
                    </button>
                  </Link>
                </div>
              </nav>
            </header>
          </div>
        </div>

        {/* image */}
        <div className="hidden lg:block xl:block md:block">
          <div className="newHeroImgaDiv flex justify-center items-center mx-auto pt-5 pb-0 lg:pb-2 xl:pb-2">
            <img
              className="newHeroImga ZoomIn"
              src="images/pchero.png"
              alt="Illustration representing WhatsApp API features"
            />
          </div>
        </div>

        {/* phone images */}
        <div className="block lg:hidden xl:hidden md:hidden">
          <div className="pt-3">
            <div className="phoneHeroNewImgDiv">
              <img
                className="phoneHeroNewImg ZoomIn"
                src="images/phoneHeroNew.png"
                alt="Mobile interface of WhatsApp business tools"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
