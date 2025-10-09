"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function PCNavbar() {
  return (
    <div className="w-full mx-4 lg:mx-8 flex items-center justify-between sticky top-0 left-0 pt-4 z-10">
      <div className="mx-4">
        <Link href="/" className="flex flex-row items-center">
          <Image
            src="/GeekRoom.svg"
            alt="Geek Room Logo"
            width={100}
            height={100}
            className="h-13 w-auto aspect-auto"
          />
          <div className="mx-2 opacity-50">|</div>
          <Image
            src="/LEAP.svg"
            alt="LEAP Logo"
            width={100}
            height={100}
            className="h-15 w-auto aspect-auto"
          />
        </Link>
      </div>
      <ul className="flex flex-row gap-8">
        <li>
          <Link href="#problem-statements">Problem Statements</Link>
        </li>
        <li>
          <Link href="#prizes">Prizes</Link>
        </li>
        <li>
          <Link href="/faqs">FAQs</Link>
        </li>
        <li>
          <Link href="mailto:trackshift2025@gmail.com">Contact</Link>
        </li>
      </ul>
      <button className="bg-[#D6001C] rounded-md py-2 px-4 cursor-pointer hover:opacity-90 transition 300ms">
        <Link
          href="https://trackshift.devpost.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </Link>
      </button>
    </div>
  );
}

export function MobileNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between px-4 pb-4 pt-6 sticky top-0 left-0 z-10 bg-[#0d0d0d]">
      <Link href="/" className="flex flex-row items-center">
        <Image
          src="/GeekRoom.svg"
          alt="Geek Room Logo"
          width={80}
          height={80}
          className="h-11 w-auto aspect-auto"
        />
        <div className="mx-3 opacity-50">|</div>
        <Image
          src="/LEAP.svg"
          alt="LEAP Logo"
          width={80}
          height={80}
          className="h-13 w-auto aspect-auto"
        />
      </Link>
      <button
        className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Toggle menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#0d0d0d] opacity-95 flex flex-col items-center py-4 gap-4 animate-fade-in z-10">
          <Link
            href="#problem-statements"
            className="w-full text-center py-2"
            onClick={() => setOpen(false)}
          >
            Problem Statements
          </Link>
          <Link
            href="#prizes"
            className="w-full text-center py-2"
            onClick={() => setOpen(false)}
          >
            Prizes
          </Link>
          {/* <Link
            href="#"
            className="w-full text-center py-2"
            onClick={() => setOpen(false)}
          >
            Jury
          </Link> */}
          <Link
            href="mailto:trackshift2025@gmail.com"
            className="w-full text-center py-2"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="https://trackshift.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D6001C] rounded-md py-2 px-4 text-white w-fit mt-2 hover:opacity-90 transition duration-300"
            onClick={() => setOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
