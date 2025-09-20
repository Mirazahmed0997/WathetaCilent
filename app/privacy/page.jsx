import usePrivacyPolicyData from "@/utility/usePrivacyPolicyData";
import React from "react";

const PrivacyPage = async () => {
  const privacyData = await usePrivacyPolicyData();

  return (
    <main className="mx-5 lg:mx-48 xl:mx-48 py-20 lg:py-24 xl:py-24">
      <article>
        {/* Header Section */}
        <header className="flex flex-col xl:flex-row lg:flex-row justify-between items-center">
          <h1 className="text-lg lg:text-2xl xl:text-2xl font-semibold">Privacy Policy</h1>
          <time className="text-xs lg:text-sm xl:text-sm" dateTime="2025-01-03">
            Last updated: January 3, 2025
          </time>
        </header>
        {/* Content Sections */}
        <section>
          {privacyData?.map((tram, index) => (
            <section
              key={index}
              className="prose max-w-none pt-5"
              dangerouslySetInnerHTML={{ __html: tram?.text }}
            />
          ))}
        </section>
      </article>
    </main>
  );
};

export default PrivacyPage;