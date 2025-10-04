import React from "react";
import CardHolder from "./CardHolder";

export default function PitCrew() {
  return (
    <CardHolder
      title="PIT CREW"
      cards={[
        {
          name: "GeekRoom Plaksha",
          title: undefined,
          description: undefined,
          image: "/GeekRoom.svg",
        },
        {
          name: "LEAP AI",
          title: undefined,
          description: undefined,
          image: "/LEAP.svg",
        },
        {
          name: "HackCulture",
          title: undefined,
          description: undefined,
          image: "/HackCulture.svg",
        },
      ]}
      smallerImages={true}
    />
  );
}
