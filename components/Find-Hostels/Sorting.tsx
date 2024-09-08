"use client";
import { sortingData } from "@/lib/data";
import { useState } from "react";

export function Sorting() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="ring-1 w-[fit-content] ring-charcoal/20 rounded-md cursor-pointer px-2 lg:px-4 py-2">
        Sort: <span className="text-royal">Date (Newest)</span>
      </div>

      <div>
        {sortingData.map((item, index) => (
          <div key={index}>{item.label}</div>
        ))}
      </div>
    </div>
  );
}
