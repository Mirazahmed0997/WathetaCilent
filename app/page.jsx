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
import ResonToSwitch from "@/components/ResonToSwitch";
import Teambox from "@/components/Teambox";
import TrustedCustomers from "@/components/TrustedCustomers";
import WhatsAppChatBots from "@/components/WhatsAppChatBots";
import WhtasAppCommerce from "@/components/WhtasAppCommerce";
import WhyChooseWaTheta from "@/components/WhyChooseWaTheta";

export const metadata = {
  title:
    "WaTheta | Official WhatsApp Business API Provider | Automation & CRM Solutions",
  description:
    "WaTheta is an official Meta Business Solution Provider offering WhatsApp Business API, automation, CRM, and omnichannel solutions for businesses in Bangladesh and beyond. Start scaling with smart communication tools today.",
  openGraph: {
    title:
      "WaTheta | WaTheta – Official WhatsApp Business API Provider | Automation & CRM Solutions",
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
};

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