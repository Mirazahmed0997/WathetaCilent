import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navigation from "@/components/navigation/Navigation";

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

export default function Layout({ children }) {
  return (
    <main>
      <div className={`${inter.variable} antialiased`}>
        <script type="text/javascript" src="https://widget.1automations.com/widget/79538184-c3ed-486f-a9af-c2aae0b7c2a8.js"></script>
        <Navigation />
        {children}
        <Footer />
      </div>
    </main>
  );
}