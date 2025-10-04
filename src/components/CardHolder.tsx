import React from "react";
import { Orbitron } from "next/font/google";
import Card from "./Card";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["500", "900"] });

interface CardInfo {
  name: string;
  title?: string;
  description?: string;
  image: string;
}

export default function CardHolder({
  title,
  cards,
  smallerImages = false,
}: {
  title: string;
  cards: CardInfo[];
  smallerImages?: boolean;
}) {
  return (
    <div className="w-full z-1 flex flex-col max-md:px-9 max-w-5xl items-center my-10 scroll-mt-16">
      <h1
        className={`${orbitron.className} text-4xl self-start mb-8 mt-10 font-bold`}
      >
        {title}
        <span className="text-[#D6001C]">.</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-around w-full max-md:px-10 md:gap-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative md:w-1/3 flex flex-col items-center"
          >
            <Card
              name={card.name}
              title={card.title}
              description={card.description}
              image={card.image}
              smallerImage={smallerImages}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
