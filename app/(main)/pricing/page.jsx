import React from "react";
import apiConfig from "@/configs/api.config";
import { fetchDataAsServer } from "@/utils/axiosServer";
import PricingHero from "./components/PricingHero";
import PricingPlan from "./components/PricingPlan";
import ExplorePricing from "./components/ExplorePricing";
import Addons from "./components/Addons";
import SupportService from "./components/SupportService";
import ScheduleADemo from "@/components/ScheduleADemo";
import PriceFAQ from "@/components/PriceFAQ";
import OfferCards from "../offer/components/OfferCards";


export async function generateMetadata() {
  const response = await fetchDataAsServer(apiConfig?.GET_PRICING_SEO);
  // Handle empty or invalid responses
  if (!response || !response.metadata) {
    console.warn("⚠️ SEO metadata not found, using fallback.");
    return {
      title: "Pricing - WaTheta",
      description: "Check our pricing plans at WaTheta",
      openGraph: {
        title: "Pricing - WaTheta",
        description: "Check our pricing plans at WaTheta",
        url: "https://watheta.com/pricing",
        siteName: "WaTheta",
        images: [{ url: "/images/wathetahome.jpg", alt: "WaTheta Pricing" }],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Pricing - WaTheta",
        description: "Check our pricing plans at WaTheta",
        images: ["/images/wathetahome.jpg"],
      },
    };;
  }
  const data = response?.metadata;

  if (!data) {
    return {
      title: "Pricing - WaTheta",
      description: "Check our pricing plans at WaTheta",
      openGraph: {
        title: "Pricing - WaTheta",
        description: "Check our pricing plans at WaTheta",
        url: "https://watheta.com/pricing",
        siteName: "WaTheta",
        images: [{ url: "/images/wathetahome.jpg", alt: "WaTheta Pricing" }],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Pricing - WaTheta",
        description: "Check our pricing plans at WaTheta",
        images: ["/images/wathetahome.jpg"],
      },
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords || [],

    openGraph: {
      title: data.ogTitle || data.metaTitle,
      description: data.ogDescription || data.metaDescription,
      url: data.ogUrl || "https://watheta.com/pricing",
      siteName: data.ogSiteName || "WaTheta",
      images: [
        {
          url: data.ogImages?.startsWith("http")
            ? data.ogImages
            : `${process.env.NEXT_PUBLIC_API_URL}${data.ogImages}`,
          alt: data.ogTitle || "WaTheta Pricing",
        },
      ],
      locale: data.ogLocale || "en_US",
      type: data.ogType || "website",
    },

    twitter: {
      card: data.twitterCard || "summary_large_image",
      title: data.twitterTitle || data.metaTitle,
      description: data.twitterDescription || data.metaDescription,
      images: [
        data.twitterImages?.startsWith("http")
          ? data.twitterImages
          : `${process.env.NEXT_PUBLIC_API_URL}${data.twitterImages}`,
      ],
    },
  };
}


const PricingPage = async () => {
  const plans = await fetchDataAsServer(apiConfig?.GET_PRICING)
  const addons = await fetchDataAsServer(apiConfig?.GET_ADDONS)
  const offers = await fetchDataAsServer(apiConfig?.GET_OFFER)
  return (
    <div className="max-w-screen w-full overflow-x-hidden">
      {/* <PricePage plans={plans}/> */}
      <PricingHero />
      <PricingPlan plans={plans} />
      <ExplorePricing />
      <OfferCards offers={offers} />
      <Addons addons={addons} />
      <SupportService />
      <ScheduleADemo />
      <PriceFAQ />
    </div>
  );
};


export default PricingPage;