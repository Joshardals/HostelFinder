export interface FiltersState {
  maxSelected: number | null;
  minSelected: number | null;
  selectedRating: number | null;
  selectedTypes: string[];
  searchQuery: string;

  // State setters
  setMaxSelected: (maxSelected: FiltersState["maxSelected"]) => void;
  setMinSelected: (minSelected: FiltersState["minSelected"]) => void;
  setSelectedRating: (rating: FiltersState["selectedRating"]) => void;
  setSelectedTypes: (types: FiltersState["selectedTypes"]) => void;
  setSearchQuery: (searchQuery: FiltersState["searchQuery"]) => void;
}
