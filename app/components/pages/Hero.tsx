import React from "react";
import Button from "../ui/button";

function Hero() {
  return (
    <div className="bg-hero h-[110vh] flex flex-col justify-start items-center pt-48">
      <h1 className="calistoga text-center text-primary text-8xl text-balance leading-26">
        Life Begins <br />
        After Coffee
      </h1>
      <p className="text-primary text-balance text-xl mt-4">
        Because great coffee is the start of something even greater.
      </p>
      <div className="mt-6 flex gap-2">
        <Button>Explore Menu</Button>
        <Button variant="secondary">Our Locations</Button>
      </div>
    </div>
  );
}

export default Hero;
