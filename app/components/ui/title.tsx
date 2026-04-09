import React from "react";
interface Props {
  children: React.ReactNode;
}
function Title({ children }: Props) {
  return (
    <h2 className="md:text-6xl text-4xl text-center calistoga text-hero">
      {children}
    </h2>
  );
}

export default Title;
