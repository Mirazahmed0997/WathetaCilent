import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/navigation/Navigation";

import Script from "next/script";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://watheta.com"),
  title:
    "WaTheta – Official WhatsApp Business API Provider | Automation & CRM Solutions",
  description:
    "WaTheta is an official Meta Business Solution Provider offering WhatsApp Business API, automation, CRM, and omnichannel solutions for businesses in Bangladesh and beyond. Start scaling with smart communication tools today.",
  icons: {
    icon: "/app/favicon.ico",
  },
  openGraph: {
    title:
      "WaTheta | CWaTheta – Official WhatsApp Business API Provider | Automation & CRM Solutions",
    siteName: "WaTheta",
    images: [
      {
        url: "images/wathetahome.jpg",
        alt: "WaTheta",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {GTM_ID && (
          <Script
            id="gtm-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
        )}
      </head>
      <body className={`${inter.variable} antialiased`}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        )}
        <script type="text/javascript" src="https://widget.1automations.com/widget/79538184-c3ed-486f-a9af-c2aae0b7c2a8.js"></script>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}