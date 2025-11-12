import Conversational from "@/components/Conversational";
import GettingStarted from "@/components/GettingStarted";
import HappyClientSays from "@/components/HappyClientSays";
import HomeBroadcaster from "@/components/HomeBroadcaster";
import HomeConnectors from "@/components/HomeConnectors";
import HomeCrm from "@/components/HomeCrm";
import HomeDrip from "@/components/HomeDrip";
import HomeFAQ from "@/components/HomeFAQ";
import HomeFeatures from "@/components/HomeFeatures";
import HomeGenerativeAI from "@/components/HomeGenerativeAI";
import HomeHero from "@/components/HomeHero";
import HomeIntegrations from "@/components/HomeIntegrations";
import PriceFAQ from "@/components/PriceFAQ";
import ResonToSwitch from "@/components/ResonToSwitch";
import Teambox from "@/components/Teambox";
import TrustedCustomers from "@/components/TrustedCustomers";
import WhatsAppChatBots from "@/components/WhatsAppChatBots";
import WhtasAppCommerce from "@/components/WhtasAppCommerce";
import WhyChooseWaTheta from "@/components/WhyChooseWaTheta";
import apiConfig from "@/configs/api.config";
import { fetchDataAsServer } from "@/utils/axiosServer";
import OfferCards from "./offer/components/OfferCards";

const metadata = {
  title:
    "WaTheta | Official WhatsApp Business API Provider | Automation & CRM Solutions",
  description:
    "WaTheta is an official Meta Business Solution Provider offering WhatsApp Business API, automation, CRM, and omnichannel solutions for businesses in Bangladesh and beyond. Start scaling with smart communication tools today.",
  keywords: ["WhatsApp Business API", "CRM", "Automation", "Meta BSP", "WaTheta"],

  openGraph: {
    title:
      "WaTheta – Official WhatsApp Business API Provider | Automation & CRM Solutions",
    description:
      "WaTheta is an official Meta Business Solution Provider offering WhatsApp Business API, automation, CRM, and omnichannel solutions for businesses in Bangladesh and beyond.",
    url: "https://watheta.com",
    siteName: "WaTheta",
    images: [
      {
        url: "/images/wathetahome.jpg",
        alt: "WaTheta Features",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WaTheta | WhatsApp Business API & Automation",
    description:
      "Scale your business communication with WaTheta – official WhatsApp Business API, CRM, and automation tools.",
    images: ["/images/wathetahome.jpg"],
  },
};

export async function generateMetadata() {
  const response = await fetchDataAsServer(apiConfig?.GET_SITE_SEO);
  // Handle empty or invalid responses
  if (!response || !response.metadata) {
    console.warn("⚠️ SEO metadata not found, using fallback.");
    return metadata;
  }

  const data = response?.metadata;

  if (!data) return metadata; // fallback to static above

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords || [],

    openGraph: {
      title: data.ogTitle || data.metaTitle,
      description: data.ogDescription || data.metaDescription,
      url: data.ogUrl || "https://watheta.com",
      siteName: data.ogSiteName || "WaTheta",
      images: [
        {
          url: data.ogImages?.startsWith("http")
            ? data.ogImages
            : `${process.env.NEXT_PUBLIC_API_URL}${data.ogImages}`,
          alt: data.ogTitle || "WaTheta",
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


export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeFeatures />
      <WhatsAppChatBots />
      <HomeCrm />
      <Teambox />
      <WhtasAppCommerce />
      <HomeBroadcaster />
      <HomeDrip />
      <HomeConnectors />
      <HomeGenerativeAI />
      <HappyClientSays />
      <WhyChooseWaTheta />
      <HomeIntegrations />
      <Conversational />
      <ResonToSwitch />
      <TrustedCustomers />
      <GettingStarted />
      <HomeFAQ />
    </div>
  );
}