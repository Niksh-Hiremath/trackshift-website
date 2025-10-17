import type { Metadata } from "next";
import "./globals.css";
import { PCNavbar, MobileNavbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Trackshift",
  description: "Trackshift Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen w-full overflow-y-auto bg-[#0d0d0d] flex flex-col items-center scroll-smooth">
        <Analytics />
        <div className="hidden md:flex w-full">
          <PCNavbar />
        </div>
        <div className="flex md:hidden w-full">
          <MobileNavbar />
        </div>
        <div className="flex-grow w-full md:translate-y-26">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
