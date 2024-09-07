import { create } from "zustand";
import { SidebarState } from "@/typings";
import {
  MaxSelectedState,
  MinSelectedState,
  RatingFilterState,
  SearchQueryState,
  SelectedTypeState,
} from "@/typings/filters";

export const SidebarToggle = create<SidebarState>((set) => ({
  open: null,
  setOpen: (open) => set(() => ({ open })),
}));

// Filters States
export const useMaxSelected = create<MaxSelectedState>((set) => ({
  maxSelected: null,
  setMaxSelected: (maxSelected) => set(() => ({ maxSelected })),
}));

export const useMinSelected = create<MinSelectedState>((set) => ({
  minSelected: null,
  setMinSelected: (minSelected) => set(() => ({ minSelected })),
}));

export const useRatingFilter = create<RatingFilterState>((set) => ({
  selectedRating: null,
  setSelectedRating: (rating) =>
    set((state) => ({
      selectedRating: state.selectedRating === rating ? null : rating,
    })),
}));

export const useHostelType = create<SelectedTypeState>((set) => ({
  selectedTypes: [],
  setSelectedTypes: (updateFn) =>
    set((state) => ({
      selectedTypes: updateFn(state.selectedTypes ?? []),
    })),
}));

export const useSearchQuery = create<SearchQueryState>((set) => ({
  searchQuery: "",
  setSearchuery: (searchQuery) => set(() => ({ searchQuery })),
}));

export const useFiltersStore = create<FiltersState>((set) => ({
  maxSelected: null,
  minSelected: null,
  selectedRating: null,
  selectedTypes: [],
  searchQuery: "",

  // State setters
  setMaxSelected: (maxSelected) => set({ maxSelected }),
  setMinSelected: (minSelected) => set({ minSelected }),
  setSelectedRating: (rating) => set({ selectedRating: rating }),
  setSelectedTypes: (types) => set({ selectedTypes: types }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
}));
