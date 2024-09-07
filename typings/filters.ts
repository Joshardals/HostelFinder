export interface MaxSelectedState {
  maxSelected: { label: string; value: number } | null;
  setMaxSelected: (maxSelected: MaxSelectedState["maxSelected"]) => void;
}

export interface MinSelectedState {
  minSelected: { label: string; value: number } | null;
  setMinSelected: (minSelected: MinSelectedState["minSelected"]) => void;
}

export interface RatingFilterState {
  selectedRating: number | null;
  setSelectedRating: (
    selectedRating: RatingFilterState["selectedRating"]
  ) => void;
}

export interface SelectedTypeState {
  selectedTypes: string[] | null;
  setSelectedTypes: (updateFn: (prev: string[]) => string[]) => void;
}

export interface SearchQueryState {
  searchQuery: string;
  setSearchuery: (searchQuery: SearchQueryState["searchQuery"]) => void;
}

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
