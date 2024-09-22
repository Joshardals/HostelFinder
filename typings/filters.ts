export interface FiltersState {
  maxSelected: { value: number; label: string } | null;
  minSelected: { value: number; label: string } | null;
  selectedRating: number | null;
  selectedSort: string | null;
  selectedTypes: string[];
  searchQuery: string;
  totalHostels: number;

  // State setters
  setMaxSelected: (maxSelected: FiltersState["maxSelected"]) => void;
  setMinSelected: (minSelected: FiltersState["minSelected"]) => void;
  setSelectedRating: (rating: FiltersState["selectedRating"]) => void;
  setSelectedSort: (sort: FiltersState["selectedSort"]) => void;
  setSelectedTypes: (updateFn: (types: string[]) => string[]) => void; // Update type to function
  setSearchQuery: (searchQuery: FiltersState["searchQuery"]) => void;
  setTotalHostels: (totalHostels: FiltersState["totalHostels"]) => void;
}
