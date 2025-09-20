import useCancellationData from "@/utility/useCancellationData";
import React from "react";

const CancellationPages = async () => {
  const cancellData = await useCancellationData();

  return (
    <main className="mx-5 lg:mx-48 xl:mx-48 py-20 lg:py-24 xl:py-24">
      <header>
        <div className="flex flex-col xl:flex-row lg:flex-row justify-between items-center">
          <h1 className="text-lg lg:text-2xl xl:text-2xl font-semibold">
            Cancellation & Refund Policy
          </h1>
          <time
            dateTime="2025-01-03"
            className="text-xs lg:text-sm xl:text-sm"
          >
            Last updated: January 3, 2025
          </time>
        </div>
      </header>

      <section aria-label="Cancellation & Refund Policy Content">
        {cancellData?.map((tram, index) => (
          <article
            key={index}
            className="prose max-w-none pt-5"
            dangerouslySetInnerHTML={{ __html: tram?.text }}
          ></article>
        ))}
      </section>
    </main>
  );
};

export default CancellationPages;