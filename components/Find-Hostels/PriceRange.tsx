"use client";
import { useEffect, useRef, useState } from "react";
import { GoDash } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { toNaira } from "@/lib/utils";
import { Select } from "./Select";

export function PriceRange() {
  const [open, setOpen] = useState(false);
  const [minOpen, setMinOpen] = useState(false);
  const [maxOpen, setMaxOpen] = useState(false);
  const [maxSelected, setMaxSelected] = useState<{
    label: string;
    value: number;
  }>();
  const [minSelected, setMinSelected] = useState<{
    label: string;
    value: number;
  }>();

  function handleClick() {
    setOpen(!open);
    setMinOpen(false);
    setMaxOpen(false);
  }

  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setOpen(false);
        setMinOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  return (
    <div className="relative select-none" ref={divRef}>
      <div
        className={`max-w-[fit-content] ring-1 ring-charcoal/20 px-2 lg:px-4 py-2 rounded-md cursor-pointer hover-effects ${
          open ? "bg-charcoal/20 hover:bg-charcoal/20" : "hover:bg-charcoal/10"
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center space-x-1 font-medium">
          <span
            className={`size-3 rounded-full ${
              minSelected?.value || maxSelected?.value
                ? "bg-royal block"
                : "hidden"
            }`}
          />
          <span>
            {minSelected && maxSelected
              ? minSelected.value === 0 && maxSelected.value === 0
                ? "Any Price"
                : minSelected.value === 0
                ? `Up to ${toNaira(maxSelected.value)}`
                : maxSelected.value === 0
                ? `${toNaira(minSelected.value)}+`
                : `${toNaira(minSelected.value)} - ${toNaira(
                    maxSelected.value
                  )}`
              : minSelected
              ? `${toNaira(minSelected.value)}+`
              : maxSelected
              ? `Up to ${toNaira(maxSelected.value)}`
              : "Any Price"}
          </span>
          {open ? (
            <IoIosArrowUp className="size-5" />
          ) : (
            <IoIosArrowDown className="size-5" />
          )}
        </div>
      </div>

      {/* I added Hidden below */}
      <div
        className={`absolute bg-white p-2 rounded-md mt-2 hover-effects shadow-md shadow-charcoal/20 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-10`}
      >
        <p className="text-charcoal/70 mb-1">Price Range</p>

        <div className="flex justify-between items-center space-x-4">
          <Select
            type="min"
            open={minOpen}
            setOpen={setMinOpen}
            setOtherOpen={setMaxOpen}
            selected={minSelected}
            setSelected={setMinSelected}
            otherSelected={maxSelected}
          />
          <GoDash />
          <Select
            type="max"
            open={maxOpen}
            setOpen={setMaxOpen}
            setOtherOpen={setMinOpen}
            selected={maxSelected}
            setSelected={setMaxSelected}
            otherSelected={minSelected}
          />
        </div>
      </div>
    </div>
  );
}
