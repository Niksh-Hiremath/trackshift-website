"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function PCNavbar() {
  return (
    <nav className="w-full mx-4 lg:mx-8 flex items-center justify-between sticky top-0 left-0 pt-4 z-10">
      <div className="mx-4">
        <Link href="/" className="flex flex-row items-center">
          <Image
            src="/GeekRoom.svg"
            alt="Geek Room Logo"
            width={100}
            height={100}
            className="h-9 w-auto aspect-auto"
          />
        </Link>
      </div>
      <div className="flex flex-row gap-4 mr-4">
        <button className="bg-[#D6001C] rounded-md py-2 px-4 cursor-pointer hover:opacity-90 transition duration-300">
          <Link
            href="https://trackshift.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </Link>
        </button>
        <button className="outline outline-[#D6001C] rounded-md py-2 px-4 cursor-pointer hover:opacity-80 transition duration-300">
          <Link
            href="https://chat.whatsapp.com/Ls44YxwT9t4Ia31U8pIk1B"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Community
          </Link>
        </button>
      </div>
    </nav>
  );
}

export function MobileNavbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-8 pb-4 pt-6 sticky top-0 left-0 z-10 bg-[#0d0d0d]">
      <Link href="/" className="flex flex-row items-center">
        <Image
          src="/GeekRoom.svg"
          alt="Geek Room Logo"
          width={80}
          height={80}
          className="h-9 w-auto aspect-auto"
        />
      </Link>
      <div className="flex flex-row items-center gap-2 text-right">
        <Link
          href="https://trackshift.devpost.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#D6001C] rounded-md py-1.5 px-2.5 text-xs sm:text-sm hover:opacity-90 transition duration-300"
        >
          Register
        </Link>
        <Link
          href="https://chat.whatsapp.com/Ls44YxwT9t4Ia31U8pIk1B"
          target="_blank"
          rel="noopener noreferrer"
          className="outline outline-[#D6001C] rounded-md py-1.5 px-2.5 text-xs sm:text-sm hover:opacity-80 transition duration-300"
        >
          Join Community
        </Link>
      </div>
    </nav>
  );
}
