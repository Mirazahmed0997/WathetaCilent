import useFaqForHome from "@/utility/useFaqForHome";
import React from "react";

const HomeFAQ = async () => {
  const homeFaqData = await useFaqForHome();

  return (
    <section className="py-10 lg:py-20 xl:py-20" aria-labelledby="faq-heading">
      <div className="mx-5 lg:mx-40 xl:mx-40 md:mx-16">
        {/* Headline */}
        <header className="flex justify-center">
          <h2 id="faq-heading" className="homeFaqHEeadLine text-center">
            Frequently Asked Questions
          </h2>
        </header>

        {/* FAQ Accordion */}
        <div className="pt-8" role="region" aria-labelledby="faq-heading">
          <div className="mx-1 lg:mx-24 xl:mx-24 md:mx-16">
            {homeFaqData && homeFaqData.length > 0 ? (
              <ul>
                {homeFaqData.map((faq, index) => (
                  <li
                    key={faq._id}
                    className="collapse collapse-arrow border border-t-0 border-l-0 border-r-0 rounded-none w-full py-3 lg:py-4 xl:py-4"
                  >
                    <input
                      type="radio"
                      name="faq-accordion"
                      defaultChecked={index === 0}
                      aria-expanded={index === 0}
                    />
                    <h3 className="collapse-title HomeFaqQustion text-md lg:text-xl xl:text-xl md:text-lg">
                      {faq?.faqqustion}
                    </h3>
                    <div className="collapse-content text-sm lg:text-lg xl:text-lg md:text-md opacity-60 pe-2">
                      <p>{faq?.faqdescriptions}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center">No FAQs available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
