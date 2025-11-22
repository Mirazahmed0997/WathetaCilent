import AutoSlider from "./components/AutoSlider";
import CouponSection from "./components/CouponSection";
import Header from "./components/Header";
import InstaAutomation from "./components/InstaAutomation";
import TextContent from "./components/TextContent";
import TrustBadges from "./components/TrustBadges";
import VisualBotSection from "./components/VisualBotSection";
import WhatsappChatBots from "./components/WhatsappChatBots";
import WhyUs from "./components/WhyUs";
import ProgressBar from "./components/ProgressBar";
import { fetchDataAsServer } from "@/utils/axiosServer";
import apiConfig from "@/configs/api.config";
import Addons from "../pricing/components/Addons";


export const componentsData = [
  { type: "HEADER", active: true },
  { type: "TRUSTBADGES", active: true },
  { type: "ADDONS", active: true },
  { type: "WHATSAPPCHATBOTS", active: true },
  { type: "VISUALBOTSECTION", active: true },
  { type: "INSTAAUTOMATION", active: true },
  { type: "TEXTCONTENT", active: true },
  { type: "WHYUS", active: true },
  { type: "AUTOSLIDER", active: true },
  { type: "COUPONSECTION", active: true },
  { type: "PROGRESSBAR", active: true },
  
];


export default async function page() {

  const plansRes = await fetchDataAsServer(apiConfig?.GET_PRICING);
  const plans = Array.isArray(plansRes?.data) ? plansRes.data : (Array.isArray(plansRes) ? plansRes : []);

  const addonsRes = await fetchDataAsServer(apiConfig?.GET_ADDONS);
  const addons = Array.isArray(addonsRes?.data) ? addonsRes.data : (Array.isArray(addonsRes) ? addonsRes : []);

  console.log("addons",addons)





  const renderComponent = (section) => {
    switch (section.type.toUpperCase()) {
      case "HEADER":
        return <Header plans={plans} />;
      case "TRUSTBADGES":
        return <TrustBadges />;
      case "ADDONS":
        return <Addons addons={addons} />;
      case "WHATSAPPCHATBOTS":
        return <WhatsappChatBots />;
      case "VISUALBOTSECTION":
        return <VisualBotSection />;
      case "INSTAAUTOMATION":
        return <InstaAutomation />;
      case "TEXTCONTENT":
        return <TextContent />;
      case "WHYUS":
        return <WhyUs />;
      case "AUTOSLIDER":
        return <AutoSlider />;
      case "PROGRESSBAR":
        return <ProgressBar />
      default:
        return null;
    }
  };

  return (

    <div className="space-y-24 max-w-screen overflow-hidden">
      {componentsData
        .filter((section) => section.active)
        .sort((a, b) => a.order - b.order)
        .map((section, idx) => (
          <div key={idx}>{renderComponent(section)}</div>
        ))}
    </div>
  );
}