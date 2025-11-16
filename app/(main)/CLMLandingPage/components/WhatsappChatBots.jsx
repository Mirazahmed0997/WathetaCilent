"use client";

import {

  MessageCircleCode,
  ShoppingBagIcon,
  WrenchIcon,
  MegaphoneIcon,
  Share2Icon,
  NetworkIcon,
  BrainCircuit,
  Tv,
} from "lucide-react";
import { useRef } from "react";
import Brand from "./Brand";


export default function TrustBadges() {
  const scrollRef = useRef(null);


  

  const brands = [
    {
      backgroundImage: "/images/bg-pattern.png",
      title: "Trusted by 2000+ Customers in 80+ Countries Since 2018",
      logos: [
        "https://pickyassist.com/en/img/partners/Hamad-International-Airport-logo.png",
        "https://pickyassist.com/en/img/partners/Agappe-Diagnostics-Ltd-logo.png",
        "https://pickyassist.com/en/img/partners/suzuki-logo.png",
        "https://pickyassist.com/en/img/partners/religare.png",
        "https://pickyassist.com/en/img/partners/Acumen.png",
        "https://pickyassist.com/en/img/partners/Sayaji-Group.png"
      ]
    }
  ];

  const services = [
    { name: "Chatbots", icon: MessageCircleCode },
    { name: "Modular CRM", icon: ShoppingBagIcon },
    { name: "Teambox", icon: WrenchIcon },
    { name: "Broadraster", icon: Tv },
    { name: "WhatsApp Commerce", icon: MegaphoneIcon },
    { name: "Conversational Funnel", icon: Share2Icon },
    { name: "Connectors", icon: NetworkIcon },
    { name: "Generative AI", icon: BrainCircuit }
  ];

  const data = brands[0];

  return (
    <section
      className="pt-24 md:py-20 px-4 md:px-12 text-center bg-white/80 backdrop-blur-md transition-all duration-500"
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
    <div className="shadow-xl rounded-lg">
      <div className="bg-[#3E3F58] py-4 rounded-t-lg">
        <h2 className="text-2xl md:text-3xl font-semibold  text-white">
          {data.title}
        </h2>
      </div>

      <hr class="w-1/2 mx-auto border-t-1 border-gray-300 mt-6 shadow-sm" />

      {/* Logos Section */}
      <div className="hidden sm:flex flex-wrap justify-center py-12  items-center gap-10 mb-10">
        {data.logos.map((logo, index) => (
          <div
            key={index}
            className="w-28 h-14 relative bg-white rounded-xl  hover:bg-indigo-50 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              fill
              className="object-contain rounded-md "
            />
          </div>
        ))}
      </div>
    </div>

      {/* Mobile Logo Slider */}
      <div className="sm:hidden overflow-x-auto no-scrollbar mb-10 p-4" ref={scrollRef}>
        <div className="flex gap-4 w-max px-2">
          {data.logos.map((logo, index) => (
            <div
              key={index}
              className="min-w-[6rem] h-14 bg-white rounded-xl shadow-md p-2 flex items-center justify-center hover:bg-indigo-50 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                width={80}
                height={40}
                className="object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}


      {/* Desktop / Tablet Grid */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-center">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-gray-50 shadow-xl/20 shadow-indigo-500/50 hover:shadow-xl/30  hover:bg-purple-200 transition-all p-2 rounded-xl flex flex-col items-center "
            >
              <Icon className="w-12 h-12 rounded-xl  text-indigo-600 mb-2 p-2 bg-[#DEFCF1]" />
              <div className="text-lg font-medium text-gray-700">{service.name}</div>
            </div>
          );
        })}
      </div>

      {/* Mobile Slider */}
      <div className="sm:hidden overflow-x-auto no-scrollbar mt-4 p-4">
        <div className="flex gap-4 w-max px-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="min-w-[7rem] bg-gray-50 shadow-lg hover:shadow-md hover:bg-indigo-50 transition-all p-4 rounded-xl flex flex-col items-center"
              >
                <Icon className="w-6 h-6 text-indigo-600 mb-2" />
                <div className="text-xs font-medium text-gray-700 text-center">
                  {service.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>


          <section className="w-full flex justify-center py-8 px-4">
      <div
        className="
          flex flex-wrap items-center justify-center gap-3 sm:gap-4
          bg-indigo-50/40 rounded-full px-5 py-3
          shadow-sm
        "
      >
        {/* Label */}
        <span className="font-semibold text-indigo-900 whitespace-nowrap">
          Replaces
        </span>

       <Brand/>
      </div>
    </section>


    </section>

  );
}
