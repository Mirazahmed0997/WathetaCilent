import PriceFAQ from "@/components/PriceFAQ";
import PricePage from "@/components/PricePage";
import usePricingMetaData from "@/utility/usePricingMetaData";
import React from "react";


export async function generateMetadata() {
  const data = await usePricingMetaData();
  console.log(data?.metaTitel)
  return {
    title: data?.metaTitel,
    description: data?.metaDescription,
    openGraph: {
      images: [
        {
          url: data?.image || "/images/wathetahome.jpg",
          alt: "WaTheta Features",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}


const PricingPage = () => {
  return (
    <div className="">
      <PricePage/>
      <PriceFAQ/>
    </div>
  );
};


export default PricingPage;