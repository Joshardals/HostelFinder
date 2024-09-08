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

// Filters Store
export const useFiltersStore = create<FiltersState>((set) => ({
  maxSelected: null,
  minSelected: null,
  selectedRating: null,
  selectedTypes: [],
  searchQuery: "",

  // State setters
  setMaxSelected: (maxSelected) => set({ maxSelected }),
  setMinSelected: (minSelected) => set({ minSelected }),
  setSelectedRating: (rating) =>
    set((state) => ({
      selectedRating: state.selectedRating === rating ? null : rating,
    })),
  setSelectedTypes: (updateFn) =>
    set((state) => ({
      selectedTypes: updateFn(state.selectedTypes ?? []),
    })),
  setSearchuery: (searchQuery) => set(() => ({ searchQuery })),
}));
