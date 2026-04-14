import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function HeroTitle({ children, className = "" }: Props) {
  return (
    <h2
      className={`calistoga text-center text-primary text-6xl md:text-8xl text-balance lg:leading-26 ${className}`}
    >
      {children}
    </h2>
  );
}

export default HeroTitle;
