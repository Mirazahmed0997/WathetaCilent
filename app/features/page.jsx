import GettingStarted from "@/components/GettingStarted";
import HomeFAQ from "@/components/HomeFAQ";
import React from "react";
import FeaturesPageFeturs from "@/components/FeaturesPageFeturs";
import Link from "next/link";
import useFeaturespageMetaData from "@/utility/useFeaturespageMetaData";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const data = await useFeaturespageMetaData();
  console.log(data?.metaTitel);
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

const FeturesPage = () => {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="featuresHeroDiv">
        <img
          className="featuresHeroBg"
          src="/images/featuresbg.png"
          alt="Features Background"
        />
        <header className="featuresHeadlineDiv flex items-center">
          <div className="mx-5 lg:mx-32 xl:mx-32 md:mx-8">
            <div>
              <h1 className="featuresHeadline text-center lg:text-start xl:text-start md:text-start">
                Powerful Features for{" "}
                <br className="hidden lg:block xl:block xxl:block" />
                Modern Business
              </h1>
              <p className="featuresPera pt-2 lg:pt-5 text-center lg:text-start xl:text-start md:text-start">
                Everything you need to automate and scale your business{" "}
                <br className="hidden lg:block xl:block xxl:block" />
                communication across all channels
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="pt-8 flex justify-center lg:justify-start xl:justify-start md:justify-start gap-4">
              <Link href="https://wa.me/8801318231252?text=inquire from wahteta">
                <button className="text-sm lg:text-lg xl:text-lg xxl:text-lg flex items-center px-4 lg:px-8 xl:px-8 py-2 border rounded-full bg-white cursor-pointer font-semibold cardHover">
                  Schedule A Call{" "}
                  <span className="ms-1">
                    <img src="/images/rightarow.png" alt="Arrow Icon" />
                  </span>
                </button>
              </Link>
              <Link href="https://dash.watheta.com/register">
                <button className="text-sm lg:text-lg xl:text-lg xxl:text-lg flex items-center px-5 lg:px-8 xl:px-8 py-2 border rounded-full text-white cursor-pointer cardHover">
                  Get Started{" "}
                  <span className="ms-1">
                    <img src="/images/whitearrow.png" alt="White Arrow Icon" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </header>
      </section>

      {/* Features Section */}
      <section aria-label="Feature Highlights">
        <FeaturesPageFeturs />
      </section>

      {/* Getting Started Section */}
      <section aria-label="Getting Started Guide">
        <GettingStarted />
      </section>

      {/* FAQ Section */}
      <section aria-label="Frequently Asked Questions">
        <HomeFAQ />
      </section>
    </main>
  );
};

export default FeturesPage;