import { HostelCard } from "../shared/HostelCard";
import { HostelDetails } from "./HostelDetails";
import { Sorting } from "./Sorting";
import { HostelTypings } from "@/typings/database";
import Image from "next/image";

export function Hostelcontainer({
  hostels,
  total,
}: {
  hostels: HostelTypings[];
  total: number;
}) {
  return (
    <section className="relative">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Sorting />
          <p>
            {" "}
            {total} rental{total > 1 ? "s" : ""}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hostels.map((hostel, index) => (
            <HostelCard key={index} hostel={hostel} />
          ))}
        </div>
      </div>

      {/* Hostel Details PopUp */}
      <HostelDetails />
    </section>
  );
}
