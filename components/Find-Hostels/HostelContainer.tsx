"use client";
import { HostelDetailsToggle } from "@/lib/store";
import { HostelCard } from "../shared/HostelCard";
import { HostelDetails } from "./HostelDetails";
import { Sorting } from "./Sorting";

export function Hostelcontainer() {
  const { open, setOpen } = HostelDetailsToggle();
  return (
    <section className="relative">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Sorting />
          <p> 1,000 rentals</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <HostelCard key={index} />
          ))}
        </div>
      </div>

      {/* Hostel Details PopUp */}
      <HostelDetails />
    </section>
  );
}
