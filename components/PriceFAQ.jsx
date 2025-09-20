import usePricingFaqData from "@/utility/usePricingFaqData";
import React from "react";

const PriceFAQ = async () => {
  const pricingData = await usePricingFaqData();

  return (
    <section className="py-10 lg:py-20 xl:py-20" aria-labelledby="faq-heading">
      <div className="mx-5 lg:mx-40 xl:mx-40 md:mx-16">
        {/* Headline */}
        <header className="flex justify-center">
          <h2
            id="faq-heading"
            className="homeFaqHEeadLine text-center"
          >
            Frequently Asked Questions
          </h2>
        </header>

        {/* FAQ Accordion */}
        <div className="pt-8">
          <div className="mx-1 lg:mx-24 xl:mx-24 md:mx-16">
            {pricingData && pricingData.length > 0 ? (
              pricingData.map((faq, index) => (
                <article
                  key={faq._id}
                  className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 rounded-none w-full py-3 lg:py-4 xl:py-4"
                >
                  <input
                    type="radio"
                    name="faq-accordion"
                    defaultChecked={index === 0}
                    aria-labelledby={`faq-question-${index}`}
                    aria-describedby={`faq-answer-${index}`}
                  />
                  <h3
                    id={`faq-question-${index}`}
                    className="collapse-title HomeFaqQustion text-md lg:text-xl xl:text-xl md:text-lg"
                  >
                    {faq?.faqqustion}
                  </h3>
                  <div
                    id={`faq-answer-${index}`}
                    className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-2"
                  >
                    <p>{faq?.faqdescriptions}</p>
                  </div>
                </article>
              ))
            ) : (
              <p className="text-center" role="status">
                No FAQs available.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceFAQ;