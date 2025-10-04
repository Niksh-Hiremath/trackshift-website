import React from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["500", "900"] });

export default function FAQs() {
  return (
    <div className="w-full h-full flex flex-col items-center space-y-4 max-md:py-4">
      <h1 className={`${orbitron.className} font-bold text-3xl md:text-5xl`}>
        COMING SOON!
      </h1>
    </div>
  );
}
