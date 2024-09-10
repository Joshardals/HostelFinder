import { create } from "zustand";
import { HostelDetailsState, SidebarState } from "@/typings";
import { FiltersState } from "@/typings/filters";

export const SidebarToggle = create<SidebarState>((set) => ({
  open: null,
  setOpen: (open) => set(() => ({ open })),
}));

export const HostelDetailsToggle = create<HostelDetailsState>((set) => ({
  open: null,
  setOpen: (open) => set(() => ({ open })),
}));

// Filters Store
export const useFiltersStore = create<FiltersState>((set) => ({
  maxSelected: null,
  minSelected: null,
  selectedRating: null,
  selectedSort: "Date (Newest)",
  selectedTypes: [],
  searchQuery: "",

  // State setters
  setMaxSelected: (maxSelected) => set({ maxSelected }),
  setMinSelected: (minSelected) => set({ minSelected }),
  setSelectedRating: (rating) =>
    set((state) => ({
      selectedRating: state.selectedRating === rating ? null : rating,
    })),
  setSelectedSort: (selectedSort) => set({ selectedSort }),
  setSelectedTypes: (updateFn) =>
    set((state) => ({
      selectedTypes: updateFn(state.selectedTypes ?? []),
    })),
  setSearchQuery: (searchQuery) => set(() => ({ searchQuery })),
}));
