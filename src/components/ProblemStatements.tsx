import React from "react";
import { Orbitron } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "900"] });

const problemStatements = [
  {
    title: "Visual Difference Engine",
    description:
      "Build a general-purpose visual comparison engine that detects and classifies visual change across time-series images.",
    applications:
      "Manufacturing inspections, brand compliance, infrastructure degradation, compliance audits.",
  },
  {
    title: "Smart File Transfer System",
    description:
      "Build a fast, resilient file mover for unstable links — with integrity checks, priority channels and real-time status.",
    applications:
      "Media studios, rural labs, mobile clinics, remote engineering sites, racetrack ↔ factory setups, disaster sites.",
  },
  {
    title: "Competitive Mobility Systems Simulator",
    description:
      "Build a lightweight mobility event simulator that models many moving agents, events, and output a live leaderboard.",
    applications:
      "Formula E, MotoGP, drones, supply-chain races, traffic flow management.",
  },
];

export default function ProblemStatements() {
  return (
    <div
      className="w-full flex flex-col max-md:px-9 max-w-5xl items-center my-10 scroll-mt-16"
      id="problem-statements"
    >
      <h1
        className={`${orbitron.className} text-4xl self-start mb-8 mt-10 font-bold`}
      >
        PROBLEM STATEMENTS<span className="text-[#D6001C]">.</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-around w-full gap-6">
        {problemStatements.map((problem, index) => (
          <div
            key={index}
            className="relative md:w-1/3 flex flex-col items-center mb-8 md:mb-0"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center h-full">
              <Image
                src="/PST.svg"
                alt="Problem Statement Top"
                width={500}
                height={500}
                className="absolute top-0 left-1/2 -translate-x-1/2 z-0"
              />
              <div className="relative flex flex-col gap-8 justify-center px-6 z-1">
                <h2
                  className={`${orbitron.className} text-2xl mb-2 text-center`}
                >
                  {problem.title}
                </h2>
                <p className="italic">{problem.description}</p>
                <p className="italic">
                  <strong>Applications:</strong> {problem.applications}
                </p>
              </div>
              <Image
                src="/PSB.svg"
                alt="Problem Statement Bottom"
                width={500}
                height={500}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0"
              />
            </div>
            <div style={{ height: 450 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
