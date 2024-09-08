import { HostelTypeFilter } from "./HostelTypeFilter";
import { PriceRange } from "./PriceRange";
import { RatingFilter } from "./RatingFilter";
import { Searchbar } from "./Searchbar";

export function FilterBar() {
  return (
    <section>
      {/* Desktop Version  */}
      <div className="max-content">
        <div className="max-md:hidden space-x-4 py-4 flex items-center">
          <Searchbar />
          <PriceRange />
          <RatingFilter />
          <HostelTypeFilter />
        </div>
      </div>
    </section>
  );
}
