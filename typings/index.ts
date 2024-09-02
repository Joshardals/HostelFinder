// Typings for the sidebar for mobile devices
export interface SidebarState {
  open: boolean | null;
  setOpen: (mobile: SidebarState["open"]) => void;
}
