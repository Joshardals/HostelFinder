import { fetchFeaturedHostels } from "@/lib/database/database.action";
import { HostelCard } from "../shared/HostelCard";
import { Suspense } from "react";
import { HostelCardSkeleton } from "../ui/HostelCardSkeleton";

export async function FeaturedHostels() {
  return (
    <section className="max-content max-lg:p-4 lg:py-4">
      <div className="text-center mb-6">
        <h2 className="mb-2 capitalize">featured hostels</h2>
        <p className="max-w-sm md:max-w-md mx-auto">
          Explore some of the best-rated hostels available now.
        </p>
      </div>
      <Suspense fallback={<HostelCardSkeleton />}>
        <FeaturedHostelsContainer />
      </Suspense>
    </section>
  );
}

async function FeaturedHostelsContainer() {
  const { data } = await fetchFeaturedHostels();
  if (!data) return null;

  return (
    <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {data?.map((item, index) => (
        <HostelCard hostel={item} key={index} />
      ))}
    </div>
  );
}
