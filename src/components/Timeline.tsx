import React from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "900"] });

type Event = {
  title: string;
  date: string;
  status?: string;
};

const events: Event[] = [
  { title: "Registrations", date: "Ongoing", status: "ongoing" },
  { title: "Idea Submissions", date: "Ongoing", status: "ongoing" },
  {
    title: "Last Date to Register & Submit Idea",
    date: "October 25, 2025",
    status: "upcoming",
  },
  {
    title: "Shortlisting Announcement",
    date: "October 31, 2025",
    status: "upcoming",
  },
  {
    title: "Final Challenge",
    date: "November 15-16, 2025",
    status: "upcoming",
  },
];

export default function Timeline() {
  return (
    <div
      className="w-full flex flex-col max-md:px-9 max-w-5xl items-center my-10 scroll-mt-16"
      id="timeline"
    >
      <h1
        className={`${orbitron.className} text-4xl self-start mb-8 mt-10 font-bold`}
      >
        TIMELINE<span className="text-[#D6001C]">.</span>
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between gap-6">
        {events.map((e, i) => (
          <div
            key={i}
            className="flex-1 rounded-lg p-4 border border-[#D6001C] flex flex-col justify-between items-center text-center bg-gradient-to-b from-black/60 to-black/30 min-h-[10rem]"
          >
            <div className="w-full flex flex-col items-center">
              <div
                className="h-3 w-3 rounded-full mb-2"
                style={{
                  background:
                    e.status === "ongoing"
                      ? "#4E963A"
                      : e.status === "completed"
                      ? "#D6001C"
                      : "#AAAAAA",
                }}
              />
            </div>

            <div className="flex-1 flex items-center justify-center w-full">
              <h3 className={`${orbitron.className} text-lg`}>{e.title}</h3>
            </div>

            <div className="w-full flex items-end justify-center">
              <p className="mt-1 text-gray-400">{e.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
