"use client";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ratings } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "@/lib/hooks";
import { useFiltersStore } from "@/lib/store";

export function RatingFilter() {
  const [open, setOpen] = useState(false);
  const { selectedRating, setSelectedRating } = useFiltersStore();

  const divRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(divRef, () => setOpen(false)); // Hook for handling click outside.

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="relative select-none" ref={divRef}>
      <div
        className={`ring-1 w-[fit-content] ring-charcoal/20 px-2 lg:px-4 py-2 rounded-md cursor-pointer hover-effects ${
          open ? "bg-charcoal/20 hover:bg-charcoal/20" : "hover:bg-charcoal/10"
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center space-x-1 font-medium">
          <span
            className={`size-3 rounded-full  ${
              selectedRating !== null ? "bg-royal block" : "hidden"
            }`}
          />
          <span>
            {selectedRating !== null
              ? `${selectedRating} ${selectedRating === 1 ? "Star" : "Stars"} ${
                  selectedRating !== 5 ? "and above" : ""
                }`
              : "Any Rating"}
          </span>
          {open ? (
            <IoIosArrowUp className="size-5" />
          ) : (
            <IoIosArrowDown className="size-5" />
          )}
        </div>
      </div>

      <div
        className={`absolute rounded-md bg-white shadow-md shadow-charcoal/20 p-2  w-[17rem] mt-1 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <p className="text-charcoal/70 mb-2">Star Rating</p>
        <ul
          className={`grid grid-cols-5  border-y border-l border-l-charcoal/20 border-y-charcoal/20`}
        >
          {ratings.map((rating) => (
            <li
              key={rating}
              className={`px-4 py-2 text-center border-r border-r-charcoal/20 cursor-pointer hover-effects  ${
                rating === 5 && "rounded-tr-md rounded-br-md"
              } ${rating === 1 && "rounded-tl-md rounded-bl-md"} ${
                rating === selectedRating
                  ? "bg-royal text-gray"
                  : "hover:bg-charcoal/20"
              }`}
              onClick={() => {
                setSelectedRating(rating);
              }}
            >
              {rating}
              {rating !== 5 && "+"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
