"use client";
import { hostelTypes } from "@/lib/data";
import { useRef, useState } from "react";
import { useFiltersStore } from "@/lib/store";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useClickOutside } from "@/lib/hooks";

export function HostelTypeFilter() {
  const [open, setOpen] = useState(false);
  const { selectedTypes, setSelectedTypes } = useFiltersStore();

  const divRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(divRef, () => setOpen(false)); // Hook for handling click outside.

  const handleClick = () => {
    setOpen(!open);
  };

  const handleTypeToggle = (type: string) => {
    setSelectedTypes(
      (prev: any) =>
        prev.includes(type)
          ? prev.filter((t: any) => t !== type) // Remove type if already selected
          : [...prev, type] // Add type if not selected
    );
  };

  return (
    <div className="relative select-none" ref={divRef}>
      <div
        className={`ring-1 ring-charcoal/20 px-4 py-2 rounded-md cursor-pointer hover-effects ${
          open ? "bg-charcoal/20 hover:bg-charcoal/20" : "hover:bg-charcoal/10"
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center space-x-2 font-medium">
          <span
            className={`size-3 rounded-full  ${
              selectedTypes!.length > 0 ? "bg-royal block" : "hidden"
            }`}
          />
          <span>
            {selectedTypes!.length > 0
              ? `Hostel Type (${selectedTypes!.length})`
              : "All Hostel Type"}
          </span>
          {open ? (
            <IoIosArrowUp className="size-5" />
          ) : (
            <IoIosArrowDown className="size-5" />
          )}
        </div>
      </div>

      <div
        className={`absolute bg-white p-2 rounded-md mt-2 hover-effects shadow-md shadow-charcoal/20 w-[13rem] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <p className="mb-2">Type of Hostel</p>
        <div className="space-y-1">
          {hostelTypes.map((type) => (
            <label
              key={type}
              className="flex items-center space-x-2 cursor-pointer hover-effects hover:bg-gray"
            >
              <input
                type="checkbox"
                checked={selectedTypes!.includes(type)}
                onChange={() => handleTypeToggle(type)}
                className="accent-royal"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
