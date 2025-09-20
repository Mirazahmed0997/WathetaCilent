import React from 'react';

const ScheduleADemo = () => {
  return (
    <section className="py-10 lg:py-20 xl:py-20 communicationBg">
      <div className="mx-5 lg:mx-40 xl:mx-40 md:mx-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-10 xl:gap-10">
          <article>
            <header>
              <h1 className="communicationText">
                Ready to Transform Your Business Communication?
              </h1>
              <p className="communicationTextPera py-3">
                Join thousands of businesses already growing with Watheta intelligent automation platform.
              </p>
            </header>
            <ul className="pt-2">
              <li className="py-4 flex items-center">
                <div className="communicationIconDiv">
                  <img
                    className="communicationIcon"
                    src="/images/massegecontact.png"
                    alt="Meta Partner Icon"
                  />
                </div>
                <div className="ms-4">
                  <h2 className="text-md lg:text-lg xl:text-lg font-semibold text-white">
                    Official Meta Partner
                  </h2>
                  <p className="communicationIconPera pt-1">
                    Direct integration with WhatsApp Business API
                  </p>
                </div>
              </li>
              <li className="py-4 flex items-center">
                <div className="communicationIconDiv">
                  <img
                    className="communicationIcon"
                    src="/images/shildcontact.png"
                    alt="Security Shield Icon"
                  />
                </div>
                <div className="ms-4">
                  <h2 className="text-md lg:text-lg xl:text-lg font-semibold text-white">
                    Enterprise Security
                  </h2>
                  <p className="communicationIconPera pt-1">
                    Your data is protected with industry-leading security.
                  </p>
                </div>
              </li>
              <li className="py-4 flex items-center">
                <div className="communicationIconDiv">
                  <img
                    className="communicationIcon"
                    src="/images/thandercontact.png"
                    alt="Quick Setup Icon"
                  />
                </div>
                <div className="ms-4">
                  <h2 className="text-md lg:text-lg xl:text-lg font-semibold text-white">
                    Quick Setup & Integration
                  </h2>
                  <p className="communicationIconPera pt-1">
                    Get started in minutes with our guided setup process
                  </p>
                </div>
              </li>
            </ul>
          </article>

          <form className="bg-white p-5 lg:p-10 xl:p-10 rounded-lg">
            <header>
              <h2 className="schedulaDemoText">Schedule a Demo</h2>
              <p className="schedulaDemoPera py-3">
                See how Watheta can help your business grow with a personalized demo.
              </p>
            </header>

            <div className="py-3 space-y-4">
              <label>
                <input
                  className="bg-white scheduleInput border rounded-lg"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </label>
              <label>
                <input
                  className="bg-white scheduleInput border rounded-lg"
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  required
                />
              </label>
              <label>
                <input
                  className="bg-white scheduleInput border rounded-lg"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                />
              </label>
              <label>
                <textarea
                  className="bg-white scheduleTextArea border rounded-lg"
                  name="requirements"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </label>
            </div>

            <div>
              <button type="submit" className="flex items-center scheduleDemoButton">
                Schedule Demo
                <span className="ms-2">
                  <img src="/images/whitearrow.png" alt="Arrow Icon" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ScheduleADemo;
