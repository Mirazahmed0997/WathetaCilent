"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Zap, Gift, MessageCircleCode, Tag, BarChart3, ZapIcon, Star, LineChart, Clock, RefreshCwIcon, Repeat1 } from "lucide-react";

const slides = [
  {
    icon: <MessageCircleCode className="w-6 h-6 text-pink-600" />,
    title: "Cart Abandonment & Re-Engagement Flows",
    description:
      "Recover lost sales effortlessly with automated WhatsApp reminders. Nudge customers who left items in their cart with personalized offers, discounts, or product recommendations — all triggered at the perfect moment.",
    bg: "from-pink-100 to-pink-50",
  },
  {
    icon: <Gift className="w-6 h-6 text-yellow-600" />,
    title: "Review & Referral Flow",
    description:
      "Build trust and loyalty automatically. Collect customer reviews right after purchase, and instantly launch referral offers for happy customers — turning positive experiences into organic growth.",
    bg: "from-yellow-100 to-yellow-50",
  },
  {
    icon: <Tag className="w-6 h-6 text-green-600" />,
    title: "Smart CRM Tagging",
    description:
      "Keep your customer database intelligent. Automatically tag users as Lead-New, Reactivated, VIP, or Repeat Buyer based on engagement and activity for smarter targeting.",
    bg: "from-green-100 to-green-50",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    title: "Real-Time Performance Dashboard",
    description:
      "Monitor campaign success at a glance. Track open rates, response times, and conversions — all within a unified dashboard for better decision-making.",
    bg: "from-blue-100 to-blue-50",
  },
  {
    icon: <ZapIcon className="w-6 h-6 text-purple-600" />,
    title: "One-Click Flow Activation",
    description:
      "Go live instantly with pre-built automations. Choose from ready-made workflows for cart recovery, lead nurturing, or customer re-engagement — and activate them in one click.",
    bg: "from-purple-100 to-purple-50",
  },
  {
    icon: <Star className="w-6 h-6 text-amber-600" />,
    title: "Smart Lead Scoring & Segmentation",
    description:
      "Automatically rank and segment your contacts based on purchase behavior, activity level, and response rate. Identify your most valuable customers with ease.",
    bg: "from-amber-100 to-amber-50",
  },
  {
    icon: <Repeat1 className="w-6 h-6 text-teal-600" />,
    title: "Subscription & Repeat Cycle Automation",
    description:
      "Keep customers coming back with automated reminders for renewals and reorders — ideal for subscription-based or consumable products.",
    bg: "from-teal-100 to-teal-50",
  },
  {
    icon: <Clock className="w-6 h-6 text-indigo-600" />,
    title: "Time-Based Re-Engagement Campaigns",
    description:
      "Rekindle inactive customers with targeted offers at 30-, 60-, or 90-day intervals. Automate personalized outreach without manual effort.",
    bg: "from-indigo-100 to-indigo-50",
  },
  {
    icon: <RefreshCwIcon className="w-6 h-6 text-rose-600" />,
    title: "Recurring Product Purchase Reminders",
    description:
      "Send timely WhatsApp notifications reminding users to repurchase products after specific durations. Perfect for FMCG, beauty, or healthcare brands.",
    bg: "from-rose-100 to-rose-50",
  },
  {
    icon: <LineChart className="w-6 h-6 text-cyan-600" />,
    title: "Real-Time Campaign Analytics",
    description:
      "Stay data-driven with instant insights into campaign performance. Measure delivery, open, and conversion rates to optimize for higher ROI.",
    bg: "from-cyan-100 to-cyan-50",
  },
];

export default function AutoSlider() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          Advanced Customer Automation{" "}
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            & Smart CRM Workflows
          </span>
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="pb-6"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex">
              <div
                className={`bg-gradient-to-br ${slide.bg} rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col text-left h-[320px] sm:h-[340px] lg:h-[360px] w-full`}
              >
                <div className="mb-3 flex items-center justify-center rounded-lg bg-white/60 p-2 w-fit">
                  {slide.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {slide.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

  );
}
