"use client";

import { useState } from "react";

type Props = {
  onClose: () => void;
};

function PromoBar({ onClose }: Props) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-primary text-hero text-center py-1 text-base font-medium z-50 border-b border-secondary">
      <div className="relative  mx-auto px-6">
        Buy one coffee, get one free — this week only (April 14–20)
        <button
          onClick={onClose}
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default PromoBar;
