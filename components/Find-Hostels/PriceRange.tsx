"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { priceRange } from "@/lib/data";

export function PriceRange() {
  const [open, setOpen] = useState(false);
  const [minOpen, setMinOpen] = useState(false);
  const [minSelected, setMinSelected] = useState<{
    label: string;
    value: number;
  }>();

  function handleClick() {
    setOpen(!open);
    setMinOpen(false);
  }

  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setOpen(false); // Set the state to false when clicking outside
        setMinOpen(false);
      }
    }

    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  return (
    <div
      className="relative select-none"
      // onClick={() => setOpen(!open)}
      ref={divRef}
    >
      <div
        className={`ring-1 ring-charcoal/20 px-4 py-2 rounded-md cursor-pointer hover-effects ${
          open ? "bg-charcoal/20 hover:bg-charcoal/20" : "hover:bg-charcoal/10"
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center space-x-1 font-medium">
          <span>{minSelected ? `${minSelected.label}+` : "Any Price"}</span>
          {open ? (
            <IoIosArrowUp className="size-5" />
          ) : (
            <IoIosArrowDown className="size-5" />
          )}
        </div>
      </div>

      <div
        className={`absolute bg-white p-2 rounded-md mt-2 hover-effects shadow-md shadow-charcoal/20 w-[20rem] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } `}
      >
        <p className="text-charcoal/70 mb-1">Price Range</p>

        <div
          className={`px-2 py-2 ring-1 ring-charcoal/20 w-[8rem] hover-effects flex items-center justify-between space-x-1 rounded-md cursor-pointer
            ${minOpen && "ring-1 ring-blue"}`}
          onClick={() => setMinOpen(!minOpen)}
        >
          <span className="font-medium">
            {minSelected ? minSelected.label : "No min"}
          </span>
          {minOpen ? (
            <IoIosArrowUp className="size-5" />
          ) : (
            <IoIosArrowDown className="size-5" />
          )}
        </div>

        <ul
          className={`absolute left-0 h-[20rem] w-full px-2 rounded-md mt-4 ring-1 ring-charcoal/20 overflow-auto hover-effects ${
            minOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }   `}
        >
          {priceRange.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover-effects hover:bg-gray"
              onClick={() => {
                setMinSelected(item);
                setMinOpen(false);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
