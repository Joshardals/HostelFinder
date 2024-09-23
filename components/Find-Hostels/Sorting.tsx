"use client";
import { sortingData } from "@/lib/data";
import { useClickOutside } from "@/lib/hooks";
import { useFiltersStore } from "@/lib/store";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function Sorting() {
  const [open, setOpen] = useState(false);
  const { selectedSort, setSelectedSort } = useFiltersStore();

  const divRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(divRef, () => setOpen(false)); // Hook for handling click outside.

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSort = (item: { label: string }) => {
    setSelectedSort(item.label);
    setOpen(!open);
  };

  return (
    <div className="relative select-none w-[fit-content]" ref={divRef}>
      <div
        className=" w-[fit-content] rounded-md cursor-pointer flex items-center space-x-2"
        onClick={handleClick}
      >
        <span className="text-sm text-royal">
          Sort: <span>{selectedSort}</span>
        </span>
        {open ? (
          <IoIosArrowUp className="size-5 text-royal" />
        ) : (
          <IoIosArrowDown className="size-5 text-royal" />
        )}
      </div>

      <div
        className={`absolute bg-white z-10 w-[12rem] p-2 rounded-md mt-2 hover-effects shadow-md shadow-charcoal/20 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul>
          {sortingData.map((item, index) => (
            <li
              key={index}
              className={`px-2 lg:px-4 py-2 hover-effects rounded-md cursor-pointer ${
                item.label === selectedSort ? "text-royal" : "hover:bg-gray"
              }`}
              onClick={() => handleSort(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
