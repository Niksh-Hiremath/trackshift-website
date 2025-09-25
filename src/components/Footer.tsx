import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-8 pb-4">
      <Image
        src="/Trackshift.svg"
        alt="Trackshift Logo"
        width={150}
        height={150}
        className="h-14 md:h-20 w-auto"
      />
      <div className="items-center text-center">
        <p>
          For queries, contact us at{" "}
          <Link href="mailto:trackshift2025@gmail.com" className="underline">
            trackshift2025@gmail.com
          </Link>
          .
        </p>
        <p className="text-[#4f4a4a]">
          2025 &copy; All rights reserved by Trackshift
        </p>
      </div>
    </footer>
  );
}
