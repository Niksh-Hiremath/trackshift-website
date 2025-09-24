import React from "react";
import Image from "next/image";

function CarSVG(fill: string, opacity: string, width: number, height: number) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 65 125"
      fill="none"
    >
      <path
        d="M0.000489414 124.329V97.2968L35.3857 60.697L0 26.8806V0L65 50.9774V70.5684L0.000489414 124.329Z"
        fill={fill}
        fillOpacity={opacity}
      />
    </svg>
  );
}

export default function Car() {
  return (
    <>
      <div className="flex flex-row md:hidden items-center w-full">
        {Array.from({ length: 5 }, (_, i) => {
          const opacity = (0.5 + i * 0.1).toFixed(1);
          return <span key={i}>{CarSVG("#D6001C", opacity, 20, 38)}</span>;
        })}
        <Image
          src="/F1.png"
          alt="F1 Car"
          width={300}
          height={98}
          className="ml-auto"
        />
      </div>
      <div className="hidden md:flex flex-row items-center w-full">
        {Array.from({ length: 9 }, (_, i) => {
          const opacity = (0.2 + i * 0.1).toFixed(1);
          return <span key={i}>{CarSVG("#D6001C", opacity, 65, 125)}</span>;
        })}
        <Image
          src="/F1.png"
          alt="F1 Car"
          width={1135}
          height={329}
          className="ml-auto"
        />
      </div>
    </>
  );
}
