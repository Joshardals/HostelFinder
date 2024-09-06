"use client";
import { FaMap } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { ToggleButton } from "./ToggleButton";
import { HiMiniXMark } from "react-icons/hi2";
import { MobilePriceRange } from "./MobilePriceRange";
import { useEffect } from "react";
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
          <div key={index}>
            <ToggleButton label={item.label} icon={item.icon} />
          </div>
        ))}

        <div className="absolute bg-white -top-2 h-screen left-0 w-full z-10 ring-1 ring-white ">
          <div className="flex justify-end">
            <HiMiniXMark
              className="size-7 cursor-pointer hover-effects hover:text-royal"
              // onClick={() => setOpen(!open)}
            />
          </div>

          <div className="space-y-4">
            <MobilePriceRange />
            <MobileRatingFilter />
            <MobileHostelTypeFilter />
          </div>
        </div>
      </div>
    </section>
  );
}
