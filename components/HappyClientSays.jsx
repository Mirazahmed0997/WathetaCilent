"use client";

import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import HappyClientSays2nd from "./HappyClientSays2nd";

const clientsReviews = [
  {
    name: "Md Shariful Islam",
    role: "Brand And Marketing Head, Ratul Properties",
    img: "/images/Shariful.jpg",
    text: "“Our clients love the personalized experience they get through WhatsApp. We can send them property updates, photos, and answer their questions instantly. It feels like we're always available, which builds trust and speeds up the sales cycle”",
  },
  {
    name: "Sameer Sddique",
    role: "COO, ICC Communication",
    img: "/images/samir.jpg",
    text: "“Before WaTheta, client onboarding was slow and messy. We collected info via chat, filled sheets manually, and sent follow-ups one by one. Now, customers fill a WhatsApp form, get an automated reply, and are assigned to a coordinator—all in minutes. We’ve cut onboarding time by 70%.”",
  },
  {
    name: "Eshter Ahmed",
    role: " COO, Carniba",
    img: "/images/karniva.jpg",
    text: "“Broadcasting on WhatsApp used to be risky—we got blocked twice. But with WaTheta’s verified API system, we now send messages to over 6,000 customers safely, especially during festival campaigns. Our open rate? A whopping 96%. It's safer, smarter, and way more effective.”",
  },
  {
    name: "Avilash Das",
    role: "CEO, Beauty Castle",
    img: "/images/buty.jpg",
    text: "“Our customer messages were all over the place—Instagram, Facebook, WhatsApp. We were constantly switching apps and missing inquiries. With WaTheta’s Omnichannel Inbox, we now handle everything in one dashboard. Response time dropped from 3 hours to just under 10 minutes. Our team is finally in sync.”",
  },
  {
    name: "MD Faruk Hossain",
    role: "MD, Paystation",
    img: "/images/paystation.jpg",
    text: "“We struggled with follow-ups and often forgot to reconnect with warm leads. WaTheta’s CRM changed everything. Now, we have clear pipelines, reminder flows, and auto-tags. Our conversions went up by 60% because we’re actually following up at the right time.”",
  },
  {
    name: "Nazmul Hoque",
    role: "Sr Executive, Marketing, Tropical Homes",
    img: "/images/tropical.jpg",
    text: "“In real estate, timing is everything. We used to rely on spreadsheets and manual follow-ups. WaTheta gave us structured lead boards, tagging, and auto-routing to our agents. Now we can focus on serious buyers first. We closed more sales in 30 days than we did in the last 3 months.”",
  },
  {
    name: "Mufassal Saif",
    role: "Founder/ Ceo, ACS Future School",
    img: "/images/mufassal.jpg",
    text: "“We reached over 4,000 students with a single course update, and more than 85% opened it within minutes. Enrollment reminders, class schedules, and offers now go straight to their phones — no delays, no confusion. It’s personal, instant, and insanely effective for student engagement.”",
  },
 
];

const HappyClientSays = () => {
  return (
    <div className="HappyClientSaysBg">
      <div className="text-center pt-5 lg:pt-20 xl:pt-20 md:pt-10">
        <h2 className="happyClientsSaysText text-white">Happy Client Says</h2>
      </div>
      {/* 1st slide */}
      <div className="pt-10 mx-0 lg:mx-0 xl:mx-0 md:mx-1">
        <Swiper
  spaceBetween={20}
  centeredSlides={true}
  freeMode={true}
  loop={true}
  autoplay={{
    delay: 0, // Continuous sliding
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
  speed={4000} // Adjust speed for smooth sliding
  modules={[FreeMode, Autoplay]}
  className="mySwiper"
  breakpoints={{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3.2 },
  }}
>
          {clientsReviews.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-black p-5 rounded-2xl happyClientsCardDiv">
                <div className="flex items-center">
                  <div className="happyClientsSaysImgDiv">
                    <img
                      className="happyClientsSaysImg"
                      src={client.img}
                      alt=""
                    />
                  </div>
                  {/* name */}
                  <div className="ms-4">
                    <h3 className="text-lg font-semibold">{client.name}</h3>
                    <p className="text-sm">{client.role}</p>
                  </div>
                </div>
                {/* pera */}
                <div className="py-4 px-3">
                  <p className="clientSaySliderPera">
                    {client.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 2nd slide*/}
      <div className="pt-10 hidden lg:block xl:block">
      <HappyClientSays2nd/>
      </div>
    </div>
  );
};

export default HappyClientSays;
