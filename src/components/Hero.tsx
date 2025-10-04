import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import { Calendar, MapPin } from "lucide-react";

const orbitron = Orbitron({ subsets: ["latin"], weight: "500" });

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around w-full px-4 pb-4 pt-8 md:px-8">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/Trackshift.svg"
          alt="Trackshift Logo"
          width={500}
          height={500}
          className=""
        />
        <p className="opacity-75 mt-2 text-2xl">in association with</p>
        <div className="flex flex-row items-center">
          <Image
            src="/DSBrar.svg"
            alt="DS Brar Logo"
            width={120}
            height={120}
            className="h-14 w-auto aspect-auto"
          />
          <div className="mx-4 opacity-50">|</div>
          <Image
            src="/Hass.svg"
            alt="Money Gram Hass F1 Logo"
            width={120}
            height={120}
            className="h-14 w-auto aspect-auto"
          />
        </div>
      </div>
      <div className="flex flex-col max-md:my-8 gap-8 md:gap-6 w-full max-md:items-center md:max-w-1/4">
        <div className="flex flex-col gap-3 max-md:items-center">
          <h1 className={`${orbitron.className} text-5xl`}>
            Build<span className="text-[#D6001C]">.</span>
            <br />
            Compete<span className="text-[#D6001C]">.</span>
            <br />
            Innovate<span className="text-[#D6001C]">.</span>
          </h1>
            <p className="max-md:text-center italic text-[#aaaaaa] text-xl">
            Winners take home the prize pool, a funded internship and an visit to MoneyGram Haas F1 facility, UK.
            </p>
        </div>
        <div className="flex flex-row gap-16">
          <div>
            <Calendar color="#ED3237" />
            <p>15-16 Nov</p>
            <p className="opacity-75">2025</p>
          </div>
          <div>
            <MapPin color="#ED3237" />
            <p>Plaksha University</p>
            <p className="opacity-75">Punjab</p>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <button className="bg-[#ED3237] rounded-md py-2 px-4 cursor-pointer hover:opacity-90 transition 300ms">
            <Link
              href="https://trackshift.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </Link>
          </button>
          <button className="border border-[#ED3237] rounded-md py-2 px-4 cursor-pointer hover:opacity-90 transition 300ms">
            <Link
              href="/Trackshift_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Brochure
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
