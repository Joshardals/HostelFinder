import { Sorting } from "./Sorting";

export function Hostelcontainer() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <Sorting />
        <p className="text-charcoal/70"> 1,000 rentals</p>
      </div>

      <div>
        <h3>Hostel Listing...</h3>
      </div>
    </section>
  );
}
