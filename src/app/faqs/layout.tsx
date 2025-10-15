import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trackshift - FAQs",
  description: "Trackshift Hackathon",
};

export default function FAQsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex-grow w-full md:-translate-y-26">{children}</div>;
}
