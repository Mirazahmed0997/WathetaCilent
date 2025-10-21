"use client";

import JoinOurNewsLetter from "@/components/JoinOurNewsLetter";
import React, { useState } from "react";

const Integrations = () => {
  const [categoryButton, setCategoryButton] = useState("integrations");

  return (
    <main>
      {/* Hero Section */}
      <header className="pt-16 lg:pt-20 xl:pt-20 md:pt-20">
        <div className="integrateHeroBg">
          <div className="flex justify-center items-center h-full">
            <div className="">
              <div className="text-center mb-5">
                <h1>
                  <button className="bg-white px-6 lg:px-8 xl:px-8 py-2 rounded-full border inregrationPageButton cardHover">
                    Integrations
                  </button>
                </h1>
              </div>
              <p className="integrationsPageHeadLine">
                Integrate with your existing{" "}
                <br className="hidden lg:block xl:block xxl:block" /> tech stack
                in seconds
              </p>

              {/* Search (Unchanged) */}
              <div className="flex justify-center pt-5">
                <div className="integetSearchInputDiv">
                  <input
                    className="integetSearchInput bg-white rounded-lg ps-14"
                    type="text"
                    placeholder="Search for an integration"
                  />
                  <button className="searchIconButton ps-5">
                    <p className="searchInconDiv">
                      <img
                        className="searchIncon"
                        src="/images/searchIcon.png"
                        alt=""
                      />
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Category Filters */}
      <section className="mx-5 lg:mx-48 xl:mx-48 md:mx-16 py-16">
        <div className="flex flex-col lg:flex-row xl:flex-row justify-between">
          <h2 className="integetCategoryText">Categories</h2>

          <nav className="space-x-1 space-y-2">
            {["integrations", "erp", "crm", "hris", "billing", "warehous"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryButton(cat)}
                  className={`border px-4 py-3 rounded-full ${
                    categoryButton === cat
                      ? "categoryButtonBgActive"
                      : "categoryButtonBg"
                  }`}
                >
                  {cat === "integrations"
                    ? "All Integrations"
                    : cat.toUpperCase()}
                </button>
              )
            )}
          </nav>

          <div className="items-center flex justify-center pt-4">
            <button className="border border-black px-3 py-2 rounded-full flex items-center">
              <span className="text-xl pe-2">+</span> <span>See More</span>
            </button>
          </div>
        </div>

        {/* Integration Cards */}
        <section
          aria-label="Integrations List"
          className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 pt-10 gap-x-8 lg:gap-y-10 xl:gap-y-10 gap-y-5"
        >
          {[
            { title: "Klaviyo", icon: "154", repeat: 3 },
            { title: "Stripe", icon: "155", repeat: 3 },
            { title: "Shopify", icon: "156", repeat: 5 },
          ].flatMap((item) =>
            Array.from({ length: item.repeat }, (_, i) => ({
              ...item,
              key: `${item.title}-${i}`,
            }))
          ).map(({ title, icon, key }) => (
            <article
              key={key}
              className="card bg-white w-full border HomeFeturescardShadow"
            >
              <div className="card-body">
                <div className="intreInconDiv">
                  <img
                    className="intreIncon"
                    src={`/images/imageIconIn ${icon}.png`}
                    alt={title}
                  />
                </div>
                <h3 className="text-xl font-semibold pt-2 lg:pt-5 xl:pt-5">
                  {title}
                </h3>
                <p className="interCategoryPera py-1 lg:py-2 xl:py-2">
                  Integrate your reviews with Klaviyo Email & SMS marketing that
                  helps you own your revenue.
                </p>
                <div>
                  <button className="interCategoryLearnButton">
                    Lear More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </section>

      {/* Newsletter Section */}
      <footer>
        <JoinOurNewsLetter />
      </footer>
    </main>
  );
};

export default Integrations;