import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { lora, poppins } from "./fonts";
import type { Metadata } from "next";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css"; // MapBox Css styling

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { HostelDetails } from "@/components/Find-Hostels/HostelDetails";

export const metadata: Metadata = {
  title: "Find Hostels Near Lagos State University | HostelFinder",
  description:
    "Discover affordable hostels near Lagos State University. Browse verified listings, view detailed information, and find your ideal accommodation today on HostelFinder",
};

// Trying to make sure the screen doesn't zoom in.
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lora.variable}`}>
        <div className="flex flex-col h-screen">
          <Header />
          {/* Hostel Details PopUp */}
          <HostelDetails />
          <div className="flex-1 max-lg:pt-14 lg:pt-[3.4rem]">{children}</div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
