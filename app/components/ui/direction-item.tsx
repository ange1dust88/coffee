import React from "react";
import Button from "./button";

interface Props {
  city: string;
  address_f: string;
  address_s: string;
  timeOpen: string;
  link: string;
}
function DirectionItem({ city, address_f, address_s, timeOpen, link }: Props) {
  return (
    <div className="bg-background p-6 rounded-3xl flex flex-col items-start">
      <span className="text-hero/80 text-sm mb-6">{city}</span>
      <h5 className="text-hero text-base calistoga ">{address_f}</h5>
      <h5 className="text-hero text-base calistoga ">{address_s}</h5>
      <span className="text-hero/80 text-sm mb-6">{timeOpen}</span>
      <Button variant="dark" className="w-full">
        <a href={link} target="_blank">
          Get Directions
        </a>
      </Button>
    </div>
  );
}

export default DirectionItem;
