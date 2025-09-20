import React from "react";

const TrustedCustomers = () => {

  return (
    <section className="py-10 mt-24 lg:mt-0 xl:mt-0">
      <header className="mx-10 lg:mx-0 xl:mx-0 md:10">
        <h2 className="text-center pt-4 lg:pt-12 xl:pt-12 md:pt-6 trustedText">
          Trusted by 2000+ Customers in 80+ Countries since 2018
        </h2>
      </header>

      {/* Desktop Logos */}
      <section
        className="hidden lg:block xl:block xxl:block md:hidden"
        aria-label="Trusted customers logos"
      >
        <div className="mx-auto lg:mx-40 xl:mx-40 xxl:mx-40">
          <ul className="flex flex-wrap mt-5 gap-10 justify-center items-center list-none p-0 m-0">
            {[
              { src: "/images/Ford-Logo.png", alt: "Ford Logo" },
              { src: "/images/TropicalHomes.png", alt: "Tropical Homes Logo" },
              { src: "/images/Carniba.png", alt: "Carniba Logo" },
              { src: "/images/AsthaProperties.png", alt: "Astha Properties Logo" },
              { src: "/images/BMW.png", alt: "BMW Logo" },
              { src: "/images/Maskgroup.png", alt: "Mask Group Logo" },
              { src: "/images/ACSFutureSchool.png", alt: "ACS Future School Logo" },
              { src: "/images/oracal.png", alt: "Oracal Logo" },
              { src: "/images/JoysanYoga.png", alt: "Joysan Yoga Logo" },
              { src: "/images/Ostad.png", alt: "Ostad Logo" },
              { src: "/images/UNITEDSAUD.png", alt: "United Saud Logo" },
              { src: "/images/SocianAI.png", alt: "Socian AI Logo" },
              { src: "/images/mascot.png", alt: "Mascot Logo" },
              { src: "/images/kn.png", alt: "KN Logo" },
              {
                src: "https://www.walkaroo.in/cdn/shop/files/LOGO_RED_360x.jpg?v=1707540006",
                alt: "Rupayon Logo",
              },
              { src: "/images/PayStation.png", alt: "Pay Station Logo" },
              { src: "/images/Saltanat.png", alt: "Saltanat Logo" },
              { src: "/images/ChutiGroup.png", alt: "Chuti Group Logo" },
              { src: "/images/RatulProperies.png", alt: "Ratul Properties Logo" },
              { src: "/images/ICCLogo.png", alt: "ICC Logo" },
              { src: "/images/mask.png", alt: "Jamuna Logo" },
              { src: "/images/OSCO.png", alt: "OSCO Logo" },
              { src: "/images/HouseDeArch.png", alt: "House De Arch Logo" },
              { src: "/images/megashop.png", alt: "Mega Shop Logo" },
              { src: "/images/datahost.png", alt: "Data Host Logo" },
              { src: "/images/shimaTravbel.png", alt: "Shima Travel Logo" },
              { src: "/images/ecotravel.png", alt: "Eco Travel Logo" },
              { src: "/images/dwl.png", alt: "DWL Logo" },
              { src: "/images/usauk.png", alt: "USA UK Logo" },
              { src: "/images/Herbx.png", alt: "Herbex Logo" },
              { src: "/images/Bponi.png", alt: "Bponi Logo" },
              { src: "/images/hairnfairbd.png", alt: "Hair n Fair BD Logo" },
              { src: "/images/ExpertOnline.png", alt: "Expert Online Logo" },
              { src: "/images/istiak.png", alt: "Istiak Logo" },
              { src: "/images/helper.png", alt: "Helper Logo" },
              { src: "/images/Bponii.png", alt: "Bponi Second Logo" },
              { src: "/images/Deshifoodlogo.png", alt: "Deshi Food Logo" },
              { src: "/images/Bridging-World.png", alt: "Bridging World Logo" },
              { src: "/images/Dazzline.png", alt: "Dazzline Logo" },
              { src: "/images/ExtremeMotors.png", alt: "Extreme Motors Logo" },
              { src: "/images/canadian.png", alt: "Canadian Logo" },
              { src: "/images/BeautyCastle.png", alt: "Beauty Castle Logo" },
            ].map(({ src, alt }, idx) => (
              <li
                key={idx}
                className="trustLogoDiv m-5"
                style={{ margin: "1rem" }}
              >
                <img className="trustLogo" src={src} alt={alt} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mobile Section */}
      <section
        className="block lg:hidden xl:hidden xxl:hidden md:block"
        aria-label="Trusted customers phone logo"
      >
        <div className="pt-10 mx-4">
          <figure className="customerPhoneLogoDiv">
            <img
              className="customerPhoneLogo"
              src="/images/phoneforlogo.png"
              alt="Phone logo representing trusted customers"
            />
          </figure>
        </div>
      </section>
    </section>
  );
};

export default TrustedCustomers;