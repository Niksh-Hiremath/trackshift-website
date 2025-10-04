import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-8 pb-4">
      <div className="flex flex-col items-center md:items-start gap-3 ml-12 mb-4 md:mb-0">
        <Image
          src="/Trackshift.svg"
          alt="Trackshift Logo"
          width={150}
          height={150}
          className="h-14 md:h-20 w-auto"
        />
        <div className="flex flex-row gap-6 text-sm mt-4">
          <Link href="#" className="hover:text-[#D6001C] transition-colors">
            Join Community
          </Link>
          <Link href="#" className="hover:text-[#D6001C] transition-colors">
            Rule Book
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-2 mr-12">
        <p>
          For queries, contact us at{" "}
          <Link href="mailto:trackshift@plaksha.edu.in" className="underline">
            @trackshift@plaksha.edu.in
          </Link>
        </p>
        <p className="text-[#4f4a4a]">
          2025 &copy; All rights reserved by Trackshift
        </p>
        <div className="flex flex-row gap-3 mt-2">
          <Link href="#" className="hover:text-[#D6001C] transition-colors">
            <FaLinkedin size={20} />
          </Link>
          <Link href="#" className="hover:text-[#D6001C] transition-colors">
            <FaWhatsapp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
