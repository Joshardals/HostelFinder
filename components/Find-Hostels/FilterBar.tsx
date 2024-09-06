import { HostelTypeFilter } from "./HostelTypeFilter";
import { IoSearch } from "react-icons/io5";
import { PriceRange } from "./PriceRange";
import { RatingFilter } from "./RatingFilter";
import { Searchbar } from "./Searchbar";

export function FilterBar() {
  return (
    // max-lg:p-4 lg:py-4 bg-red-500
    <section>
      {/* Desktop Version  */}
      <div className="max-md:hidden max-content space-x-4 py-4 flex items-center">
        <Searchbar />
        <PriceRange />
        <RatingFilter />
        <HostelTypeFilter />

        {/* <p className="bg-orange-500">Hey</p> */}
        {/* <Searchbar /> */}
        {/* <PriceRange />
        <RatingFilter />
        <HostelTypeFilter /> */}
      </div>
    </section>
  );
}
