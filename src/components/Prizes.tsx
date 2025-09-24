import React from "react";
import { Orbitron } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

export default function Prizes() {
  return (
    <div
      className="w-full flex flex-col items-center max-w-4xl max-md:px-10 gap-10 md:gap-6 z-1 scroll-mt-16"
      id="prizes"
    >
      <h1 className={`${orbitron.className} text-3xl`}>
        YOUR TICKET TO{" "}
        <span className="text-[#D6001C] font-bold">
          HASS F1 GARAGE IN THE UK
        </span>
        .
      </h1>
      <p className={`${orbitron.className} text-xl text-center px-4 mb-10`}>
        For the <span className="text-[#D6001C]">Top 3 teams</span>, because
        every podium finish get a trophy.
      </p>
      <div className="flex flex-row w-full items-center gap-10">
        <div className="md:w-1/2 flex flex-col gap-2">
          <h2
            className={`${orbitron.className} text-[#D6001C] text-5xl font-bold`}
          >
            1
          </h2>
          <p className={`${orbitron.className} text-2xl`}>
            2 Day UK Trip to visit MoneyGram Haas F1 facilities
          </p>
          <p className="text-[#979797]">For Top 3 teams!</p>
        </div>
        <Image
          src="/Prize1.jpg"
          alt="Prizes"
          width={900}
          height={600}
          className="hidden md:block w-1/2 rounded"
        />
      </div>
      <div className="flex flex-row w-full items-center gap-10">
        <Image
          src="/Prize2.avif"
          alt="Prizes"
          width={900}
          height={600}
          className="hidden md:block w-1/2 rounded"
        />
        <div className="md:w-1/2 flex flex-col gap-2">
          <h2
            className={`${orbitron.className} text-[#D6001C] text-5xl font-bold`}
          >
            2
          </h2>
          <p className={`${orbitron.className} text-2xl`}>
            1 - Month Internship Opportunity at Mphasis
          </p>
          <p className="text-[#979797]">For Top 3 teams!</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full mt-3">
        <div className="flex flex-row items-center gap-8">
          <span
            className={`${orbitron.className} text-[#D6001C] text-5xl font-bold`}
          >
            3
          </span>
          <span className={`${orbitron.className} text-2xl`}>
            Huge Cash Prizes
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full md:items-center mt-4 max-md:gap-6">
          <div className="md:w-1/3 flex flex-col gap-2">
            <p className={`${orbitron.className} font-bold text-3xl`}>
              RS. 1,00,000
            </p>
            <p className="text-[#979797]">Winning Team</p>
          </div>
          <div className="md:w-1/3 flex flex-col gap-2">
            <p className={`${orbitron.className} font-bold text-3xl`}>
              RS. 50,000
            </p>
            <p className="text-[#979797]">First Runner Up</p>
          </div>
          <div className="md:w-1/3 flex flex-col gap-2">
            <p className={`${orbitron.className} font-bold text-3xl`}>
              RS. 25,000
            </p>
            <p className="text-[#979797]">Second Runner Up</p>
          </div>
        </div>
      </div>
    </div>
  );
}
