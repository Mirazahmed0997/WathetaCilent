import React from "react";

const JoinOurNewsLetter = () => {
  return (
    <section className="mx-3 lg:mx-48 xl:mx-48 md:mx-16 pt-5 pb-10">
      <div className="joinOurNewsletterbgImgDiv relative" role="region" aria-label="Newsletter Subscription Section">
        {/* Desktop Background Image */}
        <img
          className="joinOurNewsletterbgImg hidden lg:block xl:block"
          src="/images/getstartbusiness.png"
          alt="Newsletter background for desktop"
        />
        {/* Mobile Background Image */}
        <img
          className="joinOurNewsletterbgImg block lg:hidden xl:hidden"
          src="/images/PhoneBgnewsletter.png"
          alt="Newsletter background for mobile"
        />

        {/* Content */}
        <div className="joinOurNewsletterContentDiv flex justify-center items-center">
          <div className="w-full" role="form" aria-label="Join Newsletter Form">
            <h2 className="text-white JoinournewsletterText text-center">
              Join our newsletter
            </h2>

            <div className="flex justify-center w-full">
              <p className="joinournewsletterPeraText text-center pt-2 leading-relaxed">
                Subscribe our newsletter to receive the latest news and <br />
                exclusive offers every week. No spam,
              </p>
            </div>

            <form className="flex justify-center">
              <div className="pt-6 w-full joinournewsletterInputDiv">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  className="joinournewsletterInput border-4 w-full"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="joinournewsletterSubscribeButton px-8 lg:px-10 xl:px-10 py-2 rounded-full"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurNewsLetter;