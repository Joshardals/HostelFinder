import { HostelTypings } from "./database";

// Typings for the sidebar for mobile devices
export interface SidebarState {
  open: boolean | null;
  setOpen: (mobile: SidebarState["open"]) => void;
}

export interface HostelDetailsState {
  open: boolean | null;
  selectedHostel: HostelTypings | null;
  setOpen: (mobile: HostelDetailsState["open"]) => void;
  setSelectedHostel: (hostel: HostelDetailsState["selectedHostel"]) => void;
}
