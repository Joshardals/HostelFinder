import { HostelCard } from "../shared/HostelCard";
import { Sorting } from "./Sorting";

export function Hostelcontainer() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <Sorting />
        <p> 1,000 rentals</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <HostelCard key={index} />
        ))}
      </div>
    </section>
  );
}
