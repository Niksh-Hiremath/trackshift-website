import React from "react";
import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["500", "900"] });

export default function Card({
  name,
  title,
  description,
  image,
  smallerImage = false,
}: {
  name: string;
  title?: string;
  description?: string;
  image: string;
  smallerImage?: boolean;
}) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-2">
      <div className="w-full aspect-[16/9] relative">
        <Image
          src={image}
          alt={name}
          fill
          className={"object-contain " + (smallerImage ? "py-5" : "")}
          sizes="(max-width: 768px) 100vw, 368px"
        />
      </div>
      {/* <h3 className={`${orbitron.className} text-lg font-bold`}>{name}</h3> */}
      {title && (
        <p className={`${orbitron.className} text-md text-[#D6001C]`}>
          {title}
        </p>
      )}
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
}
