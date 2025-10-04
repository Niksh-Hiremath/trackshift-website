import React from "react";
import CardHolder from "./CardHolder";

export default function Allies() {
  return (
    <CardHolder
      title="INNOVATION ALLIES"
      cards={[
        {
          name: "Mphasis F1 Foundation",
          title: undefined,
          description: undefined,
          image: "/Mphasis.svg",
        },
        {
          name: "DS Brar Center for GWIST",
          title: undefined,
          description: undefined,
          image: "/DSBrar.svg",
        },
        {
          name: "Moneygram Haas F1 Team",
          title: undefined,
          description: undefined,
          image: "/Haas.svg",
        },
      ]}
    />
  );
}
