import Link from "next/link";
import React from "react";

const HomeIntegrations = () => {
  return (
    <section className="">
      <div className="intregeteDivBG">
        {/* Integrations Tag */}
        <div className="flex justify-center pt-9 lg:pt-16 xl:pt-16 md:pt-8">
          <span
            className="bg-white border rounded-full px-4 lg:px-6 xl:px-6 py-1 integrationsText"
            aria-label="Integrations Tag"
          >
            Integrations
          </span>
        </div>

        {/* Headline */}
        <header className="flex justify-center">
          <h1 className="intregeteHeadline text-center py-2 lg:py-5 xl:py-5 md:py-3">
            Streamline your workflow with Watheta 40+ integrations
          </h1>
        </header>

        {/* Call to Action */}
        <div className="flex justify-center">
          <Link href="/integrations" passHref>
            <button
              className="flex items-center cursor-pointer"
              aria-label="Explore all integrations"
            >
              <span className="border-b border-gray-500 text-sm lg:text-md xl:text-md">
                Explore integrations
              </span>
              <span className="ms-2 lg:ms-3 xl:ms-3">
                <img src="/images/rightarow.png" alt="Arrow pointing right" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeIntegrations;
