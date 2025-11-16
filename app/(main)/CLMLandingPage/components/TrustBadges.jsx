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

import { cn } from "@/lib/utils";

export default function TrustedAndServicesSection() {
  const brands = [
    "https://i.postimg.cc/K8RggKt7/louis-vitton-1.jpg",
    "https://i.postimg.cc/1tPtM4Nt/Giorgio-Armani-png.webp",
    "https://i.postimg.cc/K8RggKt7/louis-vitton-1.jpg",
    "https://i.postimg.cc/1tPtM4Nt/Giorgio-Armani-png.webp",
    "https://i.postimg.cc/K8RggKt7/louis-vitton-1.jpg",
    "https://i.postimg.cc/1tPtM4Nt/Giorgio-Armani-png.webp",
    
  ];

  const services = [
    { name: "Chatbots", icon: MessageCircleCode },
    { name: "Modular CRM", icon: ShoppingBagIcon },
    { name: "Teambox", icon: WrenchIcon },
    { name: "Broadraster", icon: Tv },
    { name: "WhatsApp Commerce", icon: MegaphoneIcon },
    { name: "Conversational Funnel", icon: Share2Icon },
    { name: "Connectors", icon: NetworkIcon },
    { name: "Generative AI", icon: BrainCircuit },
  ];

  return (
<section className="bg-gray-50 py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
  {/* ===== Trusted By Section ===== */}
  <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 text-center">
    <div className="inline-flex flex-wrap items-center justify-center bg-gray-900 text-white rounded-full px-4 sm:px-6 py-6 mb-6 text-xs sm:text-sm font-medium">
      ✅ Trusted by <span className="mx-1 font-semibold">2000+</span> Customers in <span className="mx-1 font-semibold">80+</span> Countries Since 2018
    </div>

    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-6">
      {brands.map((logo, index) => (
        <div
          key={index}
          className="relative w-20 h-10 sm:w-24 sm:h-12 md:w-28 md:h-14 lg:w-32 lg:h-16 grayscale hover:grayscale-0 transition-all duration-300"
        >
          <img
            src={logo}
            alt={`brand-${index}`}
            className="object-contain w-full h-full"
          />
        </div>
      ))}
    </div>
  </div>

  {/* ===== Services Section ===== */}
  <div className="mt-16 text-center">
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-8 text-gray-800">
      Our Services
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
      {services.map(({ name, icon: Icon }, index) => (
        <div
          key={index}
          className={cn(
            'bg-white rounded-2xl shadow-sm p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300',
            index % 2 === 1 ? 'bg-green-500' : 'bg-green-500',
          )}
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-700 mb-3" />
          <h3 className="text-xs sm:text-sm md:text-base text-gray-800 font-medium">
            {name}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
