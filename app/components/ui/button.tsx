import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "px-4 py-2 rounded-full font-medium transition duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-hero border border-primary hover:bg-transparent hover:text-primary",
    secondary:
      "border border-primary text-primary hover:bg-primary hover:text-hero",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
