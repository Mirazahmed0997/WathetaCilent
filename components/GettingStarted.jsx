import React from "react";

const GettingStarted = () => {
  return (
    <div className="gettingBg">
      <section className="flex justify-center items-center gettingBg" aria-labelledby="getting-started-title">
        <div className="text-center">
          <div className="flex justify-center">
            <h1 id="getting-started-title" className="gettingHeadlin leading-tight">
              Getting Started Now Takes Minutes
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="gettingPera leading-normal lg:leading-loose xl:leading-loose pt-4 pb-5">
              Seamlessly integrate messaging into your existing systems with
              WaTheta easy-to-use <br /> WhatsApp API. Click ‘Sign Up’ and get
              started.
            </p>
          </div>
          <button
            type="button"
            className="gettingGetButton px-12 lg:px-14 xl:px-14 py-2 lg:py-3 xl:py-3 rounded-full cardHover"
            aria-label="Start using WaTheta WhatsApp API"
          >
            Getting Started!
          </button>
        </div>
      </section>
    </div>
  );
};

export default GettingStarted;