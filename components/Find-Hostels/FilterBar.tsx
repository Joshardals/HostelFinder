import { IoSearch } from "react-icons/io5";
import { PriceRange } from "./PriceRange";
import { Searchbar } from "./Searchbar";

export function FilterBar() {
  return (
    <div>
      <div className="max-content py-2 space-x-4 flex items-center">
        <Searchbar />
        <PriceRange />
      </div>
    </div>
  );
}
