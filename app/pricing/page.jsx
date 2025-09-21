import React from "react";
import apiConfig from "@/configs/api.config";
import { fetchDataAsServer } from "@/utils/axiosServer";
import PricingHero from "./components/PricingHero";
import PricingPlan from "./components/PricingPlan";
import ExplorePricing from "./components/ExplorePricing";
import CustomPricing from "./components/CustomPricing";
import Addons from "./components/Addons";
import SupportService from "./components/SupportService";
import ScheduleADemo from "@/components/ScheduleADemo";
import PriceFAQ from "@/components/PriceFAQ";


// export async function generateMetadata() {
//   const data = await usePricingMetaData();
//   console.log(data?.metaTitel)
//   return {
//     title: data?.metaTitel,
//     description: data?.metaDescription,
//     openGraph: {
//       images: [
//         {
//           url: data?.image || "/images/wathetahome.jpg",
//           alt: "WaTheta Features",
//         },
//       ],
//       locale: "en_US",
//       type: "website",
//     },
//   };
// }

const PricingPage = async () => {
  const plans = await fetchDataAsServer(apiConfig?.GET_PRICING)
  return (
    <div className="">
      {/* <PricePage plans={plans}/> */}
      <PricingHero/>
      <PricingPlan plans={plans}/>
      <ExplorePricing/>
      {/* <CustomPricing/> */}
      <Addons/>
      <SupportService/>
      <ScheduleADemo />
      <PriceFAQ/>
    </div>
  );
};


export default PricingPage;