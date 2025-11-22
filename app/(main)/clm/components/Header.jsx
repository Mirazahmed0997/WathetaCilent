'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';   // import the module
import 'swiper/css';
import Link from 'next/link';

export default function Header({ plans }) {
  return (
    <section className="relative w-full bg-gradient-to-br from-white to-[#f8f9fa] py-20 md:py-28 px-5 sm:px-8 md:px-14 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* ===== LEFT CONTENT ===== */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900">
            CLM & Automation Facilities<br className="hidden sm:block" />
            <span className="text-indigo-600">mart Automation
            </span> That <br className="hidden sm:block" />
            Drives Conversions
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            WaTheta helps businesses automate customer communication, nurture leads, and scale engagement with powerful CLM (Customer Lifecycle Management) and Automation Facilities.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            {plans
              .filter((plan) => plan.id === "cmfts8g9c0004u5l0e1e7mv9v")
              .map((plan) => (
                <Link
                key={plan.id}
                 href={`/payment/${plan?.id}`}>
                  <button
                    className="px-6 sm:px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base transition"
                  >
                    Try  {plan.name}  →
                  </button>
                </Link>
              ))}

          </div>

        </div>

        {/* ===== RIGHT IMAGE SLIDER ===== */}
        <div className="flex-1 flex justify-center md:justify-end w-full h-full">
          <div className="relative w-full max-w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-2xl shadow-2xl">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="h-full"
            >
              <SwiperSlide>
                <img
                  src="https://pickyassist.com/en/img/home-page-new/Streamline-&-Automate-your-Entire-Business-In-Just-1-Hour-operational-cost.webp"
                  alt="Slide 1"
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
                  alt="Slide 2"
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.svg')] bg-repeat opacity-10 pointer-events-none" />
    </section>

  );
}