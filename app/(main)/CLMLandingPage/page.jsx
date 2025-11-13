import AutoSlider from "./CLMLandingPage/components/AutoSlider";
import CouponSection from "./CLMLandingPage/components/CouponSection";
import Header from "./CLMLandingPage/components/Header";
import InstaAutomation from "./CLMLandingPage/components/InstaAutomation";
import TextContent from "./CLMLandingPage/components/TextContent";
import TrustBadges from "./CLMLandingPage/components/TrustBadges";
import VisualBotSection from "./CLMLandingPage/components/VisualBotSection";
import WhatsappChatBots from "./CLMLandingPage/components/WhatsappChatBots";
import WhyUs from "./CLMLandingPage/components/WhyUs";


export const componentsData = [
  { type: "HEADER", active: true },
  { type: "TRUSTBADGES", active: true },
  { type: "WHATSAPPCHATBOTS", active: true },
  { type: "VISUALBOTSECTION", active: true },
  { type: "INSTAAUTOMATION", active: true },
  { type: "TEXTCONTENT", active: true },
  { type: "WHYUS", active: false },
  { type: "AUTOSLIDER", active: true },
  { type: "COUPONSECTION", active: true }
];





export default function page({params}) {


  const renderComponent = (section) => {
    switch (section.type.toUpperCase()) {
      case "HEADER":
        return <Header />;
      case "TRUSTBADGES":
        return <TrustBadges />;
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
      case "COUPONSECTION":
        return <CouponSection />;
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