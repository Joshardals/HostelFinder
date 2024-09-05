import { HostelTypeFilter } from "./HostelTypeFilter";
import { IoSearch } from "react-icons/io5";
import { PriceRange } from "./PriceRange";
import { RatingFilter } from "./RatingFilter";
import { Searchbar } from "./Searchbar";

export function FilterBar() {
  return (
    // max-lg:p-4 lg:py-4 bg-red-500
    <div className="bg-red-500">
      <div className="max-content space-x-4 max-lg:p-4 lg:py-4 flex lg:items-center max-lg:flex-col">
        <Searchbar />
        {/* <p className="bg-orange-500">Hey</p> */}
        {/* <Searchbar /> */}
        {/* <PriceRange />
        <RatingFilter />
        <HostelTypeFilter /> */}
      </div>
    </div>
  );
}
