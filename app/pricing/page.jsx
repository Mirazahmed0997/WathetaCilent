import PriceFAQ from "@/components/PriceFAQ";
import PricePage from "@/components/PricePage";
import apiConfig from "@/configs/api.config";
import usePricingMetaData from "@/utility/usePricingMetaData";
import { fetchDataAsServer } from "@/utils/axiosServer";
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";


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
      <PricePage plans={plans}/>
      <PriceFAQ/>
    </div>
  );
};


export default PricingPage;