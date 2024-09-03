import { HostelCard } from "../shared/HostelCard";

export function FeaturedHostels() {
  return (
    <section className="max-content max-lg:p-4 lg:py-4">
      <div className="text-center mb-6">
        <h2 className="mb-2 capitalize">featured hostels</h2>
        <p className="text-charcoal/70 max-w-sm md:max-w-md mx-auto">
          Explore some of the best-rated hostels available now.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <HostelCard />
        <HostelCard />
        <HostelCard />
        <HostelCard />
      </div>
    </section>
  );
}
