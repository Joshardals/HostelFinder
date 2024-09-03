import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { lora, poppins } from "./fonts";
import type { Metadata } from "next";
import "./globals.css";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const metadata: Metadata = {
  title: "Find Hostels Near Lagos State University | HostelFinder",
  description:
    "Discover affordable hostels near Lagos State University. Browse verified listings, view detailed information, and find your ideal accommodation today on HostelFinder",
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
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
