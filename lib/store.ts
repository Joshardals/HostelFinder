import { create } from "zustand";
import { SidebarState } from "@/typings";

export const SidebarToggle = create<SidebarState>((set) => ({
  open: null,
  setOpen: (open) => set(() => ({ open })),
}));
