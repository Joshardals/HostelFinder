"use client";
import { FaMap } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { ToggleButton } from "./ToggleButton";
import { HiMiniXMark } from "react-icons/hi2";
import { MobilePriceRange } from "./MobilePriceRange";
import { useEffect, useState } from "react";
import { MobileRatingFilter } from "./MobileRatingFilter";
import { MobileHostelTypeFilter } from "./MobileHostelTypeFilter";
import { useLockBodyScroll } from "@/lib/hooks";
import { HostelMap } from "../HostelMap";
import { useFiltersStore } from "@/lib/store";

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
  const [mapOpen, setMapOpen] = useState(false);
  const { totalHostels } = useFiltersStore();

  useLockBodyScroll(filterOpen, mapOpen); // An hook to lock the body scroll

  return (
    <section className=" p-4 md:hidden fixed left-0 right-0 bg-white z-20">
      <div className="flex items-center justify-between relative">
        {filterData.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (item.label === "Filters") {
                setFilterOpen(!filterOpen);
              } else {
                setMapOpen(!mapOpen);
              }
            }}
          >
            <ToggleButton
              label={item.label}
              icon={item.icon}
              mapOpen={mapOpen}
            />
          </div>
        ))}

        {/* Map Container */}
        <div
          className={`absolute top-14 h-screen left-0 w-full z-10 ring-1 bg-white ring-white hover-effects 
            ${
              mapOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
        >
          <HostelMap />
        </div>

        {/* Filters Container */}
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
            className="btn"
            onClick={() => {
              setMapOpen(false);
              setFilterOpen(false);
            }}
          >
            View Hostel{totalHostels > 1 && "s"} {`(${totalHostels})`}
          </button>
        </div>
      </div>
    </section>
  );
}
