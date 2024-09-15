import { HostelTypeFilter } from "./HostelTypeFilter";
import { PriceRange } from "./PriceRange";
import { RatingFilter } from "./RatingFilter";
import { Searchbar } from "./Searchbar";

export function FilterBar() {
  return (
    <section className="fixed left-0 right-0 bg-white z-20">
      {/* Desktop Version  */}
      <div className="max-content">
        <div className="max-md:hidden px-4 space-x-4 py-4 flex items-center">
          <Searchbar />
          <PriceRange />
          <RatingFilter />
          <HostelTypeFilter />
        </div>
      </div>
    </section>
  );
}
