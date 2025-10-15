import React from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

export default function Eligibility() {
  return (
    <div
      className="w-full flex flex-col max-md:px-9 max-w-4xl items-center my-10 scroll-mt-16"
      id="eligibility"
    >
      <h1
        className={`${orbitron.className} text-4xl self-start mb-6 mt-6 font-bold`}
      >
        ELIGIBILITY<span className="text-[#D6001C]">.</span>
      </h1>

      <ul className="list-disc marker:text-[#D6001C] list-inside text-lg w-full max-w-4xl text-left space-y-3">
        <li>
          Open to all{" "}
          <span className="text-[#D6001C] font-bold">
            undergraduate students
          </span>{" "}
          across India.
        </li>
        <li>
          Team size:{" "}
          <span className="text-[#D6001C] font-bold">2-3 members</span>.
        </li>
        <li>
          Students from{" "}
          <span className="text-[#D6001C] font-bold">any discipline</span> can
          apply (engineering, design, business, etc.).
        </li>
      </ul>

      <h3 className="italic text-lg text-left mt-6 max-w-4xl opacity-90">
        No limits on who can join — all genders, one goal: innovation on track.
        (Diversity fuels better ideas.)
      </h3>
    </div>
  );
}
