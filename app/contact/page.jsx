import ContactPages from "@/components/ContactPages";
import useContactpageMetaData from "@/utility/useContactpageMetaData";
import React from "react";

export async function generateMetadata() {
  const data = await useContactpageMetaData();
  console.log(data?.metaTitel)
  return {
    title: data?.metaTitel,
    description: data?.metaDescription,
    openGraph: {
      images: [
        {
          url: data?.image || "/images/wathetahome.jpg",
          alt: "WaTheta Features",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

const ContactPage = () => {
  return (
    <div className="pt-20">
     <ContactPages/>
    </div>
  );
};

export default ContactPage;