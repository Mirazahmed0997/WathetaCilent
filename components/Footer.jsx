import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footerbg px-2 lg:px-24 xl:px-24 pt-14 pb-5" aria-label="Site Footer">
      <section className="mx-5 lg:mx-16 xl:mx-16">
        <div className="border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-5 lg:gap-10 xl:gap-10 pb-5 lg:pb-10 xl:pb-10">
            <div className="footerLogoDiv">
              <img
                className="footerLogo"
                src="/images/logo.png"
                alt="WaTheta company logo"
              />
            </div>
            <div className="footerMetaLogoDiv">
              <img
                className="footerMetaLogo"
                src="/images/metaLogo.png"
                alt="Meta Certified Partner Logo"
              />
            </div>
          </div>

          <div className="pb-5 lg:pb-10 xl:pb-5">
            <label htmlFor="language-select" className="sr-only">
              Language selection
            </label>
            <select
              id="language-select"
              aria-label="Select site language"
              className="w-full max-w-md px-3 lg:px-6 py-2 lg:py-4 footerbg border border-gray-400 rounded-full footerSelectedButtonText"
            >
              <option value="english">English</option>
            </select>
          </div>
        </div>
       {/* support */}
        <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-8 pt-5 border-b border-gray-200">
          <div className="col-span-2 xl:col-span-1 lg:col-span-1">
            <h1 className="footerInfoHeadline">Contact support</h1>
            <div className="my-4">
              <p className="footerInfoHeadlineSub">United Kingdom:</p>
              <p className="footerPera pt-1">
                71-75 Shelton Street, Covent Garden London, WC2H 9JQ, UK
              </p>
            </div>
            <div className="my-4">
              <p className="footerInfoHeadlineSub">Bangladesh Office:</p>
              <p className="footerPera pt-1">
                House- 13, 2nd Floor, Road- 01 Sector- 01, <br /> Block- K,
                Aftabnagar, Dhaka- 1214
              </p>
            </div>
            <div className="my-4 pb-4">
              <p className="footerPera pt-1 flex items-center">
                <span className="text-sm me-2" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="footerMailIcon"
                    role="img"
                    aria-label="Email icon"
                  >
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zm-16 100.2V384c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                  </svg>
                </span>
                <a href="mailto:info@watheta.com" title="Email WaTheta">
                  info@watheta.com
                </a>
              </p>
              <p className="footerPera pt-2 flex items-center">
                <img
                  src="/images/phonelogo.png"
                  alt="Phone icon"
                  className="me-2"
                />
                <a href="tel:+8801318231252" title="Call WaTheta">
                  +88013 1823 1252
                </a>
              </p>
            </div>
          </div>

          {/* Company Section */}
          <div className="ms-0 lg:ms-10 xl:ms-10">
            <h1 className="footerInfoHeadline">Company</h1>
            <div className="my-4">
              <p className="footerPera pt-1 hover-underline">About</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1 hover-underline">Careers</p>
            </div>
            <div className="my-4">
              <Link href="/contact" title="Contact Us">
                <p className="footerPera pt-1 hover-underline">Contact Us</p>
              </Link>
            </div>
            <div className="my-4">
              <Link href="/trams" title="Terms and Conditions">
                <p className="footerPera pt-1 hover-underline">Terms & Condition</p>
              </Link>
            </div>
            <div className="my-4">
              <Link href="/privacy" title="Privacy Policy">
                <p className="footerPera pt-1 hover-underline">Privacy Policy</p>
              </Link>
            </div>
            <div className="my-4">
              <Link href="/cancellation" title="Cancellation Policy">
                <p className="footerPera pt-1 hover-underline">Cancellation Policy</p>
              </Link>
            </div>
          </div>

          {/* Insider Section */}
          <div>
            <h1 className="footerInfoHeadline">Insider</h1>
            <div className="my-4">
              <Link href="/pricing" title="Pricing Info">
                <p className="footerPera pt-1 hover-underline">Pricing</p>
              </Link>
            </div>
            <div className="my-4">
              <Link href="/saas" title="SaaS Platform">
                <p className="footerPera pt-1 hover-underline">Saas</p>
              </Link>
            </div>
            <div className="my-4">
              <Link href="https://docs.watheta.com" target="_blank" rel="noopener noreferrer" title="Help Center">
                <p className="footerPera pt-1 hover-underline">Help</p>
              </Link>
            </div>
            <div className="my-4">
              <Link href="https://docs.watheta.com" target="_blank" rel="noopener noreferrer" title="Documentation">
                <p className="footerPera pt-1 hover-underline">Documentation</p>
              </Link>
            </div>
            <div className="my-4">
              <Link href="https://documenter.getpostman.com/view/14215086/2sA2xfYDAb#f9a62a0f-67e2-4c85-9944-399c5a4ec207" target="_blank" rel="noopener noreferrer" title="API Docs">
                <p className="footerPera pt-1 hover-underline">API Documentation</p>
              </Link>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1 hover-underline">Android App</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1 hover-underline">iOS App</p>
            </div>
          </div>

          {/* eCommerce Section */}
          <div>
            <h1 className="footerInfoHeadline">eCommerce</h1>
            <div className="my-4 ">
              <p className="footerPera pt-1 hover-underline">Shopify</p>
            </div>
            <div className="my-4">
              <p className="footerPera pt-1 hover-underline">WooCommerce</p>
            </div>
          </div>

          {/* Social Channels */}
          <div>
            <h1 className="footerInfoHeadline">Social Channels</h1>
            <div className="my-4 flex items-center">
              <div className="foterSocialIconDiv">
                <img
                  className="foterSocialIcon"
                  src="/images/wahts.png"
                  alt="WhatsApp Icon"
                />
              </div>
              <Link href="https://wa.me/8801318231252?text=inquire from wahteta" title="Chat on WhatsApp">
                <p className="footerPera pt-1 ms-2 hover-underline">Whatsapp</p>
              </Link>
            </div>
            <div className="my-4 flex items-center">
              <div className="foterSocialIconDiv">
                <img
                  className="foterSocialIcon"
                  src="/images/insta.png"
                  alt="Instagram Icon"
                />
              </div>
              <Link href="https://www.instagram.com/watheta.io" target="_blank" rel="noopener noreferrer" title="Instagram Profile">
                <p className="footerPera pt-1 ms-2 hover-underline">Instagram</p>
              </Link>
            </div>
            <div className="my-4 flex items-center">
              <div className="foterSocialIconDiv">
                <img
                  className="foterSocialIcon"
                  src="/images/face.png"
                  alt="Facebook Icon"
                />
              </div>
              <Link href="https://www.facebook.com/watheta" target="_blank" rel="noopener noreferrer" title="Facebook Page">
                <p className="footerPera pt-1 ms-2 hover-underline">Facebook</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-5">
          <p className="text-center text-sm">
            © 2024 | All rights reserved by WaTheta Limited | A Signature Product of AdTheta
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;