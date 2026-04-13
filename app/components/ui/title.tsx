import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Title({ children, className = "" }: Props) {
  return (
    <h2 className={`md:text-6xl text-4xl calistoga ${className}`}>
      {children}
    </h2>
  );
}

export default Title;
