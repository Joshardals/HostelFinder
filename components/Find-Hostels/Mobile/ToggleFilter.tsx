"use client";
import { FaMap } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { ToggleButton } from "./ToggleButton";
import { HiMiniXMark } from "react-icons/hi2";
import { MobilePriceRange } from "./MobilePriceRange";
import { useEffect, useState } from "react";
import { MobileRatingFilter } from "./MobileRatingFilter";
import { MobileHostelTypeFilter } from "./MobileHostelTypeFilter";

const filterData = [
  {
    label: "Map",
    icon: <FaMap className="text-royal size-5" />,
  },
  {
    label: "Filters",
    icon: <IoFilter className="text-royal size-5" />,
  },
];

export function ToggleFilter() {
  const [filterOpen, setFilterOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <section className=" p-4 md:hidden">
      <div className="flex items-center justify-between relative">
        {filterData.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (item.label === "Filters") {
                setFilterOpen(!filterOpen);
              }
            }}
          >
            <ToggleButton label={item.label} icon={item.icon} />
          </div>
        ))}

        <div
          className={`absolute -top-2 h-screen left-0 w-full z-10 ring-1 bg-white ring-white hover-effects 
            ${
              filterOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="flex justify-end">
            <HiMiniXMark
              className="size-7 cursor-pointer hover-effects hover:text-royal"
              onClick={() => setFilterOpen(!filterOpen)}
            />
          </div>

          <div className="space-y-4">
            <MobilePriceRange />
            <MobileRatingFilter />
            <MobileHostelTypeFilter />
          </div>
        </div>

        <div
          className={`fixed bottom-0 left-0 w-full hover-effects z-10 p-4   ${
            filterOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            type="button"
            className="text-center bg-royal text-white p-2 w-full rounded-md"
          >
            View Hostels
          </button>
        </div>
      </div>
    </section>
  );
}
